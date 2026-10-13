(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('[data-truck]').forEach(function(el){
    el.innerHTML = truckSVG({junk: el.dataset.truck !== 'nojunk'});
  });
  document.getElementById('yr').textContent = new Date().getFullYear();

  // hero drive-in
  var hero = document.querySelector('.hero-truck');
  requestAnimationFrame(function(){ hero.classList.add('in'); });

  // scroll-linked mini truck
  var road = document.querySelector('.road'), ticking = false;
  function upd(){
    var h = document.documentElement.scrollHeight - innerHeight;
    road.style.setProperty('--p', h > 0 ? Math.min(1, scrollY / h) : 0);
    ticking = false;
  }
  addEventListener('scroll', function(){ if(!ticking){ ticking = true; requestAnimationFrame(upd); } }, {passive:true});
  upd();

  // how it works: load junk step by step
  var steps = document.querySelectorAll('.steps li');
  var junk = document.querySelectorAll('.how-truck .j');
  var map = [[], [0], [0,1,2], [0,1,2,3,4]]; // junk loaded after each step (1-4)
  function show(n){
    steps.forEach(function(s,i){ s.classList.toggle('on', i < n); });
    var on = map[Math.min(n,4)-1] || [];
    junk.forEach(function(j,i){ j.classList.toggle('on', on.indexOf(i) > -1); });
  }
  if (reduce || !('IntersectionObserver' in window)) { show(4); }
  else {
    var done = false;
    new IntersectionObserver(function(es, obs){
      if (es[0].isIntersecting && !done) {
        done = true; obs.disconnect();
        [1,2,3,4].forEach(function(n){ setTimeout(function(){ show(n); }, (n-1)*700); });
      }
    }, {threshold:.4}).observe(document.getElementById('how'));
  }

  // booking form
  var form = document.getElementById('bookForm'), ok = document.getElementById('success'),
      err = form.querySelector('.form-err'), btn = form.querySelector('button[type=submit]');
  form.addEventListener('submit', function(e){
    if (!window.fetch) return; // plain POST fallback
    e.preventDefault();
    err.hidden = true; btn.disabled = true; btn.textContent = 'Sending...';
    fetch('https://formsubmit.co/ajax/lcgreenwichjunkremoval@gmail.com', {
      method:'POST', headers:{'Accept':'application/json'}, body:new FormData(form)
    }).then(function(r){ return r.json().then(function(d){ if(!r.ok || d.success === 'false' || d.success === false) throw 0; }); })
    .then(function(){
      form.hidden = true; ok.hidden = false; ok.focus();
      ok.scrollIntoView({block:'center', behavior: reduce ? 'auto' : 'smooth'});
      requestAnimationFrame(function(){ ok.classList.add('go'); });
    }).catch(function(){
      // fall back to a normal POST
      btn.disabled = false; btn.textContent = 'Send booking request';
      err.hidden = false; form.submit();
    });
  });
})();

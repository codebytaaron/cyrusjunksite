/* Hand-drawn L.C. Junk Removal truck: blue Silverado 3500 HD, black dump bed. */
window.truckSVG = function (opts) {
  opts = opts || {};
  var junk = opts.junk === false ? '' :
  '<g class="junk">' +
    '<g class="j j1"><rect x="36" y="38" width="58" height="34" rx="3" fill="#7a5a3a"/><rect x="36" y="30" width="58" height="12" rx="4" fill="#8d6a46"/><rect x="30" y="34" width="10" height="38" rx="3" fill="#6b4e33"/><rect x="90" y="34" width="10" height="38" rx="3" fill="#6b4e33"/></g>' +
    '<g class="j j2"><rect x="104" y="14" width="40" height="58" rx="3" fill="#e9edf2"/><line x1="104" y1="36" x2="144" y2="36" stroke="#9aa3ad" stroke-width="2"/><rect x="137" y="20" width="3" height="12" fill="#9aa3ad"/><rect x="137" y="42" width="3" height="16" fill="#9aa3ad"/></g>' +
    '<g class="j j3"><circle cx="172" cy="52" r="20" fill="#1c1c1c" stroke="#3a3a3a" stroke-width="3"/><circle cx="172" cy="52" r="8" fill="#555"/></g>' +
    '<g class="j j4"><rect x="196" y="40" width="36" height="32" fill="#b98a4f"/><path d="M196 40h36M214 40v10" stroke="#8a6436" stroke-width="2"/><rect x="202" y="22" width="26" height="20" fill="#c99a5d"/></g>' +
    '<g class="j j5"><path d="M150 30 L175 8 M160 22 L150 6 M168 16 L186 12" stroke="#3BE13B" stroke-width="4" stroke-linecap="round" fill="none"/></g>' +
  '</g>';
  return '<svg class="truck" viewBox="0 0 420 200" role="img" aria-label="Blue L.C. Junk Removal dump truck' + (opts.junk === false ? '' : ' loaded with junk') + '">' +
  '<g class="truck-body">' +
    junk +
    '<g class="bed"><rect x="20" y="70" width="232" height="78" rx="3" fill="#0b0b0b" stroke="#2a2a2a" stroke-width="3"/>' +
      '<path d="M60 74v70M100 74v70M140 74v70M180 74v70M220 74v70" stroke="#222" stroke-width="3"/>' +
      '<rect x="20" y="70" width="232" height="6" fill="#3BE13B"/></g>' +
    '<rect x="20" y="148" width="372" height="10" fill="#141414"/>' +
    '<g class="cab"><path d="M258 150 V88 Q258 80 266 80 H322 Q332 80 338 88 L362 116 H392 Q402 116 402 126 V150 Z" fill="#2F6FD1"/>' +
      '<path d="M270 90 H318 Q324 90 328 95 L346 116 H270 Z" fill="#9cc3ff" opacity=".85"/>' +
      '<line x1="304" y1="90" x2="304" y2="116" stroke="#1d4c99" stroke-width="4"/>' +
      '<rect x="292" y="124" width="14" height="4" rx="2" fill="#dfe6ee"/>' +
      '<rect x="394" y="124" width="10" height="8" rx="2" fill="#ffe9a8"/>' +
      '<rect x="396" y="140" width="10" height="10" rx="2" fill="#cfd6de"/>' +
      '<text x="330" y="144" font-family="Barlow Condensed, sans-serif" font-style="italic" font-weight="800" font-size="13" fill="#fff" text-anchor="middle">L.C.</text></g>' +
  '</g>' +
  '<g class="wheels">' +
    '<g class="wheel"><circle cx="78" cy="160" r="24" fill="#111"/><circle cx="78" cy="160" r="11" fill="#c9ced4"/><path d="M78 150v20M68 160h20" stroke="#777" stroke-width="3"/></g>' +
    '<g class="wheel"><circle cx="134" cy="160" r="24" fill="#111"/><circle cx="134" cy="160" r="11" fill="#c9ced4"/><path d="M134 150v20M124 160h20" stroke="#777" stroke-width="3"/></g>' +
    '<g class="wheel"><circle cx="350" cy="160" r="24" fill="#111"/><circle cx="350" cy="160" r="11" fill="#c9ced4"/><path d="M350 150v20M340 160h20" stroke="#777" stroke-width="3"/></g>' +
  '</g></svg>';
};

# L.C. Junk Removal website

Static site (no build step). `index.html` at the root, plus `css/`, `js/` and `favicon.svg`. Vercel serves it as-is.

## Vercel settings
- Framework Preset: **Other**
- Root Directory: blank
- Build Command: none / Output Directory: default

## Booking form (FormSubmit)
The form posts to `https://formsubmit.co/ajax/lcgreenwichjunkremoval@gmail.com` (normal POST fallback to `https://formsubmit.co/lcgreenwichjunkremoval@gmail.com`).

**Important:** the very first submission triggers an activation email from FormSubmit to lcgreenwichjunkremoval@gmail.com. Open it and click the activation link, or bookings will not be delivered. After that, bookings arrive as emails titled "New Junk Removal Booking".

## Local preview
`python3 -m http.server 8080` then open http://localhost:8080

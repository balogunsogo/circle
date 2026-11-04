# Circle

A concept reskin of the exported site. The original page structure, component classes, responsive styles, animation IDs, interaction runtime, inline GSAP scripts, sliders, tabs, ticker, and all 20 page templates are retained. Branding, contacts, portfolio names, media, and claims are neutral concept content.

## Run

```sh
cd /workspace/circle
python3 -m http.server 8000 --bind 127.0.0.1
```

There is no build step. Dependencies and Outfit fonts are bundled locally with their notices in `licenses/`. GitHub Pages serves `main` from `/ (root)`; `.nojekyll` is retained.

## Content boundaries

Original business images and logos are replaced within their existing slots by local neutral SVGs. Video slots retain their layout with a concept poster; no footage is included. Forms are demos and transmit nothing. CMS template structures remain intact. Empty collection bindings use neutral concept placeholders; live collection records were not included in the ZIP. Multi-record collection behavior needs additional concept records. The original remote menu animation is replaced with a local hamburger-to-close Lottie asset.

## Validation

All 20 exported pages were loaded in Chromium with the original IX2/IX3 runtime active and no JavaScript errors, failed assets, or external requests. Checks exercised tab clicks, image switching, timed rotation, counter animation, hover cursors, mobile navigation open/close, and the demo submission guard. All original animation target IDs and page IDs were compared against the initial export. The original Swiper code is retained; multi-slide CMS behavior requires additional collection content.

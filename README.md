# Circle concept website

A fictional design studio built from the existing visual shell: dark surfaces, warm orange accents, oversized typography, editorial spacing, and project cards. All copy and artwork are concept material. No live business, clients, memberships, addresses, or social accounts are represented.

## Run locally

```sh
cd /workspace/circle
python3 -m http.server 8000 --bind 127.0.0.1
```

No installation or build step is required. Deploy the repository root to a static host. All assets are local; there are no external scripts, media embeds, analytics, or font requests.

## Content and behavior

- Nine static pages with shared navigation and footer.
- Orbit, Field, and Ripple are fictional studies using locally authored SVG artwork.
- The accessible mobile menu supports its toggle, navigation links, and Escape.
- The contact form is an explicitly labelled demo. It sends no requests and stores no data.
- Previous business content, media, CMS detail templates, video references, and bundled interaction data have been removed. Navigation and form behavior use a small local script.
- The original layout styles remain as a shell, with concept styling in `css/concept.css`. Typography uses a system font stack.

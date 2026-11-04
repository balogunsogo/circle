# Triangle website

Static website: HTML, CSS, JavaScript, and images. No build step or package installation is needed.

## Local development

```sh
cd /workspace/circle
python3 -m http.server 8000 --bind 127.0.0.1
```

Open the homepage through a local development browser. Deploy the repository root to a static web host; pushing to GitHub does not deploy the site.

## Branding cleanup

Removed generator metadata and export promotional comments; disabled the runtime badge module. Styles and scripts use neutral filenames. Homepage project links previously pointed to the staging site; they now open the exported projects listing because individual project content was not included.

The exported interaction runtime and its internal identifiers remain necessary for menus and animations. Third-party notices are preserved. Some fonts, scripts, animation data, and metadata images still load from external services, including the original asset CDN. This is branding cleanup, not a complete replacement of the export runtime or hosting dependencies.

## Known export limitations

- Video files are pending: the supplied videos archive exceeded the upload transfer limit. The homepage references `videos/Triangle-YT-Villa_mp4.mp4`, `videos/Triangle-YT-Villa_webm.webm`, and `videos/Triangle-YT-Villa_poster.0000000.jpg`.
- `images/Featured-Story-Img.avif` was referenced but absent from the supplied main archive.
- CMS detail pages are exported templates; collection content and a CMS backend are not included.
- Contact/newsletter forms need a separately configured submission service. Do not assume submissions are delivered from this static export.
- External services are required for several scripts, fonts, animations, and embedded media.

## Validation in the cloud environment

All 20 HTML pages returned HTTP 200 and the runtime passed JavaScript syntax validation. A browser check found no generator tag, branding badge, or staging links. Full interaction validation remains blocked: external scripts on Google APIs, CloudFront, the original asset CDN, Embedly, and unpkg failed through the environment proxy (`ERR_TUNNEL_CONNECTION_FAILED`).

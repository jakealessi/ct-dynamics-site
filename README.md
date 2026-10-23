# CT Dynamics

A fast, static website for CT Dynamics brand partnerships, built with Next.js and published to GitHub Pages.

- `npm ci` installs dependencies; `npm run dev` starts local preview.
- `npm test` builds the static site and checks the exported pages in `out/`.
- Pushes to `main` run the same checks and publish through GitHub Actions.
- Page copy lives in `app/`; the four partnership pillars live in `app/partnership-data.ts`.
- Approved photos go in `public/media/optimized/`; founder portraits have not been supplied yet.
- Brand and wholesale inquiries go directly to info@ctdynamics.co through separate email links; there is no web form or third-party form service.
- `NEXT_PUBLIC_SITE_URL` controls canonical URLs. For a custom-domain launch, configure DNS and GitHub Pages, add `public/CNAME`, and set this variable to the final HTTPS origin; the build then omits the repository base path.

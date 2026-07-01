# PocketPilot — UI/UX mockups (VE411)

Everything for the "UI/UX Mockups and Usability Test Script" submission.

## Files
- **`UIUXMockups.pdf`** — the submission. Upload this (name already matches: `UIUXMockups`).
- `index.html` — interactive clickable prototype (the "live prototype" link).
- `deck.html` — source of the PDF (slides).
- `screens.js`, `styles.css` — shared screen definitions + design system (used by both).

## Regenerate the PDF
```sh
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
  --virtual-time-budget=15000 \
  --print-to-pdf="UIUXMockups.pdf" "file://$PWD/deck.html"
```

## Host the interactive prototype (needed for the link on slide 3)
It is 3 static files (`index.html` + `styles.css` + `screens.js`), so any static host works:
- **Cloudflare Pages / Netlify**: drag this `uiux/` folder onto the dashboard → get a public URL.
- **GitHub Pages**: commit the folder, enable Pages on the branch/folder.
- **Vercel**: `vercel deploy` in this folder.

Then paste the URL onto **slide 3** of `deck.html` (search for `paste your hosted URL`) and
re-run the PDF command. The link is public, so `ve441staff.2025@gmail.com` can open it directly.

## Still TODO by the team (cannot be generated)
1. Host the prototype and paste its URL on slide 3.
2. Record the ≤20-min usability **pilot-run video**, upload it (unlisted), paste the link on slide 3.
3. Email both links to `ve441staff.2025@gmail.com`.

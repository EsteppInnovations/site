# Estepp Innovations — Basic 3-Page Site

A minimal static site ready for GitHub Pages.

## Files
- `index.html` — Home
- `about.html` — About
- `contact.html` — Contact
- `404.html` — Custom not-found page
- `assets/css/styles.css` — Shared styles

## Deploy to GitHub Pages
1. Create or open your repo (public).
2. Upload all files at the repo root exactly as provided.
3. Go to **Settings → Pages**:
   - Source: **Deploy from a branch**
   - Branch: **main / (root)**
   - Custom domain: `esteppinnovations.com`
   - Check **Enforce HTTPS**
4. Commit any change to trigger a fresh build if the site looks cached.
   - Test with `https://esteppinnovations.com/?v=1` to bypass cache.

## Edit
- Update text in each HTML file.
- Add images in an `assets/img/` folder and reference them via relative paths.
- To highlight the current page tab, each page sets the corresponding nav link with the `active` class.

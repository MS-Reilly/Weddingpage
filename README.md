# Company Website

This is the official web application for **[Your Company Name]**, built with [Vite](https://vitejs.dev/) and React.  
It follows modern best practices for performance, SEO, accessibility, and maintainability.

---

## 📂 Project Structure

public/
├─ icons/ # All favicons and app icons
│ ├─ favicon.ico # Standard browser favicon
│ ├─ favicon-16x16.png # For smaller displays
│ ├─ favicon-32x32.png # For high-resolution tabs
│ ├─ apple-touch-icon.png # For iOS home screen
│ └─ android-chrome-192x192.png / 512x512.png
├─ robots.txt # Instructions for search engines
├─ sitemap.xml # Helps search engines index your site
└─ manifest.json # (optional) For PWA support

### 🔎 Explanation

- **`icons/`**  
  Contains all favicon and app icon assets. Browsers and devices use different sizes and formats, so we store them here for consistency.

- **`robots.txt`**  
   A plain-text file that instructs search engine crawlers (Google, Bing, etc.) which parts of the site can be indexed.  
   Example:

  ```txt
  User-agent: *
  Allow: /

  Disallow: /admin/
  Disallow: /api/

  Sitemap: https://www.yourcompany.com/sitemap.xml
  ```

  User-agent: \* → applies to all bots

Allow: / → allows full indexing by default

Disallow → blocks sensitive/private paths from indexing

Sitemap → helps bots find all public pages quickly

sitemap.xml
Lists all important pages so search engines can crawl and rank them efficiently.

manifest.json (optional)
Used for Progressive Web App features. Defines icons, colours, and app behaviour if the site is “installed” on a device.

## Assets

All UI assets live in `src/assets`.

- `images/` photos and illustrations
- `svgs/` inline SVGs via SVGR
- `icons/` PNG icons
- `videos/` MP4 or WebM clips
- `fonts/` local font files and `fonts.css`

Favicons and app icons live in `public/icons` and are referenced by `index.html`.

Guidelines:

- Use AVIF or WebP for photos, JPEG fallback if needed
- Provide meaningful alt text
- Lazy load non critical images
- Keep large images under 2 MB and prefer under 1 MB
# Weddingpage

# Assets Organization

This project uses a hybrid approach to asset organization:

## Global Assets (`/src/assets/`)

Contains shared assets used across multiple pages/components:

- Brand assets (logos, icons)
- Shared UI elements
- Common design assets
- Global marketing materials

## Page-Specific Assets (`/src/pages/*/assets/`)

Each page directory can contain its own assets folder for:

- Page-specific images and videos
- Content unique to that page
- Assets that might change independently of other pages

### Structure

```
src/
  assets/                     # Global assets
    images/
      header/                # Header-related images
      logos/                 # Brand logos
      marketing/            # Shared marketing assets
    videos/                 # Global videos
    svgs/                  # Icons and SVG assets
  pages/
    home/
      assets/              # Home page specific assets
        images/
          hero/           # Hero section images
    services/
      gp/
        assets/          # GP service specific assets
      nurse/
        assets/         # Nurse service specific assets
      specialist/
        assets/        # Specialist service specific assets
    company/
      about/
        assets/       # About page specific assets
```

### Guidelines

1. If an asset is used across multiple pages, place it in the global assets folder
2. If an asset is specific to a single page, place it in that page's assets folder
3. Keep asset names descriptive and consistent
4. Use appropriate image formats and optimize for web use
5. Consider lazy loading for page-specific assets

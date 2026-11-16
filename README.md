# Jack's Burger Delivery

> A fast, responsive food-ordering landing page for a local burger and pizza restaurant in Vranov nad Topľou, Slovakia.

[![Live website](https://img.shields.io/badge/Live%20website-jacksburger.sk-F97316?style=flat-square&logo=google-chrome&logoColor=white)](https://jacksburger.sk/)
[![Built with HTML, CSS and JavaScript](https://img.shields.io/badge/Built%20with-HTML%20%7C%20CSS%20%7C%20JavaScript-18181B?style=flat-square)](https://github.com/KrColab/jacks-burger)

## Overview

Jack's Burger is a production-ready static website designed to turn a restaurant menu into a clear, mobile-first ordering experience. It presents burgers, pizza, sides, drinks, delivery areas and contact details in a single fast-loading page that works without a framework or build pipeline.

The site is written in Slovak for the restaurant's customers, while the codebase is structured so that menu content, prices, opening hours and delivery rules can be updated from one central data file.

## Highlights

- **Dynamic menu** rendered from structured JavaScript data
- **Category tabs and live search** for quickly finding menu items
- **Real-time open/closed status** based on opening hours and scheduled announcements
- **Delivery-zone cards** with fees, locations and minimum-order conditions
- **Allergen information** with an expandable reference section
- **Responsive, mobile-first layout** with accessible keyboard-friendly controls
- **SEO and sharing metadata**, favicon, Open Graph image and XML sitemap
- **Custom domain deployment** through GitHub Pages at [jacksburger.sk](https://jacksburger.sk/)
- **Zero build step**: the site can be deployed directly as static files

## Technical approach

The project intentionally uses platform-native web technologies:

- **HTML5** for semantic page structure and metadata
- **CSS3** for responsive layout, design tokens, animations and dark visual styling
- **Vanilla JavaScript** for rendering, filtering, navigation, business logic and accessibility state
- **GitHub Pages** for hosting and continuous static deployment

The separation between content and presentation is the key design decision:

```text
js/data.js  → menu, prices, opening hours, delivery zones and announcements
js/app.js   → rendering, search, tabs, status logic and interactions
css/        → responsive visual system and component styling
index.html  → semantic page structure, SEO and content regions
```

This keeps routine restaurant updates simple while preserving a reusable front-end architecture.

## Project structure

```text
.
├── index.html          # Main landing page
├── css/style.css       # Responsive design system and components
├── js/data.js          # Menu and business configuration
├── js/app.js           # Rendering and interaction logic
├── assets/             # Logo, favicon and social preview image
├── sitemap.xml         # Search engine discovery
├── robots.txt          # Crawler instructions
└── CNAME               # Custom GitHub Pages domain
```

## Run locally

Because this is a static site, no package installation is required.

```bash
git clone https://github.com/KrColab/jacks-burger.git
cd jacks-burger
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in a browser.

## Deploy

The repository is ready for GitHub Pages:

1. Open **Settings → Pages**.
2. Select **Deploy from a branch**.
3. Choose `main` and the `/ (root)` folder.
4. Keep `CNAME` in the repository to use the custom domain.

## Why this project matters

This project demonstrates how a small, dependency-free front end can solve a real business problem: make a large menu easy to browse, keep operational information accurate, and give customers a clear path to place an order. It combines practical UX, maintainable data modeling, responsive design and production deployment without unnecessary complexity.

## License

This repository contains website code and branded restaurant assets created for Jack's Burger Delivery. Please do not reuse the branding, images or menu content without permission.

# Aman Aslam — Premium Developer Portfolio

A responsive static portfolio for Aman Aslam, Full-Stack .NET Developer.

## Included

- `index.html` — redesigned portfolio homepage
- `case-study.html` — project detail page (query examples below)
- `assets/css/styles.css` — responsive styling and motion
- `assets/js/main.js` — 00–100 opening animation, navigation, reveal effects, scroll progress and contact form
- Technology section — six categories with brand icons from the Simple Icons CDN; descriptive text remains visible if an icon cannot load
- `assets/js/case-study.js` — project case study content
- `assets/images/aman-aslam-portrait.webp` — optimized copy of the supplied professional portrait
- `favicon.svg` — site icon

## Preview locally

No framework or build step is required.

1. Extract the ZIP.
2. Open a terminal in the extracted folder.
3. Run:

   ```bash
   python -m http.server 5500
   ```

4. Open http://localhost:5500

Opening `index.html` directly also works for most page content. Use the local server to test the contact form's browser behavior and relative paths consistently.

## Case studies

- `case-study.html?project=roadnest`
- `case-study.html?project=medidrift`
- `case-study.html?project=healthcare`
- `case-study.html?project=ordermanagement`
- `case-study.html?project=freightlook`
- `case-study.html?project=healthmonitor`
- `case-study.html?project=hrms`

The seven featured projects are RoadNest, MediDrift, Enterprise Healthcare Platform, Order Management System, FreightLook, WebsiteHealthMonitor and HRMS Enterprise.

## Resume

The Resume link points to the PDF already hosted in the original GitHub repository:

https://raw.githubusercontent.com/aman-aslam/portfolio/main/Aman-Aslam-Resume.pdf

The resume is not duplicated in this ZIP. Internet access is required to open that link.

## Contact form

The form uses the existing FormSubmit AJAX endpoint for `amanaslam513@gmail.com`. Actual form submission requires internet access and may require FormSubmit's email activation/verification. The ZIP does not test or send a real inquiry.

## Technology icons

Brand icons are loaded from `https://cdn.simpleicons.org/`. An internet connection is required for the SVG logos; skill names and labels remain readable when the CDN is unavailable.

## Notes

- This is a static HTML/CSS/JavaScript website; no Node.js install is necessary.
- Project previews are custom illustrative UI mockups, not screenshots from production systems.
- Project links are limited to URLs already present in the portfolio/repository context.
- `Upwork` personal-profile URL was not included because an exact URL was not provided.
- External Google Fonts are optional; local fallback fonts are defined.
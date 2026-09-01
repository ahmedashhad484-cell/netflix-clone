# Netflix Clone

A front-end clone of the Netflix homepage, built with vanilla HTML, CSS, and JavaScript — no frameworks or libraries. Features multiple independent video carousels and an interactive preview pop-up, similar to Netflix's real hover-preview behavior.

## Features

- **Three independent video carousels**, each tracking its own position/state, with Next and Previous navigation
- **Video preview pop-up** — clicking a video shows an expanded preview with show details (genre tags), and closes automatically when focus moves outside it
- **Autoplaying muted hero video** at the top of the page, matching Netflix's homepage pattern
- **Full-screen video player** for the featured show, triggered from the hero section
- Minimal responsive adjustments for smaller viewports

## Tech used

- HTML5 (semantic structure, `<video>` elements, `data-*` attributes for content lookup)
- CSS3 (Flexbox layout, media queries, transitions)
- JavaScript (DOM manipulation, event delegation, focus/blur handling, per-component state management)

## How to run

1. Clone or download this repository
2. Open `index.html` in any modern web browser
3. Click Next/Previous on any carousel to browse, or click a video thumbnail to see its preview pop-up

No build steps or dependencies required.

## What I practiced

This project was built to practice:
- Managing **independent state across multiple UI components** (each carousel tracks its own index without interfering with the others)
- **Index-based array manipulation** for paginated/sliding content — including debugging a subtle off-by-range bug in the pagination logic that only appeared after multiple consecutive interactions
- **Focus and blur event handling** as a way to manage pop-up visibility, instead of manually tracked open/closed flags
- Structuring and looking up data (`data-*` attributes matched against a JS array) to drive dynamic content

## Known limitations

- This is a front-end learning project and is not affiliated with or endorsed by Netflix
- The carousels' next/previous logic uses hardcoded index bounds (index===10, index<=index+4), so it only works cleanly for exactly 15 items in groups of 5 — it'll break or behave oddly with a different item count
- No actual routing — nav links (Home, Shows, Movies, etc.) are empty anchors
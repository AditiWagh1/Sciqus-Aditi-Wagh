# Sciqus-Aditi-Wagh
# Sciqus — Frontend Task

A responsive static website built as part of the Sciqus Innovation At Core frontend assignment.

---

## 🔗 Live Preview

> Open `index.html` directly in any browser — no server or build step required.

---

## 📋 Task Objective

Design a responsive static website that adapts seamlessly for both desktop and mobile screens, showcasing CSS design skills, responsiveness, and interactive UI elements.

---

## 🗂️ File Structure

```
├── index.html      # Main HTML structure
├── style.css       # All styles, theme, media queries
├── script.js       # Vanilla JS — carousel, sliders, tabs, swipe, animations
└── README.md       # This file
```

---

## 📐 Layout

### Desktop
- Fixed **header** with navigation links
- **Sidebar** on the left with grouped navigation sections
- **6 content containers** in a 2-column CSS Grid layout

### Mobile
- **Hamburger menu** that slides the sidebar in from the left
- **Bottom navigation bar** with 5 key links
- Containers stack in a **single column** layout
- Touch-friendly **swipe gestures** on carousel and image slider

---

## 📦 Containers

| # | Content |
|---|---------|
| 1 | **Image Carousel** — auto-plays every 4.5s, arrow buttons, dot indicators, swipe support |
| 2 | **Text Block** — about section with animated stat counters |
| 3 | **Image Slider** — arrow navigation + swipe gesture support |
| 4 | **Static Content** — team image, feature list, animated progress bars |
| 5 | **Interactive Buttons** — React-powered panel with live state feedback (Button A & B) |
| 6 | **Tabbed Section** — 3 tabs with animated bar charts that re-trigger on each switch |

---

## ⚙️ Tech Stack

- **HTML5** — semantic structure
- **CSS3** — custom properties, Grid, Flexbox, media queries, keyframe animations
- **Vanilla JavaScript** — all interactivity, IntersectionObserver, touch/swipe events
- **React 18 (CDN)** — used for Container 5 (button panel) via `useState`
- **Google Fonts** — Syne (headings) + DM Sans (body)

> No build tools, no bundlers. Everything runs by opening `index.html`.

---

## 🎨 Theme Colors

```css
--c1: #defcf9;   /* mint */
--c2: #cadefc;   /* sky blue */
--c3: #c3bef0;   /* lavender */
--c4: #cca8e9;   /* soft purple */
```

---

## ✅ Features Checklist

- [x] Responsive layout — desktop & mobile
- [x] Sidebar with hamburger menu on mobile
- [x] Bottom navigation bar on mobile
- [x] CSS media queries for all breakpoints
- [x] CSS Grid + Flexbox layout
- [x] Real images with `object-fit: cover`
- [x] Lazy-loaded images for performance
- [x] Touch swipe gestures on carousel and slider
- [x] Smooth CSS transitions and animations
- [x] Animated stat counters on scroll
- [x] Animated progress bars on scroll
- [x] React component with state management
- [x] No broken navigation links

---

## 🚀 How to Run

1. Clone or download this repository
2. Make sure `index.html`, `style.css`, and `script.js` are in the same folder
3. Open `index.html` in any modern browser
4. To test mobile layout — open browser DevTools → toggle device toolbar (Ctrl+Shift+M / Cmd+Shift+M)

---

## 📱 Tested On

- Chrome (desktop + mobile emulation)
- Firefox
- Safari (mobile)
- Edge

---

*Built for Sciqus Innovation At Core — Frontend Assignment, December 2024*

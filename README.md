# Glass Gallery - Image Gallery

A responsive image gallery with a glassmorphism design, built with HTML, CSS and JavaScript. All photos are created from an array of objects.

**Live demo:** https://elhammohmand2006-stack.github.io/glass-image-gallery/

## Features

- Small photos on the side, and a big photo for the one you choose
- Click a small photo to open it in the big place
- The active small photo is highlighted
- Previous and next buttons (after the last photo it goes back to the first)
- Photo counter, for example 2 / 5
- Title and description for every photo
- Arrow keys on the keyboard work too
- Glassmorphism design: frosted glass card on a wine-red background with gold, red and ice-blue accents
- Responsive layout: on mobile the small photos move under the big photo

## Project files

```
glass-image-gallery/
├── index.html   # page structure
├── style.css    # glassmorphism design and responsive layout
├── script.js    # array of photos and gallery logic
└── images/      # mountain, forest, desert, sea and valley photos
```

## What I practiced

- Array of objects to keep the data of every photo
- `forEach()` to create the small photos
- `createElement()` and `appendChild()` to add elements to the page
- Click and keydown events
- Conditional statements (`if / else`)
- `classList.add()` and `classList.remove()` to mark the active photo
- CSS `backdrop-filter` for the glass effect
- Media queries for responsive design

## How to run

1. Download or clone this repository.
2. Keep the `images` folder next to `index.html`.
3. Open `index.html` in your browser.

## Author

Elham Mohmand

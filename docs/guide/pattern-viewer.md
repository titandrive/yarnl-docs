---
sidebar_position: 3
title: Pattern Viewer
description: View patterns, annotate PDFs, track progress with counters and timers
---

# Pattern Viewer

The pattern viewer is where you work with your patterns — read instructions, annotate PDFs, track rows, and time your sessions.

---

## PDF Viewer

Yarnl uses PDF.js to render patterns directly in the browser. Your last page, zoom level, and scroll position are saved automatically and restored when you reopen a pattern.

### Page Navigation

Use the toolbar buttons, keyboard shortcuts, or swipe to navigate between pages. The current page number is shown in the toolbar and can be clicked to jump to a specific page.

### Zoom

| Mode | Description |
|------|-------------|
| **Fit Page** | Entire page visible in the viewport |
| **Fit Width / 100%** | Page fills the available width |
| **Manual** | Custom zoom level (25%–400%) |

Zoom controls are in the toolbar. On mobile, pinch-to-zoom and double-tap-and-drag zoom are supported.

### Annotations

Annotate directly on your PDF patterns using the built-in PDF.js annotation tools. Your original file is never modified — annotations are saved to a separate file.

**Tools:** freehand drawing (pen), highlighter (semi-transparent overlay), and text annotations. Color and line width are configurable through the annotation toolbar.

**Saving:** Annotations save automatically after a short delay (2 seconds of inactivity). They're stored as a separate `.annotated.pdf` alongside your original file, so the original is always preserved.

**Reverting:** To remove all annotations and go back to the original PDF, use the revert option. This deletes the annotated file entirely. A confirmation is required to prevent accidental data loss.

---

## Markdown Viewer

Markdown patterns render with full GitHub Flavored Markdown support — headers, lists, tables, code blocks, task lists, and more. See [Markdown](./markdown) for syntax reference.

### Inline Editing

Click the edit button to switch to an inline markdown editor. Changes auto-save as you type. A live preview mode lets you see the rendered output side-by-side while editing.

### Images

Markdown patterns can include images. You can paste images directly into the editor — they're uploaded to the server and embedded automatically.

---

## Counters

Track your progress with named counters. Each pattern can have multiple independent counters.

### Creating Counters

Click **Add Counter** and give it a name. A default counter is created automatically the first time you open a pattern.

### Using Counters

- **+** to increment, **−** to decrement
- **Reset** to return to zero (requires confirmation)
- Click the counter name to rename it
- Delete counters you no longer need (requires confirmation)

All counter values save automatically after every change.

### Keyboard Shortcuts

Counters can be controlled with keyboard shortcuts. By default, **A** increments and **S** decrements the active counter. **Tab** cycles to the next counter. All shortcuts are configurable in [Keyboard Shortcuts](./keyboard-shortcuts).

---

## Timer

Each pattern has its own timer that accumulates across sessions.

- Click the **timer button** to start or stop
- Time displays as `HH:MM:SS` in the toolbar
- Auto-saves every 30 seconds while running, and whenever you leave the page

### Auto-Timer

When enabled in settings, the timer starts automatically when you mark a pattern as "In Progress." An inactivity timeout (default: 5 minutes) auto-pauses the timer if you step away.

---

## Notes

Each pattern can have its own markdown notes — separate from the pattern content itself. Click the **Notes** button in the toolbar to open a resizable, draggable popover.

- Supports full markdown with live preview
- Paste images directly into notes
- Auto-saves with a short debounce

---

## Pattern Info

Click the **Info** button to see pattern metadata:

- Name, category, type (PDF/Markdown)
- Date added, time elapsed, completion status
- File size and filename
- Hashtags
- PDF metadata (page count, author, title, subject) when available

---

## Touch & Mobile

| Gesture | Action |
|---------|--------|
| **Pinch** | Zoom in/out |
| **Double-tap and drag** | Zoom — drag up to zoom in, down to zoom out |

Haptic feedback (vibration) is available on supported devices and can be toggled in settings.

### Keep Screen Awake

Yarnl can prevent your device from sleeping while you're viewing a pattern. Enable **Keep Screen Awake** in [Appearance settings](../settings/appearance).

This uses the Screen Wake Lock API, which is supported on:

- **Chrome / Edge** 90+
- **Safari** 16.4+ (macOS and iOS)
- **Firefox** 126+
- **Samsung Internet** 14+
- **Opera** 73+

The lock is released automatically when you close the viewer or switch tabs. Requires HTTPS. Not supported in Opera Mini or Internet Explorer.

---

## Keyboard Shortcuts

All viewer shortcuts (page navigation, counters, timer, zoom) are configurable. See [Keyboard Shortcuts](./keyboard-shortcuts) for defaults and customization.

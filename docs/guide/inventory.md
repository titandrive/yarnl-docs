---
sidebar_position: 4.5
title: Inventory
description: Track your yarn stash and hook/needle collection alongside your patterns
---

# Inventory

Track your yarn stash and hook/needle collection alongside your patterns. The Inventory tab gives you a searchable, filterable catalog of your supplies with pattern linking so you always know what you have and where it's being used.

---

## Yarn Inventory

Add yarns to your stash with the following fields:

| Field | Description |
|-------|-------------|
| **Brand** | Text input with autocomplete. Remembers previously entered brands and includes common defaults (Bernat, Caron, Hobbii, etc.). |
| **Name / Line** | The product line (e.g., "Super Saver"). |
| **Color** | Color name (e.g., "Soft Navy"). |
| **Dye Lot** | Lot number for color matching across skeins. |
| **Weight** | Standard category: Lace (0), Super Fine (1), Fine (2), Light (3), Medium (4), Bulky (5), Super Bulky (6), Jumbo (7). |
| **Skeins** | Quantity with +/− stepper buttons. |
| **Fiber Content** | Free text (e.g., "100% Acrylic", "80/20 Cotton/Poly"). |
| **Product URL** | Link to the product page. Can also be used to auto-import metadata (see [Product URL Import](#product-url-import)). |
| **Photo** | Click or drag-and-drop to upload a thumbnail image. |
| **Notes** | Free text notes. |

---

## Hook & Needle Inventory

Add crochet hooks and knitting needles. A craft type toggle at the top of the modal switches between **Crochet** and **Knitting**, which changes the available sizes, types, and options.

| Field | Description |
|-------|-------------|
| **Brand** | Autocomplete with defaults (Clover, Addi, Signature, Tulip, Boye, etc.). |
| **Name / Model** | Product name. |
| **Size** | Dropdown populated by craft type (see below). |
| **Type** | Dropdown populated by craft type (see below). |
| **Length** | Knitting needles only. Options depend on needle type (see below). |
| **Quantity** | Numeric stepper. |
| **Product URL** | Link to the product page with import button. |
| **Photo** | Click or drag-and-drop to upload. |
| **Notes** | Free text notes. |

### Sizes by Craft Type

| Craft | Range |
|-------|-------|
| **Crochet** | 2.0mm (B/1) through 19.0mm (S) |
| **Knitting** | 2.0mm (US 0 / UK 14) through 25.0mm (US 50) |

### Types by Craft Type

| Craft | Options |
|-------|---------|
| **Crochet** | Inline (Bates), Tapered (Boye), Ergonomic, Tunisian |
| **Knitting** | Straight, Circular, DPN (Double-Pointed), Interchangeable |

### Needle Length Options

| Needle Type | Lengths |
|-------------|---------|
| **Straight** | 9″, 10″, 12″, 14″ |
| **Circular** | 9″ through 60″ |
| **DPN** | 5″ through 8″ |
| **Interchangeable** | 4″ tip, 5″ tip |

---

## Product URL Import

Paste a product URL and click **Import via URL**. Yarnl fetches the page and extracts relevant metadata:

- **Image** — from JSON-LD product data, Open Graph tags, Twitter cards, or the first significant image on the page. Resized to 300×400px.
- **Yarn fields** — brand, name, color, weight category, and fiber content (pattern-matched from description text).
- **Hook fields** — brand, name, craft type (detected from keywords), and size (extracted from mm values).

Imported data populates the modal fields and can be edited before saving.

---

## Card and List Views

Switch between a card grid and a sortable table using the view toggle. View preference persists per tab.

### Card View

Each item displays as a card with a thumbnail (or placeholder icon), title, details, quantity badge, and linked pattern count.

### List View

Items display in a table with configurable columns:

**Yarn columns:** Photo, Brand, Name, Color, Dye Lot, Weight, Qty, Fiber, Patterns, Notes, URL, Added

**Hook columns:** Photo, Brand, Name, Size, Size (mm), Type, Craft, Length, Qty, Patterns, Notes, Added

All columns except URL are shown by default.

### Column Customization

- **Drag to reorder** — drag column headers to rearrange. Order persists.
- **Right-click to show/hide** — right-click any column header to toggle column visibility.
- **Sortable** — click a column header to sort ascending/descending (Photo column excluded).

Column order and visibility sync to the server so they persist across devices.

---

## Sort & Filter Sidebar

A collapsible sidebar provides sort and filter controls in card view.

### Yarn Filters

| Filter | Options |
|--------|---------|
| **Weight** | Filter by weight category (Lace through Jumbo) |
| **Brand** | Filter by any brand in your collection |

### Yarn Sort Options

| Sort | Direction |
|------|-----------|
| **Brand** | A–Z / Z–A |
| **Name** | A–Z / Z–A |
| **Weight** | Light→Heavy / Heavy→Light |
| **Qty** | Most / Least |
| **Added** | Newest / Oldest |

### Hook Filters

| Filter | Options |
|--------|---------|
| **Craft** | All, Crochet, or Knitting |
| **Type** | Filter by hook/needle type |
| **Brand** | Filter by brand |

### Hook Sort Options

| Sort | Direction |
|------|-----------|
| **Brand** | A–Z / Z–A |
| **Size** | Small→Large / Large→Small |
| **Qty** | Most / Least |
| **Added** | Newest / Oldest |

A search bar filters items in real time by name, brand, color, fiber, size, or type.

The sidebar collapses to a toggle button to save space. On mobile it slides in as an overlay.

---

## Bulk Operations

Long-press a card (mobile) or click the edit mode button to enter bulk selection mode. Checkboxes appear on all items. Select multiple items, then use the bottom toolbar:

- **Set Quantity** — update the quantity on all selected items at once
- **Delete** — delete all selected items (requires a second confirmation click within 3 seconds)
- **Clear** — deselect all

---

## Pattern Linking

Link yarns and hooks to patterns from the pattern edit modal's **Inventory** tab.

- **Yarn selector** shows items grouped by brand with checkboxes and a search filter
- **Hook selector** shows items grouped by craft type and size
- A count badge on the tab shows the total number of linked items

When viewing a yarn or hook, the **Patterns** tab lists all patterns linked to that item. Click a pattern to open it.

---

## Context Menus

Right-click a list row (or long-press on mobile) to access:

- **Edit** — opens the edit modal
- **Delete** — removes the item with a 5-second undo toast

Right-click a column header to toggle column visibility.

---

## Undo Delete

Deleting a yarn or hook (from the context menu, edit modal, or bulk operations) shows a toast notification with an **Undo** button. The item is removed from the UI immediately, but the server delete is delayed 5 seconds. Clicking Undo restores the item.

:::tip
Undo delete also works for pattern deletions and archives throughout the app.
:::

---

## Photos

Upload photos by clicking the thumbnail area in any modal or by dragging an image onto it. Photos imported via product URL are saved automatically. All images are resized to 300×400px JPEG (quality 85) on the server.

---

## Settings

Toggle the Inventory tab on or off from **Settings > Behavior > Inventory**. Default: shown. Useful if you only use Yarnl for pattern management.

---

## Backups

Yarn, hooks, and pattern-inventory links are included in user backups (both scheduled and manual). On restore, IDs are remapped correctly so links between patterns and inventory items are preserved.

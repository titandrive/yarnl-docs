---
sidebar_position: 5
title: Release Notes
description: Release history for Yarnl
---

# Yarnl Release Notes

---

## v0.9.4

### List View
- **Filter menu** — a new Filters button appears in the list view toolbar (desktop and mobile) with toggles for Completed, In Progress, PDF, and Markdown visibility. Previously these filters were only accessible from the sidebar, which is hidden in list view.
- **Active filter indicator** — a dot badge appears on the Filters button when any filter is hiding items.

### Context Menu
- **Scroll to dismiss on mobile** — scrolling now dismisses the context menu on mobile, making it easier to close without tapping.

---

## v0.9.3

### New: Difficulty Ratings
- **Difficulty field** — patterns now have a difficulty rating on a 1–10 scale (matching Ravelry). Set it from any edit modal, the bulk edit panel, or view it in the pattern info modal.
- **List view column** — new Difficulty column available in list view, sortable like other columns.
- **Bulk edit** — set difficulty across multiple patterns at once from the bulk edit modal.
- **Ravelry import** — difficulty is automatically imported from Ravelry's community difficulty average.

### Pattern Viewer
- **Scroll sync rewrite** — markdown live preview scroll sync completely rewritten. Uses a mirror-div approach for accurate position mapping and lerp-based smooth scrolling to eliminate jumpiness around images and tall elements.

### Context Menu
- **Open in New Tab / New Window** — right-click a pattern in list view to open it in a new browser tab or popup window (desktop only).
- **Auto-dismiss on mobile** — context menus automatically close after 5 seconds of inactivity on mobile, since there's no easy way to tap away.

### Settings
- **Tab centering on mobile** — tapping a settings tab now scrolls it to the center of the nav bar.

### Ravelry
- **Better PDF error messages** — free Ravelry-hosted patterns that aren't in your library now show a clear message explaining how to fix the issue, instead of a generic error.

### Bug Fixes
- **Mobile counters for markdown patterns** — counters now show correctly on mobile when viewing markdown patterns.
- **Yarn/hook modal layout** — fixed button layout in yarn and hook edit modals. Delete button now shows the correct label ("Delete Yarn" / "Delete Hook" instead of "Delete Pattern").
- **Duplicate yarn/hook** — fixed crash when duplicating a yarn or hook (null ID error).
- **List view sort persistence** — sort order in list view now persists across refreshes and syncs across devices.
- **Bulk edit modal** — tightened spacing for a more compact layout.

---

## v0.9.2

### Ravelry
- **Mobile layout** — Ravelry panel now fits on mobile screens. Tabs scroll horizontally and actions wrap correctly.
- **Swipeable tabs** — swipe left/right to switch between Ravelry tabs on mobile without triggering the main settings swipe.
- **Mascot shortcut** — new mascot action option to jump directly to the Ravelry settings tab.

### Pattern Cards
- **Badge reorganization** — star ratings centered on the thumbnail (no background), hearts bottom-right, PDF/MD badge bottom-left (replaced by owner badge when viewing another user's pattern).
- **Favorite Badge toggle** — show/hide the heart badge on cards (renamed from Star Badge).
- **Rating Badge toggle** — new setting to show/hide star ratings on pattern cards.

### Edit Modals
- **Even button spacing** — action buttons in all three edit modals (PDF viewer, markdown viewer, library card) are now evenly spaced across the full width.
- **Add to Account** — when an admin opens another user's pattern, a new "Add to Account" button copies the pattern (PDF, thumbnail, hashtags, and counter structure) to the admin's own library. Counter values are reset to 0. Replaces the Duplicate button in that context.
- **Revert Annotations moved** — Revert Annotations button relocated to the modal header, freeing up space in the action row.
- **Markdown edit modal** — Add to Account button now also appears in the markdown pattern edit modal.

### Admin
- **In Progress tab** — marking another user's pattern as In Progress now shows and persists correctly on refresh, with the owner badge intact.
- **In Progress ordering** — newly marked patterns appear at the top of the In Progress tab, matching server order.

### Bug Fixes
- **Blank screen on refresh** — refreshing while in the pattern viewer now correctly reopens the pattern. Handles slug-with-ID URLs (e.g. `my-pattern-42`) and falls back to the default tab if the pattern can't be resolved.

---

## v0.9.1

### Ravelry Improvements
Builds on the Ravelry integration introduced in [v0.9.0](#v090). [Setup guide →](https://yarnl.com/docs/guide/ravelry)

- **Auto-tag on import** — all Ravelry imports (URL and bulk) are automatically tagged `#ravelry`. Bulk imports also receive a tag matching the Ravelry category (e.g. `#animal`, `#accessory`).
- **Tags column in list view** — a Tags column is now visible by default in list view. Tags are clickable and filter the library, matching card view behavior.
- **PDF badges on Browse tab** — patterns without a downloadable PDF show a red **No PDF** badge before you select them. Import is blocked with a descriptive error explaining whether the PDF needs to be purchased, added to your library, or doesn't exist.
- **PDF badges on Favorites tab** — same PDF status badges on pattern favorites. Patterns in your Ravelry library or available as free downloads show **PDF available**; others show **No PDF**.
- **Partial import** — if you select a mix of importable and non-importable patterns, the valid ones still import. Errors are shown for the blocked ones without stopping the rest.
- **URL import UX** — `#ravelry` tag is pre-selected when opening the URL import modal. Clicking outside the modal closes it.
- **Bulk import fixes** — Ravelry categories are now saved as tags instead of overwriting the Yarnl category. HTML in pattern descriptions is stripped before import.
- **Search clear button** — the X button to clear the search bar is now also shown in list view, matching card view.
- **Edit modal buttons** — button sizing in the edit modal is consistent across all screen sizes.

---

## v0.9.0

### New: Ravelry Integration
Connect your Ravelry account and import your library directly into Yarnl. [Setup guide →](https://yarnl.com/docs/guide/ravelry)

- **Browse & import** — a new Ravelry panel lets you browse your Ravelry library, stash, tools, and favorites with photos, badges, and checkboxes. Select individual items or import everything at once.
- **Pattern import** — imports patterns from your Ravelry library with PDF auto-downloaded and attached. Re-import is supported; already-imported items are marked with a badge.
- **Yarn import** — imports yarn from your Ravelry stash with full metadata: brand, name, colorway, weight, fiber content, and skein quantity.
- **Tools import** — imports hooks and knitting needles from your Ravelry tools list.
- **Favorites import** — imports favorited patterns and yarn from your Ravelry favorites with type badges.
- **URL import** — paste any Ravelry pattern URL to preview and import it directly. A two-step flow shows pattern info, checks PDF availability, and lets you set name, description, category, hashtags, rating, favorite, and in-progress status before importing.
- **Duplicate detection** — if a pattern with the same name already exists, a warning is shown. You can import it anyway with a *(Copy)* suffix appended automatically.
- **PDF check on preview** — PDF availability is verified on the first step; patterns with no downloadable PDF are blocked before you reach the import step, with distinct error messages for paid vs. free patterns.
- **HTML stripping** — Ravelry pattern notes with HTML formatting are automatically cleaned before import.
- **Token refresh** — Ravelry API calls automatically retry with a fresh token on auth errors. If the session can no longer be refreshed, a clear error is shown.
- **Bulk import error handling** — if a token expires mid-import, the error is surfaced in the progress bar and as a toast with a reconnect prompt; import buttons are re-enabled.
- **Tab icons** — each Ravelry tab (Patterns, Yarn, Tools, Favorites) has an icon. "Hooks & Needles" renamed to "Tools".
- **Docs link** — admin Ravelry settings now link to the setup guide.

### Column Persistence
- **Synced across devices** — column order and column visibility for patterns, yarn, and hooks now sync to the server and persist across devices and sessions.
- **Sort persistence** — active sort column and direction persist on page refresh.

### Toolbar Improvements
- **Uniform toolbar height** — inventory and library toolbars use `align-items: stretch` so the search input, view toggle, and Edit button all match height on desktop.
- **Mobile Edit button** — library and inventory mobile bars now include an Edit (multi-select) button, matching each other.
- **Bulk toolbar: archive/delete restored** — the quick archive (or delete, depending on your settings) button is back in the floating bulk selection bar, to the left of Edit.
- **Bulk toolbar mobile** — Edit label hidden on mobile (icon only) to prevent the toolbar overflowing on small screens.

### Yarn Form
- **Compact add form** — yarn URL field moved to the top, related fields merged onto shared rows, and a favorite toggle added directly in the form.

---

## v0.8.2

### Bug Fixes
- **Column show/hide actually works** — hiding a column from the right-click menu now persists correctly. Previously, hidden columns would silently reappear on every page load.
- **Duplicate column fix** — fixed a bug where the Name column (or any column) could appear twice in list view. Saved column orders are automatically deduplicated on load.
- **Column position restored on re-show** — re-enabling a hidden column now inserts it back where it was, instead of appending it to the end.

---

## v0.8.1

### New: Star Ratings
Rate your patterns, yarn, and hooks on a 0–5 star scale.

- **Rate anywhere** — set ratings from edit modals, right-click context menus, bulk toolbars, and the pattern creation form
- **Card view badges** — rated items show filled stars overlaid on the card thumbnail (no background, drop shadow for visibility)
- **List view column** — star rating column available in all list views (patterns, yarn, hooks) with sortable headers
- **Filter by rating** — sidebar rating filter on library and inventory views to show only items with a specific star count
- **Sort by rating** — sort by rating (highest/lowest) in all card and list view sort dropdowns
- **Bulk rating** — set ratings in bulk from the pattern toolbar and inventory bulk bar
- **In Progress cards** — rating badges shown on In Progress page pattern cards
- **Pattern info modal** — rating displayed in the read-only pattern info popup

### New: Inventory Favorites
- **Favorite yarn and hooks** — heart icon on card hover (top-right), in context menus, list view column, and bulk toolbar
- **Favorite included in backups** — favorite state for yarn and hooks is backed up and restored

### New: Heart Favorites
- **Heart icons** — all favorite icons changed from stars to hearts to avoid confusion with the new star ratings
- **Fixed In Progress favorite toggle** — toggling favorite on the In Progress page now updates correctly

### Quick Actions in Bulk Toolbar
- **Pattern bulk toolbar** — added quick action buttons for In Progress, Favorite, and Complete toggles, plus inline rating stars, so you can update multiple patterns without opening the bulk edit modal
- **Fixed Clear button** — bulk selection Clear button now works correctly in list view

### Mobile & Navigation
- **Inventory in swipe navigation** — swipe left/right now includes the Inventory tab in the tab cycle
- **List view swipe conflict fixed** — horizontal swiping in list view tables no longer accidentally switches tabs
- **Projects tab flash fixed** — projects tab no longer briefly flashes content on initial load

### UI Polish
- **Compact edit modals** — pattern edit modals (standalone, PDF viewer, markdown viewer) restructured with thumbnail, rating, and in-progress toggle on one row to eliminate scrolling
- **Mobile bulk toolbar** — bulk toolbars no longer overflow on small screens; rating stars hidden on mobile, full-width positioning
- **Knitting needle placeholder** — knitting needles now use a dedicated needle SVG instead of the crochet hook icon
- **Inventory card thumbnails** — uploaded photos no longer make cards taller than placeholder cards
- **Empty state text wrapping** — fixed text wrapping in grid layout empty states

---

## v0.8.0

### New: Yarn & Hook Inventory
Track your yarn stash and hook/needle collection alongside your patterns.

- **Yarn inventory** — add yarns with brand, name, color, dye lot, weight category, fiber content, and quantity. Brand autocomplete remembers previous entries.
- **Hook & needle inventory** — add crochet hooks and knitting needles with size, type, brand, and length. Toggle between crochet and knitting with a craft type switch.
- **Card and list views** — switch between card grid and sortable table for both yarn and hooks. View preference persists per tab.
- **Photo support** — upload photos for yarn and hooks via the thumbnail modal, or import product images automatically from a URL.
- **Product URL import** — paste a product URL and Yarnl extracts the image, brand, name, weight, fiber, and other metadata from the page automatically.
- **Pattern linking** — link yarns and hooks to patterns from the pattern edit modal's Inventory tab. Search and select from your inventory with brand-grouped results.
- **Sidebar with sort & filter** — filter yarn by weight and brand, hooks by size, type, and craft. Sort by any field. Sidebar collapses to save space.
- **Bulk operations** — long-press cards (mobile) or use edit mode to bulk select items for delete or quantity adjustment.

### New: Library List View
The pattern library now supports a list view alongside the existing card grid.

- **Sortable columns** — click column headers to sort by name, category, status, date added, time tracked, and more.
- **All columns shown by default** — description, favorite, completed date, and started date columns are now visible out of the box.
- **Draggable column reorder** — drag column headers to rearrange columns. Order persists per tab.
- **Column visibility menu** — right-click any column header to show/hide columns. Photo column is toggleable like all others.
- **Right-click context menu** — right-click any row in list view to access actions (edit, delete, and for patterns: in progress, favorite, complete).
- **Long-press context menu on mobile** — long-press a list row on mobile to open the same context menu. Card view long-press remains bulk selection.
- **List view thumbnails** — pattern, yarn, and hook placeholder icons shown in the Photo column when no image exists.
- **Stable sort arrows** — sort indicator arrows no longer cause column headers to jump when clicked.
- **Auto-insert new columns** — when new default columns are added in updates, they automatically appear at the correct position in your saved column order.

### Undo Delete
- **Undo toast for all deletes** — deleting or archiving patterns, yarn, or hooks now shows a 5-second toast with an Undo button. The item is removed from the UI immediately but the server delete is delayed, giving you a window to reverse accidental deletions.

### Settings
- **Hide Inventory tab** — toggle the Inventory tab on or off from Settings > Behavior > Inventory (default: shown).

### Mobile
- **Inventory mobile layout** — yarn and hook views adapt to mobile with responsive cards, filters, and toolbar.
- **Library mobile layout** — pattern list view works on mobile with horizontal scroll for wide tables.

### Infrastructure
- **Inventory in backups** — yarn, hooks, and pattern-inventory links are now included in user backups and restored correctly with ID remapping.
- **Column order synced** — pattern, yarn, and hook column orders sync to the server alongside other settings.
- **Fix inventory thumbnail uploads** — yarn and hook photo uploads were silently rejected by the wrong multer filter (PDF-only instead of image). Fixed.

### UI Polish
- **New pattern placeholder icon** — replaced the generic yarn ball with a crocheting icon by Trimanggolo Mulyo from Noun Project (CC BY 3.0).
- **Larger card placeholders** — pattern placeholder icons increased to 100px, yarn and hook to 56px.
- **Inventory sub-tabs** — yarn and hooks use segmented control styling matching the rest of the app.
- **Compact modals** — inventory modals use metric-first size selectors and a streamlined layout.

---

## v0.7.2

### Features
- **Counter indicator icons** — link and star icons appear next to counter names to show which counter is the main (linked) counter and which have repeat enabled, visible at a glance without opening settings
- **Synced pinned counters** — pinned counter state now syncs to the server, so your pinned layout persists across devices and sessions

### Bug Fixes
- **Main/unlink toggles not sticking on mobile** — fixed optimistic update so toggle state saves reliably
- **Mobile carousel swipe issues** — polished touch interactions, fixed wrap-around animation glitches
- **Pin/unpin button guard** — disabled the button when it would empty the carousel or pinned list
- **Disabled Main toggle tooltip on mobile** — tapping the greyed-out Main toggle now shows a tooltip explaining which counter holds the main role

---

## v0.7.1

### Infrastructure
- **Fix node-cron CPU/RAM leak** — replaced node-cron with croner to fix a memory leak that caused increasing CPU and RAM usage over time

---

## v0.7.0

### Features
- **Pinnable mobile counters** — pin any counter above the bottom bar so it's always visible while you work. Tap a counter to open the edit panel, then tap the maximize icon to pin it. Tap the minimize icon to return it to the swipeable carousel. Multiple counters can be pinned at once, making it easy to track both overall row count and repeat position simultaneously.
- **Swipeable counter cards** — mobile counters are now full swipeable cards with their own +/− buttons. Swipe left and right to switch between counters, or use the arrow buttons. Dot indicators show your position when multiple counters exist.
- **Infinite carousel** — swiping past the last counter wraps around to the first (and vice versa) with the same smooth slide animation
- **Counter layout setting** — choose between stacked (default) or scrollable counter layout on desktop (Settings > Behavior > Pattern Viewer)

### UI Polish
- **Settings reorganization** — Appearance settings split into **Appearance** (visual) and **Behavior** (functional) sections for easier navigation
- **Eager dot indicators** — carousel position dots update during the swipe, not after

### Bug Fixes
- **Mobile unlink button state not saving** — fixed async handler that was reading stale state
- **Unlink touch target too small** — increased padding for easier tapping

---

## v0.6.11

### Infrastructure
- **Updated README tech stack** — added Marked.js, pdf-parse, multer, archiver, unzipper, node-cron, pg

---

## v0.6.10

### Features
- **Unlink counters** — when a main counter is set, an **Unlink** toggle appears on all other counters. Toggling it on opts that counter out of the main counter link — incrementing or decrementing it will no longer affect the main counter. Available on both desktop (settings pane) and mobile (edit panel).

### UI Polish
- **Bold main counter name** — the main counter's name is now bold in addition to being displayed in the accent color, making it easier to spot at a glance
- **Mobile toggles save immediately** — Main, Repeat, and Unlink toggles on mobile now save on change instead of waiting for Done, matching desktop behavior

---

## v0.6.9

### Features
- **Repeatable counters** — counters can now cycle back to 1 after reaching a set limit. Open the settings cog on any counter and toggle **Repeat** on, then set the row count. When the counter reaches the limit, the next increment resets it to 1. Useful for tracking repeating stitch patterns (e.g., a 10-row repeat on a dishcloth).
- **Linked main counter** — one counter per pattern can be designated as the **Main** counter. When any other counter is incremented or decremented, the main counter automatically follows. This lets you track both overall row count and repeat position at the same time. The main counter itself increments normally without double-counting.
- **Counter settings pane** — the delete button on counters has been replaced with a settings cog. Clicking it reveals an inline settings view with Main and Repeat toggles, a Done button, and a Delete button (requires two clicks to confirm). The counter name hides while settings are open to keep the layout compact.
- **Main counter color indicator** — the main counter's name is displayed in the accent color so you can tell at a glance which counter is linked, without taking up extra space with a badge.

### UI Polish
- **Custom repeat stepper** — the repeat value input uses styled −/+ buttons instead of native browser spinners, matching the rest of the UI
- **Compact counter-max display** — when a repeat limit is set, the counter shows the value as `11/2` with the max in a smaller, muted font
- **Mobile counter nav in edit mode** — the bottom navigation arrows now update the edit panel when it's open, removing the need for the redundant upper navigation row
- **Disabled main toggle** — when one counter is already set as main, the Main toggle on other counters is greyed out with a tooltip explaining which counter holds the main role

### Bug Fixes
- **Header theme toggle not saving** — the light/dark toggle in the header now syncs to the server immediately, matching the behavior of the settings picker

---

## v0.6.8

### Features
- **Mobile landscape support** — landscape phones now use the mobile UI with compact bars, maximizing PDF viewing area
- **Counter tap to close** — tapping the counter label again closes the edit panel (same as pressing Done)

### Infrastructure
- **Auto-detect backup mount** — external backup drive is detected automatically, removing the need for a `BACKUP_PATH` env var

---

## v0.6.7

### Bug Fixes
- **Fix Catppuccin dark mode** — Catppuccin dark theme was missing counter button color variables, causing them to fall back to default Lavender colors

---

## v0.6.6

### Bug Fixes
- **Fix sessions over plain HTTP** — session cookies no longer require HTTPS, so accessing Yarnl over HTTP on a LAN works correctly
- **Fix settings lost on quick refresh** — settings changes (theme, etc.) now sync to the server immediately on modal close and flush on page unload, preventing loss from the 2-second debounce window

### Configuration
- **`SECURE_COOKIES` env var** — set to `true` to mark session cookies as HTTPS-only (defaults to `false`)

---

## v0.6.5

### Infrastructure
- **Simplified `BACKUP_PATH`** — now a boolean flag (`true`) instead of a path; set `BACKUP_PATH=true` and add a volume mount to `/backups` in docker-compose to store backups on an external drive or NAS (existing `/backups` value still works)

### Docs
- Add Docker Compose install link to README prerequisites

---

## v0.6.4

### Features
- **Synced scrolling for live preview** — markdown editor and preview panes scroll in sync across all editors (new pattern, inline edit, pattern notes)
- **Inline editor live preview** — existing markdown patterns now have a side-by-side live preview toggle when editing
- **Image drag-and-drop** — drag images directly into any markdown editor (previously paste-only)
- **Image paste in pattern notes** — paste images from clipboard into PDF pattern notes
- **Catppuccin theme** — new Catppuccin Latte (light) and Mocha (dark) themes

### Docs
- Add Windows PowerShell quickstart instructions to README

---

## v0.6.3

### Features
- **Configurable inactivity timeout** — set how long before the auto timer pauses, or disable it entirely (Settings > Behavior > Inactivity Timeout)

### Bug Fixes
- **Timer saves reliably on exit** — timer seconds are cached locally when closing a pattern, preventing lost time from server save race conditions

### UI Polish
- **Centered mobile page number** — page indicator is now centered between the title and timer in mobile view

---

## v0.6.2

### Features
- **What's New popup toggle** — disable the release notes popup from Settings > Behavior > Notifications

### Bug Fixes
- **Auto timer persists on exit** — timer state is preserved when leaving and re-opening a pattern
- **PDF timer save on close** — timer now correctly saves to the server when closing the PDF viewer

---

## v0.6.1

### Bug Fixes
- **Auto timer resumes on tab return** — timer now restarts automatically when switching back to the tab, instead of staying stopped

---

## v0.6.0

### Features
- **Dark-only theme toggle** — day/night toggle is hidden for themes that lack a light mode (e.g., Midnight, Synthwave, Dracula)

### UI Polish
- **No more flash on refresh** — settings/back button, theme toggle, and tab highlights all render correctly from the first frame
- **Centered header title** — "Yarnl" logo stays locked in center when switching between Settings and Back buttons

---

## v0.5.9

### Bug Fixes
- Fix "What's New" popup not showing for users upgrading from versions before the feature existed

---

## v0.5.8

### Performance
- **PDF viewer caching** — PDFs are cached between close/reopen, eliminating the white flash on revisit
- **Annotation-aware cache busting** — PDF cache updates automatically after annotation saves

### Features
- **"What's New" popup** — changelog shown automatically on version update

### Bug Fixes
- Fix annotation save crash caused by null `matchMedia` result in PDF.js

---

## v0.5.7

### Performance
- **Gzip compression** — All responses are now compressed, reducing transfer sizes by ~75% (app.js: 559KB → ~120KB)
- **Static asset caching** — CSS, JS, and images cached for 7 days with `?v=` cache busting for updates

### Markdown Editor
- Improved layout — editor and preview now fill the full screen (reduced excess bottom padding)
- Save status now color-coded: green for saved, muted for saving, red for errors
- "Done" button replaces "Preview" toggle on desktop for cleaner workflow
- Mobile-optimized create form — fixed action bar at bottom, compact layout, smaller thumbnail

### Projects
- **Thumbnail play overlay** — replaces the Continue button at the bottom of project cards, keeping card heights consistent with pattern cards
- **Context-aware hashtag filtering** — clicking a hashtag on a project card filters the projects tab; clicking on a pattern card filters the library tab
- Project badge color changed to secondary (pink) to distinguish from category badges

### Infrastructure
- `NODE_ENV=production` now defaults in the Dockerfile — no longer needed in docker-compose
- **BACKUP_PATH env var** — configure custom backup storage location
- Fix backup migration across Docker volume mounts
- Upgrade multer to 2.0.2 (fixes 4 high-severity DoS vulnerabilities)

---

## v0.5.6

### Bug Fixes
- Fix backup migration across Docker volume mounts

### Infrastructure
- Add BACKUP_PATH env var for custom backup storage location
- Update README with NODE_ENV and BACKUP_PATH in compose example

---

## v0.5.5

### Security
- Upgrade multer to 2.0.2 (fixes 4 high-severity DoS vulnerabilities)

### Bug Fixes
- Fix tab counts not updating on project add
- Use relative display paths

### Infrastructure
- Add Komodo webhook trigger to release workflow

---

## v0.5.4

### Markdown Editor
- Add inline markdown editor with auto-save
- Metadata-only details modal
- Add Tab/Shift+Tab indent support for markdown editor lists
- Match markdown viewer header to PDF viewer, add mobile support

### Bug Fixes
- Fix In Progress page not updating on toggle

---

## v0.5.3

### Features
- Add admin owner badges, owner filter, and scope current tab to own patterns
- Add admin-only stats section to about page

### Bug Fixes
- Fix login screen flash on first load in single-user mode

### Docs
- Rework Quick Start with intro, prerequisites, and numbered steps

---

## v0.5.2

### Features
- Load app version dynamically from package.json

### Infrastructure
- Add docker-compose to README and document all env vars
- Add screenshots to README
- Remove legacy root files (start.sh, index.html, favicon.svg)

---

## v0.5.1

### Bug Fixes
- Fix database init order: create users table before categories

### Infrastructure
- Use Docker Hub image in compose file instead of build
- Add GitHub Release to CI workflow and fix dependency vulnerabilities

---

## v0.5.0

Initial release.

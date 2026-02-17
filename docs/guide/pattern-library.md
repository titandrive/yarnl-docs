---
sidebar_position: 2
title: Pattern Library
description: Import, organize, and manage your pattern library
---

# Pattern Library

Yarnl makes it easy to organize your pattern library and find exactly what you need quickly. 

---

## Importing Patterns

### PDF Upload

Click **Add Pattern** and select one or more PDF files (up to 50 MB each). You can also drag and drop files. Each file can be assigned a category, description, and hashtags before uploading.

A thumbnail is automatically generated from the first page of each PDF.

### Markdown Patterns

Click **Add Pattern** → **Create New** to write a pattern in markdown. Enter a name, choose a category, and write your content. See [Markdown](./markdown) for formatting details.

### Duplicate Detection

When uploading a PDF that matches an existing pattern name:

| Option | Action |
|--------|--------|
| **Skip** | Don't upload this file |
| **Overwrite** | Delete the existing pattern and replace it |
| **Rename** | Auto-generate a unique name (e.g., "Pattern (2)") |

---

## Library View

Patterns display as cards in a responsive grid. Each card shows:

- Thumbnail (or placeholder)
- Pattern name
- Description (up to 45 characters, click to edit inline)
- Status line — completion date, elapsed time, or "New Pattern"
- Hashtags
- Category and type (PDF/Markdown) badges

### Quick Actions

Each card has action buttons:

| Button | Action |
|--------|--------|
| **Play** | Toggle "In Progress" |
| **Star** | Toggle favorite |
| **Checkmark** | Toggle completed |
| **Pencil** | Open edit modal |
| **Trash** | Archive (or delete, if direct delete is enabled) |

---

## Sorting

| Sort | Description |
|------|-------------|
| **Added (Newest / Oldest)** | By upload date |
| **Opened (Recent / Oldest)** | By last opened time |
| **Name (A-Z / Z-A)** | Alphabetical |

You can also pin favorites and/or in-progress patterns to the top of the list, regardless of sort order.

---

## Filtering

The library sidebar provides several filter controls:

| Filter | Options |
|--------|---------|
| **Show** | All, Favorites only, In Progress only, New only |
| **Category** | All or a specific category |
| **Status** | Toggle completed and in-progress patterns on/off |
| **Type** | Toggle PDF and Markdown on/off |
| **Owner** | All users, Mine, or a specific user (admin only) |
| **Highlight** | Visually highlight Favorites, In Progress, or New patterns |

All filter settings persist across sessions.

### Search

Type in the search bar to filter by pattern name, description, or hashtag. Prefix with `#` to search hashtags only (e.g., `#beginner`).

---

## Categories

Patterns are organized into categories. Each category maps to a folder on disk, so changing a pattern's category moves its file.

- **Create** — add new categories from the sidebar or during upload
- **Rename** — updates all patterns using that category and renames the folder
- **Delete** — only allowed if no patterns are in the category

Categories are per-user. Admins can configure default categories for new users in **Settings** → **Admin**.

---

## Hashtags

Flexible tags for cross-cutting organization. Unlike categories, a pattern can have multiple hashtags.

- Create hashtags from the upload modal, edit modal, or bulk edit
- Hashtags are global (shared across all users)
- Used in search and filtering

---

## Pattern Status

| Status | Description |
|--------|-------------|
| **New** | Just added, no timer or completion date |
| **In Progress** | Actively being worked on (`is_current`) |
| **Completed** | Finished and records a completion date |
| **Favorite** | Flagged for quick access |

Marking a pattern as completed automatically removes it from "In Progress." Marking it as "In Progress" removes the completed status.

---

## Editing a Pattern

Click the pencil icon on a card or open the edit modal to change:

- **Name** — also renames the file on disk
- **Category** — moves the file to the new category folder
- **Description** — 45 character limit
- **Hashtags** — add or remove tags
- **Thumbnail** — upload a custom image or keep the auto-generated one
- **In Progress** — toggle the current status

---

## Bulk Actions

Select multiple patterns by clicking their checkboxes (or long-pressing on mobile). The bulk edit panel lets you:

- **Add / remove hashtags** across all selected patterns
- **Change category** — move all to a new category
- **Toggle status** — set In Progress, Completed, or Favorite (with remove option)
- **Archive or delete** all selected patterns

Press **Escape** to clear the selection.

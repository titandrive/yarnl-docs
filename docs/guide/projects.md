---
sidebar_position: 5
title: Projects
description: Group multiple patterns into collections
---

# Projects

Projects let you group multiple patterns into a single collection. Useful for larger works made up of multiple patterns like a blanket of squares, a doll with separate parts, or a themed set of related patterns.

---

## Key Concepts

- **Patterns stay in your library** — adding a pattern to a project creates a reference, not a copy
- **One pattern, many projects** — the same pattern can appear in multiple projects
- **Project-specific status** — each pattern has its own status within each project, independent of its library status
- **Deleting a project doesn't delete patterns** — only the project and its associations are removed

---

## Creating a Project

1. Go to the **Projects** tab
2. Click **New Project**
3. Enter a name and optional description
4. Add hashtags for organization
5. Add patterns:

<div className="steps-grid">

<div className="step-box">

### Add Existing

Select patterns already in your library using search and filters.

</div>

<div className="step-box">

### Import New

Drag & drop PDF files to upload and add in one step.

</div>

</div>

6. Optionally upload a custom thumbnail
7. Click **Create Project**

---

## Project Detail View

Click any project card to open the detail view.

### Info & Progress

- **Progress bar** — visual percentage of completed patterns (e.g., 3/5 complete)
- **Total time** — cumulative timer across all patterns in the project
- **Hashtags** — tags applied to the project
- **Description** — editable inline

### Pattern List

Each pattern shows its position number, thumbnail, name, time spent, and a status dropdown. Click a pattern to open it in the viewer.

### Actions

| Button | Function |
|--------|----------|
| **Edit** | Modify name, description, hashtags, or thumbnail |
| **Notes** | Add free-form markdown notes about the project |
| **Add Patterns** | Add more patterns (existing or import new) |
| **Reorder** | Enable drag-and-drop to reorder patterns |

---

## Pattern Status

Each pattern within a project has its own status, independent of its library status:

| Status | Meaning |
|--------|---------|
| **Pending** | Not started yet |
| **In Progress** | Currently working on |
| **Completed** | Finished |

Change status using the dropdown next to each pattern. The same pattern can be "In Progress" in one project and "Completed" in another.

---

## Project Status

Projects themselves have status flags independent of their patterns:

| Action | Effect |
|--------|--------|
| **Mark as Current** | Flags the project as actively being worked on |
| **Mark as Favorite** | Adds to favorites filter |
| **Mark as Complete** | Marks the project as finished and removes it from current |

Marking a project as current automatically un-completes it. Marking it complete automatically removes it from current. You can mark a project complete even if not all patterns inside it are finished.

---

## Continue

If a project has patterns marked "In Progress", a play button appears on the project card. Clicking it opens the first in-progress pattern directly in the viewer, so there's no need to navigate into the project first.

---

## Reordering Patterns

1. Click **Reorder** in the project detail footer
2. Drag patterns up or down using the drag handle
3. Click **Done** to save the new order

---

## Adding Patterns

To add patterns to an existing project:

1. Open the project
2. Click **Add Patterns**
3. Choose a tab:
   - **Add Existing** — browse and select from your library (patterns already in the project are filtered out)
   - **Import New** — upload new PDF files
4. Click **Add Selected**

### Duplicate Detection

When importing a PDF that matches an existing pattern name:

| Option | Action |
|--------|--------|
| **Skip** | Don't add this file |
| **Import Anyway** | Create a new pattern from the PDF |
| **Use Existing** | Add the existing library pattern instead |

---

## Sorting & Filtering

### Sort Options

| Sort | Description |
|------|-------------|
| **Date (newest/oldest)** | By creation date |
| **Recently opened** | By last opened time |
| **Name (A-Z / Z-A)** | Alphabetical |
| **Progress (most/least)** | By completion percentage |

### Filters

| Filter | Shows |
|--------|-------|
| **All** | All non-archived projects |
| **Favorites** | Only favorited projects |
| **Current** | Only active (in-progress) projects |

### Search

Type in the search bar to filter by project name, description, or hashtag. Prefix with `#` to search hashtags only (e.g., `#blanket`).

---

## Editing a Project

Click **Edit** on a project card or from the detail view to:

- Change project name or description
- Update hashtags
- Upload a custom thumbnail
- Delete the project

---

## Notes

Each project can have its own markdown notes, separate from pattern notes. Open them with the **Notes** button in the project detail view. Notes are saved as markdown files on disk and are deleted if the project is archived or deleted.

---

## Thumbnails

- **Auto-generated** — uses the first pattern's thumbnail by default
- **Custom** — upload your own image in the edit modal

Clear the custom thumbnail to revert to auto-generated.

---

## Project Badges

Project cards display status badges:

| Badge | Meaning |
|-------|---------|
| **IN PROGRESS** | Project is marked as current |
| **COMPLETE** | Project is marked as complete |
| **&#9829;** | Marked as favorite |

---

## Archiving

Archive projects you want to hide without deleting. Archived projects keep their pattern links intact so everything is preserved when restored.

- Archive from the project card or detail view
- Restore from **Settings** → **Archive**
- Permanently delete from the archive when you're sure

Archiving removes the project from the "current" list and deletes its notes file.

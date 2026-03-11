---
sidebar_position: 6.5
sidebar_class_name: sidebar-icon-ravelry
title: Ravelry
description: Connect your Ravelry account to import patterns, yarn, and tools
---

# Ravelry (Admin Only)

Configure the Ravelry integration to allow users to import their patterns, yarn stash, and tools from Ravelry. Only visible to users with the admin role. See the [Ravelry setup guide](../guide/ravelry) for step-by-step instructions.

---

## Ravelry Integration

| Setting | Description |
|---------|-------------|
| **Enable Ravelry** | Allow users to connect their Ravelry account and access the Ravelry import tab. |
| **Callback URL** | The redirect URL to register in your Ravelry app. Click to copy. Must use HTTPS. |
| **Client ID** | The Client ID from your Ravelry OAuth app. |
| **Client Secret** | The Client Secret from your Ravelry OAuth app. |

| Button | Description |
|--------|-------------|
| **Test Connection** | Verify that the Client ID and Secret are valid. |
| **Save Ravelry Settings** | Save the current Ravelry configuration. |

---

## Patterns

Shows your Ravelry pattern library — every pattern you've purchased or downloaded on Ravelry.

Each item displays the cover photo, pattern name, designer, category, and two badges:

- **PDF** — a downloadable PDF is available
- **Imported** — this pattern has already been imported into Yarnl

**What gets imported:** pattern name, designer, description (HTML stripped), category, cover photo, and the PDF — downloaded directly from Ravelry and attached to the pattern.

Re-importing is supported. Selecting an already-imported pattern imports it again and updates the existing record, which is useful if the PDF was updated on Ravelry.

---

## Yarn

Shows your Ravelry stash. Each item displays the yarn photo, name, brand, colorway, weight, skein count, and an **Imported** badge if already in Yarnl.

**What gets imported:** brand, name, colorway, weight category, fiber content, skein quantity, and photo.

---

## Tools

Shows your Ravelry hooks and needles.

**What gets imported:** size, type (crochet hook or knitting needle), and brand.

---

## Favorites

Shows your Ravelry favorites list — patterns and yarn you've hearted on Ravelry. Each item has a **Pattern** or **Yarn** type badge.

- **Favorited patterns** — imported the same way as library patterns, PDF included if available.
- **Favorited yarn** — imported into your Yarnl yarn inventory. If the yarn is also in your stash, colorway and quantity data is pulled from there.

---

## Selecting and Importing

- **Click any item** to select it. Click again to deselect.
- **Select All** selects every item on the current tab. Click again to deselect all.
- **Import Selected** imports only the checked items.
- **Import All** imports everything in the current tab. Requires a second click to confirm.

A progress bar shows the current item and overall count during import. When complete, a toast confirms how many items were imported and **Imported** badges update in the list.

If an error occurs mid-import (e.g. an expired Ravelry session), the progress bar shows the error and the import buttons re-enable so you can retry. If the error is a session expiry, go to **Settings → Ravelry** and reconnect your account.

---

## Importing from a URL

Import any individual Ravelry pattern by URL — useful for free patterns or when you want to preview and customize before importing.

1. In the pattern library, click **+ Ravelry URL**
2. Paste the Ravelry pattern URL and click **Next**

Yarnl checks whether a PDF is available immediately. If not, an error is shown:

- *"This pattern has no downloadable PDF on Ravelry."* — no PDF exists for this pattern.
- *"This is a paid pattern not found in your Ravelry library."* — the pattern is paid and you haven't purchased it. Buy it on Ravelry first, then import.

If a PDF is available, you proceed to the configuration step where you can edit everything before importing:

| Field | Default | Notes |
|-------|---------|-------|
| **Name** | Ravelry pattern name | If a pattern with this name already exists, a warning appears and *(Copy)* is appended. |
| **Description** | Ravelry pattern notes | HTML stripped automatically. |
| **Category** | Your default category | |
| **Hashtags** | None | Pick from your existing tags, or use the suggested Ravelry tag chips. |
| **Rating** | None | Your personal rating, 0–5 stars. |
| **In Progress** | Off | Mark as in progress immediately on import. |
| **Favorite** | Off | Add to favorites immediately on import. |

Click **Import** to download the PDF and create the pattern. Use the back button in the top-left of the modal to return to the URL step.

---

## Tips

- The panel loads 50 items per page. Use **← Prev** / **Next →** to browse. **Import All** covers all pages, not just the current one.
- Photos are fetched from Ravelry's full product database, not just stash thumbnails.
- The **Imported** badge cross-references Ravelry IDs with your Yarnl library and updates after each import.

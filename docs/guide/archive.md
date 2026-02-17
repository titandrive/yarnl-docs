---
sidebar_position: 6
title: Archive
description: Manage deleted patterns and projects
---

# Archive

When you delete a pattern or project, it moves to the archive instead of being permanently deleted. Think of it as a recycle bin where you can restore items or permanently delete them when you're ready.

---

## How It Works

1. Delete a pattern or project from the library
2. It moves to the archive with all its data intact
3. Restore it anytime from **Settings** → **Archive**
4. Or permanently delete it when you're sure

### What Gets Archived

**Patterns:** The pattern file, any annotations, and the thumbnail are all moved to the archive directory. The pattern is marked as not current.

**Projects:** The project record is archived but linked patterns stay in the library. Project notes are deleted when a project is archived and are not restored if the project is later recovered.

---

## Managing the Archive

Go to **Settings** → **Archive** to see all archived items.

Each item shows its name, category (for patterns), and when it was archived. Actions available:

| Action | Description |
|--------|-------------|
| **Restore** | Move back to the library in its original category |
| **Delete** | Permanently remove the item and its files |
| **Delete All** | Clear the entire archive (patterns and projects) |

All destructive actions require a two-click confirmation.

---

## Auto-Delete

Automatically purge old archived items after a set number of days. Enable in **Settings** → **Archive**.

| Setting | Default | Description |
|---------|---------|-------------|
| **Auto-delete** | Off | Enable automatic deletion of old archived items |
| **Days** | 30 | Delete items archived longer than this (1–365 days) |

Auto-delete runs daily at midnight and on server startup. If [Pushover notifications](./backups-and-data#pushover-notifications) are configured, you'll be notified when items are auto-deleted.

---

## Direct Delete Mode

If you prefer to skip the archive entirely, enable **Direct Delete** in **Settings** → **Archive**. With this enabled, deleting a pattern or project permanently removes it immediately with no archive and no recovery.

Enabling direct delete mode hides the archive settings and archived items list. If you have items currently in the archive when you enable this mode, you'll be asked to confirm.

---

## Summary

| Mode | What Happens |
|------|--------------|
| **Default** | Delete sends items to archive (recoverable) |
| **Auto-delete** | Archive clears automatically after X days |
| **Direct delete** | Items are permanently deleted immediately |

:::tip
Auto-delete gives you a safety net with a grace period, without needing to manually clean up the archive.
:::

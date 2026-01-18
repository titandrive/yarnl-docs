---
sidebar_position: 7
title: Archive
description: Manage deleted patterns with the archive feature
---

# Archive

The archive feature provides a safety net for deleted patterns. Instead of permanently removing patterns immediately, they're moved to an archive where you can recover them if needed.

## How It Works

When you delete a pattern, it goes through a two-stage process:

1. **Delete** — Pattern moves to the archive (not permanently deleted)
2. **Archive** — Pattern stays here until you restore or permanently delete it

This gives you time to change your mind before a pattern is gone forever.

## Deleting a Pattern

1. Click the **delete button** on a pattern card
2. Confirm the deletion
3. The pattern moves to the archive

The pattern disappears from your library but can be recovered from **Settings → Archive**.

## Managing Archived Patterns

Go to **Settings → Archive** to see all your archived patterns.

For each archived pattern, you can:
- **Restore** — Move it back to your library
- **Delete** — Permanently remove it (cannot be undone)

You can also use **Delete All** to permanently remove all archived patterns at once.

## Settings

| Setting | Description |
|---------|-------------|
| **Enable delete** | Skip the archive and delete patterns immediately |
| **Auto-delete archived patterns** | Automatically delete patterns after a set number of days |
| **Days before deletion** | How long patterns stay in the archive before auto-delete (1-365 days) |

### Enable Delete (Direct Delete Mode)

If you prefer the old behavior where patterns are permanently deleted immediately:

1. Go to **Settings → Archive**
2. Enable **Enable delete**
3. The delete button will now permanently remove patterns without archiving

### Auto-Delete

Don't want to manually clean up your archive? Enable auto-delete to automatically purge old archived patterns.

1. Go to **Settings → Archive**
2. Enable **Auto-delete archived patterns**
3. Set the number of days (1-365, default is 30)

Patterns that have been in the archive longer than the specified days will be permanently deleted. The cleanup runs:
- Daily at midnight
- On server startup

:::tip
Auto-delete is useful if you want a grace period to recover accidentally deleted patterns, but don't want the archive to grow indefinitely.
:::

## Summary

| Mode | What happens when you delete |
|------|------------------------------|
| **Default (Archive)** | Pattern moves to archive, can be restored |
| **Enable delete ON** | Pattern is permanently deleted immediately |
| **Auto-delete ON** | Archived patterns are deleted after X days |

---
sidebar_position: 6
title: Backups & Data
description: Protect your data with backups
---

# Backups & Recovery

Never lose your progress or your data. Yarnl knows how important your information is and makes it easy to create backups and enact restores.

---

## What's Saved

| Data | Description |
|------|-------------|
| **Patterns** | PDFs and Markdown |
| **Counters** | All values for all patterns |
| **Timer** | Time spent on each project |
| **PDF position** | Where you left off |
| **Settings** | All customizations |
| **Library** | Categories, hashtags, favorites |

---

## Backup Structure

When you create a backup with notes included, the ZIP file contains:

```
yarnl-backup-2026-01-20T12-00-00.zip
├── database.json
├── settings.json
├── patterns/
│   └── [category]/
│       ├── *.pdf (if PDF patterns included)
│       └── *.md (if markdown patterns included)
├── images/            (if markdown patterns included)
├── archive/           (if archive included)
└── notes/             (if notes included)
    └── *.md
```

You can choose what to include when creating a backup—patterns, notes, and archives are optional.

---

## Creating Backups

<div className="steps-grid">

<div className="step-box">

### Manual

**Settings** → **Backups** → **Create Backup**

Good before updates or migrations.

</div>

<div className="step-box">

### Scheduled

Enable in Settings. Runs daily/weekly automatically.

</div>

</div>

---

## Restoring

1. **Settings** → **Backups**
2. Click **Restore from Backup**
3. Select your backup file
4. Confirm

Everything comes back exactly as it was.

---

## Custom Backup Location

By default, backups are stored alongside your user data in `./users/<username>/backups/`. You can redirect backups to a separate drive or NAS using the `BACKUP_PATH` environment variable.

### Configuration

Set the `BACKUP_PATH` environment variable and mount the target path as a volume:

```yaml
volumes:
  - ./users:/app/users
  - /mnt/user/drive:/backups
environment:
  - BACKUP_PATH=/backups
```

Backups will be stored at:

```
/mnt/user/drive/yarnl-backups/<username>/yarnl-backup-*.zip
```

### Migration

When `BACKUP_PATH` is added, changed, or removed, Yarnl automatically migrates existing backups to the new location on startup. No manual file moves needed.

:::tip
Store backups somewhere different from Yarnl itself for redundancy.
:::

---

## Auto-Pruning

Keep your backup storage under control by enabling auto-prune in **Settings** → **Backups**. You can prune by:

- **Count** — keep the last *N* backups
- **Age** — delete backups older than a set number of days, weeks, or months

---

## Pushover Notifications

Get notified when backups complete or fail.

1. Create account at [pushover.net](https://pushover.net/)
2. Get your User Key
3. Enter in **Settings** → **Backups** → **Notifications**

---

## Best Practices

1. **Enable scheduled backups**
2. **Keep multiple copies**
3. **Use `BACKUP_PATH`** to store backups on a separate drive from Yarnl
4. **Test restores** periodically
5. **Backup before updates**

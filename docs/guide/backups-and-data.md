---
sidebar_position: 7
title: Backups & Data
description: Protect your data with backups
---

# Backups & Data

Never lose your progress. Yarnl makes it easy to create, schedule, and restore backups of your entire pattern library.

---

## What's in a Backup

Each backup is a ZIP file containing your database and (optionally) your files:

```
yarnl-backup-2026-01-20T12-00-00.zip
├── database.json          # Patterns, counters, categories, hashtags
├── settings.json          # Your client settings
├── patterns/              # PDF and markdown pattern files
│   └── [category]/
│       ├── *.pdf
│       └── *.md
├── images/                # Images used in markdown patterns
├── archive/               # Archived patterns
└── notes/                 # Markdown notes
    └── *.md
```

The `database.json` includes all pattern metadata — counters, timer data, PDF positions, categories, hashtags, and favorites. This is always included in every backup.

### Backup Options

When creating a backup, you choose what files to include alongside the database:

| Option | Default | What it adds |
|--------|---------|--------------|
| **Patterns** | On | PDF files and thumbnails |
| **Markdown** | On | Markdown pattern files and associated images |
| **Archive** | Off | Archived patterns |
| **Notes** | On | Markdown notes |

The UI shows estimated file sizes for each option so you can see how large the backup will be.

---

## Creating Backups

### Manual Backup

Go to **Settings** → **Backups** → **Create Backup**, choose your options, and click create. The backup appears in your backup list immediately.

### Scheduled Backups

Enable scheduled backups in **Settings** → **Backups** to have Yarnl create backups automatically.

| Setting | Options | Default |
|---------|---------|---------|
| **Frequency** | Daily, Weekly, Monthly | Daily |
| **Time** | Any time (24-hour) | 03:00 |
| **Include Patterns** | On / Off | On |
| **Include Markdown** | On / Off | On |
| **Include Archive** | On / Off | Off |
| **Include Notes** | On / Off | On |

The backup time uses the timezone set by the `TZ` environment variable (default: UTC).

---

## Restoring

1. Go to **Settings** → **Backups**
2. Click **Restore** on the backup you want
3. Confirm

The restore replaces your current data — patterns, counters, categories, settings, and all files — with the contents of the backup. Only your data is affected; other users are untouched.

You can also restore from a backup file that isn't in the list by uploading it.

:::tip
Yarnl wraps the restore in a database transaction. If anything goes wrong, all changes are rolled back and your data stays as it was.
:::

---

## Auto-Pruning

Keep backup storage under control by enabling auto-prune in **Settings** → **Backups**. Two modes are available:

| Mode | Description | Example |
|------|-------------|---------|
| **Keep last N** | Keeps the most recent N backups, deletes the rest | Keep last 5 |
| **Delete by age** | Deletes backups older than a set duration | Older than 30 days |

Age-based pruning supports **days**, **weeks**, **months**, and **years**.

Pruning runs automatically after each scheduled backup. You can also trigger it manually from the settings page.

---

## Custom Backup Location

By default, backups are stored alongside your user data in `./users/<username>/backups/`. You can redirect backups to a separate drive or NAS using the `BACKUP_PATH` environment variable.

Set `BACKUP_PATH` and mount the target path as a volume:

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

When `BACKUP_PATH` is added, changed, or removed, Yarnl automatically migrates existing backups to the new location on startup. No manual file moves needed.

:::tip
Store backups somewhere different from Yarnl itself for redundancy.
:::

---

## Pushover Notifications

Get notified when scheduled backups complete or fail via [Pushover](https://pushover.net/).

### Setup

1. Create an account at [pushover.net](https://pushover.net/)
2. Note your **User Key** from the Pushover dashboard
3. Create an **Application** in Pushover and note the **API Token**
4. In Yarnl, go to **Settings** → **Backups** → **Notifications**
5. Enter your User Key and App Token
6. Click **Send Test** to verify it works

### Notification Events

| Event | Description |
|-------|-------------|
| **Backup complete** | Sent after a scheduled backup finishes successfully |
| **Backup error** | Sent if a scheduled backup fails |

---

## Admin Backups

Admins have access to system-wide backup and restore in **Settings** → **Admin**. These are separate from per-user backups and cover the entire Yarnl instance.

<div className="steps-grid">

<div className="step-box">

### Configuration Backup (JSON)

Exports all user accounts (including permissions and password hashes), OIDC settings, notification settings, backup schedule, and default categories. Use this to migrate your Yarnl configuration to a new instance.

</div>

<div className="step-box">

### User Data Backup (ZIP)

Exports the entire `users/` directory — all pattern files, images, archives, notes, and thumbnails for every user. Use this alongside a config backup for a full instance migration.

</div>

</div>

See [Users & Authentication](./users-and-authentication#admin-backup--restore) for more details.

---

## Best Practices

1. **Enable scheduled backups** — set it and forget it
2. **Enable auto-prune** — prevents backup storage from growing indefinitely
3. **Use `BACKUP_PATH`** — store backups on a separate drive from Yarnl
4. **Set up Pushover** — know immediately if a backup fails
5. **Test restores** periodically — a backup you can't restore isn't a backup
6. **Backup before updates** — create a manual backup before upgrading Yarnl

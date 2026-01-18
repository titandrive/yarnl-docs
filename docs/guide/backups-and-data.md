---
sidebar_position: 6
title: Backups & Data
description: Protect your data with backups and understand how Yarnl stores your information
---

# Backups & Data

Your crochet progress represents real time and effort. Yarnl makes sure you never lose it.

## What Yarnl Stores

Everything you do in Yarnl is persisted:

| Data | Description |
|------|-------------|
| **Patterns** | All imported PDFs and created Markdown patterns |
| **Row counters** | Every counter value for every pattern |
| **Timer data** | Time spent on each pattern |
| **PDF positions** | Where you left off in each PDF |
| **Settings** | All your customizations and preferences |
| **Library metadata** | Categories, hashtags, favorites, statuses |

This data lives in Yarnl's database on your server.

## Creating Backups

### Manual Backup

Create a backup anytime:

1. Go to **Settings** → **Backups**
2. Click **Create Backup**
3. Yarnl packages all your data into a backup file
4. Download or store the backup as needed

**When to create manual backups:**
- Before updating Yarnl
- Before making major changes to your library
- Before migrating to a new server
- Anytime you want a snapshot

### Scheduled Backups

Set up automatic backups so you don't have to remember:

1. Go to **Settings** → **Backups**
2. Enable **Scheduled Backups**
3. Choose your schedule:
   - Daily
   - Weekly
   - Custom interval
4. Configure where backups are stored

Scheduled backups run in the background without interrupting your use of Yarnl.

## Backup Storage

You can configure where backups are saved:

- **Local storage** — On the same server as Yarnl
- **External drive** — Mounted storage for redundancy
- **Network location** — NAS or shared drive
- **Cloud sync** — Folder synced to cloud storage

:::tip Best Practice
Store backups in a different location than your Yarnl installation. If something happens to your server, you want your backups to be safe elsewhere.
:::

## Restoring from Backup

If you need to restore your data:

1. Go to **Settings** → **Backups**
2. Click **Restore from Backup**
3. Select your backup file
4. Confirm the restore

**What gets restored:**
- All patterns
- All counter values
- All timer data
- All settings
- Complete library organization

After a restore, Yarnl is exactly as it was when the backup was created.

### Restore Scenarios

| Scenario | Solution |
|----------|----------|
| Accidentally deleted patterns | Restore from recent backup |
| Server crash | Install fresh Yarnl, restore backup |
| Migrating servers | Install Yarnl on new server, restore backup |
| Testing changes | Backup first, experiment, restore if needed |

## Pushover Notifications

Get notified about your backup status via [Pushover](https://pushover.net/):

### Setup

1. Create a Pushover account at pushover.net
2. Get your User Key from the Pushover dashboard
3. In Yarnl, go to **Settings** → **Backups** → **Notifications**
4. Enter your Pushover User Key
5. Save settings

### Notifications You'll Receive

- **Backup successful** — Confirmation when scheduled backups complete
- **Backup failed** — Alert if a backup encounters an error

This gives you peace of mind that your automatic backups are working.

## Data Portability

Yarnl is designed for portability:

- **Open formats** — Your Markdown patterns are plain text
- **Standard database** — Data can be exported if needed
- **No lock-in** — You can always take your data elsewhere

Your data is yours. Yarnl just helps you manage it.

## Backup Best Practices

1. **Enable scheduled backups** — Automate it so you never forget
2. **Keep multiple copies** — Don't rely on a single backup
3. **Store off-site** — Keep at least one copy in a different location
4. **Test restores** — Periodically verify your backups actually work
5. **Backup before changes** — Manual backup before updates or big imports

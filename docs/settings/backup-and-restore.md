---
sidebar_position: 3
sidebar_class_name: sidebar-icon-save
title: Backup & Restore
description: Create and manage backups of your patterns, settings, and data
---

# Backup & Restore

Create and manage backups of your patterns, settings, and data.

---

## Backup Options

Choose what to include when creating a backup.

| Setting | Description |
|---------|-------------|
| **Include PDF Patterns** | Include uploaded PDF files in the backup. The size of your PDF files is shown next to this option. |
| **Include Markdown Patterns** | Include markdown pattern files in the backup. |
| **Include Archive** | Include archived (deleted) patterns in the backup. Disabled by default. |
| **Include Notes** | Include pattern notes in the backup. |

The estimated total backup size is displayed below the options.

Click **Create Backup** to generate and download a backup file.

---

## Schedule

| Setting | Description |
|---------|-------------|
| **Scheduled Backups** | Automatically create backups on a schedule. |
| **Frequency** | How often to run backups: Daily, Weekly, or Monthly. Only visible when Scheduled Backups is enabled. |
| **Time** | What time of day to run the backup (24-hour format, local time). Default: 03:00. Only visible when Scheduled Backups is enabled. |

---

## Cleanup

| Setting | Description |
|---------|-------------|
| **Auto Cleanup** | Automatically delete old backups to save disk space. |
| **Delete by** | How to determine which backups to delete: **Number of backups** (keep a fixed count) or **Age of backup** (delete after a time period). Only visible when Auto Cleanup is enabled. |
| **Keep last X backups** | Number of backups to keep. Older backups beyond this count are deleted. Only visible when Delete by is set to Number of backups. |
| **Older than X days/weeks/months/years** | Delete backups older than this age. Only visible when Delete by is set to Age of backup. |

---

## Admin Backup (Admin Only)

These options are only visible to admin users.

| Button | Description |
|--------|-------------|
| **Admin Configuration Backup** | Export users, SSO settings, default categories, and admin settings as a JSON file. |
| **Restore Admin Configuration** | Import a previously exported admin configuration JSON file. |
| **User Data Backup** | Export all user data (patterns, images, notes, archive) as a ZIP file. |
| **Restore User Data** | Import a previously exported user data ZIP file. |

---

## Saved Backups

Lists all backups stored on the server. Each backup shows its name, file size, and creation date, with buttons to download, restore, or delete it.

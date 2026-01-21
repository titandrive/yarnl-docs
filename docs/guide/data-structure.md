---
sidebar_position: 7
title: Data Structure
description: How Yarnl organizes and stores your data
---

# Data Structure

Understand how Yarnl organizes your data and where everything is stored.

Yarnl stores everything in simple, portable formats. No proprietary databases. No cloud lock-in. Your data is always accessible and always yours.

---

## Docker Volumes

Yarnl uses four mounted volumes to keep your data organized and portable. All volumes are located under `/data` by default:

```yaml
volumes:
  - ./data/patterns:/app/patterns   # Your pattern files
  - ./data/notes:/app/notes         # Markdown notes for patterns
  - ./data/archive:/app/archive     # Deleted patterns (recoverable)
  - ./data/backups:/app/backups     # Backup files
```

Each volume serves a specific purpose and can be backed up or moved independently.

You can point any volume to a different location if you prefer. For example, you can store your backups on a different drive:

```yaml
volumes:
  - ./data/patterns:/app/patterns
  - ./data/notes:/app/notes
  - ./data/archive:/app/archive
  - /mnt/nas/yarnl-backups:/app/backups   # Store backups on NAS
```

### Folder Structure

```
data/
├── patterns/                # Your pattern files (mounted volume)
│   ├── [category]/          # Folders per category
│   │   └── pattern-file.pdf # PDF pattern files
│   ├── thumbnails/          # Auto-generated and custom thumbnails
│   │   └── thumb-*.jpg
│   └── images/              # Images used in markdown patterns
│       └── *.jpg
├── notes/                   # Markdown notes (mounted volume)
│   └── pattern-slug.md      # Notes keyed by pattern slug
├── archive/                 # Archived patterns (mounted volume)
│   ├── [category]/          # Same structure as patterns
│   │   └── archived-file.pdf
│   └── thumbnails/          # Archived pattern thumbnails
│       └── thumb-*.jpg
└── backups/                 # Backup files (mounted volume)
    └── yarnl-backup-*.zip   # Backups with timestamp
```

---

## Database

Yarnl stores all your metadata in a PostgreSQL database. The database is managed by Docker and stored at `/var/lib/docker/volumes/yarnl-postgres-data/_data`. This includes:

| Data | Description |
|------|-------------|
| Pattern info | Name, description, category, hashtags |
| Status | Favorite, current, completed, completion date |
| Counters | Row count, stitch count, and custom counters |
| Timer | Time spent on each project |
| PDF position | Last viewed page (so you can pick up where you left off) |
| Thumbnails | Custom cover images |
| Categories | Your category names and display order |
| Hashtags | Your hashtag names and display order |
| Settings | All your preferences |
---

## Volume Details

### Patterns

When you import patterns, Yarnl organizes them by category so you can easily locate your patterns. For example: 

| Category | Folder |
|----------|--------|
| Amigurumi | `patterns/amigurumi/` |
| Wearables | `patterns/wearables/` |
| Miscellaneous | `patterns/other/` |

If you change a pattern's category, Yarnl moves the file to the corresponding folder. If you create a new category, Yarnl will make a new folder and move the patterns into it. 

### Archive

When you archive a pattern, it moves to the archive folder instead of being permanently deleted. This gives you a safety net:

- Recover accidentally deleted patterns from **Settings → Archive**
- Patterns keep their metadata and counter values
- Permanently delete from archive when you're sure

Keeping archive as a separate volume lets you manage storage independently. You can therefore move it to slower storage or exclude it from frequent backups.

### Backups

Scheduled and manual backups are stored here as ZIP files. Benefits of a separate volume:

- Point it to a different drive or NAS for redundancy
- Sync to cloud storage without touching your main data
- Set different retention policies

See [Backups & Data](./backups-and-data) for backup configuration.


---
sidebar_position: 7
title: Data Structure
description: How Yarnl organizes and stores your data
---

# Data Structure

Understand how Yarnl organizes your data and where everything is stored.

Yarnl stores everything in simple, portable formats. No proprietary databases. No cloud lock-in. Your data is always accessible and always yours.

---

## Docker Volume

Yarnl uses a single mounted volume for all user data:

```yaml
volumes:
  - ./users:/app/users
```

All patterns, archives, backups, and notes are stored within this directory, organized per user.

---

## Folder Structure

```
users/
├── [username]/
│   ├── patterns/
│   │   ├── [category]/
│   │   │   └── pattern-file.pdf
│   │   ├── thumbnails/
│   │   │   └── thumb-*.jpg
│   │   └── images/
│   │       └── *.jpg
│   ├── archive/
│   │   ├── [category]/
│   │   │   └── archived-file.pdf
│   │   └── thumbnails/
│   │       └── thumb-*.jpg
│   ├── backups/
│   │   └── yarnl-backup-*.zip
│   └── notes/
│       └── pattern-slug.md
└── [another-user]/
    └── ...
```

Each user has their own isolated directory containing all their data.

---

## Database

Yarnl stores all metadata in a PostgreSQL database. The database is managed by Docker and includes:

| Data | Description |
|------|-------------|
| Users | Accounts, roles, auth methods |
| Pattern info | Name, description, category, hashtags |
| Status | Favorite, current, completed, completion date |
| Counters | Row count, stitch count, and custom counters |
| Timer | Time spent on each project |
| PDF position | Last viewed page |
| Categories | Category names and display order |
| Hashtags | Hashtag names and display order |
| Settings | User and system preferences |
| OIDC config | SSO provider settings |

---

## Per-User Data

### Patterns

When you import patterns, Yarnl organizes them by category:

| Category | Location |
|----------|----------|
| Amigurumi | `users/[username]/patterns/amigurumi/` |
| Wearables | `users/[username]/patterns/wearables/` |
| Miscellaneous | `users/[username]/patterns/other/` |

Changing a pattern's category moves the file to the corresponding folder.

### Archive

Archived patterns move to the user's archive folder instead of being permanently deleted:

- Recover accidentally deleted patterns from **Settings → Archive**
- Patterns keep their metadata and counter values
- Permanently delete from archive when you're sure

### Backups

User backups are stored in each user's backups folder. See [Backups & Data](./backups-and-data) for configuration.

### Notes

Markdown notes for patterns are stored as individual files, keyed by pattern slug.

---

## Admin Backups

System-wide admin backups (available to admins only) include:

| Backup Type | Contents |
|-------------|----------|
| **Configuration (JSON)** | All users, OIDC settings, categories, app settings |
| **User Data (ZIP)** | All pattern files and archives for all users |

These are used for migrating or recovering an entire Yarnl instance. See [Users & Authentication](./users-and-authentication#admin-backup--restore) for details.

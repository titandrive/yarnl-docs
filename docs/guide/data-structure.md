---
sidebar_position: 11
title: Data Structure
description: How Yarnl organizes and stores your data
---

# Data Structure

A technical reference for how Yarnl stores your data. Useful if you're writing scripts, debugging, or just curious.

---

## File Storage

Yarnl uses a single mounted volume for all user files:

```yaml
volumes:
  - ./users:/app/users
```

Each user gets an isolated directory:

```
users/
└── [username]/
    ├── patterns/
    │   └── [category]/
    │       ├── pattern.pdf
    │       └── pattern.md
    ├── thumbnails/
    │   └── thumb-*.jpg
    ├── images/
    │   └── *.jpg
    ├── archive/
    │   ├── [category]/
    │   │   └── archived-pattern.pdf
    │   └── thumbnails/
    │       └── thumb-*.jpg
    ├── notes/
    │   └── pattern-slug.md
    └── backups/
        └── yarnl-backup-*.zip
```

| Directory | Contents |
|-----------|----------|
| `patterns/` | PDF and markdown files, organized by category subdirectories |
| `thumbnails/` | Auto-generated thumbnails for PDF patterns |
| `images/` | Images embedded in markdown patterns |
| `archive/` | Archived patterns and their thumbnails, organized by category |
| `notes/` | Markdown note files, named by pattern slug |
| `backups/` | User backup ZIPs (unless `BACKUP_PATH` is set) |

Changing a pattern's category moves its file to the corresponding subdirectory. Archiving a pattern moves it from `patterns/` to `archive/`.

---

## Database

All metadata lives in PostgreSQL, managed by a separate Docker container with data persisted in the `yarnl-postgres-data` volume.

### Tables

#### patterns

The core table. Each row is a pattern belonging to a user.

| Column | Type | Description |
|--------|------|-------------|
| `id` | serial | Primary key |
| `user_id` | integer | Owner (references users) |
| `name` | varchar(255) | Display name |
| `filename` | varchar(255) | File on disk |
| `original_name` | varchar(255) | Original upload filename |
| `pattern_type` | varchar(20) | `pdf` or `markdown` |
| `content` | text | Markdown source (markdown patterns only) |
| `description` | text | User-provided description |
| `category` | varchar(100) | Category name |
| `is_current` | boolean | Marked as "in progress" |
| `is_favorite` | boolean | Favorited |
| `completed` | boolean | Marked complete |
| `completed_date` | timestamp | When it was completed |
| `stitch_count` | integer | Global stitch counter |
| `row_count` | integer | Global row counter |
| `current_page` | integer | Last viewed PDF page |
| `timer_seconds` | integer | Time spent (seconds) |
| `thumbnail` | varchar(255) | Thumbnail filename |
| `is_archived` | boolean | In archive |
| `archived_at` | timestamp | When it was archived |
| `visibility` | varchar(20) | `private` or public |
| `last_opened_at` | timestamp | Last time opened |
| `upload_date` | timestamp | Upload date |
| `created_at` | timestamp | Record creation |
| `updated_at` | timestamp | Last modification |

#### counters

Individual named counters attached to a pattern. Separate from the built-in `stitch_count` and `row_count` on the pattern itself.

| Column | Type | Description |
|--------|------|-------------|
| `id` | serial | Primary key |
| `pattern_id` | integer | Parent pattern |
| `name` | varchar(255) | Counter label |
| `value` | integer | Current value |
| `position` | integer | Display order |

#### projects

Groups of patterns. Projects have their own status tracking independent of the patterns inside them.

| Column | Type | Description |
|--------|------|-------------|
| `id` | serial | Primary key |
| `user_id` | integer | Owner |
| `name` | varchar(255) | Project name |
| `description` | text | Description |
| `thumbnail` | varchar(255) | Thumbnail filename |
| `is_current` | boolean | In progress |
| `is_favorite` | boolean | Favorited |
| `completed` | boolean | Marked complete |
| `completed_date` | timestamp | When completed |
| `is_archived` | boolean | In archive |
| `archived_at` | timestamp | When archived |
| `last_opened_at` | timestamp | Last opened |

#### project_patterns

Links patterns to projects with ordering and per-project status.

| Column | Type | Description |
|--------|------|-------------|
| `id` | serial | Primary key |
| `project_id` | integer | Parent project |
| `pattern_id` | integer | Linked pattern |
| `position` | integer | Order within project |
| `status` | varchar(20) | Status in this project |

#### categories

Per-user categories for organizing patterns.

| Column | Type | Description |
|--------|------|-------------|
| `id` | serial | Primary key |
| `user_id` | integer | Owner |
| `name` | varchar(100) | Category name (unique per user) |
| `position` | integer | Display order |

#### hashtags

Global tags shared across all users.

| Column | Type | Description |
|--------|------|-------------|
| `id` | serial | Primary key |
| `name` | varchar(100) | Hashtag name (globally unique) |
| `position` | integer | Display order |

#### pattern_hashtags / project_hashtags

Junction tables linking patterns and projects to hashtags (many-to-many).

#### users

| Column | Type | Description |
|--------|------|-------------|
| `id` | serial | Primary key |
| `username` | varchar(100) | Unique username |
| `password_hash` | varchar(255) | Bcrypt hash (nullable) |
| `password_required` | boolean | Must maintain a password |
| `role` | varchar(20) | `user` or `admin` |
| `display_name` | varchar(255) | Display name |
| `oidc_subject` | varchar(255) | OIDC provider subject ID |
| `oidc_provider` | varchar(100) | OIDC provider name |
| `oidc_allowed` | boolean | Can use SSO |
| `can_upload_pdf` | boolean | Can upload PDF patterns |
| `can_create_markdown` | boolean | Can create markdown patterns |
| `can_change_username` | boolean | Can change own username |
| `can_change_password` | boolean | Can change own password |
| `client_settings` | jsonb | Synced client preferences |
| `last_login` | timestamp | Last login time |

#### sessions

| Column | Type | Description |
|--------|------|-------------|
| `id` | varchar(64) | Session token |
| `user_id` | integer | Owner |
| `expires_at` | timestamp | Expiry (7 days from creation) |

#### settings

Key-value store for application configuration.

| Key | Contents |
|-----|----------|
| `oidc` | OIDC provider config (issuer, client ID/secret, options) |
| `backup_schedule` | Schedule, prune settings, last backup time |
| `notifications` | Pushover credentials and notification preferences |
| `archive_settings` | Auto-delete settings for archived patterns |
| `default_categories` | Categories created for new users |
| `backup_path` | Last known `BACKUP_PATH` value (for migration) |

---

## Relationships

```
users ──┬── patterns ──┬── counters
        │              ├── pattern_hashtags ── hashtags
        │              └── project_patterns ── projects ── project_hashtags ── hashtags
        ├── categories
        └── sessions
```

- Deleting a user cascades to all their patterns, projects, categories, and sessions
- Deleting a pattern cascades to its counters, hashtag links, and project links
- Deleting a project cascades to its pattern links and hashtag links
- Hashtags are global and not deleted when a user is removed

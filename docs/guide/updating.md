---
sidebar_position: 8
title: Updating
description: How to update Yarnl to the latest version
---

# Updating

Yarnl is designed for seamless updates. Pull the latest image, restart, and all database migrations run automatically — no manual steps required.

---

## Standard Update

From the directory containing your `docker-compose.yml`:

```bash
docker compose pull        # Pull the latest image
docker compose up -d       # Restart with the new version
```

That's it. Yarnl handles everything else on startup.

---

## What Happens on Startup

When Yarnl starts, it runs an automatic initialization sequence before serving any requests:

1. **Database migrations** — new columns and tables are added if they don't already exist
2. **Category sync** — filesystem directories are reconciled with the database
3. **Admin initialization** — the admin account is created if it doesn't exist
4. **Data migrations** — one-time migrations (like moving from single-user to multi-user file structure) run if needed
5. **Backup path migration** — if `BACKUP_PATH` changed, existing backups are moved to the new location

All migrations are idempotent — they check before making changes, so running them multiple times is safe. If any step fails, Yarnl exits with an error instead of starting in a broken state.

---

## What's New Popup

After updating, Yarnl shows a "What's New" popup to each user with the changelog for the new version. This appears once per version and is dismissed by clicking anywhere outside the popup.

The changelog is fetched from GitHub. If the GitHub API is unavailable (air-gapped or rate-limited), a simple version notice is shown instead.

---

## Version Check

The current version is displayed on the **About** page. You can also check it via the API:

```bash
curl http://localhost:3000/api/version
```

---

## Pinning a Version

By default, the compose file uses `titandrive/yarnl:latest`. To pin to a specific version:

```yaml
image: titandrive/yarnl:0.5.9
```

This prevents automatic updates if you're pulling images on a schedule. Check the [GitHub releases](https://github.com/titandrive/yarnl/releases) for available versions.

---

## Rolling Back

If an update causes issues, you can roll back to a previous version:

```bash
docker compose down
```

Edit `docker-compose.yml` to pin the previous version:

```yaml
image: titandrive/yarnl:0.5.8
```

Then start again:

```bash
docker compose up -d
```

:::warning
Rolling back to a version older than your database schema may cause issues. Yarnl's migrations only go forward — they add columns but don't remove them. In most cases a rollback is safe because older versions simply ignore columns they don't know about, but this isn't guaranteed for every release.
:::

---

## PostgreSQL Updates

The PostgreSQL container uses `postgres:16-alpine`. Minor version updates (e.g., 16.1 to 16.4) happen automatically when you pull the image. Major version upgrades (e.g., 16 to 17) require a database migration:

1. Back up your database using the admin backup in Yarnl, or with `pg_dump`
2. Stop both containers
3. Delete the PostgreSQL data volume
4. Update the image tag in `docker-compose.yml`
5. Start the containers — PostgreSQL creates a fresh database
6. Restore from your backup

The `yarnl-postgres-data` Docker volume persists across container restarts, so your data is safe during normal updates. Only delete it when performing a major PostgreSQL version upgrade with a backup in hand.

---

## Troubleshooting

### Yarnl won't start after an update

Check the container logs:

```bash
docker compose logs yarnl
```

If a migration failed, the error will be logged and the container will exit. Common causes:

- **Database not ready** — the health check should prevent this, but if PostgreSQL is slow to start, try restarting: `docker compose restart yarnl`
- **Permission issues** — ensure the `./users` volume is writable by the container (UID 1000)

### Database connection errors

If you changed database credentials in your `.env` file, the running PostgreSQL container still has the old credentials. You need to recreate it:

```bash
docker compose down
docker compose up -d
```

Note that `docker compose down` does **not** delete volumes, so your data is preserved.

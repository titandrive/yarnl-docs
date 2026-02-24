---
sidebar_position: 0.5
title: Unraid
description: Install Yarnl on Unraid using Community Applications
---

# Installing Yarnl on Unraid

Install Yarnl on your Unraid server using Community Applications. This guide walks you through setting up the database and the Yarnl container.

---

## Prerequisites

- Unraid 6.x or later
- Community Applications plugin installed

---

## Step 1: Install PostgreSQL

Yarnl requires a PostgreSQL 16 database. Install it first from Community Applications.

1. Open the Unraid web UI and go to **Apps**
2. Search for **PostgreSQL 16** (the official `postgres:16` image)
3. Click **Install** and configure the following:

| Setting | Value |
|---------|-------|
| **Container Name** | `yarnl-db` |
| **Database Name** | `yarnl` |
| **Database User** | `yarnl` |
| **Database Password** | `yarnl` (change this!) |

:::warning
The container name **must** be `yarnl-db` so Yarnl can find the database automatically. If you use a different name, you'll need to update the **Database Host** setting when installing Yarnl.
:::

4. Click **Apply** and wait for PostgreSQL to start

---

## Step 2: Install Yarnl

1. Go to **Apps** and search for **Yarnl**
2. Click **Install** and review the settings:

### Required Settings

| Setting | Default | Description |
|---------|---------|-------------|
| **Port** | `3000` | Port for the Yarnl web UI |
| **App Data** | `/mnt/user/appdata/yarnl/users` | Where Yarnl stores patterns, thumbnails, notes, and backups |
| **Admin Username** | `admin` | Initial admin account username |
| **Database Host** | `yarnl-db` | Must match the PostgreSQL container name from Step 1 |
| **Database Port** | `5432` | PostgreSQL port |
| **Database Name** | `yarnl` | Must match what you set in PostgreSQL |
| **Database Username** | `yarnl` | Must match what you set in PostgreSQL |
| **Database Password** | `yarnl` | Must match what you set in PostgreSQL |

### Optional Settings

| Setting | Default | Description |
|---------|---------|-------------|
| **Admin Password** | *(empty)* | Leave empty for passwordless login, or set a password |
| **Timezone** | `UTC` | Timezone for scheduled backups (e.g. `America/New_York`) |
| **Backup Path** | *(empty)* | Mount an external path to store backups on a separate drive |
| **Use External Backup Path** | *(empty)* | Set to `true` to enable external backup storage (requires Backup Path) |

3. Click **Apply** and wait for Yarnl to start

---

## Step 3: Access Yarnl

Open your browser and navigate to `http://[YOUR_UNRAID_IP]:3000`.

If you left the admin password empty, you'll be logged in automatically. Otherwise, log in with the admin username and password you configured.

---

## External Backup Storage

To store backups on a separate drive or share instead of in the App Data directory:

1. Click on the Yarnl container and select **Edit**
2. Set **Backup Path** to your desired location (e.g. `/mnt/user/backups/yarnl`)
3. Set **Use External Backup Path** to `true`
4. Click **Apply**

Yarnl will automatically migrate existing backups to the new location on startup.

---

## Troubleshooting

### Yarnl can't connect to the database

- Verify the PostgreSQL container is running and named `yarnl-db`
- Ensure the database name, username, and password match between both containers
- Both containers must be on the same Docker network (the default `bridge` network works)

### Port conflict

If port 3000 is already in use, change the **Port** setting in the Yarnl container to another port (e.g. `3001`).

### Updating

Yarnl updates like any other Unraid container. When an update is available, click the update notification in the Docker tab or manually pull the latest image.

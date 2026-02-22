---
sidebar_position: 0
title: Installation
description: How to get started with Yarnl
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installation

Get Yarnl up and running with Docker in just a few minutes.

## Quick Start

**Prerequisites:**
- [Docker](https://docs.docker.com/get-docker/)
- Docker Compose

1. Open a terminal and run the following commands to create a directory, download the [`docker-compose.yml`](https://raw.githubusercontent.com/titandrive/yarnl/main/docker-compose.yml), and start the container:

<Tabs>
<TabItem value="linux" label="Linux / macOS" default>

```bash
mkdir yarnl && cd yarnl
curl -O https://raw.githubusercontent.com/titandrive/yarnl/main/docker-compose.yml
docker compose up -d
```

</TabItem>
<TabItem value="windows" label="Windows (PowerShell)">

```powershell
mkdir yarnl; cd yarnl
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/titandrive/yarnl/main/docker-compose.yml" -OutFile "docker-compose.yml"
docker compose up -d
```

</TabItem>
</Tabs>

2. Open your browser and navigate to `http://localhost:3000`

By default, Yarnl starts in single-user mode with an `admin` account and no password.

To configure passwords, timezone, and other options, download the [`.env.example`](https://raw.githubusercontent.com/titandrive/yarnl/main/.env.example) file and edit as needed before running the above command.

## Manual Install 
If you prefer to write the compose file yourself instead of downloading it, here is the ~yarnl~ yaml to get you started:

```yaml
services:
  postgres:
    container_name: yarnl-db
    image: postgres:16-alpine
    volumes:
      - yarnl-postgres-data:/var/lib/postgresql/data
    environment:
      - POSTGRES_DB=${POSTGRES_DB:-yarnl}
      - POSTGRES_USER=${POSTGRES_USER:-yarnl}
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD:-yarnl}
    restart: unless-stopped
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U ${POSTGRES_USER:-yarnl}"]
      interval: 5s
      timeout: 5s
      retries: 5

  yarnl:
    container_name: yarnl
    image: titandrive/yarnl:latest
    ports:
      - "${PORT:-3000}:3000"
    volumes:
      - ./users:/app/users 
      # Optional: mount an external path for backups
      # - /mnt/user/drive:/backups
    environment:
      - POSTGRES_HOST=postgres
      - POSTGRES_PORT=5432
      - POSTGRES_DB=${POSTGRES_DB:-yarnl}
      - POSTGRES_USER=${POSTGRES_USER:-yarnl}
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD:-yarnl}
      - ADMIN_USERNAME=${ADMIN_USERNAME:-admin}
      - ADMIN_PASSWORD=${ADMIN_PASSWORD:-} #optional
      - TZ=${TZ:-UTC}
      # Optional: store backups at a custom path (use with volume mount above)
      # - BACKUP_PATH=/backups
    restart: unless-stopped
    depends_on:
      postgres:
        condition: service_healthy

volumes:
  yarnl-postgres-data:
```

## Configuration

Most configuration is done via settings once Yarnl is up and running. There are a few environment variables available to customize your installation.

| Variable | Default | Description |
|----------|---------|-------------|
| `POSTGRES_DB` | `yarnl` | Database name |
| `POSTGRES_USER` | `yarnl` | Database user |
| `POSTGRES_PASSWORD` | `yarnl` | Database password |
| `POSTGRES_HOST` | `postgres` | Database hostname (use default with Docker Compose) |
| `POSTGRES_PORT` | `5432` | Database port |
| `ADMIN_USERNAME` | `admin` | Initial admin username |
| `ADMIN_PASSWORD` | *(empty)* | Admin password (empty = passwordless login) |
| `PORT` | `3000` | Port exposed on the host |
| `NODE_ENV` | `production` | Set to `development` for verbose errors |
| `TZ` | `UTC` | Timezone for scheduled backups |
| `BACKUP_PATH` | *(unset)* | Custom backup storage location (see [Backups](./backups-and-data)) |
| `FORCE_LOCAL_LOGIN` | `false` | Force local login even when OIDC/SSO is configured |

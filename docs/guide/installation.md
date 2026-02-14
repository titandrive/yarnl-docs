---
sidebar_position: 0
title: Installation
description: How to get started with Yarnl
---
# Installation

## Quick Start
Yarnl is easy to get up and running with Docker. You'll be crocheting in no time. 

**Prerequisites:** 
- [Docker](https://docs.docker.com/get-docker/) 
- Docker Compose

1. Open terminal and run the following command to download and start the [`docker-compose.yml`](https://raw.githubusercontent.com/titandrive/yarnl/main/docker-compose.yml).:

```bash
mkdir yarnl && cd yarnl                # Create a directory for Yarnl
curl -O https://raw.githubusercontent.com/titandrive/yarnl/main/docker-compose.yml  # Download the compose file
docker compose up -d                   # Start Yarnl and PostgreSQL
```

2. Open your browser and navigate to `http://localhost:3000`

By default, Yarnl starts in single-user mode with an `admin` account and no password.

To configure passwords, timezone, and other options, download the [`.env.example`](https://raw.githubusercontent.com/titandrive/yarnl/main/.env.example) file, rename it to `.env`, and edit as needed before starting.

## Docker Compose
If you prefer to write the compose file yourself instead of downloading it:

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
    environment:
      - POSTGRES_HOST=postgres
      - POSTGRES_PORT=5432
      - POSTGRES_DB=${POSTGRES_DB:-yarnl}
      - POSTGRES_USER=${POSTGRES_USER:-yarnl}
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD:-yarnl}
      - ADMIN_USERNAME=${ADMIN_USERNAME:-admin}
      - ADMIN_PASSWORD=${ADMIN_PASSWORD:-}
      - TZ=${TZ:-UTC}
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
| `TZ` | `UTC` | Timezone for scheduled backups |
| `FORCE_LOCAL_LOGIN` | `false` | Force local login even when OIDC/SSO is configured |

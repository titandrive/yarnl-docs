---
sidebar_position: 10
title: Development Setup
description: Set up a local development environment for contributing to Yarnl.
---

# Development Setup

Everything you need to get Yarnl running locally for development.

---

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) and Docker Compose
- [Git](https://git-scm.com/)

## Quick Start

1. Clone the repository:

```bash
git clone https://github.com/titandrive/yarnl.git
cd yarnl
```

2. Copy the example environment file:

```bash
cp .env.example .env
```

3. Create a `docker-compose.override.yml` for local development:

```yaml
services:
  yarnl:
    build: .
    volumes:
      - ./public:/app/public
    environment:
      - NODE_ENV=development
      - ADMIN_USERNAME=admin
      - ADMIN_PASSWORD=password
```

This override does three things:
- **`build: .`** — builds the image from your local source instead of pulling from Docker Hub
- **`./public:/app/public`** — mounts the public directory so CSS/JS/HTML changes are instant (no rebuild needed)
- **`NODE_ENV=development`** — enables detailed error messages

4. Build and start:

```bash
docker compose up -d --build
```

5. Open [http://localhost:3000](http://localhost:3000) and log in with the credentials from your override file.

---

## Development Workflow

### Frontend Changes (CSS, JS, HTML)

Files in `public/` are mounted into the container. Just edit and refresh the browser — no rebuild required.

> **Tip:** If changes don't appear, hard refresh with `Ctrl+Shift+R` (or `Cmd+Shift+R` on macOS). The stylesheet URL includes a `?v=` cache-busting parameter in `index.html` that you can bump if needed.

### Backend Changes (server.js)

Backend changes require a container restart:

```bash
docker compose restart yarnl
```

Or rebuild to pick up dependency changes:

```bash
docker compose up -d --build
```

### Database

PostgreSQL runs in a separate container with data persisted in a Docker volume (`yarnl-postgres-data`). Default credentials are in `.env.example`.

To connect directly:

```bash
docker exec -it yarnl-db psql -U yarnl -d yarnl
```

To start fresh (deletes all data):

```bash
docker compose down -v
docker compose up -d --build
```

---

## Project Structure

```
yarnl/
├── server.js              # Express backend (API routes, auth, file handling)
├── public/
│   ├── index.html         # Single-page app HTML
│   ├── app.js             # Frontend JavaScript
│   ├── styles.css         # Stylesheet
│   └── fonts/             # Bundled fonts
├── mascots/               # Mascot images
├── users/                 # User data (patterns, uploads, backups)
├── Dockerfile
├── docker-compose.yml     # Production compose
├── .env.example           # Environment variable reference
└── package.json
```

---

## Environment Variables

See `.env.example` for all available options. Key development settings:

| Variable | Default | Description |
|----------|---------|-------------|
| `NODE_ENV` | `production` | Set to `development` for verbose errors |
| `ADMIN_USERNAME` | `admin` | Initial admin username |
| `ADMIN_PASSWORD` | *(empty)* | Leave empty for passwordless login |
| `PORT` | `3000` | Host port mapping |
| `TZ` | `UTC` | Timezone for scheduled backups |
| `BACKUP_PATH` | *(unset)* | Custom backup storage location |
| `FORCE_LOCAL_LOGIN` | `false` | Bypass SSO for local login |

---

## Tips

- The `docker-compose.override.yml` file is gitignored — use it for your local settings without affecting the repo
- The app is a single `server.js` file with no build step — what you see is what gets served
- Frontend uses vanilla JS (no framework, no bundler)

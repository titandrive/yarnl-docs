---
sidebar_position: 0
title: Installation
description: Install Yarnl on your own server
---

# Installation

Get Yarnl running on your own server.

<div className="info-box">

**Requirements:** Linux, macOS, or Windows with 1GB RAM and 1GB storage

</div>

---

## Docker (Recommended)

The easiest way to get started.

**1. Create a directory and docker-compose.yml:**

```yaml
version: "3.8"
services:
  yarnl:
    image: yarnl/yarnl:latest
    container_name: yarnl
    ports:
      - "3000:3000"
    volumes:
      - ./data/patterns:/app/patterns
      - ./data/notes:/app/notes
      - ./data/archive:/app/archive
      - ./data/backups:/app/backups
    restart: unless-stopped
```

**2. Start Yarnl:**

```bash
docker compose up -d
```

**3. Open** `http://localhost:3000`

<div className="info-box success">

**To update:** `docker compose pull && docker compose up -d`

</div>

---

## Manual Installation

Install from source with Node.js.

```bash
# Clone and install
git clone https://github.com/yarnl/yarnl.git
cd yarnl && npm install

# Build and run
npm run build && npm start
```

Open `http://localhost:3000`

---

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `3000` |
| `DATA_DIR` | Data directory | `./data` |

---

## Reverse Proxy (nginx)

```nginx
server {
    listen 443 ssl;
    server_name yarnl.example.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
    }
}
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Port in use | Change `PORT` env variable |
| Permission errors | Run `chmod -R 755 ./data` |
| Can't connect | Check firewall, verify port |

---

**Next:** [Getting Started](./getting-started)

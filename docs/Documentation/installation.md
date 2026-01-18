---
sidebar_position: 0
title: Installation
description: Install Yarnl on your own server
---

# Installation

Get Yarnl running on your own server. Choose the installation method that works best for you.

## Requirements

Before you begin, make sure you have:

- A server or computer to host Yarnl (Linux, macOS, or Windows)
- At least 1GB of RAM
- At least 1GB of storage (more depending on your pattern library size)

---

## Docker Installation (Recommended)

Docker is the easiest way to get Yarnl up and running.

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed
- [Docker Compose](https://docs.docker.com/compose/install/) installed (usually included with Docker Desktop)

### Quick Start

1. Create a directory for Yarnl:

```bash
mkdir yarnl && cd yarnl
```

2. Create a `docker-compose.yml` file:

```yaml
version: "3.8"

services:
  yarnl:
    image: yarnl/yarnl:latest
    container_name: yarnl
    ports:
      - "3000:3000"
    volumes:
      - ./data:/app/data
    restart: unless-stopped
```

3. Start Yarnl:

```bash
docker compose up -d
```

4. Open your browser and go to `http://localhost:3000`

That's it! Yarnl is now running.

### Docker Run (Alternative)

If you prefer not to use Docker Compose:

```bash
docker run -d \
  --name yarnl \
  -p 3000:3000 \
  -v $(pwd)/data:/app/data \
  --restart unless-stopped \
  yarnl/yarnl:latest
```

### Updating with Docker

To update to the latest version:

```bash
docker compose pull
docker compose up -d
```

---

## Manual Installation

Install Yarnl directly from source if you prefer not to use Docker.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Installation Steps

1. Clone the repository:

```bash
git clone https://github.com/yarnl/yarnl.git
cd yarnl
```

2. Install dependencies:

```bash
npm install
```

3. Build the application:

```bash
npm run build
```

4. Start Yarnl:

```bash
npm start
```

5. Open your browser and go to `http://localhost:3000`

### Running in Development Mode

For development or testing:

```bash
npm run dev
```

This starts Yarnl with hot-reloading enabled.

### Updating Manual Installation

To update to the latest version:

```bash
git pull
npm install
npm run build
npm start
```

---

## Configuration

### Environment Variables

Yarnl can be configured using environment variables:

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Port to run Yarnl on | `3000` |
| `DATA_DIR` | Directory for storing data | `./data` |

**Docker example:**

```yaml
services:
  yarnl:
    image: yarnl/yarnl:latest
    environment:
      - PORT=8080
      - DATA_DIR=/app/data
    ports:
      - "8080:8080"
```

**Manual example:**

```bash
PORT=8080 DATA_DIR=/path/to/data npm start
```

### Reverse Proxy Setup

If you're running Yarnl behind a reverse proxy (nginx, Caddy, Traefik, etc.), make sure to:

1. Proxy requests to Yarnl's port
2. Set appropriate headers for WebSocket support (if applicable)
3. Configure SSL/TLS for HTTPS

**Nginx example:**

```nginx
server {
    listen 443 ssl;
    server_name yarnl.example.com;

    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

---

## Verifying Installation

Once Yarnl is running:

1. Open `http://localhost:3000` (or your configured address)
2. You should see the Yarnl welcome screen
3. Try adding a test pattern to confirm everything works

## Troubleshooting

### Port already in use

Change the port using the `PORT` environment variable or modify the port mapping in Docker.

### Permission errors (Docker)

Make sure the data directory has the correct permissions:

```bash
chmod -R 755 ./data
```

### Can't connect to Yarnl

- Check that Yarnl is running (`docker ps` or check your process manager)
- Verify the port is correct
- Check firewall settings if accessing from another device

---

## Next Steps

Once installed, head to [Getting Started](./getting-started) to begin using Yarnl!

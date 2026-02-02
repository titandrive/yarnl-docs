---
sidebar_position: 9
title: Users & Authentication
description: Multi-user support with role-based access and SSO
---

# Users & Authentication

Yarnl supports multiple users with role-based access control and flexible authentication options.

---

## User Roles

| Role | Access |
|------|--------|
| **Admin** | Full access, user management, OIDC config, system backups |
| **User** | Personal pattern library only, isolated data |

Admins can manage other users, configure SSO, and access system-wide backup/restore. Regular users have their own private pattern library.

---

## Authentication Methods

<div className="steps-grid">

<div className="step-box">

### Local Authentication

- Username + password (bcrypt hashed)
- Default admin via environment variables
- Users can change their own passwords

</div>

<div className="step-box">

### OIDC/SSO

- Any OpenID Connect provider
- PocketID, Authentik, Keycloak, etc.
- Auto-discovery via issuer URL

</div>

</div>

---

## Passwords

Passwords in Yarnl are always optional. This allows for flexible authentication depending on your setup.

### Initial Setup

When Yarnl first starts, it creates an admin account using environment variables:

| Variable | Required | Default |
|----------|----------|---------|
| `ADMIN_USERNAME` | Yes | `admin` |
| `ADMIN_PASSWORD` | No | (none) |

If `ADMIN_PASSWORD` is not set, the admin account is created without a password.

### Single-User Mode

If there's only one user (the admin) and that user has no password, Yarnl skips the login screen entirely and loads directly into the home page. This is ideal for personal, single-user deployments.

### Multi-User Mode

When multiple users exist, Yarnl always shows the login screen. Users without passwords can log in by just entering their username.

### Managing Passwords

- Passwords can be set or removed at any time
- Users manage their own password in **Settings → Account**
- Admins can set or remove passwords for any user in **Settings → Users**

---

## User Management

Admins manage users from **Settings** → **Users**:

- **Add User** — Create local accounts
- **Delete User** — Remove accounts (can't delete yourself)
- **Change Role** — Toggle admin/user
- **Set Password** — Set or reset passwords
- **Remove Password** — Clear password (user logs in with username only)

### User Badges

| Badge | Color | Meaning |
|-------|-------|---------|
| ADMIN / USER | Purple | User's role |
| LOCAL / [Provider] | Cyan | Auth method |
| PW | Green | Has local password |
| YOU | Amber | Current user |

---

## Setting Up OIDC/SSO

Setting up SSO with Yarnl is simple—no manual endpoint configuration required.

Go to **Settings** → **OIDC/SSO** (admin only):

1. Enter your **Issuer URL** (e.g., `https://auth.example.com`)
2. Click **Discover** — Yarnl auto-discovers and populates all OIDC endpoints
3. Enter **Client ID** and **Client Secret** from your provider
4. Save

That's it. Yarnl handles the rest automatically.

### Options

| Option | Description |
|--------|-------------|
| **Auto-create users** | Automatically create accounts for new SSO users |
| **Default role** | Role assigned to new SSO users (admin or user) |
| **Disable local login** | Force SSO-only authentication |
| **Provider name** | Custom label for the SSO button |
| **Icon URL** | Custom icon for the login button |

:::tip
Users authenticated via OIDC display a badge showing their provider name.
:::

---

## Data Isolation

Each user's data is completely separate:

```
users/
├── alice/
│   ├── patterns/
│   ├── archive/
│   └── backups/
└── bob/
    ├── patterns/
    ├── archive/
    └── backups/
```

All patterns, counters, notes, and settings are scoped to each user. API endpoints verify ownership before allowing access.

---

## Account Settings

Users manage their own account in **Settings** → **Account**:

- Change username
- Change password
- View account info (role, auth method)

---

## Admin Backup & Restore

Admins have access to system-wide backups in **Settings** → **Admin Backup & Restore**:

<div className="steps-grid">

<div className="step-box">

### Configuration (JSON)

- All user accounts (no passwords)
- OIDC/SSO settings
- Default categories
- Application settings

</div>

<div className="step-box">

### User Data (ZIP)

- All pattern files for all users
- All archived patterns
- Complete file structure

</div>

</div>

Use these to migrate or recover an entire Yarnl instance.

---

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `ADMIN_USERNAME` | Admin username (required) | `admin` |
| `ADMIN_PASSWORD` | Admin password (optional) | (none) |
| `FORCE_LOCAL_LOGIN` | Bypass OIDC, show local login | `false` |

:::tip Emergency Access
If OIDC is misconfigured and you're locked out, set `FORCE_LOCAL_LOGIN=true` to bypass SSO and access local login.
:::

---

## Security

- All API endpoints require authentication
- Passwords hashed with bcrypt
- Session-based auth with secure cookies
- Ownership verified on all data access
- OIDC tokens validated against provider

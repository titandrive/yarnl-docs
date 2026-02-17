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
| **Admin** | Full access including user management, OIDC config, default categories, system backups |
| **User** | Personal pattern library only, isolated data |

---

## Authentication Methods

<div className="steps-grid">

<div className="step-box">

### Local Authentication

- Username + password (bcrypt hashed)
- Default admin via environment variables
- Passwords are always optional

</div>

<div className="step-box">

### OIDC / SSO

- Any OpenID Connect provider
- Auto-discovery via issuer URL
- See the [OIDC guide](./oidc) for setup

</div>

</div>

---

## Passwords

Passwords in Yarnl are always optional. This allows for flexible authentication depending on your setup.

### Initial Setup

When Yarnl first starts, it creates an admin account using environment variables:

| Variable | Default | Description |
|----------|---------|-------------|
| `ADMIN_USERNAME` | `admin` | Admin username |
| `ADMIN_PASSWORD` | *(none)* | Admin password (leave empty for passwordless login) |

### Single-User Mode

If the admin has no password and no other users exist, Yarnl skips the login screen entirely and goes straight to the home page. This is ideal for personal, single-user deployments.

Single-user mode deactivates as soon as the admin sets a password or another user is created.

### Multi-User Mode

When multiple users exist or the admin has a password, Yarnl shows the login screen. Users without passwords can log in by entering their username only.

### Managing Passwords

- Passwords can be set or removed at any time
- Users manage their own password in **Settings** → **Account**
- Admins can set or remove passwords for any user in **Settings** → **Admin**
- Admins can require a user to have a password via the **Password required** permission

---

## User Management

Admins manage users from **Settings** → **Admin**:

- **Add User** — create local accounts with configurable permissions
- **Delete User** — remove accounts and all their data (can't delete yourself)
- **Change Username** — rename any user
- **Change Role** — toggle between admin and user
- **Set Password** — set or reset a user's password
- **Remove Password** — clear a user's password (requires admin password to confirm)

### Per-User Permissions

| Permission | Default | Description |
|------------|---------|-------------|
| **User is admin** | Off | Grants access to the admin panel and all admin features |
| **Can add patterns (PDF)** | On | Allow uploading PDF patterns |
| **Can add patterns (MD)** | On | Allow creating markdown patterns |
| **Password required** | Off | Require the user to maintain a password |
| **Can change username** | On | Allow the user to change their own username |
| **Can change password** | On | Allow the user to change their own password |
| **Can use SSO** | On | Allow the user to log in via the configured SSO provider |

### User Badges

The admin user list shows badges for each user:

| Badge | Color | Meaning |
|-------|-------|---------|
| ADMIN / USER | Purple | User's role |
| LOCAL / *[Provider]* | Cyan | Authentication method, either local or OIDC provider name |
| pw | Green | User has a local password set |
| You | Amber | The currently logged-in user |

---

## Account Settings

Users manage their own account in **Settings** → **Account**:

- **Change username** — if allowed by admin
- **Change password** — if allowed by admin; requires current password if one is set
- **Remove password** — requires current password to confirm; blocked if **Password required** is enabled
- **Link SSO Account** — connect to an OIDC provider for passwordless login (only visible if SSO is enabled)
- **Unlink SSO** — disconnect from the OIDC provider
- **Log out** — end the current session

---

## Data Isolation

Each user's data is completely separate, both on disk and in the database:

```
users/
├── alice/
│   ├── patterns/
│   ├── thumbnails/
│   ├── images/
│   ├── archive/
│   ├── notes/
│   └── backups/
└── bob/
    ├── patterns/
    ├── thumbnails/
    ├── images/
    ├── archive/
    ├── notes/
    └── backups/
```

All patterns, counters, projects, notes, and settings are scoped to each user. API endpoints verify ownership before allowing access.

---

## Default Categories

Admins can configure a set of default categories in **Settings** → **Admin** → **Default Categories**. These are automatically created for every new user (both manually created and auto-provisioned via OIDC).

If no custom defaults are configured, Yarnl uses: Amigurumi, Wearables, Accessories, Blankets, Squares, Micro, Other.

---

## Admin Backup & Restore

Admins have access to system-wide backups in **Settings** → **Admin**:

<div className="steps-grid">

<div className="step-box">

### Configuration (JSON)

- All user accounts and permissions
- Password hashes (for full restore)
- OIDC/SSO settings
- Notification settings
- Backup schedule
- Default categories

</div>

<div className="step-box">

### User Data (ZIP)

- All pattern files for all users
- All archived patterns
- Images, thumbnails, and notes
- User backups

</div>

</div>

Use both together to migrate or recover an entire Yarnl instance. The config restore skips the current admin account to avoid overwriting your own credentials.

---
## Security

- All API endpoints require authentication (except login and OIDC callback)
- Passwords hashed with bcrypt (12 salt rounds)
- Session-based auth with HttpOnly, Secure, SameSite cookies
- Sessions expire after 7 days
- Ownership verified on all data access
- OIDC state and nonce validated to prevent CSRF and replay attacks

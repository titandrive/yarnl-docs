---
sidebar_position: 5
sidebar_class_name: sidebar-icon-shield
title: Admin
description: Manage users, authentication, and system settings
---

# Admin (Admin Only)

Manage users, authentication, and system settings. Only visible to users with the admin role.

---

## User Management

Displays a list of all users with their username, role, authentication method, and password status. Click on a user to expand their management options.

### Per-User Actions

| Button | Description |
|--------|-------------|
| **Change Username** | Set a new username for this user. |
| **Change Password** | Set a new password for this user. |
| **Remove PW** | Remove this user's password. |
| **Delete** | Permanently delete this user and all their data. |

### Per-User Permissions

| Permission | Description |
|------------|-------------|
| **User is admin** | Grant admin access to the admin panel and all admin features. |
| **Can add patterns** | Two toggles side by side — **PDF** controls whether the user can upload PDF patterns, **MD** controls whether they can create markdown patterns. |
| **Password required** | Require the user to have a password set (prevents them from removing it). |
| **Can change username** | Allow the user to change their own username from the Account tab. |
| **Can change password** | Allow the user to change their own password from the Account tab. |
| **Can use SSO** | Allow the user to log in via the configured SSO provider. Greyed out if SSO is not enabled. |

### Add User

Click **Add User** to open a modal for creating a new user with the following fields:

| Field | Description |
|-------|-------------|
| **Username** | Required. Must be unique. |
| **Password** | Optional. Leave blank if the user will only use SSO. |
| **Is Admin** | Whether the new user should have admin privileges. |
| **Can Upload PDF** | Allow uploading PDF patterns. Default: on. |
| **Can Create Markdown** | Allow creating markdown patterns. Default: on. |
| **Require Password** | Require the user to maintain a password. |
| **Can Change Username** | Allow the user to change their username. Default: on. |
| **Can Change Password** | Allow the user to change their password. Default: on. |
| **Allow SSO Login** | Allow the user to log in via SSO. Default: on. |

---

## Default Categories

Categories that are automatically created for every new user. Manage the list by adding or removing category names.

---

## OIDC / Single Sign-On

Configure OpenID Connect (OIDC) for single sign-on authentication.

| Setting | Description |
|---------|-------------|
| **Enable OIDC** | Turn on SSO authentication for the app. |
| **Callback URL** | The redirect URL to provide to your OIDC provider. Click to copy. |
| **Issuer URL** | The base URL of your OIDC provider (e.g., `https://auth.example.com`). |
| **Discover** | Auto-discover OIDC endpoints from the issuer URL. Shows the discovered authorization, token, user info, JWKS, and logout endpoints. |
| **Client ID** | The client ID from your OIDC provider. |
| **Client Secret** | The client secret from your OIDC provider. |
| **Provider Name** | Display name for the SSO button on the login page (e.g., "PocketID", "Authentik"). |
| **Provider Icon** | URL to an icon image to display on the SSO login button (optional). |
| **Disable local login** | Hide the username/password login form and only allow SSO login. |
| **Auto-create users** | Automatically create a Yarnl account when a new user logs in via SSO for the first time. |
| **Default role for new users** | The role assigned to auto-created SSO users: User or Admin. |

| Button | Description |
|--------|-------------|
| **Save OIDC Settings** | Save the current OIDC configuration. |
| **Reset OIDC** | Clear all OIDC settings and disable SSO. |

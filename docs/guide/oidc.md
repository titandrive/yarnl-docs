---
sidebar_position: 10
title: OIDC / Single Sign-On
description: Set up OpenID Connect (OIDC) for single sign-on authentication with Yarnl.
---

# OIDC / Single Sign-On

Yarnl supports any OpenID Connect (OIDC) provider for single sign-on with an extremely simple onboarding process. No manual endpoint configuration is required, just provide your issuer URL and Yarnl auto-discovers everything.

---

## How It Works

1. You configure an OIDC provider in **Settings** → **Admin** → **OIDC / Single Sign-On**
2. A **Sign in with [Provider]** button appears on the login page
3. Users authenticate with the external provider and are redirected back to Yarnl
4. Yarnl creates or matches a local account based on the provider's claims

Yarnl requests the `openid`, `profile`, and `email` scopes, and uses these claims:

| Claim | Usage |
|-------|-------|
| `sub` | Unique identifier that links the OIDC account to a Yarnl user |
| `preferred_username` | Username for auto-created accounts |
| `email` | Fallback username if `preferred_username` is not available |
| `name` | Display name |

---

## Setup

### 1. Create an Application in Your Provider

In your OIDC provider, create a new application (sometimes called a "client") with the following settings:

| Setting | Value |
|---------|-------|
| **Application type** | Web application |
| **Redirect / Callback URL** | `https://yarnl.example.com/api/auth/oidc/callback` |
| **Scopes** | `openid`, `profile`, `email` |

Replace `yarnl.example.com` with your actual Yarnl URL. The exact callback URL is also shown in the Yarnl admin panel once you open the OIDC settings.

Take note of the **Client ID** and **Client Secret**, as you'll need them in the next step.

### 2. Configure Yarnl

Go to **Settings** → **Admin** → **OIDC / Single Sign-On**:

1. Enter your provider's **Issuer URL** (e.g., `https://auth.example.com`)
2. Click **Discover** and Yarnl fetches and populates all OIDC endpoints automatically
3. Enter the **Client ID** and **Client Secret** from your provider
4. Click **Save OIDC Settings**

That's it. The login page will now show an SSO button.

### 3. Optional Settings

| Setting | Description |
|---------|-------------|
| **Provider Name** | Custom label for the SSO button (e.g., "Authentik", "PocketID") |
| **Provider Icon** | URL to a custom icon displayed on the login button |
| **Auto-create users** | Automatically create Yarnl accounts for new SSO users |
| **Default role** | Role assigned to auto-created users (`user` or `admin`) |
| **Disable local login** | Hide the username/password form for SSO-only login |

---

## Provider Examples

Below are setup instructions for popular providers. The steps are similar for any OIDC-compliant provider.

### Authentik

1. In Authentik, go to **Applications** → **Create with Wizard**
2. Set the **Name** (e.g., "Yarnl") and choose **OAuth2/OpenID Provider**
3. Set **Redirect URI** to `https://yarnl.example.com/api/auth/oidc/callback`
4. Copy the **Client ID** and **Client Secret**
5. In Yarnl, set the Issuer URL to your Authentik domain (e.g., `https://auth.example.com/application/o/yarnl/`)
6. Click **Discover**, enter your Client ID and Secret, then **Save**

### Keycloak

1. In Keycloak, go to your realm → **Clients** → **Create client**
2. Set the **Client ID** (e.g., `yarnl`) and **Client type** to **OpenID Connect**
3. Enable **Client authentication** (this generates a secret)
4. Set **Valid redirect URIs** to `https://yarnl.example.com/api/auth/oidc/callback`
5. Copy the **Client Secret** from the **Credentials** tab
6. In Yarnl, set the Issuer URL to `https://keycloak.example.com/realms/your-realm`
7. Click **Discover**, enter your Client ID and Secret, then **Save**

### PocketID

1. In PocketID, go to **OIDC Clients** → **Create**
2. Set the **Name** (e.g., "Yarnl")
3. Set **Callback URL** to `https://yarnl.example.com/api/auth/oidc/callback`
4. Copy the **Client ID** and **Client Secret**
5. In Yarnl, set the Issuer URL to your PocketID domain (e.g., `https://pocket-id.example.com`)
6. Click **Discover**, enter your Client ID and Secret, then **Save**

---

## Account Linking

Existing Yarnl users can link their account to an OIDC provider for passwordless login.

### Linking

1. Go to **Settings** → **Account** → **Single Sign-On**
2. Click **Link SSO Account**
3. Authenticate with the OIDC provider
4. The account is now linked and the user can log in via either method

### Unlinking

1. Go to **Settings** → **Account** → **Single Sign-On**
2. Click **Unlink SSO**

The user's local account remains intact. They can continue logging in with a username and password.

:::tip
Admins can control whether each user is allowed to use SSO via the **Can use SSO** permission in **Settings** → **Admin** → **User Management**.
:::

---

## Auto-Provisioning

When **Auto-create users** is enabled, new users who authenticate via OIDC are automatically given a Yarnl account.

- The username is taken from the provider's `preferred_username` claim, falling back to `email`, then `sub`
- The role is set to whatever you've configured in **Default role for new users**
- Default categories are automatically created for the new account
- No local password is set, so the user logs in exclusively via SSO unless one is added later

When disabled, only users whose accounts have been pre-created (and linked) by an admin can log in via SSO.

---

## Reverse Proxy Configuration

If Yarnl is behind a reverse proxy, make sure your proxy forwards the correct headers so the callback URL is generated properly:

```
X-Forwarded-Proto: https
X-Forwarded-Host: yarnl.example.com
```

Without these, the OIDC callback URL may use `http` or an internal hostname, causing the login flow to fail.

---

## Troubleshooting

### Locked out after misconfiguring OIDC

Set the `FORCE_LOCAL_LOGIN` environment variable to bypass SSO and access the local login form:

```yaml
environment:
  - FORCE_LOCAL_LOGIN=true
```

Restart the container, log in with your local admin credentials, and fix the OIDC settings. Remove `FORCE_LOCAL_LOGIN` when done.

### Callback URL mismatch

The most common OIDC error. Ensure the redirect URL in your provider **exactly** matches what Yarnl generates. Check for:

- `http` vs `https`
- Trailing slashes
- Port numbers
- The path must be `/api/auth/oidc/callback`

The exact URL to use is shown in the Yarnl admin panel under the OIDC settings.

### Users not being created automatically

- Confirm **Auto-create users** is enabled in the OIDC settings
- Check that the provider is returning a `sub` claim (required)
- Verify the user doesn't already have an account linked to a different OIDC subject

### Reset OIDC

To clear all OIDC settings and unlink all users, click **Reset OIDC** in the admin panel. This disables SSO and removes all OIDC associations. Users can still log in with local credentials.

---
sidebar_position: 4
sidebar_class_name: sidebar-icon-bell
title: Notifications
description: Configure push notifications for app events
---

# Notifications

Configure push notifications for app events.

---

## Pushover

Yarnl uses [Pushover](https://pushover.net) for push notifications.

| Setting | Description |
|---------|-------------|
| **Enable Pushover** | Enable push notifications to your device via Pushover. |
| **User Key** | Your Pushover user key. Found in your Pushover dashboard. Only visible when Pushover is enabled. |
| **API Token** | Your Pushover application API token. Only visible when Pushover is enabled. |
| **Test Connection** | Send a test notification to verify your configuration. Only visible when Pushover is enabled. |

---

## Events

Choose which events trigger a notification.

| Setting | Description |
|---------|-------------|
| **Backup Complete** | Notify when a backup finishes successfully. |
| **Backup Errors** | Notify when a backup fails. |
| **Archive Emptied** | Notify when archived patterns are automatically deleted by the auto-empty schedule. |

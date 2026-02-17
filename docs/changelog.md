---
sidebar_position: 5
title: Changelog
description: Release history for Yarnl
---

# Changelog

All notable changes to Yarnl, listed by version. See [GitHub Releases](https://github.com/titandrive/yarnl/releases) for download links and Docker images.

---

## v0.5.9

### Bug Fixes
- Fix "What's New" popup not showing for users upgrading from versions before the feature existed

---

## v0.5.8

### Performance
- **PDF viewer caching** — PDFs are cached between close/reopen, eliminating the white flash on revisit
- **Annotation-aware cache busting** — PDF cache updates automatically after annotation saves

### Features
- **"What's New" popup** — changelog shown automatically on version update

### Bug Fixes
- Fix annotation save crash caused by null `matchMedia` result in PDF.js

---

## v0.5.7

### Performance
- **Gzip compression** — all responses are now compressed, reducing transfer sizes by ~75%
- **Static asset caching** — CSS, JS, and images cached for 7 days with cache busting for updates

### Markdown Editor
- Improved layout — editor and preview now fill the full screen
- Save status now color-coded: green for saved, muted for saving, red for errors
- "Done" button replaces "Preview" toggle on desktop for cleaner workflow
- Mobile-optimized create form — fixed action bar at bottom, compact layout, smaller thumbnail

### Projects
- **Thumbnail play overlay** — replaces the Continue button on project cards, keeping card heights consistent
- **Context-aware hashtag filtering** — clicking a hashtag on a project card filters projects; on a pattern card filters the library
- Project badge color changed to secondary (pink) to distinguish from category badges

### Infrastructure
- `NODE_ENV=production` now defaults in the Dockerfile, so it's no longer needed in docker-compose
- **BACKUP_PATH env var** — configure custom backup storage location
- Fix backup migration across Docker volume mounts
- Upgrade multer to 2.0.2 (fixes 4 high-severity DoS vulnerabilities)

---

## v0.5.6

### Bug Fixes
- Fix backup migration across Docker volume mounts

### Infrastructure
- Add `BACKUP_PATH` env var for custom backup storage location

---

## v0.5.5

### Security
- Upgrade multer to 2.0.2 (fixes 4 high-severity DoS vulnerabilities)

### Bug Fixes
- Fix tab counts not updating on project add
- Use relative display paths

---

## v0.5.4

### Markdown Editor
- Add inline markdown editor with auto-save
- Metadata-only details modal
- Add Tab/Shift+Tab indent support for markdown editor lists
- Match markdown viewer header to PDF viewer, add mobile support

### Bug Fixes
- Fix In Progress page not updating on toggle

---

## v0.5.3

### Features
- Add admin owner badges, owner filter, and scope current tab to own patterns
- Add admin-only stats section to about page

### Bug Fixes
- Fix login screen flash on first load in single-user mode

---

## v0.5.2

### Features
- Load app version dynamically from package.json

### Infrastructure
- Add docker-compose to README and document all env vars
- Remove legacy root files

---

## v0.5.1

### Bug Fixes
- Fix database init order: create users table before categories

### Infrastructure
- Use Docker Hub image in compose file instead of build
- Add GitHub Release to CI workflow and fix dependency vulnerabilities

---

## v0.5.0

Initial release.

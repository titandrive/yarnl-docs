---
sidebar_position: 4
title: Markdown
description: Write patterns and notes using simple text formatting
---

# Markdown

Yarnl uses Markdown for custom patterns and pattern notes. Rendering is handled by [marked.js](https://marked.js.org/) with GitHub Flavored Markdown (GFM) enabled. It's a simple way to format text using plain characters that's easy to learn, easy to read, and portable.

---

## Why Markdown?

- **Portable** — plain `.md` files that work in any text editor
- **Future-proof** — no proprietary format that might become obsolete
- **Readable** — even without rendering, the source text is easy to understand
- **Lightweight** — just text, no bloated file sizes

Pattern notes are stored in `notes/` and markdown patterns are stored in `patterns/`. Because they're simple text files, you can edit them directly, back them up, or move them anywhere.

---

## Supported Syntax

Yarnl renders markdown with GitHub Flavored Markdown (GFM) enabled, so you get everything in standard markdown plus tables, strikethrough, and task lists.

### Headings

```markdown
# Heading 1
## Heading 2
### Heading 3
```

### Bold and Italic

```markdown
**bold text**
*italic text*
***bold and italic***
~~strikethrough~~
```

### Lists

```markdown
- Item one
- Item two
- Item three

1. First step
2. Second step
3. Third step
```

### Task Lists

```markdown
- [x] Finished body
- [ ] Start sleeves
- [ ] Seam together
```

### Links and Images

```markdown
[Link text](https://example.com)
![Alt text](image-url.jpg)
```

You can also paste images directly into the markdown editor. They're uploaded to the server and embedded automatically.

### Blockquotes

```markdown
> This is a note or tip
```

### Tables

```markdown
| Size | Chest | Length |
|------|-------|--------|
| S    | 34"   | 24"    |
| M    | 38"   | 25"    |
| L    | 42"   | 26"    |
```

### Code

```markdown
`inline code`
```

### Horizontal Rule

```markdown
---
```

---

## Example Pattern Note
### Markdown:
```markdown
# Cozy Bear Amigurumi

## Yarn Used
- **Brand:** Lion Brand Wool-Ease
- **Color:** Fisherman (#099)
- **Weight:** 4 (Medium)

## Hook
5.0mm (H/8)

## Notes
Started with a magic ring. Using safety eyes (12mm).

> Remember: Stuff firmly as you go!

## Modifications
- Added an extra row to the body for a taller bear
- Used embroidered nose instead of felt
```
### Text:
# Cozy Bear Amigurumi

## Yarn Used
- **Brand:** Lion Brand Wool-Ease
- **Color:** Fisherman (#099)
- **Weight:** 4 (Medium)

## Hook
5.0mm (H/8)

## Notes
Started with a magic ring. Using safety eyes (12mm).

> Remember: Stuff firmly as you go!

## Modifications
- Added an extra row to the body for a taller bear
- Used embroidered nose instead of felt


---

## Learn More

For the complete Markdown guide, see the [official documentation](https://www.markdownguide.org/basic-syntax/).

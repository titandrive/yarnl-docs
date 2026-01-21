---
sidebar_position: 8
title: Markdown
description: Write patterns and notes using simple text formatting
---

# Markdown

Markdown is a simple way to format text using plain characters. It's easy to learn, easy to read, and works everywhere.

---

## Why Markdown?

Yarnl uses Markdown for custom patterns and pattern notes because:

- **Portable** — Plain `.md` files that work in any text editor
- **Future-proof** — No proprietary format that might become obsolete
- **Readable** — Even without rendering, the text is easy to understand
- **Lightweight** — Just text, no bloated file sizes

Pattern notes are stored in `notes/` and custom Markdown patterns are stored in `patterns/`. You can edit them directly, back them up, or move them anywhere.

---

## Basic Formatting

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

### Links

```markdown
[Link text](https://example.com)
```

### Images

```markdown
![Alt text](image-url.jpg)
```

### Blockquotes

```markdown
> This is a quote or note
```

### Horizontal Rule

```markdown
---
```

### Code

```markdown
`inline code`

​```
code block
​```
```

---

## Example Pattern Note

Here's what a pattern note looks like in raw Markdown:

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

And here's how it renders:

---

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

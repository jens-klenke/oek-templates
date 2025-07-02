# Quarto Package Guide

A ready-to-fork template for creating **presentation slides** (RevealJS, Beamer PDF, or PowerPoint) using [Quarto](https://quarto.org) with full **Git** support.  
Everything is pre-configured so you can render with a single command, edit using plain Markdown, and optionally publish online via **GitHub Pages**.


---

## 1 · Project Snapshot

```text
quarto-slides/
├─ index.qmd               # main file
├─ assets/
│  ├─ clean.scss           # custom styles
│  ├─ signet_ude_rgb.png   # footer logo
│  ├─ LogoUniDuE.jpg       # header logo
│  └─ slide-numbers.js
├─ _extensions/
│  ├─ shafayetShafee/reveal-header
```

### 1 · Check Quarto works
```
quarto --version   # should print something like 1.5.42
```
### 2 . Adding Extensions
```
In CMD
quarto add shafayetShafee/reveal-header       # header text/logo
```

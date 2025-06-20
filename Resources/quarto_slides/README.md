# Quarto Package Guide

A ready-to-fork template for creating **presentation slides** (RevealJS, Beamer PDF, or PowerPoint) using [Quarto](https://quarto.org) with full **Git** support.  
Everything is pre-configured so you can render with a single command, edit using plain Markdown, and optionally publish online via **GitHub Pages**.


---

## 1 · Project Snapshot

```text
quarto-slides/
├─ index.qmd               # main deck
├─ assets/
│  ├─ clean.scss           # custom styles
│  ├─ signet_ude_rgb.png   # footer logo
│  ├─ LogoUniDuE.jpg       # header logo
│  └─ slide-numbers.js
├─ _extensions/
│  ├─ shafayetShafee/reveal-header
```

---

## 2 · Requirements

| Tool | Why you need it | Quick install |
|------|-----------------|---------------|
| **Quarto CLI ≥ 1.4** | converts `.qmd` to HTML & PDF | <https://quarto.org/docs/download> |
| **A TeX distribution**<br>(TinyTeX, MiKTeX, MacTeX) | *Only* if you render PDFs | `quarto install tinytex` |

> **Windows tip**&nbsp;— after installing software, **open a new PowerShell / CMD** so the new programs are on your `PATH`.

---

## 4 · Setup&nbsp;&nbsp;✧&nbsp;One-Time Only

### 1 · Check Quarto works
quarto --version   # should print something like 1.5.42

### 2 . Adding Extensions
```text For e.g.,
CMD
quarto add shafayetShafee/reveal-header       # header text/logo
```

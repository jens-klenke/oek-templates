# RMarkdown Template for Thesis and Seminar Papers of the Econometric Chair




## Quarto Package 

A ready-to-fork template for creating **presentation slides** (RevealJS, Beamer PDF, or PowerPoint) using [Quarto](https://quarto.org/docs/get-started/) with full **Git** support. Everything is pre-configured so you can render with a single command, edit using plain Markdown, and optionally publish online via **GitHub Pages**.

---

### 1 · Project Snapshot

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


### Pre-requisites 


- Check Quarto works 
quarto --version   # should print something like 1.5.42

- Intall TinyTex packages
```
tinytex::install_tinytex()
```
- Adding Extensions
```
quarto add shafayetShafee/reveal-header       # header text/logo
```


## Xaringan package

### Pre-requisites 
```
install.packages(c("xaringan", "rmarkdown", "knitr"))
```

## Thesis report

### Pre-requisites 

- Intall TinyTex packages
```
tinytex::install_tinytex()
tinytex::tlmgr_install(c(
  "biblatex", "biber", "babel-english", "caption", "graphicx", "float",
  "geometry", "anyfontsize", "tocloft", "listings", "xcolor", "hyperref",
  "fancyhdr", "titling", "sectsty", "etoolbox"
))
```

- Alternative, use Miktex, you can download it from (https://miktex.org/download)

### Errors and Warnings

During compilation you may encounter warnings or errors related to missing references.  To resolve these, ensure that your bibliography file is correctly specified. For e.g., `biblio-files: Resources/references.bib`

If you see warnings about a label being multiply defined, it often means that the function you used to create a figure or table has inserted two identical empty `label{}` commands. To fix this, give each table or figure a unique, meaningful label— for example, `label="summary"` . If you omit a label entirely, LaTeX will warn: `There were multiply-defined labels.`

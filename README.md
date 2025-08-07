# RMarkdown Template for Thesis and Seminar Papers of the Econometric Chair

## Purpose 

### UDE thesis 
The UDE Thesis folder contains all source files, figures, datasets and build scripts needed to compose and compile your University of Duisburg-Essen thesis. It is organized to make it easy to…
- Maintain a clean LaTeX source structure
- Manage bibliography with BibTeX or Biber
- Automate PDF generation via make or build scripts
- Version-control large assets (e.g. high-resolution images or data tables)

### UDE xaringen
The UDE Xaringan folder hosts slide decks built with the R Markdown “xaringan” framework. It provides:
- A custom UDE-branded theme and layout
- Preconfigured options for code highlighting, speaker notes, and mobile responsiveness
- Example slides illustrating common patterns (figures, tables, math notation)

### UDE quarto
The UDE Quarto folder contains Quarto projects for generating:
- Templates for reports, tutorials, and dashboards  
- Execute Python (as well as R, Julia, etc.) code chunks, render inline plots, and integrate Python-based analyses
- Project websites or blogs
  
## Requirements 
- Install TinyTeX
```
install.packages(c("tinytex", "rmarkdown", "knitr")) 
tinytex::install_tinytex()
```
- Alternative download MikTex from https://miktex.org/download

- Other required R Packages
```
tinytex::tlmgr_install(c(
  "biblatex", "biber", "babel-english", "caption", "graphicx", "float",
  "geometry", "anyfontsize", "tocloft", "listings", "xcolor", "hyperref",
  "fancyhdr", "titling", "sectsty", "etoolbox"
))
```

- Install Quarto from (https://quarto.org/docs/get-started/), to check do the followng

In CMD
```
quarto check 
```
- For Quarto extension

```
In CMD
quarto add shafayetShafee/reveal-header       # header text/logo
```

- Install xaringan
```
install.packages("xaringan")
```

---

## Project Snapshot
``` 
oek-templates

     - oek-templates.Rproj (Project file)
     - ude_quarto.qmd
     - ude_thesis.rmd
     - ude_xaringan.rmd
     - Resources 
           - references(thesis report)
           - template(thesis report)
           - quarto_slides(resources)
           - xaringan_slides(resources)
     - includes
```



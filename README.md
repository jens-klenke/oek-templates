# RMarkdown Template for Thesis and Seminar Papers of the Econometric Chair

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
```
In CMD
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



# RMarkdown Template for Thesis and Seminar Papers of the Econometric Chair

## Requirements 
- Install TinyTeX
```
install.packages(c("tinytex", "rmarkdown", "knitr")) 
tinytex::install_tinytex()
```
- Alternative download MikTex from https://miktex.org/download

- Required R Packages
```
install.packages(c("rmarkdown", "tinytex", "knitr"))
tinytex::tlmgr_install(c(
  "biblatex", "biber", "babel-english", "caption", "graphicx", "float",
  "geometry", "anyfontsize", "tocloft", "listings", "xcolor", "hyperref",
  "fancyhdr", "titling", "sectsty", "etoolbox"
))
```

- Install Quarto from (https://quarto.org/docs/get-started/), to check do the followng
```bash
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
     - includes
     - oek-templates (Project file)
     - Resources 
           - thesis_paper
           - quarto_slides
           - xaringan_slides
```



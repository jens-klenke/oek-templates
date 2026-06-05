# RMarkdown Template for Thesis and Seminar Papers of the Econometric Chair

## Structure

This repository offers several templates developed by the Chair of Econometrics.

The `Thesis` folder contains two subfolders. The first (`LaTeX Template`) provides a template that relies solely on LaTeX. The second (`RMarkdown Template`) contains an `Rmd` template built with R Markdown, which also requires a LaTeX distribution for rendering.

Slide templates are available in the `Slides` folder, offering two options: the first is built with `Xaringan` and the second with `Quarto`.

## Purpose 

### UDE thesis 
The UDE Thesis folder contains all source files, figures, datasets and build scripts needed to compose and compile your University of Duisburg-Essen thesis. It provides:
- Clean LaTeX source structure
- Bibliography with BibTeX or Biber
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
- Install TeX Live from https://tug.org/texlive/


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

## Errors & Warnings
- You can resolve your error\warnings by keeping the packages up-to-date. You can update them using ```install.packages("your_package_name")``` or you can update them manully using MikTex console.
- You can use R help function like ``` help("your_function") ```.
- If you encounter any path errors then try to change the path in the code according to your environment.
- Try to solve errors\warnings by searching it on Google or Stackoverflow. (https://stackoverflow.com/questions)
  

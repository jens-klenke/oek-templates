if (!require("pacman")) install.packages("pacman")
pacman::p_load(dplyr,
               ggplot2,
               RefManageR,
               here,
               purrr,
               magick,
               stargazer,
               dplyr,
               tidyr,
               papeR,
               kableExtra,
               gridExtra,
               cowplot,
               png,
               knitr,
               xaringan,
               leaflet,
               plotly,
               ggdag,
               dagitty,
               DiagrammeR
)

# install packages from Github (no CRAN version at the moment)
if (!require("icons")) devtools::install_github('mitchelloharawild/icons')
library(icons)

# download fontawesome icons
if(icons::icon_installed(fontawesome) == FALSE) icons::download_fontawesome()

   
## tidy DAGs

shorten_dag_arrows <- function(tidy_dag, shorten_distance){
  
  # Update underlying ggdag object
  tidy_dag$data <- dplyr::mutate(tidy_dag$data, slope = (yend - y) / (xend - x), # Calculate slope of line
                                 distance = sqrt((xend-x)^2 + (yend - y)^2), # Calculate total distance of line
                                 proportion = shorten_distance/distance, # Calculate proportion by which to be shortened
                                 xend = (1-proportion)*xend + (proportion*x), # Shorten xend
                                 yend = (1-proportion)*yend + (proportion*y)) %>% # Shorten yend
    dplyr::select(-slope, -distance, -proportion) # Drop intermediate values
  
  return(tidy_dag)
}
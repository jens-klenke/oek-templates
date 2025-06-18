Reveal.on('slidechanged', function(event) {
  const totalSlides = Reveal.getTotalSlides();
  const currentSlide = event.indexh + 1;
  const footer = document.querySelector('.reveal .footer');
  if (footer) {
    footer.innerHTML = `EFEMOD | Slide ${currentSlide} of ${totalSlides}`;
  }
});

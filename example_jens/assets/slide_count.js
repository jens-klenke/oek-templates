(function() {
  function initCounter() {
    if (typeof slideshow === 'undefined') {
      setTimeout(initCounter, 50);
      return;
    }

    // Create counter element
    var counter = document.createElement('div');
    counter.id = 'custom-slide-counter';
    document.body.appendChild(counter);

    // Compute main slides (non-appendix) once
    var slides = document.querySelectorAll('.remark-slide-container');
    var mainSlideIndices = [];
    slides.forEach((slide, index) => {
      var content = slide.querySelector('.remark-slide-content');
      if (!content.classList.contains('appendix')) {
        mainSlideIndices.push(index);
      }
    });
    var totalMainSlides = mainSlideIndices.length - 1;

    function updateCounter() {
      var currentIndex = slideshow.getCurrentSlideIndex();
      var mainIndex = mainSlideIndices.indexOf(currentIndex);

      // Only update text; hiding handled in CSS if needed
      counter.textContent = mainIndex !== -1
        ? 'Slide ' + (mainIndex + 1) + ' of ' + totalMainSlides
        : '';
    }

    slideshow.on('afterShowSlide', updateCounter);
    updateCounter();
  }

  initCounter();
})();

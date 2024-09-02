var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 1500, // Tempo em milissegundos entre transições (3 segundos)
        disableOnInteraction: false, // O autoplay não será desativado após interação do usuário
      }
  });

var autoplayButton = document.getElementById('autoplay-toggle');
var autoplayActive = true;

autoplayButton.addEventListener('click', function() {
    if (autoplayActive) {
        TrandingSlider.autoplay.stop();
        autoplayButton.textContent = 'Ativar';
    } else {
        TrandingSlider.autoplay.start();
        autoplayButton.textContent = 'Desativar';
    }
    autoplayActive = !autoplayActive;
});
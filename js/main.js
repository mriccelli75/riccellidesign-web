 /* =========================================
     *  animations
     *  =======================================*/

    window.sr = ScrollReveal();
    sr.reveal('.navbar', {
      duration: 2000,
      origin:'bottom'
    });
    sr.reveal('.content.content--hero-text ', {
        duration: 3000,
        origin:'bottom'
      });
      sr.reveal('#hero .btn.btn-primary ', {
        duration: 4000,
        origin:'bottom'
      });
    sr.reveal('#about .intro-content', {
      duration: 3000,
      origin:'left',
      distance:'300px'
    });
    sr.reveal('#about .btn.btn-primary', {
        duration: 3000,
        origin:'bottom'
      });
    sr.reveal('.content.content--image', {
      duration: 2000,
      delay: 2000,
      origin:'bottom'
    });
    // Headline still
    ScrollReveal().reveal('#capabilities .title')
    ScrollReveal().reveal('#capabilities .capabilities-web', {duration: 2000, delay: 500 })
    ScrollReveal().reveal('#capabilities .capabilities-ecom', {duration: 2000, delay: 600 })
    ScrollReveal().reveal('#capabilities .capabilities-ux', {duration: 2000, delay: 700 })


document.addEventListener('DOMContentLoaded', () => {
    let btnMenu = document.querySelector('.btn-menu-mobile');
    let menuMobile = document.querySelector('.menu-mobile'); // Corrigido o seletor aqui
    let flagMenuMobile = 0;
  
    btnMenu.addEventListener('click', () => {
        if (flagMenuMobile == 0) {
            menuMobile.style.width = '100%';
            flagMenuMobile = 1;
        } else {
            menuMobile.style.width = '0px';
            flagMenuMobile = 0;
        }
    });


    document.addEventListener('scroll', function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var windowHeight = window.innerHeight;
        var documentHeight = document.documentElement.scrollHeight;
        var wppFlutuante = document.querySelector('.wpp-flutuante');
        
        if (scrollTop >= 400 && (scrollTop + windowHeight) < (documentHeight - 100)) {
            wppFlutuante.style.opacity = '1';
        } else {
            wppFlutuante.style.opacity = '0';
        }
    });

    let linksMobile = document.querySelectorAll('.menu-mobile-ul li');
    linksMobile.forEach(function(link) {
        link.addEventListener('click', function() {
            if (flagMenuMobile == 0) {
                menuMobile.style.width = '100%';
                flagMenuMobile = 1;
            } else {
                menuMobile.style.width = '0px';
                flagMenuMobile = 0;
            }
        });
      });
});
  
  
  
  
  
  
  
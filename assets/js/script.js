document.addEventListener('DOMContentLoaded', () => {
    let btnMenu = document.querySelector('.btn-menu-mobile');
    let menuMobile = document.querySelector('.menu-mobile'); // Corrigido o seletor aqui
    let flagMenuMobile = 0;
  
    btnMenu.addEventListener('click', () => {
        if (flagMenuMobile == 0) {
            menuMobile.style.right = '0px';
            flagMenuMobile = 1;
        } else {
            menuMobile.style.right = '-700px';
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
    
});
  
  
  
  
  
  
  
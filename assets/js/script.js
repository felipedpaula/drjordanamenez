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
});
  
  
  
  
  
  
  
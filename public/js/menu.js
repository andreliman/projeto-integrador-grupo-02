const menuMobile = document.getElementById("menu__mobile__icon");

function toggleMenu(){
    const menuMobileList = document.getElementById('menu__mobile')
    menuMobileList.classList.toggle('active')
}

menuMobile.addEventListener('click', toggleMenu);
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.pageYOffset > header.offsetHeight) {
        header.style.backgroundColor = '#191919';
    } else {
        header.style.backgroundColor = '';
    }
});
if(document.getElementById('burger-menu')){
    const burgerMenu = document.getElementById('burger-menu');
    const menuContent = document.querySelector('header nav');
    const header = document.querySelector('header');
    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('open');
        menuContent.classList.toggle('open');
        header.classList.toggle('open');

    });

}
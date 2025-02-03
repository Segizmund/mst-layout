window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.pageYOffset > header.offsetHeight) {
        header.style.backgroundColor = '#191919';
    } else {
        header.style.backgroundColor = '';
    }
});
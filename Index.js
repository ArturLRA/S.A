window.addEventListener('scroll', () => {
    const navBar = document.querySelector('.navBar');

    if (window.scrollY > 0) {
        navBar.classList.add('shadow'); 
    } else {
        navBar.classList.remove('shadow'); 
    }
});
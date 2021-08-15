const burger = document.getElementById('burger');
burger.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('nav-open');
});


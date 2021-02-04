const navSlide = () => {
    const burger = document.querySelector(".burger-open");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    const burgerClose = document.querySelector('.burger-close');
    const logo = document.querySelector('.logo');


    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        burgerClose.style.display = 'block';
        burgerClose.style.zIndex = 1;
        logo.style.zIndex = 1;
        // Animate burger
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.8}s`;
            }
        });

    });

    burgerClose.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burgerClose.style.display = 'none';
        logo.style.zIndex = -1;
        // Animate burger
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.8}s`;

            }
        });
    });
}

navSlide();
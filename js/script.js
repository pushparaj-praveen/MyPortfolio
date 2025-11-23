const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation (Optional: transform to X)
        // burger.classList.toggle('toggle');
    });
}

const smoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Close mobile menu on click
            const nav = document.querySelector('.nav-links');
            if(nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                // Reset animations
                const navLinks = document.querySelectorAll('.nav-links li');
                navLinks.forEach((link) => {
                    link.style.animation = '';
                });
            }
        });
    });
}

const app = () => {
    navSlide();
    smoothScroll();
}

app();

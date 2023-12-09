let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            })
        }
    })

let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

ScrollReveal({
     reset: true,
     distance: '80px',
     duration: 1000,
     delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .linguage, .contact i', { origin: 'top' });
ScrollReveal().reveal('.services-container, .portfolio-box, .jobs-box, contact form, .contact a', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img, .progress-bar', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content, .container-box', { origin: 'right' });

/*=============== DARK MODE ===============*/
let darkMode = localStorage.getItem('darkMode');
const darkModeIcon = document.querySelector('.ri-contrast-2-fill'); // Icon for dark mode
const lightModeIcon = document.querySelector('.ri-contrast-2-line'); // Icon for light mode

// Show appropriate icons based on dark mode state
const updateIcons = () => {
    if (darkMode === 'enabled') {
        darkModeIcon.style.display = 'block';
        lightModeIcon.style.display = 'none';
    } else {
        darkModeIcon.style.display = 'none';
        lightModeIcon.style.display = 'block';
    }
};

// Enable dark mode
const enableDarkMode = () => {
    document.body.classList.add('dark-theme');
    localStorage.setItem('darkMode', 'enabled');
    darkMode = 'enabled';
    updateIcons();
};

// Disable dark mode
const disableDarkMode = () => {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('darkMode', null);
    darkMode = null;
    updateIcons();
};

// Check initial dark mode state
if (darkMode === 'enabled') {
    enableDarkMode();
} else {
    disableDarkMode();
}

// Toggle dark mode on icon click
darkModeIcon.addEventListener('click', disableDarkMode);
lightModeIcon.addEventListener('click', enableDarkMode);

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')

    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper(".popular__container", {
    loop: true,
    spaceBetween: 24,
    slidePreview: 'auto',
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {

        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 48,
        },
    },
});

/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatured = mixitup('.featured__content', {
    selectors: {
        target: '.featured__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active featured */
const linkFeatured = document.querySelectorAll('.featured__item')

function activeFeatured() {
    linkFeatured.forEach(l => l.classList.remove('active-featured'))
    this.classList.add('active-featured')
}
linkFeatured.forEach(l => l.addEventListener('click', activeFeatured))
/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,

})

sr.reveal(`.home__title, .popular__container, .features__img, .featured__filters`)
sr.reveal(`.home__subtitle`, { delay: 500 })
sr.reveal(`.home__elec`, { delay: 600 })
sr.reveal(`.home__img`, { delay: 800 })
sr.reveal(`.home__car-data`, { delay: 900, interval: 100, origin: 'bottom' })
sr.reveal(`.home__button`, { delay: 1000, interval: 100, origin: 'bottom' })
sr.reveal(`.about__group, .offer__data`, { origin: 'left' })
sr.reveal(`.about__data, .offer__img`, { origin: 'right' })
sr.reveal(`.features__map`, { delay: 600, origin: 'bottom' })
sr.reveal(`.features__card`, { interval: 300 })
sr.reveal(`.featured__card, .logos__container`, { interval: 300 })
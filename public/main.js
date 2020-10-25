
AOS.init();


new Typed('.benefites', {
    strings: ['more customers', 'happy clients', 'your problems solved'],
    typeSpeed: 80,
    backSpeed: 50,
    fadeOut: true,
    loop: true
});


const burgerBtn = document.getElementById('burger-btn');
const navLinks = document.getElementById('nav-links');
const navLinkClasses = navLinks.classList;

burgerBtn.addEventListener('click', (e) => {
    e.preventDefault()

    if (navLinkClasses.contains('hidden')) {
        navLinkClasses.remove('hidden')

    } else {
        navLinkClasses.add('hidden')
    }

})



function toggleModal(modalID) {
    document.getElementById(modalID).classList.toggle("hidden");
    document.getElementById(modalID + "-backdrop").classList.toggle("hidden");
    document.getElementById(modalID).classList.toggle("flex");
    document.getElementById(modalID + "-backdrop").classList.toggle("flex");
}



const containerEl = document.querySelector('.portfolio');

const mixer = mixitup(containerEl);



var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    observer: true,
    observeParents: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})



// i don't want to couple my js with html 

function scrollToSection(element) {
    document.querySelector(element).scrollIntoView({ behavior: "smooth" });
}


const myProjectBtn = document.querySelector('.my-project-btn');
myProjectBtn.addEventListener('click', (e) => {
    e.preventDefault()

    scrollToSection('.my-work')
})


const mySkillsBtn = document.querySelector('.my-skills-btn');
mySkillsBtn.addEventListener('click', (e) => {
    e.preventDefault()

    scrollToSection('.my-skills')
})

const contactMeBtn = document.querySelector('.contact-me-btn');
contactMeBtn.addEventListener('click', (e) => {
    e.preventDefault()

    scrollToSection('.contact-me')
})

const aboutMeBtn = document.querySelector('.about-me-btn');
aboutMeBtn.addEventListener('click', (e) => {
    e.preventDefault()

    scrollToSection('.about-me')
})

const myQualificationBtn = document.querySelector('.my-qualification-btn');
myQualificationBtn.addEventListener('click', (e) => {
    e.preventDefault()

    scrollToSection('.my-qualification')
})



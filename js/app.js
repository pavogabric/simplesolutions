const hamb = document.querySelector('.header__menu');
const mobileNav = document.querySelector('.mobile-nav');


function toggleHambMenu() {
    hamb.classList.toggle('active');
    mobileNav.classList.toggle('show');
}

hamb.addEventListener('click', toggleHambMenu);

function hideNav() {
    hamb.classList.remove('active');
    mobileNav.classList.remove('show');
}

const header = document.querySelector('.header');

window.onscroll = function () {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add('isScrolled');
    } else {
        header.classList.remove('isScrolled');
    }
}

gsap.registerPlugin(ScrollTrigger);

gsap.from('.cardOne', {
    scrollTrigger: '.cardOne',
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "none"
})

gsap.from('.cardTwo', {
    scrollTrigger: '.cardTwo',
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "none"
})

gsap.from('.cardThree', {
    scrollTrigger: '.cardThree',
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "none"
})

gsap.from('.aboutHeadingOne', {
    scrollTrigger: '.aboutHeadingOne',
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "none"
})

gsap.from('.aboutHeadingTwo', {
    scrollTrigger: '.aboutHeadingTwo',
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "none"
})

gsap.from('.bannerSlideUp', {
    scrollTrigger: '.bannerSlideUp',
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "none"
})

gsap.from('.reviewOneSlideUp', {
    scrollTrigger: '.reviewOneSlideUp',
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "none"
})

gsap.from('.reviewTwoSlideUp', {
    scrollTrigger: '.reviewTwoSlideUp',
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "none"
})

gsap.from('.banner2SlideUp', {
    scrollTrigger: '.banner2SlideUp',
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "none"
})
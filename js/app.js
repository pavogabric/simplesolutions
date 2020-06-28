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
    if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        header.classList.add('isScrolled');
    } else {
        header.classList.remove('isScrolled');
    }
}

// HTML ELEMENTS FOR FADING
const fadeUp = document.querySelectorAll('.fade-up');
const fadeUpFast = document.querySelectorAll('.fade-up-fast');
const fadeRight = document.querySelectorAll('.fade-right');
const fadeLeft = document.querySelectorAll('.fade-left');
const fadeRightFullWidth = document.querySelectorAll('.fade-right-full-width');
const fadeLeftFullWidth = document.querySelectorAll('.fade-left-full-width');

const cardsObserverOptions = {
    threshold: 0.25
};

const cardsObserver = new IntersectionObserver(function(entries, cardsObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.toggle('show');
            cardsObserver.unobserve(entry.target);
        }
    })
}, cardsObserverOptions);

fadeUp.forEach(card => {
    cardsObserver.observe(card);
})


const headingsObserverOptions = {
    threshold: 0.25
};

const headingsObserver = new IntersectionObserver(function(entries, headingsObserver){
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.toggle('show');
            headingsObserver.unobserve(entry.target);
        }
    })
}, headingsObserverOptions);

fadeRight.forEach(heading => {
    headingsObserver.observe(heading);
})

fadeLeft.forEach(heading => {
    headingsObserver.observe(heading);
}) 

fadeRightFullWidth.forEach(heading => {
    headingsObserver.observe(heading);
})
fadeLeftFullWidth.forEach(heading => {
    headingsObserver.observe(heading);
}) 

fadeUpFast.forEach(heading => {
    headingsObserver.observe(heading);
})
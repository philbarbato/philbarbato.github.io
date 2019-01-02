/*
 * Title: Mobile Navigation Module
 * Description: toggles nav styles under specified max-width
 * Author: Phil Barbato
 */

const s = {
    nav: document.querySelector('.nav-main'),
    navToggleButton: document.querySelector('.nav-main__toggle'),
    touchMoving: false,
    maxWidth: 1024
}

const t = {
    timeout: false, // holder for timeout id
    delay: 250 // delay after event is "complete" to run callback
}

var intViewportWidth,
    eventsBound = false;

function init() {
    // bind all Module Actions
    checkSizes();
    bindResize();
}

// window.resize callback function
function checkSizes() {
    intViewportWidth = window.innerWidth;

    if (intViewportWidth < s.maxWidth && !eventsBound) {
        bindEvents();
        eventsBound = true;

    } else if (intViewportWidth > s.maxWidth && eventsBound) {
        unBindEvents()
        eventsBound = false;
    }
}

// add all of the event listeners
function bindEvents() {
    s.nav.classList.add('nav-main--active');
    s.nav.classList.add('nav-main--closed');
    s.navToggleButton.addEventListener('click', toggleNav);
}

// remove event listeners
function unBindEvents() {
    s.nav.classList.remove('nav-main--active');
    s.nav.classList.remove('nav-main--closed');
    s.navToggleButton.removeEventListener('click', toggleNav);
}

function bindResize() {
    // window.resize event listener
    window.addEventListener('resize', function () {
        // clear the timeout
        clearTimeout(t.timeout);
        // start timing for event "completion"
        t.timeout = setTimeout(checkSizes, t.delay);
    });
}

function toggleNav(event) {
    openSubs = 0;

    document.documentElement.classList.toggle('scroll-locked');
    document.body.classList.toggle('scroll-locked');
    s.nav.classList.toggle('nav-main--closed');
    s.nav.classList.toggle('nav-main--open');

    event.preventDefault();
}

export { init as default }

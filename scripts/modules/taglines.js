const taglines = [
    'I write the SASS that makes the whole world sing.',
    'I love to listen. I love to teach.',
    'I specialize in metaphor.'
]

const s = {
    heading: document.querySelector('.content__heading')
}

function init() {
    // bind all Module Actions
    var randomIndex = Math.floor(Math.random() * taglines.length);
    s.heading.innerHTML = taglines[randomIndex];
}

export { init as default }

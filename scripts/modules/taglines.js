const taglines = [
    'I write the SASS that makes the whole world sing.',
    'I love to listen. I love to teach.',
    'I specialize in metaphor.',
    'Dear God! What is that thing?',
    'Fresh internet since 1999.',
    'Provider of <em>je ne sais quoi</em> for over 20 years.',
    'I&rsquo;ve got a fever, and the only prescription is more <em>user stories</em>.',
    'Brings out the flavor.'

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

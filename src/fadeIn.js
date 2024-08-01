const faders = document.querySelectorAll('.fade-in');
const options = {};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.toggle('fading', entry.isIntersecting);
            appearOnScroll.unobserve(entry.target);
            setTimeout(() => {
                entry.target.style.opacity = 1;
            }, 1000);
        }
    })
}, options);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})
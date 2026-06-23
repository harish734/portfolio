
function toggleMode() {
    document.body.classList.toggle("light-mode");
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".fade").forEach(el => {
    observer.observe(el);
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        const offset = 100;
        const elementPosition = target.offsetTop - offset;

        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    });
});
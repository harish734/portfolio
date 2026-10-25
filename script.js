
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


const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    formStatus.textContent = "Sending...";

    const formData = new FormData(contactForm);

    try {
        const response = await fetch(contactForm.action, {
            method: "POST",
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            formStatus.textContent = "Message sent successfully!";
            contactForm.reset();
        } else {
            formStatus.textContent = "Something went wrong. Please try again.";
        }

    } catch (error) {
        formStatus.textContent = "Unable to send message. Please try again.";
    }
});
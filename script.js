// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Unobserve after animating once
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Initialize sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
    observer.observe(section);
});

// Helper to handle the "visible" state in CSS-in-JS style
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .section.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    </style>
`);
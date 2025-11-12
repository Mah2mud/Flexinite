// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect - FIXED VERSION
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
const navbarHeight = navbar.offsetHeight;

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add shadow when scrolled
    if (scrollTop > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Show/hide navbar on scroll - REMOVED THIS FEATURE
    // Navbar will always stay visible now
    lastScrollTop = scrollTop;
});

// Active navigation highlighting
function setActiveNavLink() {
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    document.querySelectorAll(".nav-links a").forEach(link => {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.filter = 'blur(0)';
        }
    });
}, observerOptions);

// Initialize animations
function initializeAnimations() {
    // Animate service cards
    document.querySelectorAll('.service-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.filter = 'blur(4px)';
        card.style.transition = `opacity 0.8s ease ${index * 0.15}s, transform 0.8s ease ${index * 0.15}s, filter 0.8s ease ${index * 0.15}s`;
        observer.observe(card);
    });
    
    // Animate detail cards
    document.querySelectorAll('.detail-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.filter = 'blur(4px)';
        card.style.transition = `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s, filter 0.8s ease ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Animate stat cards
    document.querySelectorAll('.stat-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        observer.observe(card);
    });
}

// Add interactive button effects
function initializeButtonEffects() {
    document.querySelectorAll('.cta-button, .service-link, .contact-btn').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Flexinite Studio Initialized!');
    
    setActiveNavLink();
    initializeAnimations();
    initializeButtonEffects();
});

// Handle page load completion
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});
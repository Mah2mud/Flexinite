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

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
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

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px'
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
    
    // Animate hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        heroContent.style.transition = 'opacity 1s ease 0.4s, transform 1s ease 0.4s';
        
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 400);
    }
}

// Add interactive button effects
function initializeButtonEffects() {
    document.querySelectorAll('.cta-button, .service-link, .contact-btn').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(1px) scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
    });
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initializing Flexinite Studio...');
    
    setActiveNavLink();
    initializeAnimations();
    initializeButtonEffects();
    
    console.log('✅ Flexinite Studio Initialized!');
});

// Handle responsive behavior
window.addEventListener('resize', function() {
    // Re-initialize animations on resize
    setTimeout(initializeAnimations, 150);
});

// Handle page load completion
window.addEventListener('load', function() {
    // Additional optimizations after all resources load
    document.body.classList.add('loaded');
});
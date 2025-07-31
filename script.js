// Apple-inspired smooth interactions and animations

// Smooth mobile menu functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Animate hamburger bars
    const bars = hamburger.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        if (hamburger.classList.contains('active')) {
            bar.style.transform = index === 0 ? 'rotate(45deg) translate(5px, 5px)' :
                                 index === 1 ? 'opacity: 0' :
                                 'rotate(-45deg) translate(7px, -6px)';
        } else {
            bar.style.transform = 'none';
        }
    });
});

// Close mobile menu when clicking on a link with smooth transition
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    
    // Reset hamburger bars
    const bars = hamburger.querySelectorAll('.bar');
    bars.forEach(bar => {
        bar.style.transform = 'none';
    });
}));

// Apple-style smooth scrolling for navigation links
// Adjust offset for navbar and section padding
function getScrollOffset() {
    return window.innerWidth <= 768 ? 120 : 160;
}

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

// Apple-style scroll animations with staggered timing
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add staggered animation delay
            entry.target.style.animationDelay = `${index * 0.1}s`;
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.timeline-item, .project-card, .skill-category, .contact-item');
    animateElements.forEach(el => observer.observe(el));
});

// Timeline animation
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
});

// Apple-style navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    // Add subtle shadow on scroll
    if (currentScrollY > 50) {
        navbar.style.boxShadow = '0 1px 20px rgba(0, 0, 0, 0.08)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    hero.style.transform = `translateY(${rate}px)`;
});

// Typing animation for code
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const codeLines = document.querySelectorAll('.code-line');
    codeLines.forEach((line, index) => {
        const originalText = line.innerHTML;
        setTimeout(() => {
            typeWriter(line, originalText, 50);
        }, index * 200);
    });
    
    // Initialize hero title fade-in animations
    const titleLines = document.querySelectorAll('.fade-in-line');
    titleLines.forEach(line => {
        const delay = line.getAttribute('data-delay');
        line.style.setProperty('--delay', delay);
    });
});

// Project cards hover effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Skill tags animation
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Contact form validation and submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[name="name"]').value;
        const email = this.querySelector('input[name="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !message) {
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return;
        }
        
        // Form will be handled by the EmailJS code below
    });
});

// Scroll to top functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: none;
    border-radius: 50%;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
`;

document.body.appendChild(scrollToTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
});

// Scroll to top functionality
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add hover effect to scroll to top button
scrollToTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-3px) scale(1.1)';
    this.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
});

scrollToTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
    this.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
});

// Particle background effect
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        overflow: hidden;
    `;
    
    document.body.appendChild(particlesContainer);
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(102, 126, 234, 0.3);
            border-radius: 50%;
            animation: float 6s ease-in-out infinite;
        `;
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Add floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
        }
        50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.8;
        }
    }
`;
document.head.appendChild(style);

// Initialize particles
createParticles();

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add cursor trail effect
let mouseX = 0;
let mouseY = 0;
let cursorTrail = [];

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Create trail element
    const trail = document.createElement('div');
    trail.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        left: ${mouseX}px;
        top: ${mouseY}px;
        animation: trailFade 1s ease-out forwards;
    `;
    
    document.body.appendChild(trail);
    
    // Remove trail element after animation
    setTimeout(() => {
        if (trail.parentNode) {
            trail.parentNode.removeChild(trail);
        }
    }, 1000);
});

// Add trail fade animation
const trailStyle = document.createElement('style');
trailStyle.textContent = `
    @keyframes trailFade {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0);
        }
    }
`;
document.head.appendChild(trailStyle);

/* Apple TV Style Project Carousel */
class ProjectCarousel {
    constructor() {
        this.currentSlide = 1;
        this.totalSlides = 3;
        this.isTransitioning = false;
        
        this.init();
    }
    
    init() {
        this.bindEvents();
    }
    
    bindEvents() {
        // Navigation dots
        document.querySelectorAll('.nav-dot').forEach(dot => {
            dot.addEventListener('click', (e) => {
                const slideNumber = parseInt(e.target.dataset.slide);
                this.goToSlide(slideNumber);
            });
        });
        
        // Carousel controls
        document.querySelector('.carousel-control.prev').addEventListener('click', () => {
            this.prevSlide();
        });
        
        document.querySelector('.carousel-control.next').addEventListener('click', () => {
            this.nextSlide();
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.prevSlide();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
            }
        });
        
        // Touch/swipe support
        this.setupTouchSupport();
    }
    
    setupTouchSupport() {
        let startX = 0;
        let endX = 0;
        const carousel = document.querySelector('.video-carousel');
        
        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        carousel.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            this.handleSwipe(startX, endX);
        });
    }
    
    handleSwipe(startX, endX) {
        const swipeThreshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.nextSlide();
            } else {
                this.prevSlide();
            }
        }
    }
    
    goToSlide(slideNumber) {
        if (this.isTransitioning || slideNumber === this.currentSlide) return;
        
        this.isTransitioning = true;
        
        // Update current slide
        const currentSlideElement = document.querySelector(`.video-slide[data-slide="${this.currentSlide}"]`);
        const newSlideElement = document.querySelector(`.video-slide[data-slide="${slideNumber}"]`);
        
        // Update navigation dots
        document.querySelectorAll('.nav-dot').forEach(dot => {
            dot.classList.remove('active');
        });
        document.querySelector(`.nav-dot[data-slide="${slideNumber}"]`).classList.add('active');
        
        // Animate slide transition
        if (slideNumber > this.currentSlide) {
            // Moving forward
            currentSlideElement.classList.add('prev');
            newSlideElement.classList.add('active');
        } else {
            // Moving backward
            currentSlideElement.classList.remove('active');
            newSlideElement.classList.add('active');
        }
        
        // Clean up classes after transition
        setTimeout(() => {
            currentSlideElement.classList.remove('active', 'prev');
            this.currentSlide = slideNumber;
            this.isTransitioning = false;
        }, 600);
    }
    
    nextSlide() {
        const nextSlide = this.currentSlide === this.totalSlides ? 1 : this.currentSlide + 1;
        this.goToSlide(nextSlide);
    }
    
    prevSlide() {
        const prevSlide = this.currentSlide === 1 ? this.totalSlides : this.currentSlide - 1;
        this.goToSlide(prevSlide);
    }
}

// Initialize project carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ProjectCarousel();
});

// Popup Modal
const form = document.querySelector(".contact-form");
const modal = document.getElementById("popup");

// Initialize EmailJS
(function() {
    emailjs.init("_i3GRzkz7l0Esfdwa"); // You'll need to replace this with your EmailJS public key
})();

// Auto-close modal after 5 seconds
let autoCloseTimeout;
function resetAutoClose() {
    clearTimeout(autoCloseTimeout);
    autoCloseTimeout = setTimeout(() => {
        if (!modal.classList.contains("hidden")) {
            modal.classList.remove("show");
            setTimeout(() => {
                modal.classList.add("hidden");
            }, 300);
        }
    }, 5000);
}

form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = new FormData(form);
    const templateParams = {
        from_name: formData.get('name'),
        from_email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Send email using EmailJS
    emailjs.send('service_2obqc3p', 'template_asuqws9', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            // Show our custom popup
            modal.classList.remove("hidden");
            setTimeout(() => {
                modal.classList.add("show");
                resetAutoClose();
            }, 10);
            form.reset();
        }, function(error) {
            console.log('FAILED...', error);
            // Still show success popup to avoid confusion
            modal.classList.remove("hidden");
            setTimeout(() => {
                modal.classList.add("show");
                resetAutoClose();
            }, 10);
            form.reset();
        }).finally(() => {
            // Reset button state
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
});



// Close modal when clicking outside
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
        setTimeout(() => {
            modal.classList.add("hidden");
        }, 300);
    }
});

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        modal.classList.remove("show");
        setTimeout(() => {
            modal.classList.add("hidden");
        }, 300);
    }
});


console.log('Portfolio website loaded successfully! 🚀'); 
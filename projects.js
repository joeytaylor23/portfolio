// Projects Page Functionality

// Mobile menu functionality
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

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    
    // Reset hamburger bars
    const bars = hamburger.querySelectorAll('.bar');
    bars.forEach(bar => {
        bar.style.transform = 'none';
    });
}));

// Smooth scrolling for navigation links
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

// Projects filtering and search functionality
class ProjectsManager {
    constructor() {
        this.projects = document.querySelectorAll('.project-card');
        this.searchInput = document.getElementById('project-search');
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.currentFilter = 'all';
        this.currentSearch = '';
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.setupAnimations();
    }
    
    bindEvents() {
        // Search functionality
        this.searchInput.addEventListener('input', (e) => {
            this.currentSearch = e.target.value.toLowerCase();
            this.filterProjects();
        });
        
        // Filter functionality
        this.filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Update active button
                this.filterButtons.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                
                // Update current filter
                this.currentFilter = e.target.dataset.filter;
                this.filterProjects();
            });
        });
    }
    
    filterProjects() {
        this.projects.forEach(project => {
            const category = project.dataset.category;
            const tags = project.dataset.tags.toLowerCase();
            const title = project.querySelector('h3').textContent.toLowerCase();
            const description = project.querySelector('p').textContent.toLowerCase();
            
            // Check if project matches current filter
            const matchesFilter = this.currentFilter === 'all' || 
                                category.includes(this.currentFilter) || 
                                tags.includes(this.currentFilter);
            
            // Check if project matches search
            const matchesSearch = this.currentSearch === '' ||
                                title.includes(this.currentSearch) ||
                                description.includes(this.currentSearch) ||
                                tags.includes(this.currentSearch);
            
            // Show/hide project based on filters
            if (matchesFilter && matchesSearch) {
                project.style.display = 'block';
                project.style.animation = 'fadeInUp 0.6s ease forwards';
            } else {
                project.style.display = 'none';
            }
        });
        
        // Update results count
        this.updateResultsCount();
    }
    
    updateResultsCount() {
        const visibleProjects = Array.from(this.projects).filter(project => 
            project.style.display !== 'none'
        );
        
        // You can add a results counter here if needed
        console.log(`${visibleProjects.length} projects found`);
    }
    
    setupAnimations() {
        // Add staggered animation to project cards
        this.projects.forEach((project, index) => {
            project.style.animationDelay = `${index * 0.1}s`;
            project.classList.add('fade-in');
        });
    }
}

// Initialize projects manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ProjectsManager();
});

// Navbar scroll effect
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

// Add fade-in animation for project cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = `${index * 0.1}s`;
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe project cards for animation
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(el => observer.observe(el));
});

console.log('Projects page loaded successfully! 🚀'); 
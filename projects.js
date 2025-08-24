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
        this.filterDropdown = document.getElementById('filter-dropdown-content');
        this.filterDropdownBtn = document.getElementById('filter-dropdown-btn');
        this.filterCheckboxes = document.querySelectorAll('.filter-checkbox input');
        this.activeFiltersContainer = document.getElementById('active-filters');
        this.selectedFilters = new Set(['all']);
        this.currentSearch = '';
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.setupAnimations();
        this.updateActiveFilters();
    }
    
    bindEvents() {
        // Search functionality
        this.searchInput.addEventListener('input', (e) => {
            this.currentSearch = e.target.value.toLowerCase();
            this.filterProjects();
        });
        
        // Dropdown toggle
        this.filterDropdownBtn.addEventListener('click', () => {
            this.toggleDropdown();
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.filterDropdownBtn.contains(e.target) && !this.filterDropdown.contains(e.target)) {
                this.closeDropdown();
            }
        });
        
        // Filter checkbox changes
        this.filterCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                this.handleFilterChange(e.target);
            });
        });
    }
    
    toggleDropdown() {
        this.filterDropdown.classList.toggle('show');
        this.filterDropdownBtn.classList.toggle('active');
    }
    
    closeDropdown() {
        this.filterDropdown.classList.remove('show');
        this.filterDropdownBtn.classList.remove('active');
    }
    
    handleFilterChange(checkbox) {
        if (checkbox.value === 'all') {
            // If "All" is checked, uncheck others and check only "All"
            if (checkbox.checked) {
                this.filterCheckboxes.forEach(cb => {
                    if (cb !== checkbox) cb.checked = false;
                });
                this.selectedFilters.clear();
                this.selectedFilters.add('all');
            } else {
                // If "All" is unchecked, check at least one other filter
                const otherFilters = Array.from(this.filterCheckboxes).filter(cb => cb !== checkbox);
                if (otherFilters.every(cb => !cb.checked)) {
                    checkbox.checked = true;
                    return;
                }
            }
        } else {
            // If other filter is checked, uncheck "All"
            if (checkbox.checked) {
                const allCheckbox = document.querySelector('.filter-checkbox input[value="all"]');
                allCheckbox.checked = false;
                this.selectedFilters.delete('all');
                this.selectedFilters.add(checkbox.value);
            } else {
                this.selectedFilters.delete(checkbox.value);
                // If no filters selected, select "All"
                if (this.selectedFilters.size === 0) {
                    const allCheckbox = document.querySelector('.filter-checkbox input[value="all"]');
                    allCheckbox.checked = true;
                    this.selectedFilters.add('all');
                }
            }
        }
        
        this.updateActiveFilters();
        this.filterProjects();
    }
    
    updateActiveFilters() {
        this.activeFiltersContainer.innerHTML = '';
        
        if (this.selectedFilters.has('all')) {
            this.activeFiltersContainer.innerHTML = '<span class="filter-tag">All Projects</span>';
        } else {
            this.selectedFilters.forEach(filter => {
                const filterName = this.getFilterDisplayName(filter);
                const filterTag = document.createElement('span');
                filterTag.className = 'filter-tag';
                filterTag.innerHTML = `${filterName} <span class="remove-filter" data-filter="${filter}">×</span>`;
                this.activeFiltersContainer.appendChild(filterTag);
            });
            
            // Add click handlers for remove buttons
            this.activeFiltersContainer.querySelectorAll('.remove-filter').forEach(removeBtn => {
                removeBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const filter = e.target.dataset.filter;
                    const checkbox = document.querySelector(`.filter-checkbox input[value="${filter}"]`);
                    checkbox.checked = false;
                    this.selectedFilters.delete(filter);
                    
                    if (this.selectedFilters.size === 0) {
                        const allCheckbox = document.querySelector('.filter-checkbox input[value="all"]');
                        allCheckbox.checked = true;
                        this.selectedFilters.add('all');
                    }
                    
                    this.updateActiveFilters();
                    this.filterProjects();
                });
            });
        }
    }
    
    getFilterDisplayName(filter) {
        const names = {
            'web': 'Web Applications',
            'desktop': 'Desktop Software',
            'healthcare': 'Healthcare IT',
            'game': 'Games',
            'security': 'Security'
        };
        return names[filter] || filter;
    }
    
    filterProjects() {
        this.projects.forEach(project => {
            const category = project.dataset.category;
            const tags = project.dataset.tags.toLowerCase();
            const title = project.querySelector('h3').textContent.toLowerCase();
            const description = project.querySelector('p').textContent.toLowerCase();
            
            // Check if project matches any selected filter
            const matchesFilter = this.selectedFilters.has('all') || 
                                Array.from(this.selectedFilters).some(filter => 
                                    category.includes(filter) || tags.includes(filter)
                                );
            
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

// Disclaimer sliding animation
document.addEventListener('DOMContentLoaded', () => {
    const disclaimerBox = document.getElementById('disclaimer-box');
    
    if (disclaimerBox) {
        // Show disclaimer after a short delay
        setTimeout(() => {
            disclaimerBox.classList.add('show');
        }, 1000);
        
        // Hide disclaimer after 5 seconds
        setTimeout(() => {
            disclaimerBox.classList.remove('show');
            disclaimerBox.classList.add('hide');
        }, 6000);
        
        // Remove from DOM after animation completes
        setTimeout(() => {
            disclaimerBox.remove();
        }, 7000);
    }
}); 
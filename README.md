# Joey Taylor — Developer Portfolio

An Apple-inspired portfolio website featuring clean design, smooth animations, and modern interactions.

## ✨ Features

- **Apple-Inspired Design**: Clean, minimal design following Apple's design principles
- **Light/Dark Theme**: Smooth theme switching with Apple-like color palette
- **Responsive Layout**: Optimized for all devices with Apple-like breakpoints
- **Smooth Animations**: Subtle, purposeful transitions using cubic-bezier curves
- **Interactive Timeline**: Elegant timeline with hover effects and animations
- **Project Showcase**: Clean project cards with hover interactions
- **Contact Form**: Functional contact form with validation
- **Scroll Effects**: Smooth scroll animations and navbar interactions

## 🚀 Getting Started

1. **Clone or Download** the project files
2. **Open `index.html`** in your web browser
3. **Customize** the content to match your personal information

## 🎨 Customization Guide

### Personal Information

Edit the following sections in `index.html`:

#### Hero Section
```html
<h1 class="hero-title">
    <span class="gradient-text">Your Name</span>
</h1>
<p class="hero-subtitle">Your tagline here</p>
```

#### Code Animation
```html
<div class="code-line indent">name: <span class="string">"Your Name"</span>,</div>
<div class="code-line indent">skills: [<span class="string">"Your Skills"</span>],</div>
<div class="code-line indent">passion: <span class="string">"Your Passion"</span></div>
```

#### About Section
```html
<p>Your personal description here...</p>
```

#### Skills
Update the skill tags in the about section:
```html
<div class="skill-tags">
    <span class="skill-tag">Your Skill 1</span>
    <span class="skill-tag">Your Skill 2</span>
    <!-- Add more skills -->
</div>
```

#### Timeline
Replace the timeline items with your experience:
```html
<div class="timeline-item" data-year="2023">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <h3>Your Job Title</h3>
        <p class="timeline-company">Company Name</p>
        <p class="timeline-description">Your role description</p>
    </div>
</div>
```

#### Projects
Update the project cards with your projects:
```html
<div class="project-card">
    <div class="project-image">
        <!-- Add your project image or keep gradient background -->
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Project description</p>
        <div class="project-tech">
            <span class="tech-tag">Technology Used</span>
        </div>
    </div>
</div>
```

#### Contact Information
Update the contact details:
```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>your.email@example.com</span>
</div>
<div class="contact-item">
    <i class="fab fa-linkedin"></i>
    <span>linkedin.com/in/yourprofile</span>
</div>
<div class="contact-item">
    <i class="fab fa-github"></i>
    <span>github.com/yourusername</span>
</div>
```

### Styling Customization

#### Colors
The main color scheme uses these CSS variables. You can modify them in `styles.css`:

```css
/* Primary gradient colors */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Background colors */
background: #0a0a0a; /* Dark background */
background: #1a1a2e; /* Secondary background */
```

#### Fonts
The website uses Inter font from Google Fonts. You can change it by:
1. Updating the Google Fonts link in `index.html`
2. Changing the font-family in `styles.css`

### Adding New Sections

To add a new section:

1. **Add HTML structure** in `index.html`
2. **Add CSS styles** in `styles.css`
3. **Add JavaScript interactions** in `script.js` if needed

Example new section:
```html
<section id="new-section" class="new-section">
    <div class="container">
        <h2 class="section-title">New Section</h2>
        <!-- Your content here -->
    </div>
</section>
```

## 📱 Responsive Design

The website is fully responsive and includes:
- Mobile-first design approach
- Collapsible navigation menu for mobile
- Responsive timeline layout
- Flexible project grid
- Optimized typography for all screen sizes

## 🎯 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 🚀 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to Netlify
2. Your site will be deployed instantly
3. Get a custom domain or use the provided Netlify subdomain

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy your site
3. Get automatic deployments on every push

## 🔧 Advanced Customization

### Adding More Animations
You can add more CSS animations by creating new keyframes:

```css
@keyframes yourAnimation {
    0% { /* initial state */ }
    100% { /* final state */ }
}
```

### Custom JavaScript Features
Add new interactive features in `script.js`:

```javascript
// Example: Add a new feature
function yourCustomFeature() {
    // Your code here
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', yourCustomFeature);
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your needs. If you make improvements, consider sharing them with the community!

## 📞 Support

If you need help customizing your portfolio or have questions, feel free to reach out!

---

**Happy coding! 🚀** 
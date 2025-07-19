# Project Carousel Setup Guide

## 🖼️ Adding Your Project Images

The Apple TV-style image carousel is now ready! Here's how to add your project images:

### 1. Project Image Setup

Place your project images in the `ProjectPics/` folder:
```
ProjectPics/
├── tictactoe.png (already exists)
├── task-management.jpg
├── ai-chat.jpg
└── your-project.jpg
```

### 2. Update Project Content

Your projects are already set up in the carousel! Just update the image sources in `index.html`:

```html
<!-- For projects with images -->
<img src="ProjectPics/your-project.jpg" alt="Your Project" class="project-image">

<!-- For projects without images (uses placeholder) -->
<div class="project-placeholder">
    <i class="fas fa-your-icon"></i>
    <span>Your Project Name</span>
</div>
```

### 3. Image Specifications

**Recommended image format:**
- **Format**: JPG, PNG, or WebP
- **Resolution**: 1920x1080 (16:9) or 1280x720 (HD)
- **File size**: Keep under 2MB for fast loading
- **Aspect ratio**: 16:9 works best with the carousel

### 4. Image Content Tips

**What to include in your project images:**
- Screenshot of the main interface
- Key features and functionality
- Clean, professional appearance
- Good contrast and readability
- Consistent style across projects

### 5. Adding More Projects

To add more than 3 projects:

1. **Add new slide HTML** in `index.html`
2. **Add navigation dot** in the carousel-nav section
3. **Update JavaScript** - change `this.totalSlides = 3` to your new total

### 6. Customization

**Change carousel behavior:**
- Edit `script.js` to modify transition timing
- Adjust CSS in `styles.css` for visual changes
- Modify image hover effects and interactions

**Styling options:**
- Change image aspect ratio in CSS
- Adjust carousel height and layout
- Modify colors and animations

### 7. Browser Compatibility

The image carousel works on:
- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

### 8. Performance Tips

- Compress images to reduce file size
- Use WebP format for better compression
- Optimize images for web display
- Consider lazy loading for multiple images

---

**Ready to showcase your projects! 🚀**

The carousel features:
- ✨ Apple TV-style smooth transitions
- 🎮 Touch/swipe support for mobile
- ⌨️ Keyboard navigation (arrow keys)
- 🖼️ Beautiful project image display
- 📱 Fully responsive design
- 🎨 Beautiful Apple-inspired styling 
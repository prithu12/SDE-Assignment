# N7 Digital Banking Platform - Landing Page

A modern, fully responsive landing page for **N7**, a next-generation cloud-based core banking solution. Built with React, Tailwind CSS, and optimized for performance across all devices.

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-06B6D4?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🌟 Features

✨ **Modern Design**
- Professional fintech banking landing page
- Custom gradient backgrounds and animations
- Smooth scrolling marquee animations
- Premium typography with Archivo & Chivo Mono fonts

📱 **Fully Responsive**
- Mobile-first approach
- Optimized for all screen sizes (320px - 1366px+)
- Breakpoints: `max-[480px]`, `max-[600px]`, `max-[900px]`, `max-[1200px]`
- No horizontal overflow on any device

⚡ **Performance Optimized**
- Optimized production build (~69KB gzipped)
- Image optimization with object-fit
- CSS animations with GPU acceleration
- Fast page load times

🎨 **Customizable Theme**
- Custom Tailwind configuration with brand colors
- Accent colors: Cyan (#00B4FD), Sky Blue (#003ACE)
- Dark theme with gradient backgrounds
- Easy to modify colors and typography

🔄 **Smooth Animations**
- Right-to-left marquee scrolling (18s loop)
- Hover states on interactive elements
- Opacity and color transitions
- Backdrop blur effects

---

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Styling**: Tailwind CSS 3
- **Build Tool**: Create React App (react-scripts)
- **Font**: Google Fonts (Archivo, Chivo Mono)
- **Deployment**: Optimized production build

---

## 📋 Prerequisites

- Node.js 14+ or higher
- npm or yarn package manager
- Modern web browser (Chrome, Firefox, Safari, Edge)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/prithu12/SDE-Assignment.git
cd my-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm start
```

The app will open at **http://localhost:3000** and automatically reload on changes.

### 4. Build for Production

```bash
npm run build
```

Creates an optimized production build in the `build/` folder.

---

## 📁 Project Structure

```
my-app/
├── public/
│   ├── index.html              # Main HTML file
│   ├── Frame 114.png           # Dashboard hero image
│   ├── Frame 90.png            # AML dashboard screenshot
│   ├── Frame 99.png            # KYC dashboard screenshot
│   ├── N7.png                  # N7 branding logo
│   ├── Row.png                 # Trusted by partners logo row
│   ├── 1.png                   # Arrow icon
│   └── [other assets]
│
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Fixed navigation with menu & CTA
│   │   ├── Dashboard.jsx       # Hero section with N7 intro
│   │   ├── Marquee.jsx         # Animated scrolling banner
│   │   ├── Solutions.jsx       # 5-product solutions grid
│   │   ├── CoreBanking.jsx     # Core banking & KYC details
│   │   ├── DigitalBanking.jsx  # Digital banking features showcase
│   │   ├── CTABanner.jsx       # CB7 promotional banner
│   │   ├── DigitalBanner.jsx   # N7 details with features
│   │   ├── Insights.jsx        # Blog/insights section
│   │   ├── CaseStudies.jsx     # Case studies showcase
│   │   ├── BannerFooter.jsx    # Bottom CTA banner
│   │   ├── Footer.jsx          # Main footer with links
│   │   └── index.css           # Component styles
│   │
│   ├── App.js                  # Main app component
│   ├── App.css                 # Global app styles
│   ├── index.js                # React entry point
│   ├── index.css               # Global styles & animations
│   └── reportWebVitals.js      # Performance monitoring
│
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind theme customization
├── package.json                # Dependencies & scripts
└── README.md                   # This file
```

---

## 📦 Component Overview

### Header (`Header.jsx`)
- Fixed navigation bar with N7 branding
- Responsive pill-button menu (Solutions, Resources, About Us)
- "REQUEST DEMO" CTA button
- Hidden arrows on mobile (`max-[480px]`)
- Backdrop blur effect with semi-transparent background

### Dashboard (`Dashboard.jsx`)
- Hero section with "The new foundation of modern banking" headline
- Responsive text sizes (64px → 28px on mobile)
- Two action buttons: REQUEST DEMO & CONTACT US
- Featured product image with rounded corners
- Gradient backdrop circle (hidden on mobile)
- Trusted partners logo row

### Marquee (`Marquee.jsx`)
- Animated right-to-left scrolling banner
- 18-second infinite loop animation
- N7/CB7 messaging
- Duplicated items for seamless looping

### Solutions (`Solution.jsx`)
- 5-product card grid (responsive 2-column → 1-column)
- Product icons with gradients
- Description text with hover effects
- Learn more links

### Core Banking (`CoreBanking.jsx`)
- Two-section layout with dashboard images
- AML dashboard showcase
- KYC dashboard with feature list
- Responsive stacking on mobile
- Feature tick marks with icons

### Digital Banking (`DigitalBanking.jsx`)
- Product showcase with phone mockups (3 rows)
- Side-alternating layout
- Feature descriptions with gradient checkmarks
- Light background (#E9F4F9)
- Decorative SVG grid patterns

### Footer (`Footer.jsx`)
- Multi-column layout (Logo, Offices, Links, Socials)
- Responsive flex-wrap on mobile
- Complete contact information
- Social media links
- Brand consistency maintained

---

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the theme:

```javascript
const theme = {
  colors: {
    ink: '#000D12',        // Dark background
    snow: '#E9F4F9',       // Light text
    sky: '#00B4FD',        // Primary accent
    // Add your custom colors here
  }
}
```

### Fonts

The project uses two Google Fonts:

- **Archivo**: Body text, buttons, general content
- **Chivo Mono**: Header navigation (uppercase, tracked)

To change fonts, update imports in `index.css` and modify `tailwind.config.js`.

### Typography

Update text sizes in components using Tailwind classes:
- `text-[64px]` - Large headings
- `text-[32px]` - Section titles
- `text-[18px]` - Body text
- `text-[14px]` - Buttons & captions

---

## 📱 Responsive Design Breakpoints

All components use Tailwind's responsive prefixes:

| Breakpoint | Width | Use Case |
|-----------|-------|----------|
| `max-[480px]` | ≤480px | Small phones |
| `max-[600px]` | ≤600px | Medium phones |
| `max-[900px]` | ≤900px | Tablets |
| `max-[1200px]` | ≤1200px | Large tablets |
| Default | 1200px+ | Desktop |

Example responsive class usage:
```jsx
<h1 className="text-[64px] max-[900px]:text-[42px] max-[600px]:text-[32px] max-[480px]:text-[28px]">
  Responsive Heading
</h1>
```

---

## 🎬 Available Scripts

### Development

```bash
npm start
```
Runs the app in development mode with hot reload.

### Production Build

```bash
npm run build
```
Creates an optimized production build (~69KB gzipped).

### Testing

```bash
npm test
```
Runs the test suite in interactive watch mode.

### Eject (Advanced)

```bash
npm run eject
```
⚠️ **Note**: This is a one-way operation. After ejection, you cannot go back.

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Vercel automatically deploys on every push

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `build/` folder to [Netlify](https://netlify.com)

### Deploy to Traditional Hosting

```bash
npm run build
# Upload the build/ folder to your hosting provider
```

---

## 📊 Performance Metrics

**Production Build Size**:
- JavaScript: 69.04 KB (gzipped)
- CSS: 6.66 KB (gzipped)
- Total: ~75 KB

**Responsive Testing Results**:
- ✅ 320px (Small phones): No horizontal scroll
- ✅ 390px (Mobile): No horizontal scroll
- ✅ 768px (Tablet): No horizontal scroll
- ✅ 1366px (Desktop): No horizontal scroll

---

## 🎯 Best Practices Implemented

✅ **Mobile-First Design**: Components start mobile and scale up
✅ **Performance**: Optimized images, minimal CSS, lazy loading ready
✅ **Accessibility**: Semantic HTML, proper contrast, keyboard navigation
✅ **SEO**: Meaningful content, proper heading hierarchy
✅ **Maintainability**: Organized component structure, consistent styling
✅ **Responsiveness**: No horizontal overflow, fluid layouts
✅ **Animation**: Hardware-accelerated, smooth 60fps animations

---

## 🐛 Troubleshooting

### Port 3000 Already in Use

```bash
# Use a different port
PORT=3001 npm start
```

### Build Errors

```bash
# Clear node_modules and reinstall
rm -r node_modules package-lock.json
npm install
npm run build
```

### Styles Not Updating

```bash
# Clear Tailwind cache
npm run build
# Or restart development server
npm start
```

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Google Fonts](https://fonts.google.com)
- [Create React App Docs](https://create-react-app.dev)

---

## 🔗 Links

- **GitHub Repository**: [SDE-Assignment](https://github.com/prithu12/SDE-Assignment.git)
- **Live Demo**: [N7 Banking Platform](https://your-deployment-url.com) *(Update with actual URL)*

---

## 📝 License

This project is licensed under the **MIT License** - see the LICENSE file for details.

---

## 👨‍💻 Contributing

Contributions are welcome! Please feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📧 Contact & Support

For questions, suggestions, or support:

- **Email**: [contact@n7banking.com](mailto:contact@n7banking.com)
- **GitHub Issues**: [Report a bug](https://github.com/prithu12/SDE-Assignment/issues)
- **Website**: [N7 Banking](https://your-website.com)

---

## 🙏 Acknowledgments

- Design and UI/UX principles following modern fintech standards
- Built with React and Tailwind CSS community best practices
- Inspired by leading digital banking platforms

---

**Last Updated**: May 2026  
**Version**: 1.0.0  
**Status**: ✅ Production Ready

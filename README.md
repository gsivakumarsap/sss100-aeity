# Sathya Sai 100 - Centennial Celebration Website

A beautiful, modern spiritual website celebrating 100 years of love, service, and truth in honor of Bhagawan Sri Sathya Sai Baba. Built with React, Vite, and Tailwind CSS following the highest coding standards.

## 🌟 Features

### 🎨 Modern Design
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Spiritual Color Palette**: Saffron and sacred colors with beautiful gradients
- **Smooth Animations**: CSS animations and transitions for enhanced UX
- **Typography**: Elegant fonts including Playfair Display and Inter

### 🔧 Technical Excellence
- **React 18**: Latest React with hooks and functional components
- **Vite**: Lightning-fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework with custom spiritual theme
- **Formik & Yup**: Robust form handling and validation
- **ESLint**: Code quality and consistency enforcement
- **Responsive Icons**: Lucide React icon library

### 📱 Core Sections
1. **Hero Section**: Dynamic slideshow with spiritual imagery
2. **About Vision**: Information about AEITY Systems and the platform vision
3. **Celebration Highlights**: Interactive tabs showcasing global events, seva programs, virtual darshan, literature, and daily quotes
4. **Get Involved**: Volunteer opportunities, courses, sponsorship, and story sharing
5. **Donation Section**: Secure donation portal with multiple currencies and impact tiers
6. **Media Gallery**: Photos, videos, digital books, and press coverage
7. **Footer**: Comprehensive links, global centers, newsletter signup, and social media

### 🌍 Global Features
- **Multi-language Support**: English, Hindi, Telugu, Tamil, Spanish, French
- **Multi-currency Donations**: INR, USD, EUR support
- **Global Event Map**: Worldwide celebration locations
- **International Centers**: 6 global celebration centers with timezone info
- **Cultural Sensitivity**: Respectful spiritual content and imagery

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd sathya-sai-100-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Lint Code

```bash
npm run lint
npm run lint:fix
```

### Format Code

```bash
npm run format
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.jsx              # Navigation with language selector
│   ├── HeroSection.jsx         # Main hero with slideshow
│   ├── AboutVision.jsx         # Platform vision and AEITY info
│   ├── CelebrationHighlights.jsx # Interactive celebration features
│   ├── GetInvolved.jsx         # Community engagement options
│   ├── DonationSection.jsx     # Secure donation portal
│   ├── MediaGallery.jsx        # Media content showcase
│   ├── Footer.jsx              # Comprehensive footer
│   └── LoadingSpinner.jsx      # Loading component
├── App.jsx                     # Main app component
├── main.jsx                    # App entry point
└── index.css                   # Global styles with Tailwind
```

## 🎨 Design System

### Color Palette
- **Saffron**: Primary spiritual color (`#ed7214`)
- **Sacred**: Neutral grays for text (`#1e293b`)
- **Orange**: Accent colors for gradients
- **White/Gray**: Clean backgrounds and cards

### Typography
- **Headings**: Playfair Display (elegant serif)
- **Body**: Inter (clean sans-serif)
- **Sanskrit**: Noto Serif Devanagari (for spiritual text)

### Components
- **Cards**: Hover effects with shadows and transforms
- **Buttons**: Primary, secondary, and outline variants
- **Forms**: Styled inputs with validation states
- **Navigation**: Smooth scrolling with active states

## 🔒 Security & Best Practices

### Code Quality
- **ESLint Configuration**: Strict linting rules
- **React Best Practices**: Hooks, functional components, proper state management
- **Performance**: Optimized images, lazy loading, efficient re-renders
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation

### Form Security
- **Input Validation**: Client-side validation with Yup
- **XSS Prevention**: Sanitized inputs and outputs
- **CSRF Protection**: Ready for backend integration
- **Secure Donations**: Prepared for payment gateway integration

## 🌐 Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Responsive**: Breakpoints for mobile, tablet, desktop, and large screens

## 📱 Mobile Optimization

- **Touch-Friendly**: Large tap targets and gesture support
- **Fast Loading**: Optimized images and code splitting
- **Offline Ready**: Service worker ready for PWA conversion
- **App-Like**: Full-screen mobile experience

## 🔧 Customization

### Theme Customization
Edit `tailwind.config.js` to modify:
- Color palette
- Font families
- Spacing and sizing
- Animation timings

### Content Updates
- **Images**: Replace placeholder images in components
- **Text**: Update content in component files
- **Languages**: Add translations in Header component
- **Events**: Modify event data in CelebrationHighlights

### Integration Ready
- **Payment Gateways**: Stripe, Razorpay, PayPal integration points
- **CMS**: Headless CMS integration for content management
- **Analytics**: Google Analytics, tracking events ready
- **Social Login**: OAuth integration preparation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Standards
- Follow ESLint configuration
- Use Prettier for formatting
- Write meaningful component names
- Add JSDoc comments for complex functions
- Test responsive design on multiple devices

## 📄 License

This project is created for the spiritual community celebrating Bhagawan Sri Sathya Sai Baba's centennial. 

## 🙏 Acknowledgments

- **Spiritual Inspiration**: Bhagawan Sri Sathya Sai Baba
- **Technical Vision**: AEITY Systems - Sivakumar G
- **Community**: Global Sai devotees and volunteers
- **Technology**: React, Tailwind CSS, and open-source community

## 📞 Support

For technical support or questions:
- **Email**: support@sathyasai100.org
- **Phone**: +91-8555-276-729
- **Website**: [sathyasai100.org](https://sathyasai100.org)

---

**Built with ❤️ for humanity | AEITY Systems - Innovating Spiritually for the Future**
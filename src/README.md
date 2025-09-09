# InternAI - AI-Powered Internship Platform

A modern, aesthetic AI-based internship recommendation system built with Vite React JSX and Tailwind CSS. Features a dark theme with electric blue, neon green, and soft purple accents.

## 🚀 Features

- **AI-Powered Recommendations** - Smart internship matching based on skills and preferences
- **Social Media-Style Feed** - Instagram/TikTok-inspired internship discovery
- **Comprehensive Dashboard** - Analytics, profile management, and progress tracking
- **Responsive Design** - Works perfectly on desktop and mobile
- **Modern UI** - Glass-morphism effects, smooth animations, and gradient themes
- **Interactive Components** - Real-time filtering, infinite scroll, and dynamic content

## 🛠️ Tech Stack

- **Frontend:** React 18 + Vite + JavaScript (JSX)
- **Styling:** Tailwind CSS v4 with custom themes
- **UI Components:** shadcn/ui component library
- **Icons:** Lucide React
- **Charts:** Recharts for data visualization
- **Animations:** Motion (Framer Motion)
- **Development:** Hot reload, ESLint, PostCSS

## 📦 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or download the project**
```bash
cd internai-platform
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to `http://localhost:3000`

## 🎯 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 📁 Project Structure

```
internai-platform/
├── components/
│   ├── LandingPage.jsx      # Marketing landing page
│   ├── HomePage.jsx         # Social feed internship discovery
│   ├── Dashboard.jsx        # Analytics and profile management
│   └── ui/                  # shadcn/ui component library
├── src/
│   └── main.jsx            # React entry point
├── styles/
│   └── globals.css         # Tailwind CSS with custom theme
├── App.jsx                 # Main app with navigation
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Pages & Features

### 1. Landing Page
- Hero section with AI-powered messaging
- Feature showcase with animations
- How-it-works guide
- Professional footer

### 2. Feed Page (Home)
- Instagram/TikTok-style internship cards
- Advanced filtering and sorting
- Infinite scroll loading
- Collapsible sidebar with quick actions
- Real-time alerts and notifications

### 3. Dashboard
- Comprehensive analytics with charts
- AI internship recommendations
- Skill gap analysis
- Course recommendations
- Application tracking
- Profile management

## 🎭 Design System

### Colors
- **Primary:** Electric Blue (#1E90FF)
- **Secondary:** Soft Purple (#9B59B6) 
- **Accent:** Neon Green (#39FF14)
- **Background:** Dark theme with gradients

### Typography
- **Fonts:** Inter, Poppins
- **Weights:** 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

### Effects
- Glass-morphism with backdrop blur
- Gradient text and backgrounds
- Smooth hover animations
- Floating and pulse animations

## 🔧 Customization

### Updating Colors
Edit `styles/globals.css` to modify the color scheme:
```css
:root {
  --primary: #1E90FF;     /* Electric Blue */
  --secondary: #9B59B6;   /* Soft Purple */
  --accent: #39FF14;      /* Neon Green */
}
```

### Adding New Components
1. Create component in `components/` directory
2. Use JSX syntax (no TypeScript types needed)
3. Import and use in your pages

### Modifying Animations
Update animation classes in `styles/globals.css` or use Motion components for custom animations.

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first design approach
- Adaptive navigation and sidebars
- Flexible grid layouts
- Touch-friendly interactions

## 🚀 Production Deployment

1. **Build the project**
```bash
npm run build
```

2. **Deploy the `dist` folder** to your hosting service:
- Vercel, Netlify, GitHub Pages
- AWS S3 + CloudFront
- Any static hosting provider

## 🆘 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3001
```

### Clear Cache Issues
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Dependencies Issues
Make sure you have Node.js 18+ installed:
```bash
node --version
npm --version
```

## 📄 License

This project is built for educational and demonstration purposes. Feel free to use it as a starting point for your own projects.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features  
- Submit pull requests
- Improve documentation

---

**Built with ❤️ using Vite + React + Tailwind CSS**
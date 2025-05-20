# Ralph Rizk - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features a futuristic design with smooth animations, interactive components, and optimized performance.

## 🌟 Features

- 🎨 Modern, futuristic UI design
- 📱 Fully responsive layout
- ⚡ Built with React + TypeScript + Vite
- 🎭 Smooth animations and transitions
- 🌈 Interactive 3D card effects
- 🔍 SEO optimized
- 🚀 Performance optimized
- 📊 Project showcase with filtering
- 📝 Dynamic content management
- 📬 Contact form
- 🎯 Particle effects background

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** 
  - Radix UI
  - Lucide Icons
  - Custom components
- **Animations:** 
  - GSAP
  - Framer Motion
  - Custom animations
- **Particles:** tsparticles
- **Form Handling:** React Hook Form
- **State Management:** React Hooks
- **Routing:** React Router DOM

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm (v7 or higher) or yarn (v1.22 or higher)
- Git

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ralphrizk02/Portfolio-website.git
   cd Portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

## 📁 Project Structure

```
Portfolio-website/
├── public/
│   ├── assets/         # Static assets
│   │   ├── ui/        # Reusable UI components
│   │   └── projects/  # Project-related components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   ├── pages/         # Page components
│   └── utils/         # Helper functions
├── index.html         # Entry HTML file
├── package.json       # Project dependencies
├── tsconfig.json      # TypeScript configuration
├── vite.config.ts     # Vite configuration
└── tailwind.config.ts # Tailwind CSS configuration
```

## 🎨 Customization Guide

### 1. Personal Information

#### Hero Section
Edit `src/components/Hero.tsx`:
- Update profile image in `/public/assets/profile.jpg`
- Modify name and title
- Update social media links

#### About Section
Edit `src/components/About.tsx`:
- Update education details
- Modify work experience
- Add/remove experience cards

#### Skills Section
Edit `src/components/Skills.tsx`:
- Modify skill categories
- Update skill lists
- Change icons and colors

#### Projects Section
Edit `src/components/projects/projectData.ts`:
- Add/remove projects
- Update project details
- Modify project tags

### 2. Styling

#### Colors
Edit `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      'futuristic-blue': '#00a8ff',
      'futuristic-purple': '#6e59a5',
      // Add more custom colors
    }
  }
}
```

#### Animations
Edit `src/index.css`:
- Modify animation keyframes
- Update transition effects
- Customize hover states

### 3. SEO Optimization

#### Meta Tags
Edit `index.html`:
- Update title and description
- Modify Open Graph tags
- Update Twitter Card tags

#### Sitemap
Edit `public/sitemap.xml`:
- Update URLs
- Modify priorities
- Change update frequencies

## 🔧 Configuration Files

### Vite Configuration
`vite.config.ts`:
```typescript
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Add more plugins
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

### TypeScript Configuration
`tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## 🚀 Deployment

### Vercel Deployment
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Environment Variables
Create `.env` file:
```env
VITE_API_URL=your_api_url
VITE_GA_ID=your_google_analytics_id
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎯 Performance Optimization

- Image optimization
- Code splitting
- Lazy loading
- Caching strategies
- Minification
- Compression

## 🔍 SEO Features

- Meta tags optimization
- Structured data
- Sitemap generation
- Robots.txt configuration
- Open Graph tags
- Twitter Cards
- Canonical URLs

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Format code
npm run format
```

## 📚 Dependencies

### Production Dependencies
```json
{
  "dependencies": {
    "@hookform/resolvers": "^3.9.0",
    "@radix-ui/react-*": "latest",
    "@react-three/drei": "^9.99.7",
    "@react-three/fiber": "^8.15.19",
    "@tsparticles/react": "^3.0.0",
    "@tsparticles/slim": "^3.8.1",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "gsap": "^3.12.7",
    "lucide-react": "^0.462.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.53.0",
    "react-router-dom": "^6.26.2",
    "tailwind-merge": "^2.5.2",
    "tailwindcss-animate": "^1.0.7"
  }
}
```

### Development Dependencies
```json
{
  "devDependencies": {
    "@types/node": "^22.5.5",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react-swc": "^3.5.0",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.11",
    "typescript": "^5.5.3",
    "vite": "^5.4.1"
  }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Author

Ralph Rizk
- Website: [ralphrizk.com](https://ralphrizk.com)
- LinkedIn: [ralph-rizk02](https://www.linkedin.com/in/ralph-rizk02/)
- GitHub: [@ralphrizk](https://github.com/ralphrizk)

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)
- [GSAP](https://greensock.com/gsap/)
- [tsparticles](https://particles.js.org/)




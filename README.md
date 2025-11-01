# Shubham Hirani - Portfolio Website

A modern, responsive portfolio website showcasing my experience as a Software Engineer II specializing in AI integration and backend development.

## About

This portfolio website highlights my expertise in:
- AI Integration (OpenAI, Google Gemini, Anthropic)
- Backend Development (Python, Node.js, TypeScript)
- Full-stack Development
- Cloud Technologies (GCP)
- Microservices Architecture

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Smooth Animations**: Scroll-triggered animations and transitions throughout the site
- **Floating Background**: Animated tech stack icons floating in the background
- **Dark/Light Mode**: Theme toggle with AI-focused color scheme
- **Interactive Navigation**: Sticky navbar with active section highlighting
- **Project Showcase**: Featured AI projects with GitHub links
- **Contact Form**: Direct email integration for easy communication
- **Resume Download**: One-click resume download functionality

## Tech Stack

This project is built with modern web technologies:

- **React 18.3.1** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Lucide React** - Beautiful icon library
- **Framer Motion** - Animation utilities

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx           # Landing section with CTA buttons
│   ├── About.tsx          # About me section
│   ├── Skills.tsx         # Technical skills showcase
│   ├── Experience.tsx     # Professional experience
│   ├── Projects.tsx       # Featured projects
│   ├── Education.tsx      # Educational background
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Footer section
│   ├── Navbar.tsx         # Navigation bar
│   ├── FloatingSkills.tsx # Background animation
│   └── ui/                # shadcn/ui components
├── hooks/
│   └── use-scroll-animation.tsx # Custom scroll animation hook
├── pages/
│   └── Index.tsx          # Main page component
└── lib/
    └── utils.ts           # Utility functions
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd shubham-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

## Key Features Implemented

### Animation System
- Custom scroll-triggered animations using Intersection Observer API
- Persistent animations that don't disappear after loading
- Staggered animation delays for visual appeal
- Floating background tech icons with random movement patterns

### Theme System
- AI/Developer-centric color scheme
- Blue (#217 91% 60%) and Purple (#262 83% 58%) gradient theme
- Cyberpunk-inspired dark mode
- Smooth theme transitions

### Brand Integration
- LinkedIn-styled button (#0A66C2)
- GitHub-styled button (adaptive black/white)
- Gmail-styled button (#EA4335)
- Consistent hover effects and animations

## Contact

- **Email**: shubhamhirani27@gmail.com
- **Phone**: +91 63556-21056
- **Location**: Ahmedabad, Gujarat, India
- **LinkedIn**: [linkedin.com/in/shubhamhirani](https://www.linkedin.com/in/shubhamhirani/)
- **GitHub**: [github.com/shubham-hirani](https://github.com/shubham-hirani/)

## License

© 2025 Shubham Hirani. All rights reserved.

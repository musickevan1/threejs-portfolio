# Matrix-Themed Portfolio

A modern, responsive portfolio website featuring a unique Matrix-inspired design with interactive binary rain animation and smooth section transitions.

![Matrix Portfolio Preview](https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200&h=600)

## Features

- 🎨 Matrix-inspired design with animated binary rain background
- 📱 Fully responsive layout for all device sizes
- ⚡ Built with Vite for optimal performance
- 🎭 Smooth animations and transitions using Framer Motion
- 🎮 Interactive 3D elements with Three.js
- 🎯 Accessible and SEO-friendly
- 🔄 Auto-scrolling presentation mode

## Tech Stack

- **Framework:** React with TypeScript
- **Styling:** Tailwind CSS
- **3D Graphics:** Three.js with React Three Fiber
- **Animations:** Framer Motion, GSAP
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Fonts:** Share Tech Mono, Orbitron

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/matrix-portfolio.git
cd matrix-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── animation/     # Loading and transition animations
│   ├── effects/       # Visual effects (binary rain, backgrounds)
│   ├── layout/        # Layout components
│   ├── navigation/    # Navigation controls
│   └── sections/      # Main content sections
├── hooks/             # Custom React hooks
├── store/            # State management
└── types/            # TypeScript type definitions
```

## Features in Detail

### Binary Rain Animation
- Real-time 3D binary rain effect using Three.js
- Optimized performance with instanced rendering
- Configurable density and speed

### Responsive Design
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly navigation

### Auto-Scroll Presentation
- Automatic section transitions
- Configurable timing
- Play/pause controls

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Matrix digital rain concept inspired by The Matrix film series
- 3D graphics implementation inspired by React Three Fiber examples
- Icons provided by Lucide React

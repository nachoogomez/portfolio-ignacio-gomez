# Portfolio

A modern, performant, and accessible portfolio website built with React 19, Bun, and Tailwind CSS.

## Features

- **Modern Tech Stack** - Built with React 19, TypeScript, and Bun for optimal performance
- **Responsive Design** - Fully responsive layout that works on all devices
- **Dark Mode** - Built-in theme switching with persistent preferences
- **Internationalization** - Multi-language support with i18next
- **Accessible** - WCAG-compliant components with proper ARIA attributes
- **Type-Safe** - Full TypeScript coverage for better developer experience
- **Animated UI** - Smooth animations and transitions for enhanced UX
- **Contact Form** - Integrated email functionality with EmailJS

## Tech Stack

### Core
- **[Bun](https://bun.sh/)** - Fast JavaScript runtime and package manager
- **[React 19](https://react.dev/)** - Modern React with new features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[class-variance-authority](https://cva.style/)** - Component variant management

### Code Quality
- **[Ultracite](https://github.com/biomejs/ultracite)** - Zero-config Biome preset
- **[Biome](https://biomejs.dev/)** - Fast linting and formatting
- **[Lefthook](https://github.com/evilmartians/lefthook)** - Git hooks manager

### Other
- **[i18next](https://www.i18next.com/)** - Internationalization framework
- **[EmailJS](https://www.emailjs.com/)** - Email service integration

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) >= 1.0

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Navigate to the project directory
cd portfolio

# Install dependencies
bun install
```

### Development

```bash
# Start the development server with hot reload
bun run dev
```

The application will be available at `http://localhost:3000` (or the next available port).

### Building for Production

```bash
# Build the project
bun run build

# Start the production server
bun start
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/        # React components
│   │   ├── animate-ui/    # Animated component primitives
│   │   ├── ui/            # Reusable UI components
│   │   ├── About-section.tsx
│   │   ├── Contact-section.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Proyects.tsx
│   │   └── ThemeProvider.tsx
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── pages/             # Page components
│   ├── App.tsx            # Main app component
│   ├── frontend.tsx       # Frontend entry point
│   ├── i18n.ts            # Internationalization config
│   └── index.tsx          # Server entry point
├── public/                # Static assets
├── .claude/               # Claude Code configuration
├── package.json
├── tsconfig.json
└── vercel.json            # Vercel deployment config
```

## Code Standards

This project follows strict code quality standards enforced by [Ultracite](https://github.com/biomejs/ultracite). See [.claude/CLAUDE.md](.claude/CLAUDE.md) for detailed coding guidelines.

### Key Principles
- Accessible, performant, type-safe, and maintainable code
- Modern JavaScript/TypeScript best practices
- React 19+ features (refs as props)
- Semantic HTML and proper ARIA attributes

### Code Quality Commands

```bash
# Format and fix all auto-fixable issues
npx ultracite fix

# Check for issues without fixing
npx ultracite check

# Diagnose setup issues
npx ultracite doctor
```

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/).

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio)

The [vercel.json](vercel.json) configuration ensures Bun is properly installed and used for the build process.

### Manual Deployment

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect the configuration
4. Deploy

## Environment Variables

If you're using the contact form with EmailJS, you'll need to set up the following environment variables:

```env
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key
```

## Contributing

Contributions are welcome! Please follow the code standards outlined in [.claude/CLAUDE.md](.claude/CLAUDE.md).

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Run `npx ultracite fix` before committing
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)

---

Built with ❤️ using Bun and React 19

# 👻 Boo Coin Landing Page

A modern, responsive landing page for Boo Coin - a spooky meme cryptocurrency that brings together community, nostalgia, and blockchain innovation.

## ✨ Features

- **Hero Section** - Eye-catching introduction with animated elements
- **About Boo** - Comprehensive information about the Boo Coin project
- **Interactive Stats** - Real-time tokenomics and community metrics
- **Story Time** - Engaging narrative about Boo Coin's origin and mission
- **Memory Section** - Community-driven content and experiences
- **Legacy Section** - Long-term vision and roadmap
- **Responsive Design** - Optimized for all devices and screen sizes
- **Modern UI** - Beautiful animations and micro-interactions

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development with full IntelliSense
- **Vite** - Lightning-fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **shadcn/ui** - High-quality, accessible UI components
- **Lucide React** - Beautiful, customizable icons

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd Boo-Coin
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## 📁 Project Structure

```
src/
├── components/
│   ├── sections/          # Page sections (Hero, About, Stats, etc.)
│   └── ui/               # Reusable UI components
├── config/               # App configuration
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── assets/              # Static assets
```

## 🎨 Customization

The project uses a modular component structure making it easy to:

- Modify existing sections in `src/components/sections/`
- Add new UI components in `src/components/ui/`
- Update styling with Tailwind CSS classes
- Configure app settings in `src/config/app.config.ts`

## 🔧 Development

### ESLint Configuration

For production applications, consider enabling type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
```

## 📱 Responsive Design

The landing page is fully responsive and optimized for:

- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎃 About Boo Coin

Boo Coin is more than just a meme cryptocurrency - it's a community-driven project that celebrates the spooky, fun side of blockchain technology while building real utility and value for holders.

---

Built with 💜 for the Boo Coin community

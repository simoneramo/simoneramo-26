# Simon Eramo - Portfolio Website

This is the personal portfolio website for **Simon Eramo**, a UI/UX Product Designer based in Melbourne. It showcases his professional experience, design philosophy, skills, and projects.

Built with performance, accessibility, and ease of management in mind, this site leverages a modern JAMstack architecture.

## 🚀 Technology Stack

- **Framework**: [Astro](https://astro.build) - For high-performance, content-focused pages.
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS for rapid, responsive design.
- **Content**: [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/) - Typed, file-based content management.
- **Interactivity**: [Alpine.js](https://alpinejs.dev) - Lightweight JavaScript for interactive elements (mobile menu, contact form).
- **Deployment**: [Vercel](https://vercel.com) - For global edge deployment.

## ✨ Features

- **Performance First**: Static site generation (SSG) with Astro for blazing fast load times.
- **Fully Accessible**: Designed with WCAG 2.1 AA+ standards in mind (semantic HTML, high contrast).
- **Dark Mode**: Native support for light and dark themes.
- **Content Managed**: Homepage text and section data are editable from `src/content/homepage/index.md`.
- **Responsive**: Mobile-first design that adapts seamlessly to all device sizes.
- **Contact Form**: Integrated working contact form.

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd simoneramo-26
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   - **Site**: `http://localhost:4321`
   - **Admin**: `http://localhost:4321/admin/index.html` (if used in your workflow)

### Building for Production

To build the site for deployment:

```bash
npm run build
```

This will generate a production-ready build in the `.vercel/output` or `dist/` directory, depending on the adapter configuration.

## 📝 Content Management

This project uses Astro content collections. Update homepage content in `src/content/homepage/index.md` and Astro components/pages in `src/`.

## 📄 License

All rights reserved. © 2026 Simon Eramo.

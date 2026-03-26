# Simon Eramo - Portfolio Website

This is the personal portfolio website for **Simon Eramo**, a UI/UX Product Designer based in Melbourne. It showcases his professional experience, design philosophy, skills, and projects.

Built with performance, accessibility, and ease of management in mind, this site leverages a modern JAMstack architecture.

## 🚀 Technology Stack

- **Framework**: [Astro](https://astro.build) - For high-performance, content-focused pages.
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS for rapid, responsive design.
- **Content**: [TinaCMS](https://tina.io/) & Astro Content Collections - For visual, file-based content management.
- **Interactivity**: [Alpine.js](https://alpinejs.dev) - Lightweight JavaScript for interactive elements (mobile menu, contact form).
- **Deployment**: [Vercel](https://vercel.com) - For global edge deployment.

## ✨ Features

- **Performance First**: Static site generation (SSG) with Astro for blazing fast load times.
- **Fully Accessible**: Designed with WCAG 2.1 AA+ standards in mind (semantic HTML, high contrast).
- **Dark Mode**: Native support for light and dark themes.
- **Content Managed**: Completely manageable via local Markdown files or the TinaCMS visual editor.
- **Responsive**: Mobile-first design that adapts seamlessly to all device sizes.
- **Contact Form**: Integrated working contact form powered by Resend.

## 🛠️ Getting Started & Installation

This guide details how to run the project locally or reuse this skeleton for a new website.

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **Git**

### 1. Installation

1. **Clone the repository** (or copy to new directory):
   ```bash
   git clone <repository-url> simoneramo-26
   cd simoneramo-26
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### 2. Environment Setup

1. Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```

2. **TinaCMS Configuration**: Set up a project at [Tina.io](https://tina.io/).
3. **Resend Configuration**: Sign up at [resend.com](https://resend.com) and create an API key for the contact form.

Add the following variables to your `.env` file:
```env
# TinaCMS keys (From your project settings on Tina.io)
NEXT_PUBLIC_TINA_CLIENT_ID=your_client_id_here
TINA_TOKEN=your_read_write_token_here

# Resend Email Configuration (For Contact Form)
RESEND_API_KEY=re_your_api_key_here
SITE_OWNER_EMAIL=your-email@example.com
RESEND_FROM_EMAIL=onboarding@resend.dev # Or your verified domain email

# Optional: Branch name (defaults to main)
GITHUB_BRANCH=main
```

### 3. Running Locally

Start the development server (runs both the Astro site and TinaCMS admin interface):

```bash
npm run dev
```

- **Website**: `http://localhost:4321`
- **Tina Admin**: `http://localhost:4321/admin` (Enter edit mode here)

### 4. Customization Checklist (If reusing skeleton)

- **SEO & Meta Tags**: Update default titles, descriptions, and Open Graph URLs in `src/layouts/MainLayout.astro`.
- **Favicons**: Replace favicon files in `public/`.
- **Global Content**: Update global site data in `src/content/globals/index.md` or via TinaCMS.
- **Header/Nav**: Edit `src/components/Header.astro` and modify navigation links or the logo.
- **Footer**: Edit `src/components/Footer.astro`.
- **Logos**: Add client logos to `src/assets/logos/` and update `src/components/LogoCloud.astro`.
- **Styling**: Tailwind config is in `astro.config.mjs` (using v4 Vite plugin) or `src/styles/global.css`. Global styles are in `src/styles/global.css`.

## 📝 Content Management (TinaCMS)

- The content schema is defined in `tina/config.ts`. Run `npm run dev` to regenerate the schema if changed.
- Visit `http://localhost:4321/admin` to visually edit the site locally.
- **Collections Include**: Homepage, About, Services, Insights (Blog), Team, and Globals.

## ✉️ Contact Form (Resend Setup)

The contact form is configured to use **Resend**. For production use:
1. Ensure your `.env` file has the correct `RESEND_API_KEY`, `SITE_OWNER_EMAIL`, and `RESEND_FROM_EMAIL`.
2. **Custom Domain**: For best deliverability, go to [Resend Domains](https://resend.com/domains), verify your domain, and set `RESEND_FROM_EMAIL` to your verified sender (e.g., `contact@yourdomain.com`).
3. Form data is sent securely to the `/api/contact` Astro API route, which uses Resend to deliver the email without exposing API keys to the browser.

## 🚀 Building & Deployment (Vercel)

This project is configured for Vercel via `@astrojs/vercel`.

1. To test the production build locally:
   ```bash
   npm run build
   ```
2. For Vercel deployment, push your code to a Git repository and import it into Vercel.
3. **Important**: Add all Environment Variables (`NEXT_PUBLIC_TINA_CLIENT_ID`, `TINA_TOKEN`, `RESEND_API_KEY`, `SITE_OWNER_EMAIL`, `RESEND_FROM_EMAIL`) in the Vercel project settings.

## 🔧 Troubleshooting

- **TinaCMS Errors**: If you see "Tina Cloud Protocol Error", verify your Client ID and Token in `.env`.
- **Email service is not configured / Emails not arriving**: Verify `RESEND_API_KEY` and other Resend variables are set in `.env` or your hosting platform. Check your spam folder or the Resend dashboard logs. Restart your dev server after adding environment variables.
- **Build fails**: Run `npm run build` locally. Common issues include missing fields in Markdown content required by the Tina schema.

## 📄 License

All rights reserved. © 2026 Simon Eramo.

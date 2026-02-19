# Project Installation & Setup Guide

This guide details how to reuse this project skeleton for a new website.

## 1. Prerequisites

- **Node.js** (v18 or higher recommended)
- **Git**

## 2. Installation

1. **Clone the repository** (or copy the files to a new directory):

    ```bash
    git clone <your-repo-url> new-project-name
    cd new-project-name
    ```

2. **Install dependencies**:

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

## 3. Environment Setup

1. Create a `.env` file in the root directory (you can copy `.env.example` if it exists, otherwise create new):

    ```bash
    cp .env.example .env
    ```

2. This project uses **TinaCMS** for content management. You will need to set up a project at [Tina.io](https://tina.io/).

3. Add the following variables to your `.env` file:

    ```env
    # TinaCMS keys (Get these from your project settings on Tina.io)
    NEXT_PUBLIC_TINA_CLIENT_ID=your_client_id_here
    TINA_TOKEN=your_read_write_token_here

    # Resend Email Configuration (For Contact Form)
    RESEND_API_KEY=re_your_api_key_here
    SITE_OWNER_EMAIL=your-email@example.com
    RESEND_FROM_EMAIL=onboarding@resend.dev (or your verified domain email)

    # Optional: Branch name (defaults to main)
    GITHUB_BRANCH=main
    ```

## 4. Running Locally

Start the development server. This runs both the Astro site and the TinaCMS admin interface.

```bash
npm run dev
```

- **Website**: [http://localhost:4321](http://localhost:4321)
- **Tina Admin**: [http://localhost:4321/admin](http://localhost:4321/admin) (Enter edit mode here)

## 5. Customization Checklist

To adapt this skeleton for a new brand, update the following files:

### Content & Metadata

- **SEO & Meta Tags**: Update default titles, descriptions, and Open Graph URLs in `src/layouts/MainLayout.astro`.
- **Favicons**: Replace favicon files in `public/`.
- **Global Content**: Update global site data (Footer links, contact info, etc.) in `src/content/globals/index.md` or via TinaCMS under "Globals".

### Components & Branding

- **Header/Nav**:
  - Edit `src/components/Header.astro`.
  - Update the logo (currently an SVG or text).
  - Modify navigation links in the `navLinks` array.
- **Footer**:
  - Edit `src/components/Footer.astro`.
  - Update copyright logic or hardcoded links if any.
- **Logos**: Add your client's logos to `src/assets/logos/` and update `src/components/LogoCloud.astro`.

### Styling

- **Colors & Fonts**:
  - This project uses TailwindCSS.
  - Font setup is in `src/layouts/MainLayout.astro` (using `@fontsource`).
  - Global styles are in `src/styles/global.css`.
  - Tailwind config is in `astro.config.mjs` (using the v4 Vite plugin) or `src/styles/global.css` for theme variables if applicable.

## 6. Content Management (TinaCMS)

- The content schema is defined in `tina/config.ts`.
- If you need to add new page types or fields (e.g., a "Team" section or "Services" list), modify `tina/config.ts`.
- Run `npm run dev` after changing the config to regenerate the schema.

### Current Collections

- **Homepage**: Editable hero, features, and other blocks.
- **About**: Company info, mission, values.
- **Services**: Service offerings.
- **Insights (Blog)**: Articles and posts.
- **Team**: Team member profiles.
- **Globals**: Footer setup, miscellaneous global settings.

## 7. Deployment (Vercel)

This project is configured for Vercel (`@astrojs/vercel`).

1. Push your code to a Git repository (GitHub/GitLab/Bitbucket).
2. Import the project into **Vercel**.
3. Vercel should automatically detect Astro.
4. **Important**: Add the Environment Variables (`NEXT_PUBLIC_TINA_CLIENT_ID`, `TINA_TOKEN`) in the Vercel project settings.
5. Deploy!

## 8. Troubleshooting

- **TinaCMS Errors**: If you see "Tina Cloud Protocol Error", check your Client ID and Token in `.env`.
- **Images not loading**: Ensure images are in `public/` or `src/assets/` and referenced correctly.
- **Build fails**: Run `npm run build` locally to see error details. Common issues include missing fields in Markdown content that are required by the schema.

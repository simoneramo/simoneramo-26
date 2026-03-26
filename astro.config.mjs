// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import alpine from '@astrojs/alpinejs';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://simoneramo.com',
    integrations: [alpine(), sitemap()],
    vite: {
        plugins: [tailwindcss()],

    },
    output: 'server',
    adapter: vercel(),
});
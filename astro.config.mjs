// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import alpine from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
	integrations: [alpine()],
	vite: {
		plugins: [tailwindcss()],

	},
	output: 'server',
	adapter: vercel(),
});
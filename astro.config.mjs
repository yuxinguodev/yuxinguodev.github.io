// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://yuxinguodev.github.io',
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			// The one font used across the whole site.
			provider: fontProviders.google(),
			name: 'Google Sans Code',
			cssVariable: '--font-body',
			weights: [400, 500, 700],
			styles: ['normal', 'italic'],
			fallbacks: ['monospace'],
		},
		{
			// Handwritten script, only used for the "For the players" motto.
			provider: fontProviders.google(),
			name: 'Homemade Apple',
			cssVariable: '--font-hand',
			weights: [400],
			styles: ['normal'],
			fallbacks: ['cursive'],
		},
		{
			// Rounded heavy display face, only used for the Galette logo.
			provider: fontProviders.google(),
			name: 'Fredoka',
			cssVariable: '--font-display',
			weights: [700],
			styles: ['normal'],
			fallbacks: ['Arial Rounded MT Bold', 'sans-serif'],
		},
		{
			// Chunky pixel face for the Fuzz Pedal editor labels and buttons.
			provider: fontProviders.google(),
			name: 'Silkscreen',
			cssVariable: '--font-pixel',
			weights: [400, 700],
			styles: ['normal'],
			fallbacks: ['monospace'],
		},
	],
});

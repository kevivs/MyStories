import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// Determine if we're building for GitHub Pages
const isProduction = process.env.NODE_ENV === 'production' || process.argv.includes('build');
const basePath = isProduction ? '/MyStories' : '';

console.log('SvelteKit Config:');
console.log('- NODE_ENV:', process.env.NODE_ENV);
console.log('- Is Production:', isProduction);
console.log('- Base Path:', basePath);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		paths: {
			base: basePath
		},
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// ignore deliberate link to shiny 404 page
				if (path === '/not-found' && referrer === '/blog/how-we-built-our-404-page') {
					return;
				}
				// otherwise fail the build
				throw new Error(message);
			}
		}
	}
};

export default config;

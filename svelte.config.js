import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// Hardcode the base path for GitHub Pages deployment
// For local dev, start with: npm run dev (which sets NODE_ENV=development)
// For build/deploy, this will always use /MyStories
const isDev = process.env.NODE_ENV === 'development';
const basePath = isDev ? '' : '/MyStories';

console.log('SvelteKit Config - NODE_ENV:', process.env.NODE_ENV);
console.log('SvelteKit Config - Base Path:', basePath);

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

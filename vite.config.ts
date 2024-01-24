/// <reference types='vitest' />
/// <reference types='vite/client' />

import react from '@vitejs/plugin-react';
import browserslist from 'browserslist';
import { browserslistToTargets } from 'lightningcss';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	css: {
		lightningcss: {
			drafts: {
				customMedia: true,
			},
			targets: browserslistToTargets(browserslist('defaults'))
		},
		transformer: 'lightningcss',
	},
	plugins: [react()],
	preview: {
		port: 5173,
	},
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: ['./src/setupTests.ts'],
	},
});

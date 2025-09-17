import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	resolve: {
		alias: {
			'@': './src',
		},
	},
	plugins: [tailwindcss()],
	server: {
		port: 8080,
	},
})

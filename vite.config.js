import { defineConfig } from 'vite'
import { extname, relative, resolve } from 'path'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import tailwindcss from 'tailwindcss'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), libInjectCss(), tailwindcss(), dts({ insertTypesEntry: true, exclude: ['docs'] })],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src')
		}
	},
	build: {
		copyPublicDir: false,
		lib: {
			entry: {
				index: resolve(__dirname, 'src', 'index.ts')
				// css: resolve(__dirname, 'src', 'styles', 'index.scss'),
			},
			formats: ['es']
		},
		rollupOptions: {
			external: ['react', 'react/jsx-runtime', resolve(__dirname, 'docs')],
			input: Object.fromEntries(
				// https://rollupjs.org/configuration-options/#input
				glob.sync('src/**/*.{ts,tsx,scss}').map((file) => [
					// 1. The name of the entry point
					// lib/nested/foo.js becomes nested/foo
					relative('src', file.slice(0, file.length - extname(file).length)),
					// 2. The absolute path to the entry file
					// lib/nested/foo.ts becomes /project/lib/nested/foo.ts
					fileURLToPath(new URL(file, import.meta.url))
				])
			),
			output: {
				assetFileNames: 'assets/[name][extname]',
				entryFileNames: '[name].js'
			}
		}
	}
})

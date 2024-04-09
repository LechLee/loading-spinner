import fs from 'fs'
import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import mdx from '@mdx-js/rollup'

import tailwindcss from 'tailwindcss'

function readAliasesFromJsConfig(dir) {
	const configPath = (() => {
		if (fs.existsSync(path.resolve(dir, 'jsconfig.json'))) {
			return path.resolve(dir, 'jsconfig.json')
		}

		return path.resolve(dir, 'tsconfig.json')
	})()
	const config = JSON.parse(fs.readFileSync(configPath, 'utf8'))

	if (config.compilerOptions && config.compilerOptions.paths) {
		const aliases = {}
		const paths = config.compilerOptions.paths

		for (const alias in paths) {
			const aliasValue = paths[alias][0].replace('/*', '')
			aliases[alias.replace('/*', '')] = path.resolve(dir, aliasValue)
		}

		return aliases
	}

	return {}
}

const alias = {
	...readAliasesFromJsConfig(__dirname)
}

// https://vitejs.dev/config/
export default defineConfig({
	root: './docs', // Set the root directory to './stories'
	base: './', // Set the base path to './' as the index.html is in the root of the 'stories' folder
	build: {
		outDir: path.resolve(__dirname, 'dist', 'docs'),
		assetsDir: 'assets', // Change 'stories/assets' to 'assets'
		emitAssets: true,
		rollupOptions: {
			input: path.resolve(__dirname, 'docs', 'index.html') // Update the input path
		}
	},
	plugins: [mdx(), react(), tailwindcss()],
	resolve: {
		alias
	}
})

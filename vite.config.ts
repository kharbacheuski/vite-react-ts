import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path';

export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, process.cwd(), '');
	
	return {
		plugins: [react()],
		build: {
			outDir: 'public',
		},
		resolve: {
			alias: [
				{
					find: /^~(.+)/,
					replacement: path.join(process.cwd(), 'node_modules/$1'),
				},
				{
					find: /^src(.+)/,
					replacement: path.join(process.cwd(), 'src/$1'),
				},
			],
		},
		define: {
            'process.env.REACT_APP_BASE_API_URL': JSON.stringify(env.REACT_APP_BASE_API_URL),
        },
		server: {
			port: 3000,
		},
		preview: {
			port: 3000,
		},
	}
})

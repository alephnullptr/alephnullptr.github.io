import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
    plugins: [solidPlugin()],
    build: {
        outDir: './dist', // Output to `dist/`
        emptyOutDir: true, // Clear `dist/` on each build
    },
});
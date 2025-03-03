import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        solidPlugin(),
        tailwindcss(),
    ],
    build: {
        outDir: './dist', // Output to `dist/`
        emptyOutDir: true, // Clear `dist/` on each build
    },
});
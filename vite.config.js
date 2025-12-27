import { defineConfig } from "vite";

export default defineConfig({
    root : 'familyConnect',
    base : '/familyConnect/',
    build: {
        outDir: '../dist',      // <-- build goes to root /dist folder
        emptyOutDir: true
    }
});
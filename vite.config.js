// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/my-store/', // <-- имя твоего репозитория на GitHub
    plugins: [react()]
});

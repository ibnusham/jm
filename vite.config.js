import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
               'resources/assets/admin/app.css',
               'resources/assets/admin/app.js',
               'public/assets/frontend/app.css',
               'public/assets/frontend/app.js'
            ],
            refresh: true,
        }),
    ],
});

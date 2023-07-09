import { defineConfig } from 'vite';

export default defineConfig ({
    server : {
        host:"0.0.0.0",
    },
    test : {
        include: ['**/*.test.js'],
        globals: true
    }
})

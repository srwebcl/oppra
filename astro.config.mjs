import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import vercel from '@astrojs/vercel/serverless'; // Importante: Importar el adaptador

// https://astro.build/config
export default defineConfig({
    output: 'server', // <--- ESTO ES CRÍTICO: Activa el modo servidor (SSR)
    adapter: vercel(), // <--- Conecta con Vercel
    integrations: [
        react(),
        tailwind({
            applyBaseStyles: false,
        }),
        partytown({
            config: {
                forward: ['dataLayer.push'],
            },
        }),
    ],
});
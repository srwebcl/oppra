import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import vercel from '@astrojs/vercel';

export default defineConfig({
    site: 'https://www.oppra.cl',
    output: 'server',
    adapter: vercel({
        webAnalytics: { enabled: true },
    }),
    integrations: [
        react(),
        tailwind({ applyBaseStyles: false }),
        partytown({ config: { forward: ['dataLayer.push'] } }),
    ],
});
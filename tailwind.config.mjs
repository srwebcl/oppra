/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#2563eb', // blue-600
                    DEFAULT: '#1e3a8a', // blue-900 (Azul Acero)
                    dark: '#1e3a8a',
                },
                secondary: {
                    DEFAULT: '#475569', // slate-600 (Gris Metálico)
                },
                accent: {
                    DEFAULT: '#fe6307', // Official Brand Orange
                    hover: '#e55604', // Darker brand orange
                }
            },
            fontFamily: {
                sans: ['Poppins', 'Outfit', 'Inter', 'Roboto', 'sans-serif'],
            }
        },
    },
    plugins: [],
}

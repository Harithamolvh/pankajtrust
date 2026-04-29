import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            colors: {
                saffron: '#E8872A',
                forest: '#1B4332',
                cream: '#FDF6EC',
                charcoal: '#1C1917',
                gold: '#C9A84C',
                mist: '#F0EBE3',
                rust: '#B5451B',
                sage: '#4A7C59',
                leaf: '#4CAF50',
                leafLight: '#E8F5E9',
                leafDark: '#2E7D32',
                // Admin tokens
                adminBg: '#F5F0E8',
                adminTh: '#F9F6F1',
                inputBorder: '#D1C9BD',
            },
            fontFamily: {
                display: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
                body: ['"Source Serif 4"', ...defaultTheme.fontFamily.serif],
                sans: ['"DM Sans"', ...defaultTheme.fontFamily.sans],
                stats: ['"Cormorant Garamond"', ...defaultTheme.fontFamily.serif],
            },
            animation: {
                'mesh-drift': 'mesh-drift 12s ease infinite',
                'shimmer': 'shimmer 2s ease 0.5s 1',
                'breathe': 'quote-breathe 4s ease-in-out infinite',
                'float-up': 'float-up 3s ease-in-out infinite',
            },
            keyframes: {
                'mesh-drift': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                'float-up': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-8px)' },
                },
                'shimmer': {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
                'quote-breathe': {
                    '0%, 100%': { transform: 'scale(1) rotate(-5deg)', opacity: '0.15' },
                    '50%': { transform: 'scale(1.05) rotate(-5deg)', opacity: '0.25' },
                }
            },
            backdropBlur: { xs: '2px' },
            boxShadow: {
                'glow-saffron': '0 0 30px rgba(232,135,42,0.3)',
                'glow-gold': '0 0 30px rgba(201,168,76,0.3)',
            },
        },
    },

    plugins: [forms],
};

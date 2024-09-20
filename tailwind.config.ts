import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                primary: '#323f47',
                secondary: '#2f2f2f',
                green: {
                    DEFAULT: '#9be1a0',
                    dark: '#87d28d',
                },
                gray: '#f0Eff4',
                red: '#ef5050',
            },

            letterSpacing: {
                tight: '-0.01em',
            },

            borderRadius: {
                15: '15px',
                30: '30px',
            },

            screens: {
                mobile: '375px',
                tablet: '768px',
                desktop: '1440px',
            },
            fontSize: {
                xs: '0.75rem',
                sm: '0.875rem',
                base: '1rem',
                lg: '1.125rem',
                xl: '1.25rem',
                '2xl': '1.5rem',
                '3xl': '1.875rem',
                '4xl': '2.25rem',
                '5xl': '3rem',
                '6xl': '3.75rem',
            },
        },
    },
    plugins: [],
};
export default config;

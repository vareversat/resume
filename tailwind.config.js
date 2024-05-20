/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            colors: {
                'malachite': {
                    '50': '#f0fdf4',
                    '100': '#dcfce7',
                    '200': '#bbf7d0',
                    '300': '#86efad',
                    '400': '#4ade81',
                    '500': '#25d366',
                    '600': '#16a34b',
                    '700': '#15803e',
                    '800': '#166534',
                    '900': '#14532d',
                    '950': '#052e16',
                },
                'lochmara': {
                    '50': '#f0f9ff',
                    '100': '#dff2ff',
                    '200': '#b9e7fe',
                    '300': '#7bd6fe',
                    '400': '#34c0fc',
                    '500': '#0aaaed',
                    '600': '#0087cb',
                    '700': '#0077b5',
                    '800': '#055c87',
                    '900': '#0a4b70',
                    '950': '#07304a',
                },
                'shark': {
                    '50': '#f4f6f7',
                    '100': '#e3e8ea',
                    '200': '#cad3d7',
                    '300': '#a5b4bb',
                    '400': '#788d98',
                    '500': '#5d717d',
                    '600': '#505f6a',
                    '700': '#455159',
                    '800': '#3e464c',
                    '900': '#373d42',
                    '950': '#2b3137',
                },


            },
            keyframes: {
                slidein: {
                    from: {
                        opacity: "0",
                        transform: "translateY(-10px)",
                    },
                    to: {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
            },
            animation: {
                slidein: "slidein 1s ease var(--slidein-delay, 0) forwards",
            },
        },
    },
    plugins: [],
}


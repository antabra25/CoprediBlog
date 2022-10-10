/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                title: ['DM Serif Display', 'serif'],
                content: ['DM Sans', 'sans-serif']
            },
            colors: {
                "primary": "#FFEDDB",
                "secondary": "#EDCDBB",
                "bronw": "#E3B7A0",
                "earth": "#BF9270",
                "dark": "rgba(51, 51, 51, 0.2)",
                "black": "rgba(0, 0, 0, 0.7)",
                "white": "#FFFFFF",

            },
        },
    },
    plugins: [],
}

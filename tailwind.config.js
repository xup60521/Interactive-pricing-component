/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_Soft_Cyan: "hsl(174, 77%, 80%)",
                c_Strong_Cyan: "hsl(174, 86%, 45%)",
                c_Light_Grayish_Red: "hsl(14, 92%, 95%)",
                c_Light_Red: "hsl(15, 100%, 70%)",
                c_Pale_Blue: "hsl(226, 100%, 87%)",
                c_Very_Pale_Blue: "hsl(230, 100%, 99%)",
                c_Light_Grayish_Blue: "hsl(224, 65%, 95%)",
                c_Light_Grayish_Blue: "hsl(223, 50%, 87%)",
                c_Grayish_Blue: "hsl(225, 20%, 60%)",
                c_Dark_Desaturated_Blue: "hsl(227, 35%, 25%)",
            },
            fontFamily: {
                manrope: ["Manrope", "sans-serif"]
            }
        },
    },
    plugins: [],
}


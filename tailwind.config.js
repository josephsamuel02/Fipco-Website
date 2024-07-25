import withMT from "@material-tailwind/react/utils/withMT";
// /** @type {import('tailwindcss').Config} */

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      scale: {
        "-100": "-1",
      },
      fontFamily: {
        EncodedSans: ["Encode Sans Semi Expanded"],
        Nunito: ["Nunito", " sans-serif"],
        RubikDistressed: ["Rubik Distressed", "cursive"],
        TitanOne: ["Titan One", "cursive"],
        Roboto: ["Roboto", "sans-serif"],
        AbrilFatface: ["Abril Fatface", "cursive"],
        KaushanScript: ["  Kaushan Script", "cursive"],
        OleoScript: ["  Oleo Script", "cursive"],
        MeieScript: ["  Meie Script", "cursive"],
        Shrikhand: ["  Shrikhand", "cursive"],
        PinyonScript: ["  Pinyon Script", "cursive"],
      },
      backgroundImage: {
        bg0: "url('/images/banner1.jpg')",
        bg1: "url('/images/staff-bg.jpeg')",
        bg2: "url('/images/refinery.svg')",
        pillows: "url('/img/pillowas.jpg')",
        counselling_bg: "url('/img/reaching out.png')",
      },
      colors: {
        Red: "#FF0218",
      },
    },
  },
  plugins: [],
});

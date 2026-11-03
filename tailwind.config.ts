import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { ink: "#28191B", gold: "#C8A16A", cream: "#FFFAF8", blush: "#F5DDE2", jute: "#B89B72", wine: "#A91F45" },
    fontFamily: { serif: ["var(--f-serif)", "serif"], sans: ["var(--f-sans)", "sans-serif"], script: ["var(--f-script)", "cursive"] },
    keyframes: { up: { from: { opacity: "0", transform: "translateY(24px)" }, to: { opacity: "1", transform: "none" } }, float: { "50%": { transform: "translateY(-10px)" } } },
    animation: { up: "up .8s ease both", float: "float 6s ease-in-out infinite" },
  } }, plugins: [],
} satisfies Config;

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'minecraft-yellow': '#FFC107',
        'minecraft-dark-yellow': '#FF8F00',
        'minecraft-darker-yellow': '#FF6F00',
        'minecraft-black': '#1a1a1a',
        'minecraft-gray': '#2d2d2d',
      },
      fontFamily: {
        'minecraft': ['Minecraft', 'monospace'],
      },
      backgroundImage: {
        'minecraft-pattern': "url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M0 0h20L0 20z\"/%3E%3C/g%3E%3C/svg%3E')",
      }
    },
  },
  plugins: [],
}

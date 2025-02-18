// vite.config.ts
import { defineConfig } from "vite";
// import { reactRouter } from "@react-router/dev/vite";  // Remove this import
import tsconfigPaths from "vite-tsconfig-paths";
// import tailwindcss from "@tailwindcss/vite"; // If you had removed Tailwind 4 alpha, also remove the plugin

export default defineConfig({
  plugins: [
    // reactRouter(), // remove or comment out
    tsconfigPaths(),
    // Possibly add any other needed plugins
  ],
  build: {
    assetsInlineLimit: 0, // disables inlining for all assets
  },
});
import { sentryVitePlugin } from "@sentry/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  // base: "/vision-phone-react",
  plugins: [
    react(),
    sentryVitePlugin({
      org: "sv-eq",
      project: "javascript-react",
    }),
  ],

  build: {
    sourcemap: true,
  },
});

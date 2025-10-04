/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const configOptions = {
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
};

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  switch (mode) {
    case "development":
      return {
        ...configOptions,
        server: {
          host: `localhost`,
          port: 5173,
          proxy: {
            "/api": {
              target: `http://localhost:3001`,
              changeOrigin: true,
              secure: false,
              ws: false,
            },
          },
        },
      };

    default:
      return configOptions;
  }
});

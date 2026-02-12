/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: "named", // 👈 keep named export
        namedExport: "ReactComponent", // 👈 specifically export ReactComponent
        svgo: true,
        svgoConfig: {
          plugins: [
            { name: "removeDimensions", active: true },
            { name: "removeViewBox", active: false },
          ],
        },
      },
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
    },
  },

  test: {
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    globals: true,
    environment: "jsdom",
    setupFiles: ["src/setupTests.ts"],
    css: true,
    coverage: {
      reporter: ["text", "lcov"],
      include: ["src/**/*.{ts,tsx}"],
      exclude: ["**/*.stories.*", "**/__tests__/**", "src/mocks/**"],
    },
    projects: [
      {
        plugins: [
          storybookTest({ configDir: path.join(__dirname, ".storybook") }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: "playwright",
            instances: [{ browser: "chromium" }],
          },
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
    ],
  },
});

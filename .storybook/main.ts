import { mergeConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [
        svgr({
          svgrOptions: {
            exportType: "named",
            namedExport: "ReactComponent",
          },
        }),
      ],
    });
  },
};

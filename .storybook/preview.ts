// .storybook/preview.ts
import type { Preview } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import "../src/index.css";

const preview: Preview = {
  decorators: [
    (Story) =>
      React.createElement(
        MemoryRouter,
        { initialEntries: ["/"] },
        React.createElement(Story)
      ),
  ],
  parameters: {
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
    a11y: { test: "todo" },
  },
};

export default preview;

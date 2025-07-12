// @ts-ignore
import React from "react";

import "../src/styles/fonts.scss";
import { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { createTheme, neutral } from "../src/styles/theme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      values: [
        { name: "light", value: neutral["08"] },
        { name: "dark", value: neutral["01"] },
      ],
    },
  },

  decorators: [
    (Story, props) => {
      const currentTheme =
        props.globals.backgrounds?.value === neutral["01"] ? "dark" : "light";
      const theme = createTheme(currentTheme);

      return (
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      );
    },
  ],

  tags: ["autodocs"],
};

export default preview;

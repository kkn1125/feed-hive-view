import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { Preview } from "@storybook/react";
import { theme } from "../src/utils/theme";
import { BrowserRouter } from "react-router-dom";
import "../src/index.css";

export const withMuiTheme = (Story) => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <CssBaseline />
      <Story />
    </BrowserRouter>
  </ThemeProvider>
);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withMuiTheme],
};

export default preview;

// export const decorators = [withMuiTheme];

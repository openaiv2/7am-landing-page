import React from "react";

import { render } from "@testing-library/react";

import Button from "./Button";
import { ThemeProvider } from "styled-components";
import { createTheme } from "../../styles/theme";

const theme = createTheme();

describe("Button", () => {
  test("renders the Button component", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button>Lorem</Button>
      </ThemeProvider>,
    );
  });
});

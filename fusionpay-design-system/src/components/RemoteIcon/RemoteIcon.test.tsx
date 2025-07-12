import React from "react";

import { render } from "@testing-library/react";

import RemoteIcon from "./RemoteIcon";
import { ThemeProvider } from "styled-components";
import { createTheme } from "../../styles/theme";

const theme = createTheme();

describe("Button", () => {
  test("renders the Button component", () => {
    render(
      <ThemeProvider theme={theme}>
        <RemoteIcon
          iconName={"shirt"}
          iconFontSize={12}
          iconColor={"#000000"}
        ></RemoteIcon>
      </ThemeProvider>,
    );
  });
});

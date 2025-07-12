import styled from "styled-components";
import { getThemeColorInStyledCss } from "../../styles/theme";

export type DividerProps = { orientation?: "horizontal" | "vertical" };

const Divider = styled.div<DividerProps>`
  background-color: ${getThemeColorInStyledCss("fill.surface.tertiary")};
  height: ${(props) => (props.orientation === "vertical" ? "100%" : "2px")};
  width: ${(props) => (props.orientation === "vertical" ? "2px" : "100%")};
`;

export default Divider;

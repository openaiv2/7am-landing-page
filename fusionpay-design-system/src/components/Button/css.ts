import { ButtonProps } from "./types";
import styled, { css } from "styled-components";
import {
  getThemeColorInStyledCss,
  TElementProps,
  TThemePaletteColorKeys,
} from "../../styles/theme";

const getOutlinedBox =
  (color: TThemePaletteColorKeys) => (props: TElementProps) => css`
    border-color: ${getThemeColorInStyledCss(color)(props)};
    color: ${getThemeColorInStyledCss(color)(props)};
  `;

export const ButtonRoot = styled("button")<ButtonProps>`
  outline: none;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  height: 48px;
  padding-left: 24px;
  padding-right: 24px;
  font-size: 16px;
  color: ${getThemeColorInStyledCss("text.button-normal")};
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  transition: ${(props) => props.theme.transition};

  &.button--normal-iconOnly {
    padding: 0;
    height: 48px;
    width: 48px;
    min-width: 48px;
    font-size: 18px;
  }

  &.button--small {
    height: 40px;
    padding-left: 16px;
    padding-right: 16px;
    font-size: 14px;
  }

  &.button--small-iconOnly {
    padding: 0;
    height: 40px;
    width: 40px;
    min-width: 40px;
    font-size: 14px;
  }

  &.button--large {
    height: 56px;
    padding-left: 30px;
    padding-right: 30px;
    font-size: 18px;
  }

  &.button--large-iconOnly {
    padding: 0;
    height: 56px;
    width: 56px;
    min-width: 56px;
    font-size: 20px;
  }

  &.button--angular {
    border-radius: 12px;
  }

  &.button--rounded {
    border-radius: 30px;
  }

  &.button--fullwidth {
    display: flex;
    width: 100%;
  }

  &.button--filled {
    color: ${getThemeColorInStyledCss("text.button-normal")};
  }

  &.button--filled-primary {
    background-color: ${getThemeColorInStyledCss("brand.primary")};

    &:hover {
      background-color: ${getThemeColorInStyledCss("fill.hover.primary")};
    }
  }

  &.button--filled-success {
    background-color: ${getThemeColorInStyledCss(
      "fill.surface.contextual.success.main",
    )};

    &:hover {
      background-color: ${getThemeColorInStyledCss("fill.hover.success")};
    }
  }

  &.button--filled-warning {
    background-color: ${getThemeColorInStyledCss(
      "fill.surface.contextual.warning.main",
    )};

    &:hover {
      background-color: ${getThemeColorInStyledCss("fill.hover.warning")};
    }
  }

  &.button--filled-error {
    background-color: ${getThemeColorInStyledCss(
      "fill.surface.contextual.error.main",
    )};

    &:hover {
      background-color: ${getThemeColorInStyledCss("fill.hover.error")};
    }
  }

  &.button--filled-info {
    background-color: ${getThemeColorInStyledCss(
      "fill.surface.contextual.info.main",
    )};

    &:hover {
      background-color: ${getThemeColorInStyledCss("fill.hover.info")};
    }
  }

  &.button--filled-dark {
    background-color: ${getThemeColorInStyledCss("fill.surface.mirrored")};
  }

  &.button--filled-grey {
    background-color: ${getThemeColorInStyledCss("fill.surface.tertiary")};
    color: ${getThemeColorInStyledCss("text.button-mirrored-dark-light")};
  }

  &.button--filled-transparent {
    background-color: transparent;
    color: ${getThemeColorInStyledCss("text.button-mirrored-dark-light")};

    &:hover {
      color: ${getThemeColorInStyledCss("brand.primary")};
    }
  }

  &.button--filled-shape {
    border-radius: 10px;
  }

  &.button--outlined {
    color: ${getThemeColorInStyledCss("text.button-mirrored-dark-light")};
    background-color: transparent;
    border-width: 2px;
    border-style: solid;
  }

  &.button--outlined-primary {
    ${getOutlinedBox("brand.primary")}
    &:hover {
      ${getOutlinedBox("fill.hover.primary")}
    }
  }

  &.button--outlined-success {
    ${getOutlinedBox("fill.surface.contextual.success.main")}
    &:hover {
      ${getOutlinedBox("fill.hover.success")}
    }
  }

  &.button--outlined-warning {
    ${getOutlinedBox("fill.surface.contextual.warning.main")};

    &:hover {
      ${getOutlinedBox("fill.hover.warning")};
    }
  }

  &.button--outlined-error {
    ${getOutlinedBox("fill.surface.contextual.error.main")}
    &:hover {
      ${getOutlinedBox("fill.hover.error")}
    }
  }

  &.button--outlined-info {
    ${getOutlinedBox("fill.surface.contextual.info.main")}
    &:hover {
      ${getOutlinedBox("fill.hover.info")}
    }
  }

  &.button--outlined-dark {
    ${getOutlinedBox("text.button-mirrored-dark-light")}
  }

  &.button--outlined-grey {
    border-color: ${getThemeColorInStyledCss("border.tertiary")};
    color: ${getThemeColorInStyledCss("text.button-mirrored-dark-light")};

    &:hover {
      background-color: ${getThemeColorInStyledCss("border.tertiary")};
    }
  }

  &.button--outlined-transparent {
    border-color: transparent;
    color: ${getThemeColorInStyledCss("text.button-mirrored-dark-light")};
  }

  &.button--disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

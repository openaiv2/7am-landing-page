import { InputContainerProps, InputProps } from "./types";
import styled, { css } from "styled-components";

import {
  getThemeColorInStyledCss,
  TElementProps,
  TThemePaletteColorKeys,
} from "../../styles/theme";

export const inputChildStyle = css`
  &.input--filled {
    border: 2px solid transparent;
  }

  &.input--outlined {
    background: ${getThemeColorInStyledCss("fill.surface.secondary")};
    border: 2px solid ${getThemeColorInStyledCss("fill.surface.form-control")};
  }

  &:focus-within {
    border-color: ${getThemeColorInStyledCss("brand.primary")};
  }

  .input__elem {
    border: none;
    outline: none;
    height: 100%;
    flex: 1;
    min-width: 0;
    background: transparent;
    color: ${getThemeColorInStyledCss("text.primary")};
    font-size: 14px;

    &::placeholder {
      color: ${getThemeColorInStyledCss("text.tertiary")};
      font-size: 14px;
      letter-spacing: -0.14px;
      font-weight: 600;
    }
  }

  & input:-webkit-autofill {
    color: ${getThemeColorInStyledCss("text.primary")};
    background-color: transparent;
    transition:
      background-color 5000s ease-in-out 0s,
      color 5000s ease-in-out 0s;
  }
`;

const getStatusCss =
  (name: TThemePaletteColorKeys) => (props: TElementProps) => css`
    color: ${getThemeColorInStyledCss(name)(props)};

    .input__helperText {
      color: ${getThemeColorInStyledCss(name)(props)};
    }

    .input {
      border-color: ${getThemeColorInStyledCss(name)(props)};

      .input__endIcon {
        color: ${getThemeColorInStyledCss(name)(props)};
      }
    }
  `;

export const InputContainerRoot = styled("div")<
  Omit<InputContainerProps, "theme"> & { $dynamicMargin?: boolean }
>`
  min-width: 0;

  input,
  textarea,
  div,
  p {
    font-weight: 600;
  }

  .input__labelContainer {
    display: flex;
    gap: 6px;
    align-items: center;
  }

  .input__tooltipContainer {
    margin-top: -6px;
  }

  .input__label {
    font-size: 14px;
    letter-spacing: -0.14px;
    margin-bottom: 6px;
    font-weight: 600;
    color: ${getThemeColorInStyledCss("text.primary")};
    min-width: 0;
    display: flex;
    align-items: center;
    gap: 6px;
    position: relative;
  }

  .input__label_info {
    position: relative;
    flex: 1;
    color: ${getThemeColorInStyledCss("text.tertiary")};
  }
  .input__label_info:hover {
    color: ${getThemeColorInStyledCss("text.secondary")};
  }
  .input__label_info:hover .input__label_info-tooltip {
    display: flex !important;
    align-items: center;
  }

  .input__label_info-tooltip {
    position: absolute;
    font-size: 12px;
    font-weight: 500;
    color: ${getThemeColorInStyledCss("text.button-normal")};
    background-color: ${getThemeColorInStyledCss("text.primary")};
    display: none;
    padding: 12px;
    border-radius: 4px;
    top: -6px;
    left: 22px;
    width: 100%;
    max-width: 264px;
  }

  .input__helper_text-container {
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin-top: 6px;
  }

  .input__helperText {
    font-size: 12px;
    font-weight: 600;
    color: ${getThemeColorInStyledCss("text.secondary")};
    display: block;
  }

  .input__helperText-secondary {
    font-size: 12px;
    font-weight: 600;
    color: ${getThemeColorInStyledCss("text.secondary")};
    display: block;
  }

  &.inputContainer--error {
    ${getStatusCss("fill.surface.contextual.error.main")}
  }

  .input__clearIcon {
    cursor: pointer;
  }
`;

export const InputBaseCss = css`
  display: flex;
  min-width: 0;
  align-items: center;
  background-color: ${getThemeColorInStyledCss("fill.surface.tertiary")};
  color: ${getThemeColorInStyledCss("text.primary")};
  height: 48px;
  padding: 6px 18px;
  gap: 16px;
  border: 2px solid transparent;
  border-radius: 12px;
  box-sizing: border-box;

  &.input--disabled {
    opacity: 0.5;
    pointer-events: none;
    cursor: not-allowed;
  }

  .input__icon {
    color: ${getThemeColorInStyledCss("text.secondary")};
    font-size: 16px;
  }

  .input__startIcon {
    margin-left: -4px;
  }

  .input__endIcon {
    margin-right: -4px;
  }

  .input__endText {
    margin-right: -14px;
    background: ${getThemeColorInStyledCss("brand.primary")};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${getThemeColorInStyledCss("text.button-normal")};
    border-radius: 12px;
    padding-left: 16px;
    padding-right: 16px;
    font-size: 14px;
    font-weight: 600;
  }

  &.input--rounded {
    border-radius: 30px;

    .input__endText {
      border-radius: 20px;
    }
  }

  &.input--small {
    height: 40px;
    gap: 11px;
    padding: 6px 16px;

    .input__startIcon {
      margin-left: -3px;
    }

    .input__endIcon {
      margin-right: -3px;
    }
  }

  &.input--large {
    height: 56px;
    gap: 21px;
    padding: 6px 24px;

    .input__startIcon {
      margin-left: -5px;
    }

    .input__endIcon {
      margin-right: -5px;
    }
  }

  .input__endIcon-main {
    color: ${getThemeColorInStyledCss("text.secondary")} !important;
  }

  ${inputChildStyle};
`;

export const InputRoot = styled("div")<InputProps>`
  ${InputBaseCss};
`;

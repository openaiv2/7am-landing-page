// import { getThemeColorInStyledCss } from "../styles";
import { TextareaProps } from "../Input/types";
import { inputChildStyle } from "../Input/css";
import styled from "styled-components";
import { getThemeColorInStyledCss } from "../../styles/theme";

export const TextContainerRoot = styled("div")<TextareaProps>`
  &.textarea--disabled {
    opacity: 0.5;
    pointer-events: none;
    cursor: not-allowed;
  }

  &.textarea--rounded {
    border-radius: 30px;
  }

  &.textarea--small {
    padding-left: 16px;
  }

  &.textarea--large {
    padding-left: 24px;
  }
  textarea::placeholder {
    font-weight: 500 !important;
  }

  position: relative;
  padding: 16px 18px;
  background-color: ${getThemeColorInStyledCss("fill.surface.tertiary")};
  border-radius: 12px;
  border: 2px solid transparent;
  box-sizing: border-box;
  resize: none;

  textarea {
    display: flex;
    padding: 0;
    background: transparent;
    border: none;
    width: 100%;
    resize: vertical;
    min-height: 64px;
    font-size: 14px;
    font-weight: 500;
  }

  .grabber {
    display: none;
    pointer-events: none;
    bottom: 16px;
    right: 18px;
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: ${getThemeColorInStyledCss("fill.surface.tertiary")};
  }
  ${inputChildStyle};
`;

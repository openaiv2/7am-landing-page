import { InputBaseCss } from "../Input/css";
import styled, { css } from "styled-components";

import { SelectProps } from "../Input/types";
import { getThemeColorInStyledCss } from "../../styles/theme";

export const SelectRootCss = css`
  .select {
    padding-right: 4px !important;
    padding-top: 4px !important;
    padding-bottom: 4px !important;
    font-size: 14px;

    &--disabled {
      opacity: 0.5;
      pointer-events: none;
    }

    &__placeholder {
      color: ${getThemeColorInStyledCss("text.tertiary")};
      font-size: 14px;
    }

    &__indicatorContainer {
      border-radius: 12px;
      height: 100%;
      width: 36px;
      display: flex;
      align-items: center;
      justify-content: center;

      transform: rotate(0deg);
      transition: transform 0.1s ease-out;
    }

    &--small {
      padding-right: 6px !important;
    }
    &--small .select__indicatorContainer {
      width: 20px !important;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &--large .select__indicatorContainer {
      width: 44px !important;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__dropdownIndicator {
      color: ${getThemeColorInStyledCss("text.secondary")};
      transition: all 0.1s ease-out;
    }

    &__cancelIcon > svg {
      fill: ${getThemeColorInStyledCss("text.secondary")};
    }
    &--focused {
      .select__indicatorContainer {
        transform: rotate(180deg);
        transition: transform 0.1s ease-in;
      }
      .select__dropdownIndicator {
        color: ${getThemeColorInStyledCss("text.secondary")};
        transition: all 0.1s ease-in;
      }
    }

    ${InputBaseCss}
  }
`;

export const SelectContainer = styled("div")<Omit<SelectProps, "theme">>`
  width: 100%;
  ${SelectRootCss}

 
}`;

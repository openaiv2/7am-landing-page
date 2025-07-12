import { TimePickerProps } from "../Input/types";
import { InputBaseCss } from "../Input/css";
import styled from "styled-components";
import { getThemeColorInStyledCss } from "../../styles/theme";

export const TimePickerContainerRoot = styled("div")<TimePickerProps>`
  .timePicker {
    padding-right: 4px !important;
    padding-top: 4px !important;
    padding-bottom: 4px !important;
    display: flex !important;

    .react-time-picker__wrapper {
      border: none;
    }

    .react-time-picker__inputGroup__input {
      outline: none;
    }

    &--disabled {
      opacity: 0.5;
      pointer-events: none;
    }

    &__placeholder {
      color: ${getThemeColorInStyledCss("text.tertiary")};
      font-size: 14px;
    }
  }

  .input {
    ${InputBaseCss}
  }
`;

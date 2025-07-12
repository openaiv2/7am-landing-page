import { InputBaseCss } from "../Input/css";
import { DatePickerProps } from "../Input/types";
import styled from "styled-components";
import { getThemeColorInStyledCss } from "../../styles/theme";

export const DatePickerRoot = styled("div")<DatePickerProps>`
  .datePicker {
    padding-right: 4px !important;
    padding-top: 4px !important;
    padding-bottom: 4px !important;
    display: flex !important;

    .react-date-picker__wrapper {
      border: none;
    }

    .react-date-picker__inputGroup__input {
      outline: none;
    }

    .react-date-picker__calendar-button {
      height: 36px;
      width: 36px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${getThemeColorInStyledCss("text.secondary")};

      border: 2px solid ${getThemeColorInStyledCss("border.tertiary")};
    }

    .react-calendar {
      background-color: ${getThemeColorInStyledCss("fill.surface.tertiary")};
      border-radius: 12px;
      border-color: ${getThemeColorInStyledCss("border.primary")};
    }

    .react-calendar__navigation {
      button {
        color: ${getThemeColorInStyledCss("text.secondary")};
      }
    }

    .react-calendar__navigation__arrow,
    .react-calendar__navigation__label,
    .react-calendar__tile {
      border-radius: 12px;
      color: ${getThemeColorInStyledCss("text.primary")};
      &:hover {
        background-color: ${getThemeColorInStyledCss("fill.hover.secondary")};
      }
    }

    .react-calendar__navigation button:disabled {
      background-color: ${getThemeColorInStyledCss("fill.hover.secondary")};
      opacity: 0.8;
    }
    .react-calendar__tile--now {
      background-color: ${getThemeColorInStyledCss("fill.surface.quinary")};
    }
    .react-calendar__tile--active {
      background-color: ${getThemeColorInStyledCss("brand.primary")};
      color: ${getThemeColorInStyledCss("text.button-normal")} !important;
      &:hover {
        background-color: ${getThemeColorInStyledCss("fill.hover.primary")};
      }
    }

    .react-date-picker__clear-button {
      color: ${getThemeColorInStyledCss("text.secondary")};
    }

    .react-calendar__month-view__days__day {
      color: ${getThemeColorInStyledCss("text.primary")};
    }

    .react-calendar__month-view__days__day--neighboringMonth {
      opacity: 0.6;
    }

    .react-calendar__month-view__days__day--weekend {
      color: ${getThemeColorInStyledCss("fill.surface.contextual.error.main")};
    }

    &.datePicker--disabled {
      opacity: 0.5;
      pointer-events: none;
    }

    .react-date-picker__inputGroup__input::placeholder,
    .react-date-picker__inputGroup__divider {
      color: ${getThemeColorInStyledCss("text.tertiary")};
      font-size: 14px;
    }

    .react-date-picker__calendar--open,
    .react-date-picker__calendar--closed {
      position: absolute;
    }
  }
  .input {
    ${InputBaseCss}
  }
`;

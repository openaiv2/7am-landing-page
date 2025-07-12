import React, { forwardRef, ReactNode } from "react";
import classNames from "classnames";
import styled from "styled-components";
import { typographyBody2Medium } from "../Typography/css";
import { useToggle } from "../../hooks";

const RootEl = styled.label`
  display: inline-flex;
  cursor: pointer;
  position: relative;

  input {
    position: absolute;
    width: 0;
    height: 0;
  }

  & * {
    box-sizing: border-box;
  }

  &.radiobutton--disabled {
    cursor: not-allowed;

    & .radiobutton__input {
      opacity: 0.5;
      background-color: ${(props) =>
        props.theme.palette.fill.surface.quaternary};
    }
  }

  & .radiobutton__input {
    width: 24px;
    height: 24px;
    margin-right: 8px;
    position: relative;
    border-radius: 24px;
    overflow: hidden;
    flex-shrink: 0;
  }

  .radiobutton__label {
    color: ${(props) => props.theme.palette.text.primary};
    padding-top: 3px;
    ${typographyBody2Medium};
  }

  .radiobutton__border {
    width: 100%;
    height: 100%;
    border: 2px solid ${(props) => props.theme.palette.fill.surface.quaternary};
    border-radius: 100%;
  }

  .radiobutton__checkmark {
    position: absolute;
    width: 12px;
    height: 12px;
    display: grid;
    place-items: center;
    background-color: ${(props) => props.theme.palette.brand.primary};
    transition: opacity ease-in-out 0.2s;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 12px;

    &.radiobutton__checkmark--checked {
      opacity: 1;
    }

    &.radiobutton__checkmark--unchecked {
      opacity: 0;
    }
  }

  & .radiobutton__mark {
    color: ${(props) => props.theme.palette.text["button-normal"]};
  }
`;

export interface RadioButtonProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label?: ReactNode;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  (props, ref) => {
    const { label, className, onChange, ...others } = props;

    const { handleChange, checked, disabled } = useToggle({
      checked: others.checked,
      disabled: others.disabled,
      onChange: onChange,
    });

    return (
      <RootEl
        className={classNames(
          "radiobutton",
          { ["radiobutton--disabled"]: disabled },
          className,
        )}
      >
        <input
          {...others}
          type={"radio"}
          ref={ref}
          checked={checked}
          onChange={handleChange}
        />
        <div
          className={classNames("radiobutton__input", {
            ["radiobutton__input--disabled"]: disabled,
          })}
        >
          <div className={`radiobutton__border`} />
          <div
            className={`radiobutton__checkmark ${
              checked
                ? "radiobutton__checkmark--checked"
                : "radiobutton__checkmark--unchecked"
            }`}
          />
        </div>
        {label && (
          <span
            className="radiobutton__label"
            aria-label={"radio-button-label"}
          >
            {label}
          </span>
        )}
      </RootEl>
    );
  },
);

export default RadioButton;

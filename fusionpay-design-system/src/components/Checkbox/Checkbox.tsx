import { faCheck } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode } from "react";
import { useToggle } from "../../hooks";
import { ToggleProps } from "../../hooks/useToggle";
import styled from "styled-components";
import { typographyBody2Medium } from "../Typography/css";
import classNames from "classnames";

export interface CheckboxProps extends ToggleProps {
  className?: string;
  label?: ReactNode;
  align?: "center" | "start";
  id?: string;
}

const CheckboxEl = styled.label`
  display: inline-flex;
  cursor: pointer;

  &.checkbox--align-center {
    align-items: center;
  }

  &.checkbox--align-start {
    & .checkbox__label {
      padding-top: 3px;
    }
  }

  & * {
    box-sizing: border-box;
  }

  &.checkbox--disabled {
    cursor: not-allowed;

    & .checkbox__input {
      opacity: 0.5;
      background-color: ${(props) =>
        props.theme.palette.fill.surface.quaternary};
    }
  }

  & .checkbox__input {
    width: 24px;
    height: 24px;
    margin-right: 8px;
    position: relative;
    border-radius: 6px;
    overflow: hidden;
    flex-shrink: 0;

    & .checkbox--disabled {
      opacity: 0.5;
      background-color: ${(props) => props.theme.palette.brand.primary};
    }
  }

  & .checkbox__label {
    color: ${(props) => props.theme.palette.text.primary};
    ${typographyBody2Medium};
  }

  & .checkbox__border {
    width: 100%;
    height: 100%;
    position: absolute;
    border: 2px solid ${(props) => props.theme.palette.fill.surface.quaternary};
    border-radius: 6px;
  }

  & .checkbox__checkmark {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    background-color: ${(props) => props.theme.palette.brand.primary};
    transition: opacity ease-in-out 0.2s;

    &.checkbox__checkmark--checked {
      opacity: 1;
    }

    &.checkbox__checkmark--unchecked {
      opacity: 0;
    }
  }

  & .checkbox__mark {
    color: ${(props) => props.theme.palette.text["button-normal"]};
  }
`;

const Checkbox = (props: CheckboxProps) => {
  const { label, className, align = "center", id } = props;
  const { handleChange, checked, disabled } = useToggle(props);
  const checkboxId = id || `checkbox-${Math.floor(Math.random() * 1000000)}`;

  return (
    <CheckboxEl
      className={classNames(
        className,
        disabled && "checkbox--disabled",
        `checkbox--align-${align}`,
      )}
      htmlFor={checkboxId}
    >
      <input onChange={handleChange} hidden type={"checkbox"} id={checkboxId} />
      <div
        className={`checkbox__input ${disabled ? "checkbox__input--disabled" : ""}`}
      >
        <div className={`checkbox__border`} />
        <div
          className={`checkbox__checkmark ${
            checked
              ? "checkbox__checkmark--checked"
              : "checkbox__checkmark--unchecked"
          }`}
        >
          <FontAwesomeIcon icon={faCheck} className="checkbox__mark" />
        </div>
      </div>
      {label && <span className="checkbox__label">{label}</span>}
    </CheckboxEl>
  );
};

Checkbox.defaultProps = {
  className: "",
  label: "",
  checked: false,
  disabled: false,
  onChange: () => {},
};

export default Checkbox;

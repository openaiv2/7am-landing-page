import React, { ReactNode, useEffect, useState } from "react";
import classNames from "classnames";
import styled from "styled-components";
import { typographyBody2Medium } from "../Typography/css";

const SwitchEl = styled.label`
  height: 24px;
  color: $light;
  display: flex;
  align-items: center;
  gap: 8px;

  &.switch--disabled {
    pointer-events: none;
  }

  & .switch__btn {
    width: 46px;
    height: 24px;
    display: block;
    border-radius: 13px;
    outline: none;
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
    position: relative;
    background-color: ${(props) => props.theme.palette.fill.surface.quaternary};

    &.switch__btn--checked {
      background-color: ${(props) => props.theme.palette.brand.primary};
    }

    &.switch__btn--color-primary {
      background-color: ${(props) => props.theme.palette.brand.primary};
    }

    &.switch__btn--color-success {
      background-color: ${(props) =>
        props.theme.palette.fill.surface.contextual.success.main};
    }

    &.switch__btn--color-warning {
      background-color: ${(props) =>
        props.theme.palette.fill.surface.contextual.warning.main};
    }

    &.switch__btn--color-error {
      background-color: ${(props) =>
        props.theme.palette.fill.surface.contextual.error.main};
    }

    &.switch__btn--color-info {
      background-color: ${(props) =>
        props.theme.palette.fill.surface.contextual.info.main};
    }

    &.switch__btn--disabled {
      opacity: 0.5;
    }
  }

  & .switch__handle {
    height: 20px;
    width: 20px;
    background-color: ${(props) => props.theme.palette.fill.surface.secondary};
    border-radius: 10px;
    position: absolute;
    top: 2px;
    transition: all 0.2s ease-in-out;
    inset-inline-start: 2px;
  }

  & .switch__handle--checked {
    inset-inline-start: calc(100% - 22px);
  }

  & .switch__label {
    color: ${(props) => props.theme.palette.text.primary};
    padding-top: 3px;
    ${typographyBody2Medium};
  }
`;

export interface SwitchProps {
  label?: ReactNode;
  onChange?: (checked: boolean) => void;
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  color?: "primary" | "success" | "warning" | "error" | "info";
}

function Switch(props: SwitchProps) {
  const {
    label,
    onChange,
    defaultChecked,
    checked,
    disabled,
    color = "primary",
  } = props;

  const [checkedState, setCheckedState] = useState<boolean | undefined>();

  const handleChange = () => {
    if (disabled) return;
    if (onChange) onChange(!checkedState);
    setCheckedState(!checkedState);
  };

  useEffect(() => {
    setCheckedState(checked);
  }, [checked]);

  return (
    <SwitchEl
      className={classNames("switch", {
        "switch--disabled": !!disabled,
      })}
    >
      <button
        className={classNames(
          "switch__btn",
          {
            "switch__btn--checked": checkedState ?? defaultChecked,
            "switch__btn--disabled": disabled,
          },
          (checkedState || defaultChecked) && `switch__btn--color-${color}`,
        )}
        onClick={handleChange}
        role="switch"
        aria-checked={checkedState ?? defaultChecked}
        type={"button"}
      >
        <div
          className={classNames("switch__handle", {
            "switch__handle--checked": checkedState ?? defaultChecked,
            "switch__btn--disabled": disabled,
          })}
        />
      </button>
      {label && <span className={"switch__label"}>{label}</span>}
    </SwitchEl>
  );
}

export default Switch;

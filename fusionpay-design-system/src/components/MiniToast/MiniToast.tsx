import Typography from "../Typography";
import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import classNames from "classnames";

export type MiniToastProps = {
  children: React.ReactNode;
  label: React.ReactNode;
  variant?: "floating" | "inline";
  fullWidth?: boolean;
  className?: string;
  labelClassName?: string;
};

const animateUp = keyframes`
  from {
    top: -16px;
    opacity: 0;
  }
  to {
    top: -40px;
    opacity: 1;
  }
`;

const RootElement = styled.div`
  position: relative;
  display: inline-block;

  &.miniToast-fullWidth {
    display: block;
    width: 100%;
  }

  .miniToast__label {
    height: 32px;
    padding: 0 12px;
    border-radius: 6px;
    background-color: ${(props) => props.theme.palette.fill.surface.mirrored};
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
  }

  .miniToast__label-floating {
    position: absolute;
    left: 50%;
    top: -16px;
    transform: translateX(-50%);
    z-index: 10000;
  }

  .miniToast__label-floatingVisible {
    animation: ${animateUp} ease-in-out 0.15s forwards;
  }

  .miniToast__label-floatingInVisible {
    opacity: 0;
    top: -40px;
    transition: all 0.15s ease-out;
  }

  .miniToast__label-inline {
    position: absolute;
    right: 4px;
    top: 4px;
  }
  .miniToast__label-inlineVisible {
    opacity: 1;
    transition: opacity ease-in-out;
  }
  .miniToast__label-inlineInVisible {
    opacity: 0;
    transition: opacity ease-out 0.15s;
  }
`;

export default function MiniToast(props: MiniToastProps) {
  const {
    children,
    fullWidth,
    label = "Copied!",
    variant = "floating",
    className,
    labelClassName,
  } = props;

  const [isVisible, setIsVisible] = useState(false);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const handleOpen = () => {
    setIsVisible(true);

    timer.current = setTimeout(() => {
      setIsVisible(false);
      timer.current = null;
    }, 1500);
  };

  const handleMouseHover = () => {
    if (!isVisible) return;
    if (timer.current) {
      clearTimeout(timer.current);
    }

    handleOpen();
  };

  return (
    <RootElement
      className={classNames(
        "miniToast",
        fullWidth && "miniToast-fullWidth",
        className,
      )}
      onClick={handleOpen}
      onMouseOver={handleMouseHover}
    >
      <div
        className={classNames("miniToast__label", labelClassName, {
          "miniToast__label-floating": variant === "floating",
          "miniToast__label-inline": variant === "inline",
          "miniToast__label-inlineVisible": isVisible && variant === "inline",
          "miniToast__label-inlineInVisible":
            !isVisible && variant === "inline",
          "miniToast__label-floatingVisible":
            isVisible && variant === "floating",
          "miniToast__label-floatingInVisible":
            !isVisible && variant === "floating",
        })}
      >
        <Typography
          newVariant={"caption-semiBold"}
          color={"text.primary-mirrored"}
        >
          {label}
        </Typography>
      </div>
      {children}
    </RootElement>
  );
}

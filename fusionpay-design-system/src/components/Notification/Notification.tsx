import React, { forwardRef, ReactNode } from "react";
import styled from "styled-components";
// import { getTheme, getTextColor, ThemeObjectProps } from "../styles";
import classNames from "classnames";
import { getThemeColorInStyledCss } from "../../styles/theme";

export interface NotificationProps {
  children?: ReactNode;
  size: "normal" | "large";
  shape: "sphere" | "block";
  variant: "text" | "dot";
  glow?: boolean;
  className?: string;
}

const RootElement = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: ${getThemeColorInStyledCss("text.button-normal")};

  &.notification__text {
    background-color: ${getThemeColorInStyledCss("brand.primary")};
  }

  &.notification-normal {
    height: 19px;
    padding: 0 6px;
    font-size: 12px;
  }
  &.notification-large {
    height: 21px;
    padding: 0 6px;
    font-size: 14px;
  }
  &.notification-sphere {
    border-radius: 11px;
  }
  &.notification-block {
    border-radius: 6px;
  }

  &.notification__dot {
    height: 10px;
    width: 10px;
    color: ${getThemeColorInStyledCss("brand.primary")};
    border-radius: 50%;
  }

  &.notification__dot-glow {
    width: 24px;
    height: 24px;
    position: relative;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    &::after {
      content: " ";
      width: 100%;
      height: 100%;
      background-color: ${getThemeColorInStyledCss("brand.primary")};
      opacity: 0.1;
      border-radius: 50%;
      position: absolute;
    }
    &::before {
      height: 10px;
      width: 10px;
      content: " ";
      background-color: ${getThemeColorInStyledCss("brand.primary")};
      position: absolute;
      border-radius: 50%;
    }
  }
`;

const Notification = forwardRef<HTMLDivElement, NotificationProps>(
  (props: NotificationProps, ref) => {
    const {
      children,
      size = "normal",
      shape = "block",
      variant = "dot",
      glow,
      className,
      ...rest
    } = props;

    const classes = classNames(
      "notification",
      {
        ["notification__dot"]: variant === "dot" && !glow,
        ["notification__dot-glow"]: variant === "dot" && glow,
        [`notification__text notification-${size} notification-${shape}`]:
          variant === "text",
      },
      className,
    );

    return (
      <RootElement className={classes} ref={ref} {...rest}>
        {variant === "text" && children}
      </RootElement>
    );
  },
);

export default Notification;

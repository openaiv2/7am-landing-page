import React, { ReactNode } from "react";
import styled from "styled-components";
import classNames from "classnames";
import { getThemeColorInStyledCss } from "../../styles/theme";

type BadgeColorType = "success" | "warning" | "error" | "info"; // | "neutral-05";
export interface BadgeProps {
  children: ReactNode;
  color: BadgeColorType;
  size: "small" | "normal" | "large";
  className?: string;
}

const RootElement = styled.div<{ $color: BadgeColorType }>`
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  background-color: ${(props) =>
    getThemeColorInStyledCss(`fill.surface.contextual.${props.$color}.main`)(
      props,
    )};
  font-weight: bold;
  color: ${getThemeColorInStyledCss("text.button-normal")};
  text-transform: uppercase;

  &.badge-small {
    height: 20px;
    padding: 0 8px;
    font-size: 10px;
  }
  &.badge-normal {
    height: 23px;
    padding: 0 8px;
    font-size: 12px;
  }
  &.badge-large {
    height: 28px;
    padding: 0 10px;
    font-size: 12px;
  }
`;

export default function Badge(props: BadgeProps) {
  const { children, color = "success", size = "normal", className } = props;

  return (
    <RootElement
      className={classNames("badge", "badge-" + size, className)}
      $color={color}
    >
      {children}
    </RootElement>
  );
}

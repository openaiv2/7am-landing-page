import React, { ReactNode } from "react";

export type ButtonVariantType = "filled" | "outlined";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  shape?: "angular" | "rounded";
  variant?: ButtonVariantType;
  size?: "small" | "normal" | "large";
  color?:
    | "primary"
    | "success"
    | "warning"
    | "error"
    | "info"
    | "dark"
    | "grey"
    | "transparent";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  loadingIcon?: ReactNode;
  iconOnly?: boolean;
}

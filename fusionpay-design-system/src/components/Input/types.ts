import React, { ReactNode } from "react";
import { TextareaAutosizeProps } from "react-textarea-autosize";

import {
  LooseValue as DatePickerLooseValue,
  Value as DatePickerValue,
} from "react-date-picker/dist/cjs/shared/types";
import { TimePickerProps as BaseTimePickerProps } from "react-time-picker";
import { DatePickerProps as BaseDatePickerProps } from "react-date-picker";
import { ActionMeta, Props as ReactSelectProps } from "react-select";

type ComponentStatusType = "success" | "warning" | "error" | "info";

interface CommonProps {
  variant?: "filled" | "outlined";
  shape?: "angular" | "rounded";
  size?: "small" | "normal" | "large";
  status?: ComponentStatusType | "default";
  label?: string;
  helperText?: React.ReactNode;
  secondaryHelperText?: React.ReactNode;
  id?: string;
  rootClasses?: string;
  labelInfo?: string;
}

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    CommonProps {
  search?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  endText?: string;
  allowClear?: boolean;
  onClear?: () => void;
  containerClasses?: string;
  rootClasses?: string;
}

export interface InputContainerProps extends CommonProps {
  children: ReactNode;
}

export interface TextareaProps
  extends Omit<TextareaAutosizeProps, "size">,
    CommonProps {
  containerClasses?: string;
}

export interface SelectOptionType<TLabel = string, TValue = string> {
  label: TLabel;
  value: TValue;
}

export interface SelectProps
  extends Omit<ReactSelectProps, "onChange">,
    CommonProps {
  onChange?: (
    newValue: SelectOptionType,
    actionMeta: ActionMeta<SelectOptionType>,
  ) => void;
}

export interface DatePickerProps
  extends Omit<CommonProps, "defaultValue" | "onChange" | "value">,
    BaseDatePickerProps {
  defaultValue?: DatePickerLooseValue | DatePickerValue;
}

export interface TimePickerProps
  extends Omit<CommonProps, "defaultValue" | "onChange" | "value">,
    Omit<BaseTimePickerProps, "size"> {}

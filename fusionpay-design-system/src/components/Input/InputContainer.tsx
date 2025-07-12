import { generateInputLabelHelperTextID } from "./utils";
import React, { forwardRef } from "react";
import classNames from "classnames";
import { InputContainerProps } from "./types";
import { InputContainerRoot } from "./css";
import { Tooltip } from "../Tooltip";

const InputContainer = forwardRef(
  (props: InputContainerProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const {
      id,
      label,
      children,
      helperText,
      status,
      rootClasses,
      labelInfo,
      secondaryHelperText,
    } = props;
    const containerBlockCls = "inputContainer";

    const containerClasses = classNames(
      {
        [`${containerBlockCls}--${status}`]: status,
      },
      rootClasses,
    );

    const parsedHelperText =
      typeof helperText === "string" ? helperText?.trim() : helperText;

    const parsedSecondaryHelperText =
      typeof secondaryHelperText === "string"
        ? secondaryHelperText?.trim()
        : secondaryHelperText;

    const helperTextAvailable = !!parsedSecondaryHelperText || !!helperText;

    return (
      <InputContainerRoot className={containerClasses} ref={ref}>
        {label && (
          <div className={"input__labelContainer"}>
            <label
              className={"input__label"}
              htmlFor={id}
              id={generateInputLabelHelperTextID(id).label}
              aria-label={"input-label"}
            >
              {label}
            </label>
            {labelInfo && (
              <div className={"input__tooltipContainer"}>
                <Tooltip
                  placement={"right"}
                  title={labelInfo}
                  trigger={"click"}
                  infoIcon={true}
                  multiline={true}
                  config={{ placement: "right" }}
                ></Tooltip>
              </div>
            )}
          </div>
        )}
        {children}
        {helperTextAvailable && (
          <div className={classNames("input__helper_text-container")}>
            {!!parsedHelperText && (
              <span
                className={"input__helperText"}
                id={generateInputLabelHelperTextID(id).helperText}
                aria-label={"input-helper-text"}
              >
                {helperText}
              </span>
            )}
            {!!parsedSecondaryHelperText && (
              <span
                className={"input__helperText-secondary"}
                id={generateInputLabelHelperTextID(id).secondaryHelperText}
                aria-label={"input-helper-secondary-text"}
              >
                {secondaryHelperText}
              </span>
            )}
          </div>
        )}
      </InputContainerRoot>
    );
  },
);

export default InputContainer;

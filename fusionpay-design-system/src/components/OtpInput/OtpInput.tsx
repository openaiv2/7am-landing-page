import React from "react";
import Input from "../Input";
import BaseOtpInput, {
  OTPInputProps as BaseOTPInputProps,
} from "react-otp-input";
import Typography from "../Typography";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/pro-solid-svg-icons";
import { getThemeColorInStyledCss } from "../../styles/theme";
import { typographyBody2SemiBold } from "../Typography/css";
import { Tooltip } from "../Tooltip";

const RootElement = styled.div`
  & > .otpInput__helperText {
    align-items: center;
    color: ${(props) => props.theme.palette.fill.surface.contextual.error.main};
    display: flex;
    gap: 4px;
    padding-top: 6px;
  }

  & > .otpInput__footer {
    align-items: center;
    display: flex;
    gap: 8px;
    padding-top: 14px;

    .otpInput__footer-action {
      align-items: center;
      display: flex;
      gap: 4px;
    }
  }

  & input[type="number"]::-webkit-outer-spin-button,
  & input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  & input[type="number"] {
    -moz-appearance: textfield;
  }

  .input__labelContainer {
    display: flex;
    gap: 6px;
    align-items: center;
    margin-bottom: 6px;
  }

  .input__label {
    color: ${getThemeColorInStyledCss("text.primary")};
    min-width: 0;
    display: flex;
    align-items: center;
    gap: 6px;
    position: relative;
    ${typographyBody2SemiBold};
  }

  .input__tooltipContainer {
  }
`;

const InputContainer = styled.div`
  flex: 1;

  .input {
    padding: 0px !important;
  }
`;

export interface OTPInputProps extends Omit<BaseOTPInputProps, "renderInput"> {
  label?: string;
  labelInfo?: string;
  didNotReceiveCodeMessage?: React.ReactNode;
  didNotReceiveCodeActionLabel?: React.ReactNode;
  helperText?: string;
  helperTextIcon?: IconDefinition;
  onClickResendAction?: VoidFunction;
  resendCodeTimeLeft?: string;
}

export default function OtpInput(props: OTPInputProps) {
  const {
    label,
    labelInfo,
    didNotReceiveCodeMessage,
    didNotReceiveCodeActionLabel,
    helperText,
    helperTextIcon,
    onClickResendAction,
    resendCodeTimeLeft,
    ...others
  } = props;
  return (
    <RootElement>
      {label && (
        <div className={"input__labelContainer"}>
          <label className={"input__label"} aria-label={"otp-input-label"}>
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

      <BaseOtpInput
        {...others}
        containerStyle={{
          justifyContent: "space-between",
          gap: 6,
          alignItems: "end",
        }}
        numInputs={props.numInputs || 6}
        renderInput={(inputProps) => (
          <InputContainer>
            <Input {...inputProps} size={"large"} type={"number"} />
          </InputContainer>
        )}
      />
      {helperText && (
        <div className={"otpInput__helperText"}>
          {helperTextIcon && (
            <FontAwesomeIcon icon={helperTextIcon} fontSize={12} />
          )}
          <Typography
            newVariant={"caption-medium"}
            color={"fill.surface.contextual.error.main"}
          >
            {helperText}
          </Typography>
        </div>
      )}
      {didNotReceiveCodeActionLabel && (
        <div className={"otpInput__footer"}>
          <Typography newVariant={"body2-medium"}>
            {didNotReceiveCodeMessage}
          </Typography>
          <div className={"otpInput__footer-action"}>
            <Typography
              newVariant={resendCodeTimeLeft ? "body2-medium" : "link2"}
              color={resendCodeTimeLeft ? "text.tertiary" : undefined}
              fontWeight={500}
              onClick={onClickResendAction}
            >
              {didNotReceiveCodeActionLabel}
            </Typography>
            {resendCodeTimeLeft && (
              <Typography color={"text.primary"} newVariant={"body2-medium"}>
                {resendCodeTimeLeft}
              </Typography>
            )}
          </div>
        </div>
      )}
    </RootElement>
  );
}

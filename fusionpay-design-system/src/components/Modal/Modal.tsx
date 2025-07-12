import React, { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import {
  getThemeColorInStyledCss,
  neutral,
  TThemePaletteColorKeys,
} from "../../styles/theme";
import Typography, { TypographyProps } from "../Typography";
import Button, { ButtonProps } from "../Button";
import { Divider } from "../Divider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faExclamation,
  faXmark,
} from "@fortawesome/pro-solid-svg-icons";
import {
  typographyHeadline1SemiBold,
  typographyHeadline2SemiBold,
} from "../Typography/css";
import { Backdrop } from "../Backdrop";
import classNames from "classnames";

export interface ModalProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  onClose?: () => void;
  children?: ReactNode;
  open?: boolean;
  onCancel?: () => void;
  onOk?: () => void;
  okText?: ReactNode;
  cancelText?: ReactNode;
  oKProps?: ButtonProps;
  cancelProps?: ButtonProps;
  hideBottomAction?: boolean;
  allowClose?: boolean;
  showCloseButton?: boolean;
  variant?: "regular" | "tool" | "feedback";
  status?: "success" | "error" | "warning";
  containerClassName?: string;
  containerRootClassName?: string;
  className?: string;
  backdropClassName?: string;
  titleProps?: TypographyProps;
  subtitleProps?: TypographyProps;
  destroyUnMount?: boolean;
  hideCancelButton?: boolean;
}

const ModalRoot = styled("div")`
  position: fixed;
  min-height: 100vh;
  min-height: 100dvh;
  max-height: 100vh;
  height: 100dvh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 1001;
  top: 0;
  left: 0;
  padding: 32px;
  box-sizing: border-box;
  overflow: auto;

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

const ModalEl = styled("div")`
  box-shadow: 0px 24px 40px #0000001a;
  border-radius: 12px;
  position: relative;
  background-color: ${getThemeColorInStyledCss("fill.surface.secondary")};
  display: flex;
  flex-direction: column;
  margin: auto;

  .model__toolChildren-container {
    overflow: auto;
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;

    @media (max-width: 480px) {
      padding: 16px;
    }
  }
`;

const ToolModalTitleBox = styled.div`
  padding: 0 16px 0 20px;
  height: 68px;
  min-height: 68px;
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    padding: 0 12px 0 16px;
    height: 60px;
    min-height: 60px;
  }
`;

const ToolModalButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
  gap: 8px;

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

export const ModalIconButton = styled.button`
  height: 36px;
  width: 36px;
  border-radius: 12px;
  color: ${getThemeColorInStyledCss("text.secondary")};
  position: absolute;
  right: 16px;
  top: 16px;
  border: 0;
  outline: none;
  cursor: pointer;
  background-color: ${getThemeColorInStyledCss("fill.surface.tertiary")};
  &:hover {
    color: ${getThemeColorInStyledCss("text.primary")};
  }
`;

function ToolModal(props: ModalProps) {
  const {
    title,
    children,
    okText,
    cancelText,
    onCancel,
    onOk,
    oKProps,
    cancelProps,
    hideBottomAction,
    onClose,
    titleProps,
    hideCancelButton,
  } = props;
  return (
    <>
      <ToolModalTitleBox>
        <Typography
          newVariant={"body1-semiBold"}
          color={"text.primary"}
          aria-label={"modal-title"}
          {...titleProps}
        >
          {title}
        </Typography>
      </ToolModalTitleBox>
      <Divider />
      <div className={"model__toolChildren-container"}>{children}</div>
      {!hideBottomAction && (
        <>
          <Divider />
          <ToolModalButtonBox>
            {!hideCancelButton && (
              <Button
                type={"button"}
                onClick={() => {
                  if (onCancel) onCancel();
                  else onClose?.();
                }}
                size={"small"}
                variant={"outlined"}
                color={"grey"}
                aria-label={"modal-cancel-button"}
                {...cancelProps}
              >
                {cancelText || "Cancel"}
              </Button>
            )}
            <Button
              type={"button"}
              onClick={onOk}
              size={"small"}
              aria-label="modal-ok-button"
              {...oKProps}
            >
              {okText || "Ok"}
            </Button>
          </ToolModalButtonBox>
        </>
      )}
    </>
  );
}

const RegularModalTitleBox = styled.div`
  padding: 28px 20px 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;

  & > span {
    padding: 0 41px;
  }

  @media (max-width: 480px) {
    padding: 24px 16px 16px;
  }
`;

const RegularTitle = styled.h3`
  ${typographyHeadline1SemiBold};
  color: ${(props) => props.theme.palette.text.primary};
  margin: 0;

  @media (max-width: 480px) {
    ${typographyHeadline2SemiBold}
  }
`;

const RegularButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 20px 20px;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
    padding: 0 16px 16px;
  }
`;

const RegularContentContainer = styled.div`
  padding: 0 20px 20px;

  @media (max-width: 480px) {
    padding: 0 16px 16px;
  }
`;

const RegularNoButtonBottom = styled.div`
  padding-bottom: 8px;

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

function RegularModal(props: ModalProps) {
  const {
    title,
    children,
    subtitle,
    onClose,
    hideBottomAction,
    oKProps,
    cancelProps,
    onCancel,
    onOk,
    cancelText,
    okText,
    titleProps,
    subtitleProps,
    hideCancelButton,
  } = props;
  return (
    <>
      <RegularModalTitleBox>
        <RegularTitle aria-label={"modal-title"} {...titleProps}>
          {title}
        </RegularTitle>
        <Typography
          newVariant={"body2-medium"}
          aria-label={"modal-subtitle"}
          {...subtitleProps}
        >
          {subtitle}
        </Typography>
      </RegularModalTitleBox>
      {children && (
        <RegularContentContainer>{children}</RegularContentContainer>
      )}
      {hideBottomAction ? (
        <RegularNoButtonBottom />
      ) : (
        <>
          <RegularButtonBox>
            {!hideCancelButton && (
              <Button
                type={"button"}
                onClick={() => {
                  if (onCancel) onCancel();
                  else onClose?.();
                }}
                size={"small"}
                variant={"outlined"}
                fullWidth
                color={"grey"}
                aria-label={"modal-cancel-button"}
                {...cancelProps}
              >
                {cancelText || "Cancel"}
              </Button>
            )}
            <Button
              type={"button"}
              onClick={onOk}
              size={"small"}
              fullWidth
              aria-label={"modal-ok-button"}
              {...oKProps}
            >
              {okText || "Ok"}
            </Button>
          </RegularButtonBox>
        </>
      )}
    </>
  );
}

const FeedbackIcon = styled.div<{
  $bgColor: TThemePaletteColorKeys;
}>`
  height: 88px;
  width: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 50%;
  margin: 0 auto;
  background-color: ${({ $bgColor, ...props }) =>
    getThemeColorInStyledCss($bgColor)(props)};
  color: ${neutral["08"]};
  border: 8px solid transparent;
  background-clip: padding-box;
  box-sizing: border-box;

  &::before {
    opacity: 0.2;
    position: absolute;
    height: 88px;
    width: 88px;
    border-radius: 50%;
    content: " ";
    background-color: ${(props) =>
      getThemeColorInStyledCss(props.$bgColor)(props)};
  }

  @media (max-width: 480px) {
    height: 64px;
    width: 64px;
    border: 6px solid transparent;
    background-clip: padding-box;

    &::before {
      height: 76px;
      width: 76px;
    }
  }
`;

function FeedbackModal(props: ModalProps) {
  const { title, children, subtitle, status, titleProps, subtitleProps } =
    props;
  return (
    <>
      <RegularModalTitleBox>
        <div>
          {status === "success" && (
            <FeedbackIcon
              $bgColor={"fill.surface.contextual.success.main"}
              aria-label={"modal-success-icon"}
            >
              <FontAwesomeIcon icon={faCheck} fontSize={28} />
            </FeedbackIcon>
          )}
          {status === "error" && (
            <FeedbackIcon
              $bgColor={"fill.surface.contextual.error.main"}
              aria-label={"modal-error-icon"}
            >
              <FontAwesomeIcon icon={faXmark} fontSize={28} />
            </FeedbackIcon>
          )}
          {status === "warning" && (
            <FeedbackIcon
              $bgColor={"fill.surface.contextual.warning.main"}
              aria-label={"modal-warning-icon"}
            >
              <FontAwesomeIcon icon={faExclamation} fontSize={28} />
            </FeedbackIcon>
          )}
        </div>
        <RegularTitle aria-label={"modal-title"} {...titleProps}>
          {title}
        </RegularTitle>
        <Typography
          newVariant={"body2"}
          aria-label={"modal-subtitle"}
          {...subtitleProps}
        >
          {subtitle}
        </Typography>
      </RegularModalTitleBox>
      {children && (
        <RegularContentContainer>{children}</RegularContentContainer>
      )}
      <RegularNoButtonBottom />
    </>
  );
}

export default function Modal(props: ModalProps) {
  const {
    onClose,
    open,
    showCloseButton = true,
    variant = "regular",
    containerClassName,
    backdropClassName,
    destroyUnMount,
    className,
    containerRootClassName,
  } = props;

  const [height, setHeight] = useState(window.innerHeight);

  const handleDisableWindowScroll = () => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
    }
  };

  const handleEnableWindowScroll = () => {
    document.documentElement.style.overflow = "auto";
  };

  useEffect(() => {
    handleDisableWindowScroll();
    return () => {
      handleEnableWindowScroll();
    };
  }, [open]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setHeight(window.innerHeight);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setHeight(window.innerHeight);
      });
    };
  }, []);

  if (!open && destroyUnMount) {
    return null;
  }

  return (
    <>
      {createPortal(
        <div
          className={classNames(className, open ? "block" : "hidden")}
          aria-label={"modal"}
        >
          <Backdrop
            className={backdropClassName}
            aria-label={"modal-backdrop"}
            onClick={onClose}
          />

          <ModalRoot
            onClick={onClose}
            className={classNames("modal-root", containerRootClassName)}
            style={{
              maxHeight: variant === "tool" ? height - 80 : "auto",
            }}
          >
            <ModalEl
              onClick={(e: React.MouseEvent<HTMLInputElement>) =>
                e.stopPropagation()
              }
              className={containerClassName}
              style={{
                overflow: variant === "tool" ? "hidden" : undefined,
                height: "100%",
                maxWidth: variant === "tool" ? 620 : 464,
                width: "100%",
              }}
            >
              {variant === "tool" && <ToolModal {...props} />}
              {variant === "regular" && <RegularModal {...props} />}
              {variant === "feedback" && <FeedbackModal {...props} />}
              {showCloseButton && (
                <ModalIconButton
                  onClick={onClose}
                  aria-label={"modal-close-button"}
                >
                  <FontAwesomeIcon icon={faXmark} fontSize={16} />
                </ModalIconButton>
              )}
            </ModalEl>
          </ModalRoot>
        </div>,
        document.body!,
      )}
    </>
  );
}

export function ModalContent(props: ModalProps) {
  const {
    onClose,
    open,
    showCloseButton = true,
    variant = "regular",
    containerClassName,
    destroyUnMount,
    containerRootClassName,
  } = props;

  if (!open && destroyUnMount) {
    return null;
  }

  const handleDisableWindowScroll = () => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
    }
  };

  const handleEnableWindowScroll = () => {
    document.documentElement.style.overflow = "auto";
  };

  useEffect(() => {
    handleDisableWindowScroll();
    return () => {
      handleEnableWindowScroll();
    };
  }, [open]);

  return (
    <ModalRoot
      onClick={onClose}
      className={classNames("modal-root", containerRootClassName)}
      style={{
        maxHeight: variant === "tool" ? "calc(100vh - 80px)" : "auto",
      }}
    >
      <ModalEl
        onClick={(e: React.MouseEvent<HTMLInputElement>) => e.stopPropagation()}
        className={containerClassName}
        style={{
          overflow: variant === "tool" ? "hidden" : undefined,
          height: "100%",
          maxWidth: variant === "tool" ? 620 : 464,
          width: "100%",
        }}
      >
        {variant === "tool" && <ToolModal {...props} />}
        {variant === "regular" && <RegularModal {...props} />}
        {variant === "feedback" && <FeedbackModal {...props} />}
        {showCloseButton && (
          <ModalIconButton onClick={onClose} aria-label={"modal-close-button"}>
            <FontAwesomeIcon icon={faXmark} fontSize={16} />
          </ModalIconButton>
        )}
      </ModalEl>
    </ModalRoot>
  );
}

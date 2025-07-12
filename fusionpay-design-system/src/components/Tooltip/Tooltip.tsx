import React, { ComponentType, useState } from "react";

import styled from "styled-components";
import Typography from "../Typography";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faUpRightFromSquare,
} from "@fortawesome/pro-solid-svg-icons";
import {
  autoUpdate,
  flip,
  offset,
  Placement,
  ReferenceType,
  safePolygon,
  shift,
  useClick,
  useDismiss,
  useFloating,
  UseFloatingOptions,
  useHover,
  useInteractions,
} from "@floating-ui/react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const TooltipTriggerEl = styled.div<{ $active?: boolean }>`
  & svg {
    color: ${(props) =>
      props.theme.palette.text[props.$active ? "primary" : "secondary"]};
  }

  &:hover {
    & svg {
      color: ${(props) => props.theme.palette.text.primary};
    }
  }
`;

const TooltipRootEl = styled.div<{
  $multiline: boolean;
  $href: boolean;
  $isCopyAble?: boolean;
}>`
  background-color: ${(props) => props.theme.palette.fill.surface.mirrored};
  border-radius: ${(props) => (props.$multiline ? "8px" : "6px")};
  max-width: 296px;
  padding: ${(props) => (props.$multiline ? "14px 16px" : "6px 12px")};
  pointer-events: none;
  z-index: 1000;

  :hover {
    cursor: ${(props) =>
      props.$isCopyAble || props.$href ? "pointer" : "none"};
  }
`;

const TooltipTextContentEl = styled.div<{ $multiline: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.$multiline ? "start" : "center")};
  flex-direction: ${(props) => (props.$multiline ? "column" : "row")};
  gap: ${(props) => (props.$multiline ? "4px" : "6px")};
`;

const LinkWrapperEl = styled.div`
  padding-top: 10px;
  cursor: pointer;
  display: inline-block;
  pointer-events: auto;

  & .tooltip__linkInnerContainer {
    display: flex;
    gap: 5px;
  }
`;

export const TooltipIconOnlyContainer = styled.div`
  align-items: center;
  display: flex;
  height: 20px;
  justify-content: center;
  width: 20px;
  cursor: pointer;
`;

export interface TooltipProps {
  title: React.ReactNode;
  content?: React.ReactNode;
  linkComponent?: React.ElementType | ComponentType;
  multiline?: boolean;
  config?: UseFloatingOptions<ReferenceType>;
  trigger?: "hover" | "click";
  children?: React.ReactNode;
  href?: string;
  infoIcon?: boolean;
  placement: Placement;
  linkText?: string;
  isCopyAble?: boolean;
  textContentContainerClassName?: string;
  open?: boolean;
  onOpenChange?: (value: boolean) => void;
}

export function Tooltip({
  title,
  content,
  linkComponent: LinkComponent = "a",
  href,
  multiline,
  config = {},
  trigger = "hover",
  children,
  infoIcon = false,
  placement = "top",
  linkText,
  isCopyAble = false,
  textContentContainerClassName,
  open: defaultOpen = false,
  onOpenChange: defaultOnOpenChange,
}: TooltipProps) {
  const [open, onOpenChange] = useState(defaultOpen);
  const [keepOpen, setKeepOpen] = useState(false);
  const { floatingStyles, refs, context } = useFloating({
    placement: config.placement || placement,
    open: defaultOpen || open,
    onOpenChange: (value) => {
      if (defaultOnOpenChange) {
        defaultOnOpenChange(value);
      }
      onOpenChange(value);
    },
    whileElementsMounted: autoUpdate,
    middleware: [
      offset({
        mainAxis: multiline ? 10 : 6,
        alignmentAxis: multiline ? -14 : 0,
      }),
      flip({
        crossAxis: (config.placement || placement)?.includes("-"),
        fallbackAxisSideDirection: "start",
      }),
      shift({ padding: 3 }),
    ],
  });

  const hover = useHover(context, {
    enabled: trigger === "hover",
    delay: {
      open: 500,
      close: 0,
    },
    handleClose: safePolygon(),
  });
  const click = useClick(context);

  const dismiss = useDismiss(context, {
    outsidePressEvent: "mousedown",
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    trigger === "click" ? click : hover,
    dismiss,
  ]);

  const [showCopied, setShowCopied] = useState(false);

  const copyText = () => {
    if (!open) return;
    setShowCopied(true);
    if (isCopyAble) {
      setKeepOpen(true);
    }
    setTimeout(() => {
      setShowCopied(false);
      onOpenChange(false);
      defaultOnOpenChange?.(false);
      setKeepOpen(false);
    }, 2000);
  };

  return (
    <div>
      <TooltipTriggerEl
        $active={defaultOpen || open || keepOpen}
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        {isCopyAble ? (
          <CopyToClipboard text={title as string}>
            <span onClick={copyText}>
              <>
                {children}
                {infoIcon && (
                  <TooltipIconOnlyContainer>
                    <FontAwesomeIcon icon={faCircleInfo} fontSize={14} />
                  </TooltipIconOnlyContainer>
                )}
              </>
            </span>
          </CopyToClipboard>
        ) : (
          <>
            {children}
            {infoIcon && (
              <TooltipIconOnlyContainer>
                <FontAwesomeIcon icon={faCircleInfo} fontSize={14} />
              </TooltipIconOnlyContainer>
            )}
          </>
        )}
      </TooltipTriggerEl>
      {(defaultOpen || open || keepOpen) && (
        <TooltipRootEl
          $href={!!href}
          $multiline={!!multiline}
          $isCopyAble={!!isCopyAble}
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          <TooltipTextContentEl
            $multiline={!!multiline}
            className={textContentContainerClassName}
          >
            {isCopyAble ? (
              <Typography
                newVariant={multiline ? "body2-semiBold" : "caption-semiBold"}
                color={"text.primary-mirrored"}
              >
                {showCopied ? "Copied" : `Copy ${title as string}`}
              </Typography>
            ) : (
              <Typography
                newVariant={multiline ? "body2-semiBold" : "caption-semiBold"}
                color={"text.primary-mirrored"}
              >
                {title}
              </Typography>
            )}

            {content && (
              <Typography
                newVariant={multiline ? "caption-medium" : "caption-semiBold"}
                color={
                  multiline
                    ? "text.primary-mirrored"
                    : "text.secondary-mirrored"
                }
              >
                {content}
              </Typography>
            )}
          </TooltipTextContentEl>
          {href && (
            <LinkWrapperEl>
              <Typography
                newVariant={"link2"}
                color={"brand.primary"}
                component={LinkComponent}
              >
                <div className={"tooltip__linkInnerContainer"}>
                  {linkText}
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                </div>
              </Typography>
            </LinkWrapperEl>
          )}
        </TooltipRootEl>
      )}
    </div>
  );
}

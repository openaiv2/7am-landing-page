import React, { useEffect, useState } from "react";
import {
  autoUpdate,
  flip,
  offset,
  Placement,
  ReferenceType,
  shift,
  useClick,
  useDismiss,
  useFloating,
  UseFloatingOptions,
  useInteractions,
} from "@floating-ui/react";

export interface DropdownProps {
  open?: boolean;
  onOpenChange?: (value: boolean) => void;
  config?: UseFloatingOptions<ReferenceType>;
  children?: React.ReactNode;
  placement?: Placement;
  className?: string;
  contentClassName?: string;
  dropdownContent?: React.ReactNode;
}

export default function Dropdown({
  open = false,
  onOpenChange: onVisibilityChange,
  config = {},
  children,
  placement = "bottom",
  dropdownContent,
  className,
  contentClassName,
}: DropdownProps) {
  const [isOpen, onOpenChange] = useState(open);

  const { floatingStyles, refs, context } = useFloating({
    placement: config.placement || placement,
    open: open || isOpen,
    onOpenChange: (value) => {
      onVisibilityChange?.(value);
      onOpenChange(value);
    },
    whileElementsMounted: autoUpdate,
    middleware: [
      offset({
        mainAxis: 6,
      }),
      flip({
        crossAxis: (config.placement || placement)?.includes("-"),
        fallbackAxisSideDirection: "start",
      }),
      shift({ padding: 3 }),
    ],
  });

  const click = useClick(context, {});
  const dismiss = useDismiss(context, {
    outsidePressEvent: "mousedown",
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
  ]);

  useEffect(() => {
    if (open !== isOpen) {
      onOpenChange(open);
    }
  }, [open]);

  return (
    <>
      <div
        style={{ display: "inline-block" }}
        className={className}
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        {children}
      </div>
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={{ ...floatingStyles, zIndex: 10001 }}
          {...getFloatingProps()}
          className={contentClassName}
        >
          {dropdownContent}
        </div>
      )}
    </>
  );
}

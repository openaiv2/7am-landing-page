import React, { ReactNode, useState } from "react";
import "./FlassMessage.scss";
import classNames from "classnames";
import {
  faCheck,
  faExclamation,
  faXmark,
  IconDefinition,
} from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type FlashMessageStatusType =
  | "success"
  | "warning"
  | "error"
  | "brand"
  | "neutral-01";

export interface FlashMessageProps {
  message?: ReactNode;
  description?: ReactNode;
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: ReactNode;
  status?: FlashMessageStatusType;
  closeable?: boolean;
  noShadow?: boolean;
  noBackground?: boolean;
}

const displayIcon: Record<FlashMessageStatusType, IconDefinition> = {
  success: faCheck,
  warning: faExclamation,
  error: faExclamation,
  brand: faExclamation,
  "neutral-01": faExclamation,
};

function IconRender(props: Partial<FlashMessageProps>) {
  const { status = "success", icon } = props;
  if (icon) return <>{icon}</>;

  return <FontAwesomeIcon icon={displayIcon[status]} />;
}

export default function FlashMessage(props: FlashMessageProps) {
  const {
    message,
    description,
    status = "success",
    icon,
    closeable,
    onClose,
    noShadow,
    noBackground,
  } = props;

  const [hide, setHide] = useState(false);

  const blockCls = "flashMessage";

  const classes = classNames(
    blockCls,
    {
      [`${blockCls}__noShadow`]: noShadow,
      [`${blockCls}__noBackground`]: noBackground,
    },
    `${blockCls}--${status}`,
  );

  const iconContainerCls = "flashMessage__iconContainer";
  const iconContainerClasses = classNames(
    iconContainerCls,
    `${iconContainerCls}--${status}`,
  );

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClose) onClose(e);
    setHide(true);
  };

  if (hide) return null;

  return (
    <div className={classes} aria-label={"flash-message"}>
      <div className={iconContainerClasses}>
        <IconRender status={status} icon={icon} />
      </div>
      <div className={"flashMessage__messageContainer"}>
        <span
          className={"flashMessage__message"}
          aria-label={"flash-message-message"}
        >
          {message}
        </span>
        {description && (
          <span
            className={"flashMessage__description"}
            aria-label={"flash-message-description"}
          >
            {description}
          </span>
        )}
      </div>
      {closeable && (
        <button
          type={"button"}
          onClick={handleClose}
          className={"flashMessage__closeIcon"}
          aria-label={"flash-message-close-button"}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      )}
    </div>
  );
}

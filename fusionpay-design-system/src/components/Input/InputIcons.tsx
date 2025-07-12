import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleExclamation,
  faCircleInfo,
  faCircleXmark,
  faSearch,
} from "@fortawesome/pro-solid-svg-icons";
import React, { ReactNode } from "react";
import { InputProps } from "./types";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import styled from "styled-components";
import classNames from "classnames";

export function InputStartIcon(props: InputProps) {
  const { search, startIcon } = props;

  const renderItem = (icon: ReactNode) => {
    return <span className={"input__icon input__startIcon"}>{icon}</span>;
  };

  if (search) return renderItem(<FontAwesomeIcon icon={faSearch} />);

  if (startIcon) return renderItem(startIcon);

  return null;
}

type EndIconRenderFnType = {
  faIcon?: IconProp;
  onClick?: () => void;
  endIcon?: ReactNode;
  className?: string;
};

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export function InputEndIcon(props: InputProps) {
  const { status, endIcon, allowClear, onClear } = props;

  const renderItem = (props: EndIconRenderFnType) => {
    const { faIcon, onClick, endIcon, className } = props;
    return (
      <span
        className={classNames(className, "input__icon input__endIcon")}
        onClick={onClick}
      >
        {faIcon ? <FontAwesomeIcon icon={faIcon} /> : endIcon}
      </span>
    );
  };

  let statusIcon: ReactNode = null;

  if (status === "success")
    statusIcon = renderItem({ faIcon: faCircleCheck, onClick: onClear });

  if (status === "warning")
    statusIcon = renderItem({ faIcon: faCircleExclamation });

  if (status === "error")
    statusIcon = renderItem({ faIcon: faCircleExclamation });

  if (status === "info") statusIcon = renderItem({ faIcon: faCircleInfo });

  const clearIcon = (
    <span
      className={"input__icon input__endIcon input__endIcon input__clearIcon"}
      onClick={onClear}
      role={"button"}
    >
      <FontAwesomeIcon icon={faCircleXmark} />
    </span>
  );

  const endIconEl = renderItem({ endIcon, className: "input__endIcon-main" });

  return (
    <IconsContainer>
      {endIcon && endIconEl}
      {allowClear && clearIcon} {statusIcon}
    </IconsContainer>
  );
}

interface EndTextProps {
  endText: string;
}

export function InputEndText({ endText }: EndTextProps) {
  return <div className={"input__endText"}>{endText}</div>;
}

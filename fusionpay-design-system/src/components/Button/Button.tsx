import React, { forwardRef, useEffect, useState } from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinnerThird } from "@fortawesome/pro-solid-svg-icons";
import { ButtonProps } from ".";
import { ButtonRoot } from "./css";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    shape = "angular",
    variant = "filled",
    size = "normal",
    color = "primary",
    startIcon,
    endIcon,
    className,
    fullWidth,
    disabled: disabledState,
    loading,
    loadingIcon,
    iconOnly,
    ...others
  } = props;

  const [disabled, setDisabled] = useState(disabledState);

  const greyAsDefaultForOutline = () => {
    if (variant === "outlined" && !color) {
      return "grey";
    }
    return color;
  };

  const blockCls = "button";
  const classes = classNames(
    {
      [`${blockCls}--${variant}`]: variant,
      [`${blockCls}--${variant}-${greyAsDefaultForOutline()}`]: color,
      [`${blockCls}--${size}`]: size,
      [`${blockCls}--${size}-iconOnly`]: iconOnly,
      [`${blockCls}--${shape}`]: shape,
      [`${blockCls}--fullwidth`]: fullWidth,
      [`${blockCls}--disabled`]: disabled,
    },
    className,
  );

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>,
  ) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    const { onClick } = props;
    (
      onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
    )?.(e);
  };

  useEffect(() => {
    setDisabled(disabledState);
  }, [disabledState]);

  useEffect(() => {
    if (loading) {
      setDisabled(true);
    } else {
      if (!disabledState && disabled) {
        setDisabled(false);
      }
    }
  }, [loading]);

  return (
    <ButtonRoot
      {...others}
      ref={ref}
      onClick={handleClick}
      disabled={disabled}
      className={classes}
    >
      {startIcon && <span>{startIcon}</span>}
      {!(iconOnly && loading) && <span>{children}</span>}
      {endIcon && <span>{endIcon}</span>}
      {loading &&
        (loadingIcon || (
          <FontAwesomeIcon
            icon={faSpinnerThird as IconProp}
            className={"fa-spin"}
          />
        ))}
    </ButtonRoot>
  );
});

export default Button;

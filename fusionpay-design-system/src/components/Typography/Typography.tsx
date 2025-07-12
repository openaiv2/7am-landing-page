import React from "react";
import classNames from "classnames";
import { TypographyRoot } from "./css";
import { TypographyBaseProps } from "./type";
import {
  defaultVariantMapping,
  oldDefaultVariantMapping,
} from "./default-props";

export default function Typography<P>(props: TypographyBaseProps<P>) {
  const {
    component,
    variant = "body2",
    newVariant,
    color,
    children,
    className,
    fontWeight,
    weight,
    ...others
  } = props;

  const variantObj = newVariant
    ? defaultVariantMapping[newVariant]
    : oldDefaultVariantMapping[variant];
  const Component = component || variantObj.element;

  const colorStr = color || variantObj.defaultColor;

  const weightStr = fontWeight || weight || variantObj.defaultWeight;
  const classStr = "typography";
  const classes = classNames(
    `${classStr}--${newVariant ? "variant-" + newVariant : "variantOld-" + variant}`,
    `${classStr}--fontWeight-${weightStr}`,
    className,
  );

  return (
    <TypographyRoot
      as={Component}
      $color={colorStr}
      {...others}
      className={classes}
    >
      {children}
    </TypographyRoot>
  );
}

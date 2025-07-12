import React, { forwardRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/pro-solid-svg-icons";
import { typographyBody2SemiBold } from "../Typography/css";
import {
  getThemeColorInStyledCss,
  TThemePaletteColorKeys,
} from "../../styles/theme";
import Checkbox, { CheckboxProps } from "../Checkbox";
import { Substitute } from "styled-components/dist/types";

const Root = styled.div<{
  $selected?: boolean;
  $textColor?: TThemePaletteColorKeys;
}>`
  height: 40px;
  width: 100%;
  display: flex;
  cursor: pointer;
  border-radius: 12px;
  align-items: center;
  background-color: ${({ theme, $selected }) =>
    $selected ? theme.palette?.fill.surface.tertiary : undefined};
  color: ${({ theme, $selected, $textColor }) =>
    $textColor
      ? getThemeColorInStyledCss($textColor)
      : theme.palette?.text?.[$selected ? "primary" : "secondary"]};

  &:hover {
    color: ${({ theme, $textColor }) =>
      $textColor
        ? getThemeColorInStyledCss($textColor)
        : theme.palette?.text?.primary};

    background-color: ${({ theme }) => theme.palette?.fill.surface.tertiary};
`;

const Icon = styled.div`
  height: 40px;
  padding-left: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    width: 14px;
  }
`;

const Item = styled.div`
  padding: 0 12px;
  flex: 1;

  ${typographyBody2SemiBold};
`;

const Image = styled.img<{
  $shape?: "angular" | "rounded";
}>`
  height: 28px;
  width: 28px;
  border-radius: ${({ $shape }) => ($shape === "rounded" ? "50%" : "0px")};
`;

const LeftItemContainer = styled.div`
  padding-left: 12px;
  display: flex;
  align-items: center;
`;
const LeftCheckboxContainer = styled.div`
  padding-left: 12px;
  display: flex;
  align-items: center;
  margin-right: -8px;
`;

export interface DropdownListItemProps
  extends React.ComponentPropsWithoutRef<"div"> {
  icon?: IconDefinition;
  customIcon?: React.ReactNode;
  label?: React.ReactNode;
  selected?: boolean;
  textColor?: TThemePaletteColorKeys;
  children?: React.ReactNode;
  action?: React.ReactNode;
  checkboxProps?: CheckboxProps;
  imageProps?: Substitute<
    React.DetailedHTMLProps<
      React.ImgHTMLAttributes<HTMLImageElement>,
      HTMLImageElement
    >,
    {
      shape?: "angular" | "rounded";
    }
  >;
}

const DropdownListItem = forwardRef<HTMLDivElement, DropdownListItemProps>(
  (
    {
      icon,
      label,
      selected,
      textColor,
      customIcon,
      children,
      checkboxProps,
      imageProps,
      action,
      ...others
    },
    ref,
  ) => {
    return (
      <Root
        $selected={selected}
        $textColor={textColor}
        aria-label={"dropdown-list-item"}
        {...others}
        ref={ref}
      >
        {(icon || customIcon) && (
          <Icon aria-label={"dropdown-list-item-icon"}>
            <div className={"dropdown-list-item-icon"}>
              {customIcon}
              {icon && <FontAwesomeIcon icon={icon} fontSize={14} />}
            </div>
          </Icon>
        )}
        {checkboxProps && (
          <LeftCheckboxContainer>
            <Checkbox
              aria-label={"dropdown-list-item-checkbox"}
              {...checkboxProps}
              className="inline-block"
            />
          </LeftCheckboxContainer>
        )}
        {imageProps && (
          <LeftItemContainer>
            <Image {...imageProps} $shape={imageProps.shape} />
          </LeftItemContainer>
        )}
        <Item
          className={"dropdown-list-item-label"}
          aria-label={"dropdown-list-item-label"}
        >
          {label || children}
        </Item>
        {action}
      </Root>
    );
  },
);

export default DropdownListItem;

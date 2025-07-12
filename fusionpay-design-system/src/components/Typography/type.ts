import { TThemePaletteColorKeys } from "../../styles/theme";
import React, { ComponentType, ReactNode } from "react";
//
export type TypographyVariantTypeOld =
  | "title"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "hairline1"
  | "hairline2"
  | "hairline3"
  | "body1"
  | "body2"
  | "body3"
  | "caption1"
  | "caption2"
  | "caption3"
  | "p1"
  | "p2"
  | "link1"
  | "link2";

export type TypographyVariantType =
  | "hero-title"
  | "hero-title-bold"
  | "title1"
  | "title1-bold"
  | "title2"
  | "title2-bold"
  | "title3"
  | "title3-bold"
  | "title4"
  | "title4-bold"
  | "headline1"
  | "headline1-semiBold"
  | "headline1-medium"
  | "headline2"
  | "headline2-semiBold"
  | "headline2-medium"
  | "headline3"
  | "headline3-semiBold"
  | "headline3-medium"
  | "body1"
  | "body1-semiBold"
  | "body1-medium"
  | "body2"
  | "body2-semiBold"
  | "body2-medium"
  | "caption"
  | "caption-semiBold"
  | "caption-medium"
  | "link1"
  | "link2"
  | "link3"
  | "button-large"
  | "button-medium"
  | "button-small"
  | "hairline-large"
  | "hairline-medium"
  | "hairline-small";

export type TypographyFontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700;

export interface TypographyProps {
  /**
   * @deprecated use newVariant, newVariant will be replaced to variant in v4
   */
  variant?: TypographyVariantTypeOld;
  newVariant?: TypographyVariantType;
  color?: TThemePaletteColorKeys;
  children?: ReactNode;
  className?: string;
  fontWeight?: TypographyFontWeight;
  onClick?: () => void;
  /**
   * @deprecated weight pro is depreciated, use fontWeight props
   */
  weight?: TypographyFontWeight;
}

export type TypographyBaseProps<P> = TypographyProps &
  P & {
    component?: React.ElementType<P> | ComponentType<P>;
  };

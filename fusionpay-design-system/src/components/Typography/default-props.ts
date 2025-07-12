import React from "react";
import { TThemePaletteColorKeys } from "../../styles/theme";
import {
  TypographyFontWeight,
  TypographyVariantType,
  TypographyVariantTypeOld,
} from "./type";

export const defaultVariantMapping: Record<
  TypographyVariantType,
  {
    element: React.ElementType;
    defaultColor: TThemePaletteColorKeys;
    defaultWeight: TypographyFontWeight;
  }
> = {
  "hero-title": {
    element: "h1",
    defaultColor: "text.primary",
    defaultWeight: 600,
  },
  "hero-title-bold": {
    element: "h1",
    defaultColor: "text.primary",
    defaultWeight: 700,
  },
  title1: { element: "h1", defaultColor: "text.primary", defaultWeight: 600 },
  "title1-bold": {
    element: "h1",
    defaultColor: "text.primary",
    defaultWeight: 700,
  },
  title2: { element: "h2", defaultColor: "text.primary", defaultWeight: 600 },
  "title2-bold": {
    element: "h2",
    defaultColor: "text.primary",
    defaultWeight: 700,
  },
  title3: { element: "h3", defaultColor: "text.primary", defaultWeight: 600 },
  "title3-bold": {
    element: "h3",
    defaultColor: "text.primary",
    defaultWeight: 700,
  },
  title4: { element: "h4", defaultColor: "text.primary", defaultWeight: 600 },
  "title4-bold": {
    element: "h4",
    defaultColor: "text.primary",
    defaultWeight: 700,
  },
  headline1: {
    element: "h5",
    defaultColor: "text.primary",
    defaultWeight: 600,
  },
  "headline1-semiBold": {
    element: "h5",
    defaultColor: "text.primary",
    defaultWeight: 600,
  },
  "headline1-medium": {
    element: "h5",
    defaultColor: "text.primary",
    defaultWeight: 500,
  },
  headline2: {
    element: "h6",
    defaultColor: "text.primary",
    defaultWeight: 600,
  },
  "headline2-semiBold": {
    element: "h6",
    defaultColor: "text.primary",
    defaultWeight: 600,
  },
  "headline2-medium": {
    element: "h6",
    defaultColor: "text.primary",
    defaultWeight: 500,
  },
  headline3: {
    element: "h6",
    defaultColor: "text.primary",
    defaultWeight: 600,
  },
  "headline3-semiBold": {
    element: "h6",
    defaultColor: "text.primary",
    defaultWeight: 600,
  },
  "headline3-medium": {
    element: "h6",
    defaultColor: "text.primary",
    defaultWeight: 500,
  },
  body1: { element: "p", defaultColor: "text.secondary", defaultWeight: 500 },
  "body1-semiBold": {
    element: "p",
    defaultColor: "text.secondary",
    defaultWeight: 600,
  },
  "body1-medium": {
    element: "p",
    defaultColor: "text.secondary",
    defaultWeight: 500,
  },
  body2: { element: "p", defaultColor: "text.secondary", defaultWeight: 500 },
  "body2-semiBold": {
    element: "p",
    defaultColor: "text.secondary",
    defaultWeight: 600,
  },
  "body2-medium": {
    element: "p",
    defaultColor: "text.secondary",
    defaultWeight: 500,
  },
  caption: {
    element: "span",
    defaultColor: "text.primary",
    defaultWeight: 600,
  },
  "caption-semiBold": {
    element: "span",
    defaultColor: "text.primary",
    defaultWeight: 600,
  },
  "caption-medium": {
    element: "span",
    defaultColor: "text.primary",
    defaultWeight: 500,
  },
  link1: { element: "a", defaultColor: "brand.primary", defaultWeight: 500 },
  link2: { element: "a", defaultColor: "brand.primary", defaultWeight: 500 },
  link3: { element: "a", defaultColor: "brand.primary", defaultWeight: 500 },
  "button-large": {
    element: "span",
    defaultColor: "text.primary",
    defaultWeight: 600,
  },
  "button-medium": {
    element: "span",
    defaultColor: "text.primary",
    defaultWeight: 600,
  },
  "button-small": {
    element: "span",
    defaultColor: "text.primary",
    defaultWeight: 600,
  },
  "hairline-large": {
    element: "span",
    defaultColor: "text.secondary",
    defaultWeight: 700,
  },
  "hairline-medium": {
    element: "span",
    defaultColor: "text.secondary",
    defaultWeight: 700,
  },
  "hairline-small": {
    element: "span",
    defaultColor: "text.secondary",
    defaultWeight: 700,
  },
};

export const oldDefaultVariantMapping: Record<
  TypographyVariantTypeOld,
  {
    element: React.ElementType;
    defaultColor: TThemePaletteColorKeys;
    defaultWeight: TypographyFontWeight;
  }
> = {
  title: {
    element: "h1",
    defaultColor: "text.primary",
    defaultWeight: 600,
  },
  h1: { element: "h1", defaultColor: "text.primary", defaultWeight: 600 },
  h2: { element: "h2", defaultColor: "text.primary", defaultWeight: 600 },
  h3: { element: "h3", defaultColor: "text.primary", defaultWeight: 600 },
  h4: { element: "h4", defaultColor: "text.primary", defaultWeight: 600 },
  h5: { element: "h5", defaultColor: "text.primary", defaultWeight: 600 },
  h6: { element: "h6", defaultColor: "text.primary", defaultWeight: 600 },
  hairline1: {
    element: "span",
    defaultColor: "text.secondary",
    defaultWeight: 700,
  },
  hairline2: {
    element: "span",
    defaultColor: "text.secondary",
    defaultWeight: 700,
  },
  hairline3: {
    element: "span",
    defaultColor: "text.secondary",
    defaultWeight: 700,
  },
  body1: { element: "p", defaultColor: "text.secondary", defaultWeight: 500 },
  body2: { element: "p", defaultColor: "text.secondary", defaultWeight: 500 },
  body3: {
    element: "span",
    defaultColor: "text.secondary",
    defaultWeight: 500,
  },
  p1: { element: "p", defaultColor: "text.primary", defaultWeight: 500 },
  p2: { element: "p", defaultColor: "text.primary", defaultWeight: 500 },
  caption1: {
    element: "span",
    defaultColor: "text.primary",
    defaultWeight: 600,
  },
  caption2: {
    element: "span",
    defaultColor: "text.primary",
    defaultWeight: 600,
  },
  caption3: {
    element: "span",
    defaultColor: "text.primary",
    defaultWeight: 600,
  },
  link1: { element: "a", defaultColor: "brand.primary", defaultWeight: 500 },
  link2: { element: "a", defaultColor: "brand.primary", defaultWeight: 500 },
};

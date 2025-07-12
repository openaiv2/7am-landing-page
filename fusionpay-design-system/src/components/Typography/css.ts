import styled, { css } from "styled-components";
import {
  getThemeColorInStyledCss,
  TElementProps,
  TThemePaletteColorKeys,
} from "../../styles/theme";

const getColor = (name: TThemePaletteColorKeys) => (props: TElementProps) => {
  return css`
    color: ${getThemeColorInStyledCss(name)(props)};
  `;
};

const variant = (
  fontSize: string,
  lineHeight: string,
  letterSpacing: string,
  textTransform?: string,
) => css`
  font-size: ${fontSize};
  line-height: ${lineHeight};
  letter-spacing: ${letterSpacing};

  ${textTransform && `text-transform: ${textTransform}`};
`;

export const typographyHeadline1SemiBold = css`
  ${variant("24px", "140%", "-0.24px")};
  font-weight: 600;
`;
export const typographyHeadline2SemiBold = css`
  ${variant("20px", "140%", "-0.2px")};
  font-weight: 600;
`;

export const typographyBody2SemiBold = css`
  ${variant("14px", "140%", "-0.14px")};
  font-weight: 600;
`;
export const typographyBody2Medium = css`
  ${variant("14px", "140%", "-0.14px")};
  font-weight: 500;
`;
export const typographyHairlineSmall = css`
  ${variant("10px", "normal", "0.2px", "uppercase")};
  font-weight: 700;
`;

export const TypographyRoot = styled("span")<{
  $color: TThemePaletteColorKeys;
}>`
  margin: 0;
  padding: 0;
  ${(props) => getColor(props.$color)(props)};

  &.typography--variant-hero-title {
    ${variant("96px", "normal", "-1.92px")};
  }
  &.typography--variant-hero-title-bold {
    ${variant("96px", "normal", "-1.92px")};
    font-weight: 700;
  }

  &.typography--variant-title1 {
    ${variant("64px", "normal", "-1.28px")}
  }
  &.typography--variant-title1-bold {
    ${variant("64px", "normal", "-1.28px")}
    font-weight: 700;
  }

  &.typography--variant-title2 {
    ${variant("48px", "normal", "-0.96px")};
  }
  &.typography--variant-title2-bold {
    ${variant("48px", "normal", "-0.96px")};
    font-weight: 700;
  }

  &.typography--variant-title3 {
    ${variant("40px", "normal", "-0.8px")};
  }
  &.typography--variant-title3-bold {
    ${variant("40px", "normal", "-0.8px")};
    font-weight: 700;
  }

  &.typography--variant-title4 {
    ${variant("32px", "normal", "-0.64px")};
  }
  &.typography--variant-title4-bold {
    ${variant("32px", "normal", "-0.64px")};
    font-weight: 700;
  }

  &.typography--variant-headline1 {
    ${variant("24px", "140%", "-0.24px")};
  }

  &.typography--variant-headline1-semiBold {
    ${typographyHeadline1SemiBold}
  }

  &.typography--variant-headline1-medium {
    ${variant("24px", "140%", "-0.24px")};
    font-weight: 500;
  }

  &.typography--variant-headline2 {
    ${variant("20px", "140%", "-0.2px")};
  }

  &.typography--variant-headline2-semiBold {
    ${typographyHeadline2SemiBold}
  }

  &.typography--variant-headline2-medium {
    ${variant("20px", "140%", "-0.2px")};
    font-weight: 500;
  }

  &.typography--variant-headline3 {
    ${variant("18px", "140%", "-0.18px")};
  }

  &.typography--variant-headline3-semiBold {
    ${variant("18px", "140%", "-0.18px")};
    font-weight: 600;
  }

  &.typography--variant-headline3-medium {
    ${variant("18px", "140%", "-0.18px")};
    font-weight: 500;
  }

  &.typography--variant-body1 {
    ${variant("16px", "normal", "-0.16px")};
  }

  &.typography--variant-body1-semiBold {
    ${variant("16px", "normal", "-0.16px")};
    font-weight: 600;
  }

  &.typography--variant-body1-medium {
    ${variant("16px", "normal", "-0.16px")};
    font-weight: 500;
  }

  &.typography--variant-body2 {
    ${variant("14px", "140%", "-0.14px")};
  }

  &.typography--variant-body2-semiBold {
    ${typographyBody2SemiBold}
  }

  &.typography--variant-body2-medium {
    ${typographyBody2Medium}
  }

  &.typography--variant-caption {
    ${variant("12px", "140%", "-0.12px")};
  }

  &.typography--variant-caption-semiBold {
    ${variant("12px", "140%", "-0.12px")};
    font-weight: 600;
  }

  &.typography--variant-caption-medium {
    ${variant("12px", "140%", "-0.12px")};
    font-weight: 500;
  }

  &.typography--variant-link1 {
    ${variant("16px", "140%", "-0.16px")};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  &.typography--variant-link2 {
    ${variant("14px", "140%", "-0.14px")};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  &.typography--variant-link3 {
    ${variant("12px", "140%", "-0.12px")};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  &.typography--variant-button-large {
    ${variant("18px", "normal", "-0.18px")};
  }

  &.typography--variant-button-medium {
    ${variant("16px", "normal", "-0.16px")};
  }

  &.typography--variant-button-small {
    ${variant("14px", "normal", "-0.14px")};
  }

  &.typography--variant-hairline-large {
    ${variant("16px", "normal", "0.32px", "uppercase")};
  }

  &.typography--variant-hairline-medium {
    ${variant("12px", "normal", "0.24px", "uppercase")};
  }

  &.typography--variant-hairline-small {
    ${typographyHairlineSmall}
  }

  &.typography--variantOld-title {
    ${variant("96px", "116px", "-1.92px")};
  }

  &.typography--variantOld-h1 {
    ${variant("64px", "77px", "-1.28px")}
  }

  &.typography--variantOld-h2 {
    ${variant("48px", "59px", "-0.96px")};
  }

  &.typography--variantOld-h3 {
    ${variant("40px", "49px", "-0.8px")};
  }

  &.typography--variantOld-h4 {
    ${variant("32px", "39px", "-0.64px")};
  }

  &.typography--variantOld-h5 {
    ${variant("24px", "29px", "-0.48px")};
  }

  &.typography--variantOld-h6 {
    ${variant("18px", "21px", "-0.36px")};
  }

  &.typography--variantOld-hairline1 {
    ${variant("16px", "20px", "0.32px", "uppercase")};
  }

  &.typography--variantOld-hairline2 {
    ${variant("12px", "15px", "0.24px", "uppercase")};
  }

  &.typography--variantOld-hairline3 {
    ${variant("10px", "12px", "0.2px", "uppercase")};
  }

  &.typography--variantOld-body1 {
    ${variant("24px", "38px", "-0.24px")};
  }

  &.typography--variantOld-body2 {
    ${variant("16px", "28px", "-0.16px")};
  }

  &.typography--variantOld-body3 {
    ${variant("14px", "24px", "-0.14px")};
  }

  &.typography--variantOld-caption1 {
    ${variant("16px", "28px", "-0.16px")};
  }

  &.typography--variantOld-caption2 {
    ${variant("14px", "24px", "-0.14px")};
  }

  &.typography--variantOld-caption3 {
    ${variant("12px", "20px", "-0.12px")};
  }

  &.typography--variantOld-p1 {
    ${variant("14px", "24px", "-0.14px")};
  }

  &.typography--variantOld-p2 {
    ${variant("12px", "20px", "-0.12px")};
  }

  &.typography--variantOld-link1 {
    ${variant("14px", "24px", "-0.14px")};
  }

  &.typography--variantOld-link2 {
    ${variant("12px", "24px", "-0.12px")};
  }

  &.typography--fontWeight-100 {
    font-weight: 100;
  }

  &.typography--fontWeight-200 {
    font-weight: 200;
  }

  &.typography--fontWeight-300 {
    font-weight: 300;
  }

  &.typography--fontWeight-400 {
    font-weight: 400;
  }

  &.typography--fontWeight-500 {
    font-weight: 500;
  }

  &.typography--fontWeight-600 {
    font-weight: 600;
  }

  &.typography--fontWeight-700 {
    font-weight: 700;
  }
`;

import merge from "lodash.merge";
import "styled-components";
import { color } from "./colors";
import { radius } from "./scale";
import { shadow } from "./shadow";

export const createBaseTheme = (mode: "dark" | "light" = "light") => ({
  palette: color[mode],
  radius,
  shadow: shadow[mode],
});

export type Theme = ReturnType<typeof createBaseTheme>;

export type ObjectPaths<T, P extends string = ""> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [K in keyof T]: T[K] extends Record<string, any>
    ? ObjectPaths<T[K], `${P}${K & string}.`>
    : `${P}${K & string}`;
}[keyof T];

export type TThemePaletteColorKeys = ObjectPaths<typeof color.light>;

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createTheme = <T extends Record<string, any>>(
  mode: "dark" | "light" = "light",
  customTheme = {} as T & DeepPartial<Theme>,
): T & Theme => {
  return merge(createBaseTheme(mode), customTheme);
};

export type TElementProps = {
  theme: Theme;
};

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

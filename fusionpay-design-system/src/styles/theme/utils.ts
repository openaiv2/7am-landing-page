import {
  TElementProps,
  Theme,
  TThemePaletteColorKeys,
} from "../../styles/theme";

const getColor = (
  theme: Theme,
  path: TThemePaletteColorKeys,
): string | undefined => {
  const keys = path.split(".");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let result: any = theme.palette;

  for (const key of keys) {
    if (result[key] === undefined) {
      return undefined;
    }
    result = result[key];
  }
  return result;
};

export const getThemeColorInStyledCss =
  (name: TThemePaletteColorKeys) => (props: TElementProps) => {
    return getColor(props.theme, name);
  };

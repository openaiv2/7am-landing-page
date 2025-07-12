import { Props } from "react-svg";

export interface RemoteIconProps extends Omit<Props, "src"> {
  iconName: string;
  iconFontSize: number;
  iconColor: string;
}

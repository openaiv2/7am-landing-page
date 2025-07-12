import React from "react";
import { $getIconByName } from "../../utils";
import { ReactSVG } from "react-svg";
import { RemoteIconProps } from "./types";

const CustomRemoteIcon = React.forwardRef(
  (
    { iconName, iconColor, iconFontSize, ...others }: RemoteIconProps,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: React.ForwardedRef<any>,
  ) => {
    const iconURL = $getIconByName(iconName);

    return (
      <ReactSVG
        {...others}
        ref={ref}
        src={iconURL}
        style={{ width: iconFontSize }}
        beforeInjection={(svg) => {
          svg.setAttribute("style", `fill: ${iconColor};`);
        }}
      />
    );
  },
);

export default CustomRemoteIcon;

import React from "react";
import styled from "styled-components";

const RootEl = styled.div<{ $variant: "modal" | "lightbox" }>`
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  position: fixed;

  backdrop-filter: ${(props) =>
    props.$variant === "lightbox" ? "blur(7.5px)" : "unset"};
  background-color: ${(props) =>
    props.theme.palette.material[`${props.$variant}-background`]};
`;

export default function Backdrop({
  variant = "modal",
  ...props
}: React.ComponentPropsWithRef<"div"> & {
  variant?: "modal" | "lightbox";
}) {
  return <RootEl aria-label="backdrop" {...props} $variant={variant} />;
}

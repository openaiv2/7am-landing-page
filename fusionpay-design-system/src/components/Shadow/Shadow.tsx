import React from "react";

import styled from "styled-components";

const RootEl = styled.div<{ $type: "01" | "02" }>`
  width: 122px;
  height: 122px;
  box-shadow: ${(props) => props.theme.shadow[props.$type]};
  background-color: ${(props) => props.theme.palette.fill.surface.secondary};
`;

export default function Shadow(props: { type: "01" | "02" }) {
  return <RootEl $type={props.type} />;
}

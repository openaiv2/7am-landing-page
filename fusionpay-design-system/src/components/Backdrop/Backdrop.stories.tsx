import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Backdrop from "./Backdrop";
import styled from "styled-components";

const ParentBackground = styled.div`
  width: 720px;
  height: 480px;
  display: flex;
  font-size: 80px;
  font-weight: 900;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.palette.text.primary};
  background-color: ${(props) => props.theme.palette.fill.surface.secondary};

  div {
    top: unset !important;
    left: unset !important;
  }
`;

const meta: Meta<typeof Backdrop> = {
  title: "Backdrop",
  component: Backdrop,
  decorators: (Story) => (
    <ParentBackground>
      <div>BACKGROUND</div>
      <Story />
    </ParentBackground>
  ),
};
export default meta;

type Story = StoryObj<typeof Backdrop>;

export const Default: Story = {
  args: {
    style: {
      position: "absolute",
      width: 480,
      height: 240,
    },
    variant: "modal",
  },
};

export const Modal: Story = {
  args: {
    style: {
      position: "absolute",
      width: 480,
      height: 240,
    },
    variant: "modal",
  },
};

export const LightBox: Story = {
  args: {
    style: {
      position: "absolute",
      width: 480,
      height: 240,
    },
    variant: "lightbox",
  },
};

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Shadow from "./Shadow";
import styled from "styled-components";

const ParentBackground = styled.div`
  width: 720px;
  height: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.palette.fill.surface.primary};
`;

const meta: Meta<typeof Shadow> = {
  title: "Shadow",
  component: Shadow,
  decorators: (Story) => (
    <ParentBackground>
      <Story />
    </ParentBackground>
  ),
};
export default meta;

type Story = StoryObj<typeof Shadow>;

export const Shadow01: Story = {
  args: {
    type: "01",
  },
};

export const Shadow02: Story = {
  args: {
    type: "01",
  },
};

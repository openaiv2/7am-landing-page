import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import MiniToast from "./MiniToast";
import Button from "../Button";
import { DropdownListItem } from "../DropdownListItem";

const meta: Meta<typeof MiniToast> = {
  title: "MiniToast",
  component: MiniToast,
  decorators: (Story) => (
    <div style={{ padding: 100 }}>
      <Story />
    </div>
  ),
};
export default meta;

type Story = StoryObj<typeof MiniToast>;

export const Floating: Story = {
  args: {
    children: <Button>Copy</Button>,
    variant: "floating",
  },
};

export const Inline: Story = {
  args: {
    children: <DropdownListItem>Trigger</DropdownListItem>,
    variant: "inline",
    fullWidth: true,
  },
};

export const Label: Story = {
  args: {
    children: <Button>Copy</Button>,
    label: "Copying",
    variant: "floating",
  },
};

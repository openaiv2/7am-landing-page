import { Meta, StoryObj } from "@storybook/react";

import HorizontalNavigation from "./HorizontalNavigation";

const meta: Meta<typeof HorizontalNavigation> = {
  title: "Horizontal Navigation",
  component: HorizontalNavigation,
};
export default meta;

type Story = StoryObj<typeof HorizontalNavigation>;

export const Default: Story = {
  args: {
    items: [
      { label: "Button", onClick: () => {} },
      { label: "Button", onClick: () => {} },
      { label: "Button", onClick: () => {} },
      { label: "Button", onClick: () => {} },
      { label: "Button", onClick: () => {} },
    ],
    variant: "default",
  },
};

export const Button: Story = {
  args: {
    items: [
      { label: "Button", onClick: () => {} },
      { label: "Button", onClick: () => {} },
      { label: "Button", onClick: () => {} },
      { label: "Button", onClick: () => {} },
      { label: "Button", onClick: () => {} },
    ],
    variant: "button",
  },
};

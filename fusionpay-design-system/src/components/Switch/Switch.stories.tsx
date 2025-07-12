import Switch from "./Switch";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Switch> = {
  title: "Switch",
  component: Switch,
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Primary: Story = {
  args: {
    label: "Checkbox",
  },
};

export const DefaultActive: Story = {
  args: {
    label: "Active checkbox",
    defaultChecked: true,
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import RemoteIcon from "./RemoteIcon";

const meta: Meta<typeof RemoteIcon> = {
  title: "RemoteIcon",
  component: RemoteIcon,
};
export default meta;

type Story = StoryObj<typeof RemoteIcon>;

export const Default: Story = {
  args: {
    iconName: "shirt",
    iconFontSize: 24,
    iconColor: "#000000",
  },
};

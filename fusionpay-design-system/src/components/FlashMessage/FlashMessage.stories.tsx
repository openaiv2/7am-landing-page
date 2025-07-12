import type { Meta, StoryObj } from "@storybook/react";

import FlashMessage from "./FlashMessage";

const meta: Meta<typeof FlashMessage> = {
  title: "FlashMessage",
  component: FlashMessage,
};
export default meta;

type Story = StoryObj<typeof FlashMessage>;

export const Default: Story = {
  args: {
    message: "Congratulation",
  },
};

export const Closeable: Story = {
  args: {
    message: "Congratulation",
    closeable: true,
  },
};

export const Description: Story = {
  args: {
    message: "Congratulations!",
    description: "Lorem ipsum dolor sit amet, consetetur.",
  },
};

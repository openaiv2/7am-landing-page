import { Meta, StoryObj } from "@storybook/react";
import Textarea from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Textarea",
  component: Textarea,
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: "Enter your text",
    minRows: 4,
  },
};

export const Label: Story = {
  args: {
    placeholder: "Enter your text",
    label: "Label Input",
  },
};
export const HelperText: Story = {
  args: {
    placeholder: "Enter your text",
    label: "Label Input",
    helperText: "Feedback Text",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled input",
    placeholder: "This input is disabled, you can't type anything.",
    disabled: true,
  },
};

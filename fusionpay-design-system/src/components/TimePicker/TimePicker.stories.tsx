import { Meta, StoryObj } from "@storybook/react";
import TimePicker from "./TimePicker";

const meta: Meta<typeof TimePicker> = {
  title: "TimePicker",
  component: TimePicker,
};

export default meta;

type Story = StoryObj<typeof TimePicker>;

export const Default: Story = {
  args: {
    hourPlaceholder: "00",
    minutePlaceholder: "00",
  },
};

export const Label: Story = {
  args: {
    hourPlaceholder: "00",
    minutePlaceholder: "00",
    label: "Label",
  },
};

export const HelperText: Story = {
  args: {
    hourPlaceholder: "00",
    minutePlaceholder: "00",
    label: "Labelled",
    helperText: "Helper text here.",
  },
};

export const Disabled: Story = {
  args: {
    hourPlaceholder: "00",
    minutePlaceholder: "00",
    disabled: true,
  },
};

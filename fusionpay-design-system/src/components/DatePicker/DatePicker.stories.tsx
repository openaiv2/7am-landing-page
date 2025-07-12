import { Meta, StoryObj } from "@storybook/react";
import DatePicker from "./DatePicker";

const meta: Meta<typeof DatePicker> = {
  title: "DatePicker",
  component: DatePicker,
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {
    dayPlaceholder: "Select your text here...",
  },
};

export const Label: Story = {
  args: {
    dayPlaceholder: "Select your text here...",
    label: "Label",
  },
};

export const WithValue: Story = {
  args: {
    dayPlaceholder: "Select your text here...",
    label: "Label",
    value: new Date().toString(),
    format: "dd-MM-y",
  },
};

export const HelperText: Story = {
  args: {
    dayPlaceholder: "Select your text here....",
    label: "Labelled",
    helperText: "Helper text here.",
  },
};

export const Disabled: Story = {
  args: {
    dayPlaceholder: "Select your text here....",
    disabled: true,
  },
};

import { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";

const options = [
  { value: "Food", label: "Food" },
  { value: "Being Fabulous", label: "Being Fabulous" },
  { value: "Ken Wheeler", label: "Ken Wheeler" },
  { value: "ReasonML", label: "ReasonML" },
  { value: "Unicorns", label: "Unicorns" },
  { value: "Kittens", label: "Kittens" },
];

const meta: Meta<typeof Select> = {
  title: "Select",
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    placeholder: "Select your text here....",
    options,
    defaultValue: options[0],
    onChange: (newValue) => console.log(newValue.value),
  },
};
export const PortalTarget: Story = {
  args: {
    placeholder: "Select your text here....",
    options,
    defaultValue: options[0],
    menuPortalTarget: document.body,
    menuPosition: "fixed",
    styles: {
      menuPortal: (provided) => ({ ...provided, zIndex: 9999 }),
      menu: (provided) => ({ ...provided, zIndex: 9999 }),
    },
  },
};

export const Label: Story = {
  args: {
    placeholder: "Select your text here....",
    label: "Label",
  },
};

export const HelperText: Story = {
  args: {
    placeholder: "Select your text here....",
    label: "Labelled",
    helperText: "Helper text here.",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Select your text here....",
    isDisabled: true,
  },
};
export const Clearable: Story = {
  args: {
    placeholder: "Select your text here....",
    options,
    defaultValue: options[0],
    isClearable: true,
  },
};

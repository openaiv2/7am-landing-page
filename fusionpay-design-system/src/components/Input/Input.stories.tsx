import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/pro-solid-svg-icons";
import React from "react";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter your text",
  },
};

export const Label: Story = {
  args: {
    placeholder: "Enter your text",
    label: "Label Input",
  },
};

export const LabelInfo: Story = {
  args: {
    placeholder: "Enter your text",
    label: "Label Input",
    labelInfo:
      "Manage and assign access rights to various dashboard functionalities.",
  },
};
export const HelperText: Story = {
  args: {
    placeholder: "Enter your text",
    label: "Label Input",
    helperText: "Feedback Text",
    type: "number",
  },
};

export const DoubleHelperText: Story = {
  args: {
    placeholder: "Enter your text",
    label: "Label Input",
    helperText: "Feedback Text",
    secondaryHelperText: "Second helper text",
    type: "number",
  },
};

export const EndIcon: Story = {
  args: {
    placeholder: "Enter your text",
    status: "success",
    endIcon: (
      <div
        style={{
          height: 32,
          width: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FontAwesomeIcon icon={faCheck} />
      </div>
    ),
  },
};

export const Search: Story = {
  args: {
    placeholder: "Search here...",
    search: true,
  },
};

export const AllowClear: Story = {
  args: {
    placeholder: "Enter a text and click on clear button....",
    allowClear: true,
  },
};

export const EndText: Story = {
  args: {
    placeholder: "Enter a text and click on clear button....",
    endText: "OK",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled input",
    placeholder: "This input is disabled, you can't type anything.",
    disabled: true,
    allowClear: true,
  },
};

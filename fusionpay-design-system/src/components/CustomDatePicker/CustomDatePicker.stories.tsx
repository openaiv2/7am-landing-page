import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { CustomDatePickerExample } from "./CustomDatePicker";

const meta: Meta<typeof CustomDatePickerExample> = {
  title: "CustomDatePicker",
  component: CustomDatePickerExample,
  decorators: (Story, { parameters }) => {
    const { size } = parameters;

    return (
      <div
        style={{
          height: 400,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: size === "large" ? "100%" : "auto" }}>
          <Story />
        </div>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof CustomDatePickerExample>;

export const Default: Story = {
  args: {},
};
export const Calendar: Story = {
  args: {
    type: "inline",
  },
};

export const AsChild: Story = {
  args: {
    type: "asChild",
  },
};

export const Multiple: Story = {
  args: {
    variant: "multiple",
  },
};

export const Range: Story = {
  args: {
    variant: "range",
  },
};
export const Large: Story = {
  parameters: {
    size: "large",
  },
  args: {
    size: "large",
  },
};

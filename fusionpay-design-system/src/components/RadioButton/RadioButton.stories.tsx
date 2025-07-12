import { Meta, StoryObj } from "@storybook/react";
import RadioButton from "./RadioButton";
import Typography from "../Typography";
import React from "react";

const meta: Meta<typeof RadioButton> = {
  title: "RadioButton",
  component: RadioButton,
};
export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    name: "option",
    label: "Lorem",
  },
};

export const WithLink: Story = {
  args: {
    checked: false,
    label: (
      <Typography newVariant={"body2-medium"} color={"text.primary"}>
        I agree to the{" "}
        <Typography
          newVariant={"link2"}
          fontWeight={500}
          color={"brand.primary"}
          component={"a"}
          href={"#"}
          target={"_blank"}
          tabindex="0"
        >
          Terms of service
        </Typography>{" "}
        and{" "}
        <Typography
          newVariant={"link2"}
          fontWeight={500}
          color={"brand.primary"}
          component={"a"}
          href="#"
          target={"_blank"}
        >
          Privacy Policy
        </Typography>
      </Typography>
    ),
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    label: "Lorem",
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    label: "Lorem",
    checked: true,
  },
};

export const DisabledUnchecked: Story = {
  args: {
    disabled: true,
    label: "Lorem",
  },
};

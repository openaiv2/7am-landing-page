import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";
import Typography from "../Typography";

const meta: Meta<typeof Checkbox> = {
  title: "Checkbox",
  component: Checkbox,
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    checked: false,
    label: "Lorem",
    align: "start",
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

export const WithImage: Story = {
  args: {
    disabled: true,
    label: (
      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        <div
          style={{
            width: 40,
            height: 40,
            background: "blue",
            borderRadius: 8,
          }}
        />
        Label with image
      </div>
    ),
    checked: true,
  },
};

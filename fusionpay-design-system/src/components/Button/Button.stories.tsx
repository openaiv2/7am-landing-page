import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faCheck } from "@fortawesome/pro-solid-svg-icons";
import React from "react";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Default",
  },
};

export const Filled: Story = {
  args: {
    children: "Filled",
    variant: "filled",
    color: "primary",
  },
};

export const Loading: Story = {
  args: {
    children: "Filled",
    variant: "filled",
    color: "primary",
    loading: true,
  },
};

export const Outlined: Story = {
  args: {
    children: "Outlined",
    color: "grey",
    variant: "outlined",
  },
};

export const Rounded: Story = {
  args: {
    children: "Rounded",
    shape: "rounded",
  },
};

export const Small: Story = {
  args: {
    children: "Small",
    size: "small",
  },
};

export const Large: Story = {
  args: {
    children: "Large",
    size: "large",
  },
};

export const IconOnly: Story = {
  args: {
    iconOnly: true,
    children: <FontAwesomeIcon icon={faCalendar} />,
  },
};

export const WithStartIcon: Story = {
  args: {
    children: "Calender",
    startIcon: <FontAwesomeIcon icon={faCalendar} />,
  },
};

export const WithEndIcon: Story = {
  args: {
    children: "Success",
    color: "success",
    endIcon: <FontAwesomeIcon icon={faCheck} />,
  },
};

export const FullWidth: Story = {
  args: {
    children: "Full Width",
    fullWidth: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

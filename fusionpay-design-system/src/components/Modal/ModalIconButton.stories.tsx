import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ModalIconButton } from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/pro-solid-svg-icons";

const meta: Meta<typeof ModalIconButton> = {
  title: "Modal Icon Button",
  component: ModalIconButton,
};
export default meta;

type Story = StoryObj<typeof ModalIconButton>;

export const Default: Story = {
  args: {
    children: <FontAwesomeIcon icon={faXmark} fontSize={16} />,
  },
};

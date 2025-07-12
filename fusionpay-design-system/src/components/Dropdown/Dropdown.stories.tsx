import React from "react";

import { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";
import Button from "../Button";
import { DropdownMenu } from "../DropdownMenu";
import { DropdownListItem } from "../DropdownListItem";

const meta: Meta<typeof Dropdown> = {
  title: "Dropdown",
  component: Dropdown,
  decorators: (Story) => (
    <div style={{ height: 500, width: 500 }}>
      <Story />
    </div>
  ),
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    placement: "bottom-start",
    dropdownContent: (
      <DropdownMenu style={{ width: 300 }}>
        <DropdownListItem label={"Item 1"} />
        <DropdownListItem label={"Item 2"} />
        <DropdownListItem label={"Item 3"} />
        <DropdownListItem label={"Item 4"} />
        <DropdownListItem label={"Item 5"} />
      </DropdownMenu>
    ),
    children: <Button>Dropdown</Button>,
  },
};

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import DropdownListItem from "./DropdownListItem";
import { faSquare } from "@fortawesome/pro-solid-svg-icons";

const meta: Meta<typeof DropdownListItem> = {
  title: "DropdownListItem",
  component: DropdownListItem,
};
export default meta;

type Story = StoryObj<typeof DropdownListItem>;

export const Default: Story = {
  args: {
    icon: faSquare,
    label: "Option",
  },
};

export const Selected: Story = {
  args: {
    icon: faSquare,
    label: "Option",
    selected: true,
  },
};

export const Color: Story = {
  args: {
    icon: faSquare,
    label: "Option",
    selected: true,
    textColor: "fill.surface.contextual.error.main",
  },
};

export const Checkbox: Story = {
  args: {
    label: "Option",
    selected: true,
    checkboxProps: {},
  },
};

export const RoundedImage: Story = {
  args: {
    label: "Option",
    selected: true,
    imageProps: {
      src: "https://assets.7am.io/cms/Augustin_3333f901b4.jpg",
      alt: "",
      shape: "rounded",
    },
  },
};

export const AngularImage: Story = {
  args: {
    label: "Option",
    selected: true,
    imageProps: {
      src: "https://assets.7am.io/cms/Augustin_3333f901b4.jpg",
      alt: "",
      shape: "angular",
    },
  },
};
export const Action: Story = {
  args: {
    label: "Option",
    selected: true,
    icon: faSquare,
    action: (
      <div style={{ width: 20 }}>
        <div
          style={{
            height: 8,
            width: 8,
            borderRadius: 4,
            background: "#45B26B",
          }}
        />
      </div>
    ),
  },
};

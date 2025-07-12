import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import LanguageSelect from "./LanguageSelect";

const meta: Meta<typeof LanguageSelect> = {
  title: "LanguageSelect",
  component: LanguageSelect,
  decorators: [
    (Story) => (
      <div style={{ padding: 150 }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof LanguageSelect>;

export const Default: Story = {};

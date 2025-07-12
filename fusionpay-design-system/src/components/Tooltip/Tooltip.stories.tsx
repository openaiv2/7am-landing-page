import { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/pro-solid-svg-icons";
import { Tooltip } from "./Tooltip";
import { Button } from "../index";

const ParentBackground = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ParentBackgroundAlignEnd = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const meta: Meta<typeof Tooltip> = {
  title: "Tooltip",
  component: Tooltip,
  decorators: (Story, { parameters }) => {
    const { alignItem = "center" } = parameters;
    switch (alignItem) {
      case "center":
        return (
          <ParentBackground>
            <Story />
          </ParentBackground>
        );
      case "end":
        return (
          <ParentBackgroundAlignEnd>
            <Story />
          </ParentBackgroundAlignEnd>
        );
      default:
        return (
          <ParentBackground>
            <Story />
          </ParentBackground>
        );
    }
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const DefaultToolTip: Story = {
  args: {
    title: "Home",
    content: "⌘ + H",
    children: (
      <Button iconOnly={true}>
        <FontAwesomeIcon icon={faCalendar} style={{ color: "white" }} />
      </Button>
    ),
  },
};
export const TitleOnly: Story = {
  args: {
    title: "Home",
    trigger: "click",
    children: (
      <Button iconOnly={true}>
        <FontAwesomeIcon icon={faCalendar} style={{ color: "white" }} />
      </Button>
    ),
  },
};

export const ToggleTips: Story = {
  args: {
    trigger: "click",
    title: "Toggletip Title",
    multiline: true,
    href: "#",
    linkComponent: "a",
    content:
      "Lorem ipsum dolor sit amet consectetur. Duis in velit at ultrices. Diam purus cursus pulvinar enim et semper. A consequat eget purus volutpat.",
    infoIcon: true,
    linkText: "Link",
  },
};

export const ToggleTipsEnd: Story = {
  parameters: {
    alignItem: "end",
  },
  args: {
    trigger: "click",
    title: "Toggletip Title",
    multiline: true,
    href: "#",
    linkComponent: "a",
    content:
      "Lorem ipsum dolor sit amet consectetur. Duis in velit at ultrices. Diam purus cursus pulvinar enim et semper. A consequat eget purus volutpat.",
    infoIcon: true,
    linkText: "Link",
  },
};

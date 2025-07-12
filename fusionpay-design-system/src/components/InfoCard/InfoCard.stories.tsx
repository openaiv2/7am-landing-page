import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import InfoCard from "./InfoCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/pro-solid-svg-icons";

const meta: Meta<typeof InfoCard> = {
  title: "InfoCard",
  component: InfoCard,
};
export default meta;

type Story = StoryObj<typeof InfoCard>;

export const Default: Story = {
  args: {
    title: "Are you sure?",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
    learnMoreElement: (
      <>
        Learn more <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </>
    ),
    isInfoUsefulMessage: "Is this card useful?",
  },
};

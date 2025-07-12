import { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useState } from "react";
import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "Modal",
  component: Modal,
  decorators: [
    (Story) => {
      const [show, setShow] = useState(false);
      useEffect(() => {
        setTimeout(() => {
          setShow(true);
        }, 2000);
      }, []);
      return (
        <div>
          <div style={{ height: 1000 }} />
          {show && <Story />}
        </div>
      );
    },
  ],
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    title: "Are you sure?",
    subtitle:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",

    children: <div>Hello world</div>,
  },
};

export const Long: Story = {
  args: {
    title: "Are you sure?",
    subtitle:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",

    children: (
      <div>
        Hello world
        <br />
        hello
        <br />
        Hello world
        <div style={{ height: 1000 }} />
        Hello world
        <br />
        hello
        <br />
        Hello world
        <br />
        <br />
      </div>
    ),
  },
};

export const ToolModal: Story = {
  args: {
    title: "Lorem Ipsum",
    variant: "tool",
    children: (
      <>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((_, i) => (
          <p key={i}>Hello world</p>
        ))}
      </>
    ),
  },
};

export const FeedbackModal: Story = {
  args: {
    title: "Success",
    subtitle:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
    variant: "feedback",
    status: "success",
  },
};

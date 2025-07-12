import React from "react";

import { Meta, StoryObj } from "@storybook/react";
import DropdownMenu, {
  DropdownMenuHeaderSearch,
  DropdownMenuHeaderTitle,
} from "./DropdownMenu";
import { DropdownListItem } from "../DropdownListItem";
import { faSquare } from "@fortawesome/pro-solid-svg-icons";
import Button from "../Button";

const meta: Meta<typeof DropdownMenu> = {
  title: "DropdownMenu",
  component: DropdownMenu,
};
export default meta;

type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  args: {
    children: (
      <>
        <DropdownListItem icon={faSquare} label={"Options"} />
        <DropdownListItem icon={faSquare} label={"Options"} />
        <DropdownListItem icon={faSquare} label={"Options"} />
        <DropdownListItem icon={faSquare} label={"Options"} />
        <DropdownListItem icon={faSquare} label={"Options"} />
      </>
    ),
  },
};

export const HeaderWithSearch: Story = {
  args: {
    children: (
      <>
        <DropdownListItem icon={faSquare} label={"Options"} />
        <DropdownListItem icon={faSquare} label={"Options"} />
        <DropdownListItem icon={faSquare} label={"Options"} />
        <DropdownListItem icon={faSquare} label={"Options"} />
        <DropdownListItem icon={faSquare} label={"Options"} />
        <DropdownListItem icon={faSquare} label={"Options"} />
        <DropdownListItem icon={faSquare} label={"Options"} />
        <DropdownListItem icon={faSquare} label={"Options"} />
        <DropdownListItem icon={faSquare} label={"Options"} />
        <DropdownListItem icon={faSquare} label={"Options"} />
        <DropdownListItem icon={faSquare} label={"Options"} />
        <DropdownListItem icon={faSquare} label={"Options"} />
        <DropdownListItem icon={faSquare} label={"Options"} />
        <DropdownListItem icon={faSquare} label={"Options"} />
      </>
    ),
    footerElement: (
      <Button size={"small"} fullWidth>
        Create new page
      </Button>
    ),
    headerElement: <DropdownMenuHeaderSearch placeholder={"Search"} />,
    style: {
      width: 264,
      height: 432,
    },
  },
};

export const HeaderWithTitle: Story = {
  args: {
    children: (
      <>
        <DropdownListItem icon={faSquare} label={"Options"} />
        <DropdownListItem icon={faSquare} label={"Options"} />
        <DropdownListItem icon={faSquare} label={"Options"} />
        <DropdownListItem icon={faSquare} label={"Options"} />
        <DropdownListItem icon={faSquare} label={"Options"} />
        <DropdownListItem icon={faSquare} label={"Options"} />
        <DropdownListItem icon={faSquare} label={"Options"} />
        <DropdownListItem icon={faSquare} label={"Options"} />
        <DropdownListItem icon={faSquare} label={"Options"} />
        <DropdownListItem icon={faSquare} label={"Options"} />
        <DropdownListItem icon={faSquare} label={"Options"} />
        <DropdownListItem icon={faSquare} label={"Options"} />
        <DropdownListItem icon={faSquare} label={"Options"} />
        <DropdownListItem icon={faSquare} label={"Options"} />
      </>
    ),
    footerElement: (
      <Button size={"small"} fullWidth>
        Create new page
      </Button>
    ),
    headerElement: <DropdownMenuHeaderTitle>Title</DropdownMenuHeaderTitle>,
    style: {
      width: 264,
      height: 432,
    },
  },
};

export const HeaderFooterOnly: Story = {
  args: {
    footerElement: (
      <Button size={"small"} fullWidth>
        Create new page
      </Button>
    ),
    headerElement: <DropdownMenuHeaderTitle>Title</DropdownMenuHeaderTitle>,
    style: {
      width: 264,
    },
  },
};

export const HeaderOnly: Story = {
  args: {
    headerElement: <DropdownMenuHeaderTitle>Title</DropdownMenuHeaderTitle>,
    style: {
      width: 264,
    },
  },
};

export const FooterOnly: Story = {
  args: {
    footerElement: (
      <Button size={"small"} fullWidth>
        Create new page
      </Button>
    ),
    style: {
      width: 264,
    },
  },
};

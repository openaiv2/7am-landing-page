import { Meta, StoryObj } from "@storybook/react";

import EventDateLocation from "./EventDateLocation";

const meta: Meta<typeof EventDateLocation> = {
  title: "Event date and location",
  component: EventDateLocation,
};
export default meta;

type Story = StoryObj<typeof EventDateLocation>;

export const Default: Story = {
  args: {
    fromNow: "In 2 Days",
    dateRange: "Fri, 27 Dec 06:00PM - Sun, 29 Dec 07:00AM",
    eventName: "Early Bird Pass Reloaded",
    eventDescription: "",
    eventAddress: "Waiheke Island",
    eventEndDateTime: "20250720T190000Z",
    eventStartDateTime: "20250720T180000Z",
    longitude: 2.693444,
    latitude: 7.321009,
    eventVenu: "Burdeos",
    eventCity: "Ciudad de la Costa",
  },
};

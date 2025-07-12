import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import { getThemeColorInStyledCss } from "../../styles/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typography from "../Typography";
import {
  faCalendarDays,
  faLocationDot,
  faUpRightFromSquare,
} from "@fortawesome/pro-solid-svg-icons";

export interface EventDateLocationComponentPropsType {
  className?: string;
  title: string;
  subtitle: string;
  variant: "date" | "location";
  eventName?: string;
  eventDescription?: string;
  longitude?: number;
  latitude?: number;
  eventAddress?: string;
  eventStartDateTime?: string;
  eventEndDateTime?: string;
}

const RootElement = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 12px;
  color: ${getThemeColorInStyledCss("text.primary")};
  cursor: pointer;

  &:hover .event-date-location-action-icon {
    display: block;
  }

  .event-date-location-icon {
    display: flex;
    width: 36px;
    height: 36px;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1/1;
    border-radius: 8px;
    background-color: ${getThemeColorInStyledCss("fill.surface.quaternary")};
  }
  .event-date-location-body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
  }
  .event-date-location-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }
  .event-date-location-action-icon {
    color: ${getThemeColorInStyledCss("brand.primary")};
    cursor: pointer;
    display: none;
  }
`;
function EventDateLocationComponent(
  props: EventDateLocationComponentPropsType,
) {
  const {
    title,
    variant,
    subtitle,
    className,
    eventDescription,
    eventName,
    eventAddress,
    eventStartDateTime,
    eventEndDateTime,
    longitude,
    latitude,
  } = props;

  const openGoogleCalendar = () => {
    const title = encodeURIComponent(eventName as string);
    const details = encodeURIComponent(eventDescription as string);
    const location = encodeURIComponent(eventAddress as string);
    const start = eventStartDateTime;
    const end = eventEndDateTime;
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${start}/${end}`;
    window.open(url, "_blank");
  };

  const handleOpenInMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    window.open(url, "_blank");
  };

  const handleClick = () => {
    if (variant === "date") {
      openGoogleCalendar();
    }
    if (variant === "location") {
      handleOpenInMaps();
    }
  };

  return (
    <RootElement className={classNames(className)} onClick={handleClick}>
      <div className="event-date-location-icon">
        <FontAwesomeIcon
          icon={variant === "date" ? faCalendarDays : faLocationDot}
          fontSize={16}
        />
      </div>
      <div className="event-date-location-body">
        <div className="event-date-location-title">
          <Typography newVariant={"body2-semiBold"} color="text.primary">
            {title}
          </Typography>
          <FontAwesomeIcon
            icon={faUpRightFromSquare}
            fontSize={12}
            className="event-date-location-action-icon"
          />
        </div>
        <Typography newVariant={"body2-medium"} color="text.tertiary">
          {subtitle}
        </Typography>
      </div>
    </RootElement>
  );
}

export interface EventDateLocationPropsType {
  dateRange: string;
  eventName?: string;
  eventDescription?: string;
  longitude?: number;
  latitude?: number;
  eventAddress?: string;
  eventStartDateTime?: string;
  eventEndDateTime?: string;
  eventVenu: string;
  eventCity: string;
  fromNow: string;
}

export default function EventDateLocation(props: EventDateLocationPropsType) {
  const {
    dateRange,
    eventDescription,
    eventName,
    eventAddress,
    eventStartDateTime,
    eventEndDateTime,
    longitude,
    latitude,
    eventCity,
    eventVenu,
    fromNow,
  } = props;
  return (
    <>
      <EventDateLocationComponent
        variant="date"
        title={fromNow}
        subtitle={dateRange}
        eventName={eventName}
        eventAddress={eventAddress}
        eventStartDateTime={eventStartDateTime}
        eventEndDateTime={eventEndDateTime}
        eventDescription={eventDescription}
      />
      <div style={{ height: 14 }} />
      <EventDateLocationComponent
        variant="location"
        title={eventVenu}
        subtitle={eventCity}
        longitude={longitude}
        latitude={latitude}
      />
    </>
  );
}

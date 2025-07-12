import React, { useState } from "react";

import DatePicker, {
  DatePickerProps,
  ReactDatePickerCustomHeaderProps,
} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import dayjs from "dayjs";
import {
  typographyBody2SemiBold,
  typographyHairlineSmall,
} from "../Typography/css";
import Typography from "../Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/pro-solid-svg-icons";
import { useBoolean } from "../../hooks";
import Input from "../Input";

const RootElement = styled.div<{ $size: PickerSize; $asChild?: boolean }>`
  width: 100%;

  .react-datepicker__header {
    background-color: transparent !important;
    border: 0 !important;
    padding: 0 !important;
  }

  .react-datepicker__day-names {
    display: flex;
    gap: ${({ $size }) => ($size === "compact" ? "4px" : "6px")};
    padding: ${({ $asChild }) => ($asChild ? 0 : "12px 12px 0")};
    margin-bottom: 0 !important;
  }

  .react-datepicker__day-name {
    align-items: center;
    color: ${({ theme }) => theme.palette.text.secondary};
    display: flex;
    height: ${({ $size }) => ($size === "compact" ? "32px" : "40px")};
    justify-content: center;
    margin: 0 !important;
    width: ${({ $size }) => ($size === "compact" ? "40px" : "auto")};
    flex: 1;
    ${typographyHairlineSmall};
  }

  &,
  & * {
    box-sizing: border-box;
  }
`;

const CustomDayItem = styled.div<{
  $disabled?: boolean;
  $selected?: boolean;
  $between?: boolean;
  $size?: PickerSize;
}>`
  align-items: center;
  border-radius: 8px;
  display: flex;
  height: ${({ $size }) => ($size === "compact" ? "40px" : "100%")};
  justify-content: center;
  position: relative;
  width: ${({ $size }) => ($size === "compact" ? "40px" : "100%")};

  ${typographyBody2SemiBold};

  background-color: ${({ theme, $selected, $between }) =>
    $selected
      ? theme.palette.brand.primary
      : $between
        ? theme.palette.brand["shade-3"]
        : "transparent"};
  color: ${({ theme, $disabled, $selected }) =>
    theme.palette.text[
      $disabled ? "tertiary" : $selected ? "primary-mirrored" : "primary"
    ]};

  &.react-datepicker__today::before {
    background-color: ${({ theme, $selected }) =>
      $selected
        ? theme.palette.fill.surface.secondary
        : theme.palette.brand.primary} !important;
    border-radius: 4px;
    bottom: 4px;
    content: " ";
    height: 6px;
    position: absolute;
    width: 6px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.fill.surface.tertiary};
    color: ${({ theme, $disabled }) =>
      theme.palette.text[$disabled ? "tertiary" : "primary"]};
  }
`;

type PickerSize = "compact" | "large";

const CalendarContainerElement = styled.div<{
  $size: PickerSize;
  $asChild?: boolean;
}>`
  background-color: ${({ theme }) => theme.palette.fill.surface.secondary};
  border: ${({ theme, $asChild }) =>
    $asChild ? "none" : "2px solid " + theme.palette.border.secondary};
  border-radius: 12px;
  box-shadow: ${({ theme, $asChild }) =>
    $asChild ? "none" : theme.shadow["01"]};

  display: inline-block;
  line-height: initial;
  min-height: 274px;
  position: relative;
  width: ${({ $size }) => ($size === "compact" ? "328px" : "100%")};

  .react-datepicker__month {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin: 0 !important;
    padding: ${({ $asChild }) => ($asChild ? 0 : "0 12px 12px")};
  }

  .react-datepicker__monthPicker {
  }

  .react-datepicker__week {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
  }

  .react-datepicker__day {
    background-color: transparent !important;
    height: ${({ $size }) => ($size === "compact" ? "40px" : "100%")};
    justify-content: center;
    margin: 0 !important;
    min-width: 40px;
    position: relative;
    width: ${({ $size }) => ($size === "compact" ? "40px" : "100%")};
    aspect-ratio: 1 / 1;
  }

  .react-datepicker__month-container {
    width: 100%;
  }
  .react-datepicker__monthPicker {
    height: 228px;
    padding: ${({ $asChild }) => ($asChild ? 0 : "12px")};
  }

  .react-datepicker__month-wrapper {
    display: flex;
    margin: 0 !important;
    flex: 1;

    & > div {
      color: ${({ theme }) => theme.palette.text.primary};
      background-color: transparent;
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: center;
      margin: 0 !important;
      position: relative;

      ${typographyBody2SemiBold};

      &:hover {
        background-color: ${({ theme }) => theme.palette.fill.surface.tertiary};
        color: ${({ theme }) => theme.palette.text.primary};
      }

      &.react-datepicker__month-text--keyboard-selected {
        background-color: ${({ theme }) =>
          theme.palette.brand.primary} !important;
        color: ${({ theme }) =>
          theme.palette.text["primary-mirrored"]} !important;

        &.react-datepicker__month-text--today::before {
          background-color: ${({ theme }) =>
            theme.palette.fill.surface.secondary} !important;
        }
      }

      &.react-datepicker__month-text--today::before {
        background-color: ${({ theme }) =>
          theme.palette.brand.primary} !important;
        border-radius: 4px;
        bottom: 4px;
        content: " ";
        height: 8px;
        position: absolute;
        width: 8px;
      }
    }
  }
`;

export type CustomDatePickerProps = DatePickerProps & {
  size?: PickerSize;
  asChild?: boolean;
};

export default function CustomDatePicker({
  size = "compact",
  asChild,
  ...props
}: CustomDatePickerProps) {
  const [currMonth, setCurrMonth] = useState<number>(new Date().getMonth());
  const { value: monthView, ...showMonth } = useBoolean();
  const open = useBoolean();

  const today = new Date();

  const renderDayContents = (day: number, date: Date) => {
    const isCurrentMonth = date.getMonth() === currMonth;

    const isToday = dayjs(date).isSame(today, "date");

    const isSelected = !!(
      dayjs(date).isSame(props.selected || null, "date") ||
      props.selectedDates?.find((item) =>
        dayjs(date).isSame(item || null, "date"),
      ) ||
      dayjs(date).isSame(props.startDate || null, "date") ||
      dayjs(date).isSame(props.endDate || null, "date")
    );

    const isBetween = Boolean(
      dayjs(date).isAfter(props.startDate || null, "date") &&
        dayjs(date).isBefore(props.endDate || null, "date"),
    );

    return (
      <CustomDayItem
        className={isToday ? "react-datepicker__today" : undefined}
        $between={isBetween}
        $disabled={!isCurrentMonth}
        $selected={isSelected}
        $size={size}
      >
        {day}
      </CustomDayItem>
    );
  };

  const calendarContainer = ({ children }: { children: React.ReactNode }) => {
    return (
      <CalendarContainerElement $size={size} $asChild={asChild}>
        {children}
      </CalendarContainerElement>
    );
  };

  const renderCustomHeader = ({
    date,
    decreaseMonth,
    increaseMonth,
    increaseYear,
    decreaseYear,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  }: ReactDatePickerCustomHeaderProps) => (
    <CustomHeaderElement $asChild={asChild}>
      <div className={"custom-date-picker-month-year"}>
        {!monthView && (
          <Typography
            newVariant={"body2-semiBold"}
            color={"text.primary"}
            onClick={showMonth.onOpen}
            className={"custom-date-picker-month-element"}
          >
            {dayjs(date).format("MMMM")}
          </Typography>
        )}
        <Typography newVariant={"body2-semiBold"} color={"text.secondary"}>
          {dayjs(date).format("YYYY")}
        </Typography>
      </div>

      <div className={"custom-date-picker-nav-container"}>
        <button
          onClick={monthView ? decreaseYear : decreaseMonth}
          disabled={prevMonthButtonDisabled}
          className={"custom-date-picker-prev-month"}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className={"custom-date-picker-right-left-dot"} />
        <button
          onClick={monthView ? increaseYear : increaseMonth}
          disabled={nextMonthButtonDisabled}
          className={"custom-date-picker-next-month"}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </CustomHeaderElement>
  );

  return (
    <RootElement $size={size} $asChild={asChild}>
      <DatePicker
        {...props}
        calendarContainer={calendarContainer}
        customInput={
          <Input
            endIcon={
              <FontAwesomeIcon icon={faCalendar} onClick={open.onToggle} />
            }
          />
        }
        formatWeekDay={(date) => date?.slice(0, 3).toUpperCase()}
        onMonthChange={(date) => {
          showMonth.onClose();
          setCurrMonth(date.getMonth());
        }}
        onChange={(date: unknown, event) => {
          if (monthView) {
            showMonth.onClose();
          }
          props.onChange?.(
            date as Date & [Date | null, Date | null] & Date[],
            event,
          );
        }}
        onCalendarOpen={open.onOpen}
        onCalendarClose={open.onClose}
        open={open.value}
        renderCustomHeader={renderCustomHeader}
        renderDayContents={renderDayContents}
        showMonthDropdown
        showPopperArrow={false}
        showMonthYearPicker={monthView}
        shouldCloseOnSelect={props.shouldCloseOnSelect ?? !monthView}
        popperProps={{
          placement: "bottom-start",
        }}
      />
    </RootElement>
  );
}

const CustomHeaderElement = styled.div<{ $asChild?: boolean }>`
  align-items: center;
  border-bottom: 2px solid
    ${({ theme, $asChild }) =>
      !$asChild ? theme.palette.border.secondary : "transparent"};
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ $asChild }) => ($asChild ? "16px" : 0)} !important;
  padding: ${({ $asChild }) => ($asChild ? 0 : "12px")};

  & > .custom-date-picker-month-year {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  & .custom-date-picker-month-element {
    cursor: pointer;
  }

  & .custom-date-picker-nav-container {
    align-items: center;
    display: flex;
    gap: 10px;
  }

  & .custom-date-picker-right-left-dot {
    background-color: ${({ theme }) => theme.palette.text.tertiary};
    border-radius: 50%;
    height: 8px;
    width: 8px;
  }

  & .custom-date-picker-prev-month,
  & .custom-date-picker-next-month {
    background-color: transparent !important;
    border: none;
    color: ${({ theme }) => theme.palette.text.secondary};
    cursor: pointer;
    margin: 0;
    outline: none;
    padding: 0;
  }

  & .custom-date-picker-prev-month:disabled,
  & .custom-date-picker-next-month:disabled {
    color: ${({ theme }) => theme.palette.text.tertiary};
  }
`;

type Props = {
  variant: "single" | "multiple" | "range";
  type?: "inline" | "asChild";
  size: PickerSize;
};

export function CustomDatePickerExample({ variant, size, type }: Props) {
  const [dates, setDates] = useState<Date[] | null>([new Date()]);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>();
  const [date, setDate] = useState<Date | null>(new Date());
  const handleRangeChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  if (variant === "multiple") {
    return (
      <CustomDatePicker
        selectsMultiple
        selectedDates={dates || []}
        onChange={(e) => setDates(e)}
        shouldCloseOnSelect={false}
      />
    );
  }

  if (variant === "range") {
    return (
      <CustomDatePicker
        selectsRange
        startDate={startDate}
        endDate={endDate}
        // @ts-expect-error --- type undefined or null
        onChange={handleRangeChange}
        shouldCloseOnSelect={false}
      />
    );
  }

  if (size === "large") {
    return (
      <CustomDatePicker
        selected={date}
        onChange={(e) => setDate(e)}
        size={"large"}
        inline
      />
    );
  }

  if (type === "inline") {
    return (
      <CustomDatePicker selected={date} onChange={(e) => setDate(e)} inline />
    );
  }

  if (type === "asChild") {
    return (
      <CustomDatePicker
        selected={date}
        onChange={(e) => setDate(e)}
        inline
        asChild
      />
    );
  }

  return <CustomDatePicker selected={date} onChange={(e) => setDate(e)} />;
}

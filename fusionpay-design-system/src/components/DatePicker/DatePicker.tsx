import React, { forwardRef } from "react";
import classNames from "classnames";
import InputContainer from "../Input/InputContainer";
import { DatePickerProps } from "../Input/types";
import BaseDatePicker from "react-date-picker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faX } from "@fortawesome/pro-solid-svg-icons";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { DatePickerRoot } from "./css";

const DatePicker = forwardRef(
  (props: DatePickerProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { size, shape, variant, id = "select" } = props;

    const rootCls = "datePicker";
    const inputCls = "input";

    const rootClsClasses = classNames(inputCls, rootCls, {
      [`${rootCls}--disabled`]: props.disabled,
      [`${inputCls}--${size}`]: props.size,
      [`${inputCls}--${shape}`]: props.shape,
      [`${inputCls}--${variant}`]: props.variant,
    });

    return (
      <InputContainer {...props} id={id} ref={ref}>
        <DatePickerRoot aria-label={"date-picker"}>
          <BaseDatePicker
            className={rootClsClasses}
            clearIcon={<FontAwesomeIcon icon={faX} />}
            calendarIcon={<FontAwesomeIcon icon={faCalendarDays} />}
            {...props}
          />
        </DatePickerRoot>
      </InputContainer>
    );
  },
);

export default DatePicker;

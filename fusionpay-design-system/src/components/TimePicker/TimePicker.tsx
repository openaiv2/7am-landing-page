import React from "react";
import classNames from "classnames";
import InputContainer from "../Input/InputContainer";
import { TimePickerProps } from "../Input/types";
import BaseTimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { TimePickerContainerRoot } from "./css";

const TimePicker = React.forwardRef(
  (props: TimePickerProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { size, shape, variant, id = "select" } = props;

    const rootCls = "timePicker";
    const inputCls = "input";

    const rootClsClasses = classNames(inputCls, rootCls, {
      [`${rootCls}--disabled`]: props.disabled,
      [`${inputCls}--${size}`]: props.size,
      [`${inputCls}--${shape}`]: props.shape,
      [`${inputCls}--${variant}`]: props.variant,
    });

    return (
      <div className={"timePickerRoot"}>
        <InputContainer {...props} id={id} ref={ref}>
          <TimePickerContainerRoot>
            <BaseTimePicker
              {...props}
              className={rootClsClasses}
              disableClock={true}
              clockIcon={null}
            />
          </TimePickerContainerRoot>
        </InputContainer>
      </div>
    );
  },
);

export default TimePicker;

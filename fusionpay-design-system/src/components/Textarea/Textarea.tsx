import React, { forwardRef } from "react";
import classNames from "classnames";
import InputContainer from "../Input/InputContainer";
import { TextareaProps } from "../Input/types";
import TextareaAutosize from "react-textarea-autosize";
import { TextContainerRoot } from "./css";

export type Ref = HTMLTextAreaElement;

const Textarea = forwardRef<Ref, TextareaProps>((props, ref) => {
  const {
    shape = "angular",
    variant = "filled",
    id = "input",
    containerClasses,
    ...others
  } = props;

  const rootCls = "textarea";
  const parentClasses = classNames(
    rootCls,
    {
      [`${rootCls}--${variant}`]: variant,
      [`${rootCls}--${shape}`]: shape,
      [`${rootCls}--disabled`]: props.disabled,
    },
    containerClasses,
  );

  const blockCls = "input__elem";
  const classes = classNames(blockCls);

  return (
    <InputContainer {...props} id={id}>
      <TextContainerRoot className={parentClasses}>
        <div className="grabber">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.46451 7.12129C1.07398 6.73077 1.07398 6.0976 1.46451 5.70708L5.70715 1.46444C6.09767 1.07391 6.73084 1.07391 7.12136 1.46444V1.46444C7.51189 1.85496 7.51189 2.48813 7.12136 2.87865L2.87872 7.12129C2.4882 7.51182 1.85503 7.51182 1.46451 7.12129V7.12129Z"
              fill="#777E90"
            />
            <path
              d="M5.70706 8.53554C5.31654 8.14501 5.31654 7.51185 5.70706 7.12132L7.12127 5.70711C7.5118 5.31659 8.14496 5.31659 8.53549 5.70711V5.70711C8.92601 6.09763 8.92601 6.7308 8.53549 7.12132L7.12127 8.53554C6.73075 8.92606 6.09759 8.92606 5.70706 8.53554V8.53554Z"
              fill="#777E90"
            />
          </svg>
        </div>
        <TextareaAutosize
          rows={6}
          {...others}
          id={id}
          ref={ref}
          className={classes}
        />
      </TextContainerRoot>
    </InputContainer>
  );
});

export default Textarea;

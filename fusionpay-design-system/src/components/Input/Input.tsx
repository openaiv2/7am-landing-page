import React, {
  ChangeEvent,
  forwardRef,
  useEffect,
  useMemo,
  useState,
} from "react";
import classNames from "classnames";
import { InputEndIcon, InputEndText, InputStartIcon } from "./InputIcons";
import InputContainer from "./InputContainer";
import { InputProps } from "./types";
import { InputRoot } from "./css";

export type Ref = HTMLInputElement;

const Input = forwardRef<Ref, InputProps>((props, ref) => {
  const {
    startIcon,
    endIcon,
    status,
    search,
    size,
    shape = "angular",
    variant = "filled",
    allowClear,
    onClear,
    value = "",
    disabled,
    onChange,
    id = "input",
    endText,
    containerClasses,
    helperText, // eslint-disable-line @typescript-eslint/no-unused-vars
    ...others
  } = props;

  const [inputValue, setInputValue] = useState(value);

  const parentBlockCls = "input";
  const parentClasses = classNames(
    parentBlockCls,
    {
      [`${parentBlockCls}--${size}`]: size,
      [`${parentBlockCls}--${variant}`]: variant,
      [`${parentBlockCls}--${shape}`]: shape,
      [`${parentBlockCls}--disabled`]: disabled,
    },
    containerClasses,
  );

  const blockCls = "input__elem";
  const classes = classNames(blockCls);

  const clearText = useMemo(() => {
    return Boolean(inputValue && allowClear);
  }, [inputValue, allowClear]);

  const handleClear = () => {
    setInputValue("");

    if (onClear) onClear();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    setInputValue(e.target.value);
    onChange?.(e);
  };

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <InputContainer {...props} id={id}>
      <InputRoot className={parentClasses}>
        <InputStartIcon startIcon={startIcon} search={search} />
        <input
          {...others}
          id={id}
          onChange={handleChange}
          value={inputValue}
          ref={ref}
          className={classes}
          disabled={disabled}
        />
        {endText && <InputEndText endText={endText} />}
        {!endText && endIcon && (
          <InputEndIcon
            status={status}
            endIcon={endIcon}
            allowClear={clearText}
            onClear={handleClear}
          />
        )}
      </InputRoot>
    </InputContainer>
  );
});

export default Input;

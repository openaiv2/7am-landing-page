import React, { forwardRef } from "react";
import ReactSelect, {
  ActionMeta,
  components,
  GroupBase,
  MenuProps,
  OptionProps,
} from "react-select";
import classNames from "classnames";
import InputContainer from "../Input/InputContainer";
import { SelectOptionType, SelectProps } from "../Input/types";
import { SelectContainer } from "./css";
import { GlobalStyle } from "../../styles/global";
import { DropdownMenu } from "../DropdownMenu";
import { DropdownListItem } from "../DropdownListItem";
import styled, { ThemeProvider, useTheme } from "styled-components";

const CustomOption = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>,
>(
  props: OptionProps<Option, IsMulti, Group>,
) => {
  const { children, isFocused, isSelected, innerRef, innerProps } = props;
  return (
    <DropdownListItem
      label={children}
      selected={isFocused || isSelected}
      ref={innerRef}
      {...innerProps}
    />
  );
};

const CustomDropdownMenu = styled(DropdownMenu)`
  & > div {
    width: 100%;
  }
`;

const Select = forwardRef(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (props: SelectProps, ref: React.ForwardedRef<any>) => {
    const {
      size,
      shape,
      variant,
      id = "select",

      ...others
    } = props;

    const rootCls = "select";
    const inputCls = "input";

    const rootClsClasses = classNames(rootCls, inputCls, {
      [`${rootCls}--disabled`]: props.isDisabled,
      [`${inputCls}--${size} ${rootCls}--${size}`]: props.size,
      [`${inputCls}--${shape}`]: props.shape,
      [`${inputCls}--${variant}`]: props.variant,
    });
    const theme = useTheme();
    const Menu = (props: MenuProps) => {
      return (
        <components.Menu {...props}>
          <ThemeProvider theme={theme}>
            <CustomDropdownMenu>{props.children}</CustomDropdownMenu>
          </ThemeProvider>
        </components.Menu>
      );
    };

    const defaultTheme = useTheme();

    return (
      <InputContainer {...props} id={id}>
        <GlobalStyle />
        <SelectContainer>
          <ReactSelect
            menuPortalTarget={document.body}
            menuPosition="fixed"
            menuPlacement="auto"
            isSearchable={false}
            minMenuHeight={300}
            menuShouldScrollIntoView={true}
            styles={{
              menuPortal: (provided) => ({
                ...provided,
                zIndex: 9999,
                top: Number(provided.top) + 2,
              }),
              menu: (provided) => ({
                ...provided,
                zIndex: 9999,
                top: Number(provided.top) + 2,
              }),
            }}
            components={{ Menu, Option: CustomOption }}
            {...others}
            id={id}
            ref={ref}
            classNames={{
              control: (state) =>
                classNames(rootClsClasses, {
                  ["select--focused"]: state.menuIsOpen,
                }),
              input: () => "input__elem",
              // menu: () => "select__menu",
              option: (state) =>
                classNames("select__option", {
                  ["select__option--selected"]:
                    state.isFocused || state.isSelected,
                }),
              placeholder: () => "select__placeholder",
              dropdownIndicator: (state) =>
                classNames(
                  "select__indicatorContainer select__dropdownIndicator",
                  {
                    ["select__indicatorContainer-focused"]: state.isDisabled,
                  },
                ),
              clearIndicator: () => "select__cancelIcon",
            }}
            unstyled
            onChange={(newValue, actionMeta) =>
              props.onChange?.(
                newValue as SelectOptionType,
                actionMeta as ActionMeta<SelectOptionType>,
              )
            }
            theme={(theme) => ({
              ...theme,
              ...defaultTheme,
            })}
          />
        </SelectContainer>
      </InputContainer>
    );
  },
);

export default Select;

import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/pro-solid-svg-icons";
import { DropdownListItem } from "../DropdownListItem";
import { typographyBody2SemiBold } from "../Typography/css";
import { Dropdown } from "../Dropdown";
import { DropdownMenu } from "../DropdownMenu";

export type LocaleType = "en" | "es";

export interface LanguageSelectProps {
  defaultValue?: LocaleType;
  onChange?: (value: LocaleType) => void;
}

const RootElement = styled.button`
  gap: 12px;
  border: 0;
  outline: 0;
  height: 32px;
  display: flex;
  padding: 0 10px;
  position: relative;
  border-radius: 8px;
  align-items: center;
  background-color: transparent;
  color: ${(props) => props.theme.palette.text.secondary};
  cursor: pointer;

  &.language-select-active,
  &:hover {
    color: ${(props) => props.theme.palette.text.primary};
    background-color: ${(props) => props.theme.palette.fill.surface.tertiary};
  }

  .language-select-label {
    gap: 8px;
    display: flex;
    align-items: center;

    ${typographyBody2SemiBold}
  }

  .language-select-icon {
    transition: transform ease-in-out 0.2s;
  }
`;

const DropdownCustomMenu = styled(DropdownMenu)`
  .dropdown-list-item-icon {
    width: 30px;
  }
`;

const LANGUAGE_OPTIONS: Array<{
  label: string;
  value: "en" | "es";
}> = [
  { label: "English", value: "en" },
  { label: "Español", value: "es" },
];

export default function LanguageSelect(props: LanguageSelectProps) {
  const { defaultValue = "en", onChange } = props;
  const [value, setValue] = useState(defaultValue);
  const [dropdown, setDropdown] = useState(false);
  const selectedLang = LANGUAGE_OPTIONS.find((item) => item.value === value);

  return (
    <Dropdown
      open={dropdown}
      onOpenChange={setDropdown}
      placement={"top-end"}
      dropdownContent={
        <DropdownCustomMenu style={{ width: 264 }}>
          {LANGUAGE_OPTIONS.map((lang) => (
            <DropdownListItem
              label={lang.label}
              key={lang.value}
              selected={value === lang.value}
              onClick={(e) => {
                e.stopPropagation();
                setValue(lang.value);
                onChange?.(lang.value);
                setDropdown(false);
              }}
            />
          ))}
        </DropdownCustomMenu>
      }
    >
      <RootElement
        className={dropdown ? "language-select-active" : ""}
        onClick={() => setDropdown(true)}
      >
        <span className={"language-select-label"}>{selectedLang?.label}</span>
        <FontAwesomeIcon
          icon={faCaretDown}
          style={{ transform: dropdown ? "rotate(180deg)" : "" }}
          className={"language-select-icon"}
        />
      </RootElement>
    </Dropdown>
  );
}

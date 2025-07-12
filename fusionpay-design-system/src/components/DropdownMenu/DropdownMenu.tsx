import React, { forwardRef } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/pro-solid-svg-icons";
import { typographyBody2SemiBold } from "../Typography/css";
import Typography from "../Typography";

export const dropdownMenuCss = css`
  display: flex;
  position: relative;
  border-radius: 12px;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;

  box-shadow: ${(props) => props.theme.shadow["01"]};
  border: 2px solid ${(props) => props.theme.palette.border.secondary};
  background-color: ${(props) => props.theme.palette.fill.surface.secondary};

  &,
  & * {
    box-sizing: border-box;
  }
`;

const RootElement = styled.div`
  ${dropdownMenuCss};
`;

const BodyElement = styled.div`
  flex: 1;
  overflow: auto;
  padding: 6px;
  width: 100%;
`;

const HeaderElement = styled.div`
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.palette.border.secondary};
  display: flex;
  position: sticky;
  top: 0;
  width: 100%;
`;
const FooterElement = styled.div`
  border-top: 1px solid ${(props) => props.theme.palette.border.secondary};
  bottom: 0;
  height: 52px;
  padding: 6px;
  position: sticky;
  width: 100%;
`;

const SearchElement = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.palette.fill.surface.tertiary};
  display: flex;
  height: 48px;
  padding: 4px;
  width: 100%;

  .dropdownMenu__searchIconContainer {
    align-items: center;
    color: ${(props) => props.theme.palette.text.secondary};
    display: flex;
    font-size: 14px;
    height: 40px;
    padding-left: 14px;
  }

  input {
    border: none;
    color: ${(props) => props.theme.palette.text.primary};
    outline: none;
    background-color: transparent;
    height: 40px;
    padding: 0 14px;
    width: 100%;
    ${typographyBody2SemiBold};

    &::placeholder {
      color: ${(props) => props.theme.palette.text.tertiary};
    }
  }
`;

const HeaderTitle = styled.div`
  padding: 14px 18px;
  width: 100%;

  & > p {
    line-height: 22px !important;
  }
`;

export interface DropdownMenuProps extends React.ComponentPropsWithRef<"div"> {
  footerElement?: React.ReactNode;
  headerElement?: React.ReactNode;
}

const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  (props, ref) => {
    const { headerElement, footerElement, ...others } = props;
    return (
      <RootElement {...others} ref={ref}>
        {headerElement && <HeaderElement>{headerElement}</HeaderElement>}
        {others.children && <BodyElement>{others.children}</BodyElement>}
        {footerElement && <FooterElement>{footerElement}</FooterElement>}
      </RootElement>
    );
  },
);

export default DropdownMenu;

export function DropdownMenuHeaderSearch(
  props: React.ComponentPropsWithoutRef<"input">,
) {
  return (
    <SearchElement>
      <div className={"dropdownMenu__searchIconContainer"}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <input {...props} />
    </SearchElement>
  );
}
export function DropdownMenuHeaderTitle(props: { children: React.ReactNode }) {
  return (
    <HeaderTitle>
      <Typography newVariant={"body1-semiBold"} color={"text.primary"}>
        {props.children}
      </Typography>
    </HeaderTitle>
  );
}

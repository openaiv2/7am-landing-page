import { createGlobalStyle } from "styled-components";
import { typographyBody2SemiBold } from "../components/Typography/css";

export const GlobalStyle = createGlobalStyle<{ $whiteColor?: boolean }>`

    .select__menu {
        background-color: ${(props) => props.theme.palette.fill.surface.secondary};
        border-radius: 12px;
        padding: 6px;
        font-size: 14px;
        margin-top: 4px;
        box-shadow: 0px 4px 18px #00000014;
    }

    .select__option {
        height: 40px;
        padding-left: 12px;
        padding-right: 12px;
        display: flex !important;
        align-items: center;
        cursor: pointer;
        border-radius: 12px;
        color: ${(props) => props.theme.palette.text.secondary};
				${typographyBody2SemiBold};
				
        &--selected {
            background-color: ${(props) => props.theme.palette.fill.surface.tertiary};
            color: ${(props) => props.theme.palette.text.primary};
        }
    }
`;

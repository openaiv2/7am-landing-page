import React, { ReactNode } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/pro-regular-svg-icons";
import {
  getThemeColorInStyledCss,
  TThemePaletteColorKeys,
} from "../../styles/theme";

type InfoCardColorType = "success" | "warning" | "error" | "info";
export interface InfoCardProps {
  title: string;
  description: string;
  isInfoUsefulMessage?: string;
  color: InfoCardColorType;
  learnMoreElement?: ReactNode;
}

const RootElement = styled.div<{ $color: InfoCardColorType }>`
  padding: 24px;
  border-radius: 12px;
  background-color: ${(props) =>
    getThemeColorInStyledCss(
      (props.$color + "-light-4") as TThemePaletteColorKeys,
    )(props)};

  & > .infoCard__title {
    font-size: 14px;
    font-weight: 600;
    margin: 0;
    letter-spacing: -0.14px;
    line-height: 17px;
    color: ${getThemeColorInStyledCss("text.primary")};
  }

  & > .infoCard__description {
    font-size: 14px;
    font-weight: 500;
    color: ${getThemeColorInStyledCss("text.primary")};
    margin-top: 12px;
    display: block;
  }

  & .infoCard__learnMoreElement {
    font-size: 14px;
    color: ${(props) =>
      getThemeColorInStyledCss(`fill.surface.contextual.${props.$color}.main`)(
        props,
      )};
  }

  & .infoCard__bottomSection {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
  }

  & .infoCard__reactionSection {
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${getThemeColorInStyledCss("text.secondary")};
  }

  & .infoCard__reactionSection_message {
    font-size: 12px;
  }

  & .infoCard__thumbsBox {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${getThemeColorInStyledCss("text.secondary")};
  }
`;

export default function InfoCard(props: InfoCardProps) {
  const {
    title,
    description,
    color = "info",
    learnMoreElement,
    isInfoUsefulMessage,
  } = props;

  return (
    <RootElement aria-label="info-card" className={"infoCard"} $color={color}>
      <p className={"infoCard__title"} aria-label={"info-card-title"}>
        {title}
      </p>

      {description && (
        <span
          className={"infoCard__description"}
          aria-label={"info-card-description"}
        >
          {description}
        </span>
      )}
      <div className={"infoCard__bottomSection"}>
        <div
          className={"infoCard__learnMoreElement"}
          aria-label={"info-card-learn-more-element"}
        >
          {learnMoreElement}
        </div>
        <div className={"infoCard__reactionSection"}>
          {isInfoUsefulMessage && (
            <span
              className={"infoCard__reactionSection_message"}
              aria-label={"info-card-useful-message"}
            >
              {isInfoUsefulMessage}
            </span>
          )}
          <div className={"infoCard__thumbsBox"}>
            <FontAwesomeIcon
              icon={faThumbsUp}
              aria-label={"info-card-thumbs-up"}
            />
            <FontAwesomeIcon
              icon={faThumbsDown}
              aria-label={"info-card-thumbs-down"}
            />
          </div>
        </div>
      </div>
    </RootElement>
  );
}

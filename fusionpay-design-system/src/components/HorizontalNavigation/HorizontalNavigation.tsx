import styled from "styled-components";
import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  ReactElement,
} from "react";
import Typography from "../Typography";
import { getThemeColorInStyledCss } from "../../styles/theme";

type HorizontalNavigationVariantType = "default" | "button";
type HorizontalNavigationPropsType = {
  items: { label: string; onClick: () => void }[];
  variant: HorizontalNavigationVariantType;
};

const Container = styled.div<{ variant: HorizontalNavigationVariantType }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 12px;
  width: 100%;
  border: 2px solid ${getThemeColorInStyledCss("border.secondary")};
  padding: 2px;
  ${({ variant }) =>
    variant === "default" &&
    `
    flex-direction: row;
    max-height: 40px;
  `};

  ${({ variant }) =>
    variant === "button" &&
    `
    flex-direction: column;
  `};
`;

const NavItem = styled.div<{ variant: HorizontalNavigationVariantType }>`
  border-radius: 10px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  cursor: pointer;
  z-index: 1;

  &:hover span {
    color: ${getThemeColorInStyledCss("text.primary")} !important;
  }
  ${({ variant }) => variant === "default" && "padding: 0 16px;"}
`;

const Label = styled(Typography)`
  &:hover {
    color: ${getThemeColorInStyledCss("text.primary")} !important;
  }
`;

const ActiveIndicator = styled.div<{
  x: number;
  y: number;
  width: number;
  height: number;
  variant: HorizontalNavigationVariantType;
  animate: boolean;
}>`
  position: absolute;
  height: ${({ height }) => height}px;
  border-radius: 10px;
  background-color: ${getThemeColorInStyledCss("fill.surface.tertiary")};
  z-index: 0;
  box-sizing: border-box;

  ${({ animate }) => animate && `transition: all 250ms ease;`}

  ${({ variant, width, x, y }) =>
    variant === "default"
      ? `
        top: 50%;
        left: ${x - 2}px;
        width: ${width}px;
        transform: translateY(-50%);
      `
      : `
        top: ${y - 2}px;
        left: 2px;
        right: 2px;
        transform: none;
      `};
`;
export default function HorizontalNavigation({
  items,
  variant = "default",
}: HorizontalNavigationPropsType): ReactElement {
  const [selectedItem, setSelectedItem] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [indicator, setIndicator] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const hasMounted = useRef(false);

  const updateIndicator = useCallback(() => {
    const el = itemRefs.current[selectedItem];
    if (el && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const rect = el.getBoundingClientRect();

      setIndicator({
        x: rect.left - containerRect.left,
        y: rect.top - containerRect.top,
        width: rect.width,
        height: rect.height,
      });
    }
  }, [selectedItem]);

  useEffect(() => {
    updateIndicator();
    setTimeout(() => {
      hasMounted.current = true;
    }, 1000);

    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

  return (
    <Container ref={containerRef} variant={variant}>
      <ActiveIndicator
        {...indicator}
        variant={variant}
        animate={hasMounted.current}
      />
      {items.map(({ label, onClick }, i) => (
        <NavItem
          key={`${label}-${i}`}
          onClick={() => {
            setSelectedItem(i);
            onClick();
          }}
          ref={(el: HTMLDivElement | null) => (itemRefs.current[i] = el)}
          variant={variant}
        >
          <Label
            newVariant="button-small"
            color={i === selectedItem ? "text.primary" : "text.secondary"}
          >
            {label}
          </Label>
        </NavItem>
      ))}
    </Container>
  );
}

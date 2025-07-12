import React, { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

export interface IMediaHoverProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Wrapper = styled.div`
  & .feature-image {
    overflow: hidden;
    & img {
      object-fit: cover;
      transition: all 0.3s ease;
      display: block;
      aspect-ratio: 4 / 3;
    }
  }
  &:hover .feature-image img {
    transform: scale(1.2);
  }
`;

/**
 *
 * Documentation
 * @param children
 *
 * \<MediaHover>\
 *  &ensp; \<div class="feature-image">\
 * &ensp;&ensp;\<img />\
 * &ensp;\</div>\
 * \<\/MediaHover>
 */
export default function MediaHover(props: IMediaHoverProps) {
  return <Wrapper {...props} />;
}

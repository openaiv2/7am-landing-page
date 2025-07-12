/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Spotify } from "react-spotify-embed";
import { createRoot } from "react-dom/client";
import styled from "styled-components";
import { articleCss } from "./css";
import Typography from "../Typography";

const ArticleElement = styled.div`
  ${articleCss}
`;
const SpotifyEmbedRenderer = ({
  results,
}: {
  results: { id: string; content: { link: string; wide?: boolean } }[];
}) => {
  useEffect(() => {
    results.forEach(({ id, content }) => {
      const container = document.getElementById(id) as Element;
      const root = createRoot(container);
      if (container) {
        root.render(
          <Spotify
            link={content.link}
            {...(content.wide ? { wide: true } : {})}
          />,
        );
      }
    });
  }, [results]);

  return null;
};

const handleSpotify = (content: string) => {
  if (typeof document === "undefined") {
    return { results: [], content };
  }
  const parser = new DOMParser();
  const doc = parser.parseFromString(content, "text/html");
  const spotifyRegex = /&lt;Spotify\s*(.*?)\s*\/&gt;/g;
  const results = [] as any;
  let counter = 1;
  const pTags = doc.querySelectorAll("p");
  pTags.forEach((p) => {
    if (p.innerHTML.includes("&lt;Spotify") && p.innerHTML.includes("/&gt;")) {
      const uniqueId = `spotify-${counter++}`;
      p.id = uniqueId;
      let match;
      while ((match = spotifyRegex.exec(p.innerHTML)) !== null) {
        const attributesString = match[1];
        const attrRegex = /(\w+)(?:=["'](.*?)["'])?/g;
        let attrMatch;
        const attrObject = {} as any;

        while ((attrMatch = attrRegex.exec(attributesString)) !== null) {
          const key = attrMatch[1];
          const value = attrMatch[2] !== undefined ? attrMatch[2] : true;
          attrObject[key] = value;
        }
        results.push({ id: uniqueId, content: attrObject });
      }
    }
  });

  const updatedHTML = doc.body.innerHTML;

  return { results, content: updatedHTML };
};

export default function Article(props: {
  content: string;
  className?: string;
}) {
  const [spotifies] = useState<{
    results: { id: string; content: { link: string; wide?: boolean } }[];
    content: string;
  }>(handleSpotify(props.content));
  const handleCheckList = () => {
    document.querySelectorAll("ul").forEach((ul) => {
      const style = window.getComputedStyle(ul);
      const list = style.getPropertyValue("list-style-type");
      if (list === "circle") {
        ul.classList.add("circle");
      }
    });
  };

  const handleTable = () => {
    document.querySelectorAll("table").forEach((table) => {
      if (table?.parentElement?.classList.contains("render-editor-table"))
        return;

      const wrapper = document.createElement("div");
      wrapper.classList.add("render-editor-table");
      table?.parentNode?.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });
  };

  const handleIframeRatio = () => {
    document
      .querySelectorAll(".render-editor-container iframe")
      .forEach((iframe: any) => {
        const height = (9 * iframe.clientWidth) / 16;
        iframe.style.height = `${height}px`;
      });
  };

  useEffect(() => {
    setTimeout(() => {
      handleCheckList();
      handleTable();
      handleIframeRatio();
    }, 500);
    window.addEventListener("resize", handleIframeRatio);
    return () => {
      window.removeEventListener("resize", handleIframeRatio);
    };
  }, []);

  return (
    <ArticleElement>
      <Typography
        component={"div"}
        color={"text.primary"}
        className={classNames("render-editor-container", props.className)}
      >
        <div dangerouslySetInnerHTML={{ __html: spotifies.content }} />
      </Typography>

      <SpotifyEmbedRenderer results={spotifies.results} />
    </ArticleElement>
  );
}

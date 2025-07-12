import { css } from "styled-components";
import { getThemeColorInStyledCss } from "../../styles/theme";

export const articleCss = css`
  .render-editor-container {
    line-height: normal;
  }
  .render-editor-container h2 {
    font-size: 1.5rem; /* text-2xl */
    margin-top: 2rem;
    margin-bottom: 0.75rem;
  }
  @media (min-width: 1024px) {
    .render-editor-container h2 {
      font-size: 32px;
      margin-top: 3rem;
      margin-bottom: 18px;
    }
  }

  .render-editor-container h3 {
    font-size: 1.25rem; /* text-xl */
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
  }
  @media (min-width: 1024px) {
    .render-editor-container h3 {
      font-size: 1.5rem;
      margin-top: 1.75rem;
      margin-bottom: 0.875rem;
    }
  }

  .render-editor-container h2,
  .render-editor-container h3 {
    color: ${getThemeColorInStyledCss("text.primary")};
    font-weight: 600;
  }

  .render-editor-container > div > div:first-of-type h2,
  .render-editor-container > div > div:first-of-type h3 {
    margin-top: 0 !important;
  }

  .render-editor-container p,
  .render-editor-container ol,
  .render-editor-container ul,
  .render-editor-container .render-editor-table {
    margin-bottom: 1rem;
  }
  @media (min-width: 1024px) {
    .render-editor-container p,
    .render-editor-container ol,
    .render-editor-container ul,
    .render-editor-container .render-editor-table {
      margin-bottom: 1.25rem;
    }
  }

  .render-editor-container p,
  .render-editor-container li,
  .render-editor-container td {
    line-height: 1.4;
    font-size: 0.875rem;
    font-weight: 500;
  }
  @media (min-width: 1024px) {
    .render-editor-container p,
    .render-editor-container li,
    .render-editor-container td {
      font-size: 1rem;
    }
  }

  .render-editor-container th {
    text-align: left !important;
  }

  .render-editor-container b,
  .render-editor-container strong {
    font-weight: 600;
  }

  .render-editor-container a {
    color: ${getThemeColorInStyledCss("brand.primary")};
    text-decoration: none;
    font-weight: 500;
  }
  .render-editor-container a:hover {
    text-decoration: underline;
  }

  .render-editor-container ul,
  .render-editor-container ol {
    padding-left: 24px;
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
  }

  .render-editor-container ul {
    list-style: disc;
  }

  .render-editor-container ol {
    list-style: decimal;
  }
  @media (min-width: 1024px) {
    .render-editor-container ul {
      gap: 0.75rem;
    }
  }

  .render-editor-container ul.circle {
    padding-left: 0px;
  }

  .render-editor-container ul.circle li {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  .render-editor-container ul.circle li::before {
    content: url("https://assets.7am.io/cms/circle_check_7c3bc690e1.png");
    padding-right: 0.375rem;
    transform: scale(0.23);
    width: 37px;
    height: 0.25rem;
    margin-left: -13px;
  }
  @media (min-width: 1024px) {
    .render-editor-container ul.circle li::before {
      padding-right: 0.625rem;
      transform: scale(0.3);
      width: 43px;
      margin-left: -16px;
    }
  }

  .render-editor-container table {
    border-radius: 0.75rem;
    width: 100%;
    max-width: 100%;
    border-collapse: collapse;
    border: none;
  }

  .render-editor-container table td,
  .render-editor-container table th {
    border: 2px solid ${getThemeColorInStyledCss("border.secondary")};
    padding: 0.625rem;
    vertical-align: top;
  }
  @media (min-width: 1024px) {
    .render-editor-container table td,
    .render-editor-container table th {
      padding: 0.75rem;
    }
  }

  /* Remove table borders selectively */
  .render-editor-container table tr:first-of-type td,
  .render-editor-container table tr:first-of-type th {
    border-top: 0;
  }
  .render-editor-container table tr td:first-of-type,
  .render-editor-container table tr th:first-of-type {
    border-left: 0;
  }
  .render-editor-container table tr td:last-of-type,
  .render-editor-container table tr th:last-of-type {
    border-right: 0;
  }
  .render-editor-container table tr:last-of-type td,
  .render-editor-container table tr:last-of-type th {
    border-bottom: 0;
  }

  .render-editor-container table td,
  .render-editor-container table th,
  .render-editor-container table tr {
    height: auto !important;
  }

  .render-editor-container table col {
    width: auto !important;
  }

  .render-editor-table {
    border: 2px solid ${getThemeColorInStyledCss("border.secondary")};
    border-radius: 0.75rem !important;
  }

  .render-editor-container img {
    object-fit: contain;
    height: 100%;
  }
  .render-editor-container img,
  .render-editor-container iframe {
    width: 100% !important;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
  }
  @media (min-width: 1280px) {
    .render-editor-container img,
    .render-editor-container iframe {
      margin-top: 1.75rem;
      margin-bottom: 1.75rem;
    }
  }

  .render-editor-container li p,
  .render-editor-container td p,
  .render-editor-container th p,
  .render-editor-container th ul,
  .render-editor-container td ul {
    margin: 0 !important;
    padding-bottom: 0 !important;
  }
`;

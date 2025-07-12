# @fusionpay/design-system

The design-system contains foundational React UI component libraries.

## Storybook doc

To test the components with storybook playground, run the command below

```angular2html
npm run storybook
```

## Build

To create a production build, run

```angular2html
npm run build
```

## Installation Guide

First setup npm registry for the project using
this [link](https://docs.gitlab.com/ee/user/packages/npm_registry/index.html#install-from-the-project-level)

###### Run

```
npm i @fusionpay/design-system
```

## Usage

```jsx
import { createTheme } from "@fusionpay/design-system";
import { ThemeProvider } from "styled-components";

const theme = createTheme();

export default function App(props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
```

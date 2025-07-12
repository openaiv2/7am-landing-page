import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
    "@mui/styled-engine": "@mui/styled-engine-sc",
  },
};

export default config;

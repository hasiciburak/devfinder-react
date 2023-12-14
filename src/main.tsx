import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { ThemeProvider } from "styled-components";

const fontSizes = {
  h1: "26px",
  h2: "22px",
  h3: "16px",
  h4: "13px",
  body: "15px",
};

const lightTheme = {
  colors: {
    skyBlue: "#0079FF",
    greyishBlue: "#697C9A",
    kashmirBlue: "#4B6A9B",
    gunmetal: "#2B3442",
    zircon: "#F6F8FF",
    white: "#FEFEFE",
  },
  fontSizes: {
    ...fontSizes,
  },
};

const darkTheme = {
  colors: {
    skyBlue: "#0079FF",
    mirage: "#141D2F",
    zircon: "#1E2A47",
    white: "#FFFFFF",
  },
  fontSizes: {
    ...fontSizes,
  },
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

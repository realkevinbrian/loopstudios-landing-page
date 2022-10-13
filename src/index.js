import React from "react";
import ReactDom from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import "./index.css";
import { theme } from "./Theme";

ReactDom.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/index";
import GlobalStyle from "./styles/GlobalStyle";
import { setConfiguration } from "react-grid-system";
import { breakpoints } from "./styles/variables";
import { cssSizeToInt } from "./helpers/utils";

const breakpoint = cssSizeToInt(breakpoints);

setConfiguration({
  breakpoints: [
    breakpoint.sm,
    breakpoint.md,
    breakpoint.lg,
    breakpoint.xl,
    breakpoint.xxl,
  ],
  containerWidths: [600, 723, 960, 1230, 1200],
});

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

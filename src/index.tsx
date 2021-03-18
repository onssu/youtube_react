import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import { ThemeProvider } from "styled-components";
import { Root } from "styles/root";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

ReactDOM.render(
  <ThemeProvider theme={Root}>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();

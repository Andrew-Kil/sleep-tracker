import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { MuiThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

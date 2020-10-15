import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App/App";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { ModalProvider } from "styled-react-modal";
import { ContextProvider } from "./ContextProvider";

ReactDOM.render(
  <>
    <ContextProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <React.StrictMode>
          <ModalProvider>
            <App />
          </ModalProvider>
        </React.StrictMode>
      </ThemeProvider>
    </ContextProvider>
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

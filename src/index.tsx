import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Cards from "./tcg-store/pages/Cards";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "theme-ui";
import { theme } from "./theme";
import { Provider } from 'react-redux'
import store from './app/redux/store'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/store/cards" element={<Cards />} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </ThemeProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

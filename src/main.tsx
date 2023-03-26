import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/scss/bootstrap.scss";

import App from "./App";
import "./main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./utils/i18n";

import i18n from "./utils/i18n";
i18n.init();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

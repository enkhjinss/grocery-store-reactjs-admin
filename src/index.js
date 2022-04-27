import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import "./styles/flex.css";
import App from "./App";
import "./firebase";
createRoot(document.querySelector("#root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

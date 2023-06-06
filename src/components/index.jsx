import App from "./App";
import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

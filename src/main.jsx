import React from "react";
import ReactDOM from "react-dom/client";
import { Navbar, Hero, Footer, Featured } from "./components/index.js";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Featured />
    <Footer />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { Navbar, Hero, Footer, Featured, Cards, Equipment, Watermark } from "./components/index.js";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Watermark />
    <Hero />
    <Equipment />
    <Featured />
    <Cards />
    <Footer />
  </React.StrictMode>
);

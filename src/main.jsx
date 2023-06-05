import React from "react";
import ReactDOM from "react-dom/client";
import { Navbar, Hero, Footer, Featured, Cards, Equipment } from "./components/index.js";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Equipment />
    <Featured />
    <Cards />
    <Footer />
  </React.StrictMode>
);

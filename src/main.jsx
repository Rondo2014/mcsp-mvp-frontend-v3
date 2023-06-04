import React from "react";
import ReactDOM from "react-dom/client";
import { Navbar, Hero, Footer, Featured, Cards } from "./components/index.js";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Featured />
    <Cards />
    <Footer />
  </React.StrictMode>
);

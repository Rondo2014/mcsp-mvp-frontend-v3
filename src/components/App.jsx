import Navbar from "./Navbar";
import Footer from "./Footer";
import Featured from "./Featured";
import Hero from "./Hero";
import Cards from "./Cards";
import Equipment from "./Equipment";
import Watermark from "./Watermark";
import Profile from "./Profile";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={
      <>
      <Watermark />
      <Hero />
      <Equipment />
      <Featured />
      <Cards />
      </>
      } />

      <Route path="/profile" element={<Profile />} />

    </Routes>
    <Footer />
  </>
  );
};

export default App;
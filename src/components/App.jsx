import Navbar from "./Navbar";
import Footer from "./Footer";
import Featured from "./landing-page/Featured";
import Hero from "./landing-page/Hero";
import Cards from "./landing-page/Cards";
import Equipment from "./landing-page/Equipment";
import Watermark from "./landing-page/Watermark";
import Profile from "./Profile";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./dashboard/Dashboard";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Watermark />
              <Hero />
              <Equipment />
              <Featured />
              <Cards />
            </>
          }
        />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

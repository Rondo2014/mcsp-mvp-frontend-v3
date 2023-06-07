import Navbar from "./Navbar";
import Footer from "./Footer";
import Featured from "./Featured";
import Hero from "./Hero";
import Cards from "./Cards";
import Equipment from "./Equipment";
import Watermark from "./Watermark";
import Profile from "./Profile";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
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

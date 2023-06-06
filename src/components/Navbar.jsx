import { useState, useEffect, useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { AUTHLINKS, NAVLINKS } from "./utils/Menu";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import AuthContext from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { auth, handleLogout } = useContext(AuthContext);
  const isLoggedIn = auth?.token;
  const navigate = useNavigate();

  let [open, setOpen] = useState(false);
  let [scrolled, setScrolled] = useState(false);

  const LoginButton = () => {
    return (
      <>
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="bg-accent-dark text-white py-2 px-6 rounded-lg md:ml-8 hover:bg-text hover:text-lg transition-all ease-in ml-7"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="bg-accent-dark text-white py-2 px-6 rounded-lg md:ml-8 hover:bg-text hover:text-lg transition-all ease-in ml-7">
              Login/Signup
            </button>
          </Link>
        )}
      </>
    );
  };
  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Logo = () => {
    return (
      <img
        className={`${
          scrolled ? "h-10" : "h-24"
        } transition-all duration-500 ease-in-out`}
        src={logo}
        alt="logo"
      />
    );
  };

  return (
    <div className="shadow-md w-full max-w-[1244px] mx-auto border-b-2 border-b-primary sticky top-0 z-50">
      <div className="md:flex items-center justify-between bg-[#0c0c0c] py-4 md:px-10 px-7">
        <Logo />
        <div
          className="absolute right-8 top-6 cursor-pointer md:hidden"
          onClick={toggleMenu}
        >
          {open ? (
            <CloseIcon className="text-accent" fontSize="large" />
          ) : (
            <MenuIcon className="text-accent" fontSize="large" />
          )}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-primary md:bg-transparent bg-opacity-50 backdrop-blur-sm rounded-lg md:z-auto -z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-36" : "top-[-490px] md:opacity-100 opacity-0"
          }`}
        >
          {isLoggedIn
            ? AUTHLINKS.map((link) => (
                <li key={link.name} className="text-xl md:ml-8 md:my-0 my-7">
                  <Link
                    to={link.page}
                    className="text-white hover:text-text transition-all ease-in"
                  >
                    {link.name}
                  </Link>
                </li>
              ))
            : NAVLINKS.map((link) => (
                <li key={link.name} className="text-xl md:ml-8 md:my-0 my-7">
                  <Link
                    to={link.page}
                    className="text-white hover:text-text transition-all ease-in"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
          <div className="w-2 bg-black"></div>
          <LoginButton />
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

const Logo = () => {
  return (
    <img className="h-24" src="src/assets/pngaaa.com-4630430.png" alt="logo" />
  );
};
const LoginButton = (props) => {
  return (
    <button className="bg-accent-dark text-white py-2 px-6 rounded-lg md:ml-8 hover:bg-text hover:text-lg transition-all ease-in ml-7">
      {props.children}
    </button>
  );
};

function Navbar() {
  let Links = [
    { name: "Home", href: "#" },
    { name: "Trainers", href: "#" },
    { name: "Locations", href: "#" },
    { name: "Mission", href: "#" },
  ];
  let [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="shadow-md w-full max-w-[1244px] mx-auto border-b-2 border-b-primary">
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
          {Links.map((link) => (
            <li key={link.name} className="text-xl md:ml-8 md:my-0 my-7">
              <a
                href={link.href}
                className="text-white hover:text-text transition-all ease-in"
              >
                {link.name}
              </a>
            </li>
          ))}
          <div className="w-2 bg-black"></div>
          <LoginButton>Login/Signup</LoginButton>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

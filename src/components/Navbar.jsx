import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

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
  let [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => {
    setOpen(!open);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY > 1) {
        setScrolled(true);
        console.log(scrollY);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const Logo = () => {
    return (
      <img className={`transition-all duration-300 ease-in-out ${scrolled ? 'h-10' : 'h-24'}`} src="src/assets/pngaaa.com-4630430.png" alt="logo" />
    );
  };
  
  return (
    <div className="shadow-md w-full max-w-[1244px] mx-auto border-b-2 border-b-primary sticky top-0 z-50">
      <div className="md:flex items-center justify-between bg-[#0c0c0c] py-4 md:px-10 px-7">
      <Logo/>
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

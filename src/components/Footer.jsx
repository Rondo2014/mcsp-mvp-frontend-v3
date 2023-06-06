import { SUPPORT, COMPANY, RESOURCES } from "./utils/Menu.js";
import {
  Facebook,
  Twitter,
  Instagram,
  GitHub,
  LinkedIn,
  KeyboardDoubleArrowDown,
  KeyboardDoubleArrowUp,
} from "@mui/icons-material";
import { useState } from "react";
import { Reveal } from "./utils/Reveal.jsx";

const Icons = [
  { name: "Facebook", icon: <Facebook />, className: "facebook-icon" },
  { name: "Twitter", icon: <Twitter />, className: "twitter-icon" },
  { name: "Instagram", icon: <Instagram />, className: "instagram-icon" },
  {
    name: "GitHub",
    icon: <GitHub />,
    className: "github-icon",
    link: "https://github.com/Rondo2014",
  },
  {
    name: "LinkedIn",
    icon: <LinkedIn />,
    className: "linkedin-icon",
    link: "https://www.linkedin.com/in/ronnie-miller-338206271/",
  },
];
const Icon = () => {
  return (
    <ul className="flex">
      {Icons.map((icon) => (
        <li
        key={icon.name}
        className="px-2 hover:text-text hover:text-sm transition-all ease-in-out duration-200"
        >
          <a href={icon.link} className={icon.className}>
            {icon.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Item = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="mb-1 font-semibold">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <Reveal>
          <a
            className="text-gray-400 hover:text-text text-sm cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </a>
        </Reveal>
        </li>
      ))}
    </ul>
  );
};
const ItemsContainer = () => {
  return (
    <div className="bg-secondary grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:px-8 px-5 py-16">
      <Item Links={SUPPORT} title="SUPPORT" />
      <Item Links={COMPANY} title="COMPANY" />
      <Item Links={RESOURCES} title="RESOURCES" />
    </div>
  );
};

const Footer = () => {
  const [showItems, setShowItems] = useState(false);

  const toggleItems = () => {
    setShowItems(!showItems);
  };

  return (
    <footer className="bg-[#0c0c0c] text-white bottom-0 w-full max-w-[1244px] mx-auto left-0 right-0 border-t-2 border-t-primary">
      <div className="md:justify-center md:items-center sm:px-12 px-4 py-7 border-b-accent border-b-[1px] flex-col md:flex-row">
        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row md:items-center w-full md:w-auto items-center justify-between">
          <Reveal>
          <h1 className="text-accent lg:text-3xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold w-full md:w-64">
            Interested? <br />
            <p className="text-white text-sm leading-7">For health tips and advice, as well as discounts and promotions, join our mailing list!</p>
          </h1>
            </Reveal>
            <Reveal>
          <div className="flex flex-col md:flex-row m-auto p-6">
          <input
            placeholder="Enter your email . . ."
            type="email"
            className="text-primary font-medium placeholder:text-secondary placeholder:text-opacity-60 rounded-md w-full sm:w-auto md:w-64 h-10 px-4 focus:outline-accent mb-6 md:mb-0 bg-gray-400 md:ml-10 p-3 flex mr-4"
          />
          <button className="bg-accent text-white md:font-large font-small w-[200px] h-10 rounded-md md:w-[150px] m-auto">Notify Me</button>
          </div>  
          </Reveal>
        </div>
        </div>
          <Reveal>
        <div className="flex justify-center">
          <Icon />
          <div
            className="text-accent cursor-pointer hover:transform-gpu hover:scale-110 transition-all ease-in-out duration-300 ml-4"
            onClick={toggleItems}
          >
            {showItems ? (
              <KeyboardDoubleArrowUp fontSize="large" />
            ) : (
              <KeyboardDoubleArrowDown fontSize="large" />
            )}
          </div>
      </div>
          </Reveal>
      {showItems && <ItemsContainer />}
      <div className="text-center pt-2 text-gray-400 text-sm pb-8 border-t-[1px] border-t-accent">
        <span>2023 Globo Gym. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { useState } from "react";
import { EQUIPMENT } from "../utils/Menu.js";
import {
  KeyboardDoubleArrowDown,
  KeyboardDoubleArrowUp,
} from "@mui/icons-material";
import { Reveal } from "../utils/Reveal.jsx";

const Equipment = () => {
  let [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full py-[10rem] px-4">
      <div className="w-full max-w-[1244px] mx-auto bg-transparent px-4 py-16 rounded-xl">
        <div className="mx-auto md:grid md:grid-cols-3 py-16 gap-8 border-t-[1px] border-b-[1px] b-accent hidden">
          {EQUIPMENT.map((item) => (
            <Reveal key={item.name}>
              <div
                className="group w-full relative text-center p-4 h-48 transition-all duration-300 ease-in-out border-secondary border-[1px] bg-cover bg-center bg-bg rounded-xl"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <h1 className="text-text font-outline-2 md:text-4xl sm:text-3xl text-2xl font-bold py-4 text-left absolute bottom-0 left-0 transition-all duration-500 ease-in-out transform group-hover:-translate-y-[150%]">
                  {item.name}
                </h1>
                <p className="group-hover:block absolute bottom-10 text-white md:opacity-0 md:group-hover:opacity-100 duration-500 transition-all ease-in bg-bg bg-opacity-90 rounded-md px-2 w-11/12 py-2">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="border-t-[1px] border-b-[1px] border-accent w-full mx-w-[1244px] md:hidden">
          <div
            className="text-white flex m-auto px-3 hover:transform-gpu hover:scale-110 transition-all ease-in-out duration-300 ml-4"
            onClick={toggleMenu}
          >
            {" "}
            Check out our list of amenities{" "}
            <span className="text-accent animate-pulse">
              {open ? (
                <KeyboardDoubleArrowUp fontSize="large" />
              ) : (
                <KeyboardDoubleArrowDown fontSize="large" />
              )}
            </span>
          </div>
        </div>
        {open && (
          <div className="mx-auto grid md:grid-cols-3 py-16 gap-8 border-t-[1px] border-b-[1px] b-accent md:hidden">
            {EQUIPMENT.map((item) => (
              <div
                key={item.name}
                className="group w-full relative text-center p-4 h-48 transition-all duration-300 ease-in-out border-secondary border-[1px] bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <h1 className="text-text font-outline-2 md:text-4xl sm:text-3xl text-2xl font-bold py-4 text-left absolute top-0 left-0 transition-all duration-500 ease-in-out transform group-hover:-translate-y-[150%]">
                  {item.name}
                </h1>
                <p className="group-hover:block absolute bottom-10 text-white md:opacity-0 md:group-hover:opacity-100 duration-500 transition-all ease-in bg-primary rounded-md bg-opacity-50 px-2 w-11/12">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Equipment;

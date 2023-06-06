import React from "react";
import Typed from "react-typed";
import { Reveal } from "./utils/Reveal";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const getStarted = () => {
    navigate("/signup");
  };

  return (
    <div className="text-white bg-[#0c0c0c]">
      <div className="max-w-[800px] mt-24 w-full h-screen mx-auto text-center flex flex-col">
        <p className="text-accent font-bold p-2">FOCUS ON YOU</p>
        <Reveal>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            Your fitness journey starts here.
          </h1>
        </Reveal>
        <Reveal>
          <div className="flex justify-center items-center">
            <p className="md:text-3xl sm:text-4xl text-xl font-bold py-4">
              Every tool to improve your{" "}
            </p>
            <Typed
              className="text-accent md:text-3xl sm:text-4xl text-xl font-bold pl-2 transform-gpu"
              strings={[
                "strength.",
                "cardio.",
                "power.",
                "endurance.",
                "speed.",
                "agility.",
                "flexibility.",
                "balance.",
                "coordination.",
                "accuracy.",
              ]}
              typeSpeed={50}
              backSpeed={25}
              loop
            />
          </div>
        </Reveal>
        <Reveal>
          <p className="md:text-2xl text-xl font-bold text-accent-dark">
            Progress is made through hard work and dedication. Globo Gym has
            every tool you need to test yourself every day.
          </p>
        </Reveal>
        <Reveal>
          <button
            className="bg-accent text-white w-[200px] py-4 my-6 mx-auto rounded-lg  hover:bg-accent-dark hover:text-lg transition-all ease-in"
            onClick={getStarted}
          >
            Get Started
          </button>
        </Reveal>
      </div>
    </div>
  );
};

export default Hero;

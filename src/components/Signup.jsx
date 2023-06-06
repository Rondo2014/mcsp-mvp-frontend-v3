import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      password,
      confirmPassword,
      dateOfBirth: selectedDate,
    };
    console.log(formData);
  };
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full max-w-[1244px] mx-auto">
      <div className="flex flex-col justify-center">
        <form className="text-white max-w-[400px] w-full mx-auto p-8 rounded-lg  border-[1px] border-accent shadow-lg shadow-accent group focus-within:group-[shadow-primary]:">
          <h2 className="text-2xl text-text font-bold text-center">Signup</h2>
          <div className="flex flex-col text-text py-2">
            <label>Name</label>
            <input
              className="rounded-lg bg-transparent mt-2 p-2 border-[1px] border-accent focus:border-accent focus:bg-primary focus:outline-none focus:group-[shadow-primary]: text-white transition-all duration-300 ease-in"
              type="text"
            ></input>
          </div>
          <div className="flex flex-col text-text py-2">
            <label>Email</label>
            <input
              className="rounded-lg bg-transparent mt-2 p-2 border-[1px] border-accent focus:border-accent focus:bg-primary focus:outline-none focus:group-[shadow-primary]: text-white transition-all duration-300 ease-in"
              type="text"
            ></input>
          </div>
          <div className="flex flex-col text-text py-2">
            <label>User Name</label>
            <input
              className="rounded-lg bg-transparent mt-2 p-2 border-[1px] border-accent focus:border-accent focus:bg-primary focus:outline-none focus:group-[shadow-primary]: text-white transition-all duration-300 ease-in"
              type="text"
              autoComplete="new-username"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-col text-text py-2">
            <label>Password</label>
            <input
              className="rounded-lg bg-transparent mt-2 p-2 border-[1px] border-accent focus:border-accent focus:bg-primary focus:outline-none text-white transition-all duration-300 ease-in"
              type="password"
              autoComplete="new-password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-col text-text py-2">
            <label>Confirm Password</label>
            <input
              className="rounded-lg bg-transparent mt-2 p-2 border-[1px] border-accent focus:border-accent focus:bg-primary focus:outline-none text-white transition-all duration-300 ease-in"
              type="password"
              autoComplete="new-password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>

          <div className="flex flex-col text-text py-2">
            <label>Date of Birth</label>
            <DatePicker
              className="rounded-lg bg-transparent mt-2 p-2 border-[1px] border-accent focus:border-accent focus:bg-primary focus:outline-none text-white transition-all duration-300 ease-in"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              showYearDropdown
              scrollableYearDropdown
              yearDropdownItemNumber={100}
            />
          </div>

          <div className="flex justify-between text-accent-dark py-2"></div>
          <button
            className="bg-secondary w-full my-5 py-2 hover:scale-105 transition-all duration-500 ease-in-out rounded-lg"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>

      <div className="hidden sm:block">
        <img
          src="https://c0.wallpaperflare.com/preview/773/46/359/woman-female-bar-strong.jpg"
          alt="login"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Signup;

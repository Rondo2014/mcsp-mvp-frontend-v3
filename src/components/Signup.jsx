import React, { useState, useEffect, useRef, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "../api/axios.js";
import AuthContext from "../context/AuthProvider.jsx";

const SIGNUP_URL = "/users/signup";

const Signup = () => {
  const navigate = useNavigate();
  const nameRef = useRef();
  const errRef = useRef();
  const { setAuth, handleLogin } = useContext(AuthContext);

  const [selectedDate, setSelectedDate] = useState(null);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      username,
      email,
      password,
      confirmPassword,
      dateOfBirth: selectedDate,
      gender,
    };
    console.log(formData);
    try {
      const res = await axios.post(SIGNUP_URL, JSON.stringify(formData), {
        headers: { "Content-Type": "application/json" },
      });
      setAuth({ username, password });
      setSuccess(true);
    } catch (err) {
      if (!err.response) {
        setError("No response from server");
      } else if (err.response.status === 400) {
        setError("Username or Email already exists");
      } else if (err.response.status === 500) {
        setError("Server error");
      }
    }
  };

  return (
    <>
      {success ? (
        <div className="flex flex-col justify-center items-center h-screen">
          <h1 className="text-6xl text-white font-bold text-center">
            Welcome <span className="text-text"> {name} </span>
          </h1>
          <button
            className="w-auto text-white bg-secondary p-2 mx-auto rounded-lg mt-4 hover:scale-105 transition-all ease-in-out duration-300"
            onClick={() => handleLogin(username, password)}
          >
            Continue to dashboard
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full max-w-[1244px] mx-auto my-20">
            <div className="flex flex-col justify-center">
              <form
                className="flex flex-col text-white max-w-[500px] w-full mx-auto p-8 rounded-lg  border-[1px] border-accent shadow-lg shadow-accent group focus-within:group-[shadow-primary]:"
                onSubmit={handleSubmit}
              >
                <h2 className="text-2xl text-text font-bold text-center">
                  Signup
                </h2>
                <section>
                  <p
                    ref={errRef}
                    className={
                      error
                        ? "bg-primary text-white font-semibold rounded-lg transition-all duration-500 ease-in-out text-center p-2 my-3"
                        : "opacity-0 h-0 w-0"
                    }
                    aria-live="assertive"
                  >
                    {error}
                  </p>
                </section>
                <div className="flex flex-col gap-4 text-text py-2">
                  <label>Name</label>
                  <input
                    className="rounded-lg bg-transparent mt-2 p-2 border-[1px] border-accent focus:border-accent focus:bg-primary focus:outline-none focus:group-[shadow-primary]: text-white transition-all duration-300 ease-in"
                    type="text"
                    autoComplete="off"
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </div>
                <div className="flex flex-col text-text py-2">
                  <label>Email</label>
                  <input
                    className="rounded-lg bg-transparent mt-2 p-2 border-[1px] border-accent focus:border-accent focus:bg-primary focus:outline-none focus:group-[shadow-primary]: text-white transition-all duration-300 ease-in"
                    type="text"
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
                <div className="flex flex-col text-text py-2">
                  <label>User Name</label>
                  <input
                    className="rounded-lg bg-transparent mt-2 p-2 border-[1px] border-accent focus:border-accent focus:bg-primary focus:outline-none focus:group-[shadow-primary]: text-white transition-all duration-300 ease-in"
                    type="text"
                    autoComplete="off"
                    onChange={(e) => setUsername(e.target.value)}
                  ></input>
                </div>
                <div className="flex flex-col text-text py-2">
                  <label>Password</label>
                  <input
                    className="rounded-lg bg-transparent mt-2 p-2 border-[1px] border-accent focus:border-accent focus:bg-primary focus:outline-none text-white transition-all duration-300 ease-in"
                    type="password"
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>
                <div className="flex flex-col text-text py-2">
                  <label>Confirm Password</label>
                  <input
                    className="rounded-lg bg-transparent mt-2 p-2 border-[1px] border-accent focus:border-accent focus:bg-primary focus:outline-none text-white transition-all duration-300 ease-in"
                    type="password"
                    autoComplete="off"
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                <div className="flex flex-col text-text p-4">
                  <label>Gender</label>
                  <div className="flex flex-row items-center">
                    <label className="mr-2 p-1">
                      <input
                        className="m-1"
                        type="radio"
                        name="gender"
                        value="M"
                        onChange={(e) => setGender(e.target.value)}
                      />
                      Male
                    </label>
                    <label className="mr-2 p-1">
                      <input
                        className="m-1"
                        type="radio"
                        name="gender"
                        value="F"
                        onChange={(e) => setGender(e.target.value)}
                      />
                      Female
                    </label>
                    <label className="mr-2 p-1">
                      <input
                        className="m-1"
                        type="radio"
                        name="gender"
                        value="NA"
                        onChange={(e) => setGender(e.target.value)}
                      />
                      Prefer not to say
                    </label>
                  </div>
                </div>

                <div className="flex justify-between text-accent-dark py-2"></div>
                <button
                  className="bg-secondary w-full my-5 py-2 hover:scale-105 transition-all duration-500 ease-in-out rounded-lg"
                  type="submit"
                >
                  Login
                </button>
                <Link to="/login" className="text-center text-text">
                  Already have an account?
                </Link>
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
        </>
      )}
    </>
  );
};

export default Signup;

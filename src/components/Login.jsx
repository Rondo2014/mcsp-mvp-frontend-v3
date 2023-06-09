import React from "react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider.jsx";

const Login = () => {
  const { setAuth, handleLogin } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setError("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const success = await handleLogin(username, password);
      if (success) {
        setSuccess(true);
      }
    } catch (err) {
      console.log(err);
      if (!err.response) {
        setError("No response from server");
      } else if (err.response.status === 400) {
        setError("Invalid username or password");
      } else if (err.response.status === 401) {
        setError("Invalid username or password");
      } else if (err.response.status === 500) {
        setError("Server error");
      } else if (err.response.status === 404) {
        setError("User not found");
      }
    }
  };

  return (
    <>
      {success ? (
        <div className="flex flex-col justify-center items-center h-screen">
          <h1 className="text-2xl text-text font-bold text-center">
            Login Success!
          </h1>
          <Link to="/dashboard" className="text-text text-center underline">
            Dashboard
          </Link>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full max-w-[1244px] mx-auto">
            <div className="hidden sm:block">
              <img
                src="https://staticc.sportskeeda.com/editor/2023/05/cbebe-16849517175253-1920.jpg"
                alt="login"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <form
                onSubmit={handleSubmit}
                className="text-white max-w-[400px] w-full mx-auto p-8 rounded-lg  border-[1px] border-accent shadow-lg shadow-accent group focus-within:group-[shadow-primary]:"
              >
                <h2 className="text-2xl text-text font-bold text-center">
                  Login
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
                <div className="flex flex-col text-text py-2">
                  <label htmlFor="username">Username:</label>
                  <input
                    className="rounded-lg bg-transparent mt-2 p-2 border-[1px] border-accent focus:border-accent focus:bg-primary focus:outline-none focus:group-[shadow-primary]: text-white transition-all duration-300 ease-in"
                    type="text"
                    id="username"
                    autoComplete="off"
                    ref={userRef}
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    required
                  ></input>
                </div>
                <div className="flex flex-col text-text py-2">
                  <label htmlFor="password">Password</label>
                  <input
                    className="rounded-lg bg-transparent mt-2 p-2 border-[1px] border-accent focus:border-accent focus:bg-primary focus:outline-none text-white transition-all duration-300 ease-in"
                    type="password"
                    value={password}
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  ></input>
                </div>
                <div className="flex justify-between text-accent-dark py-2">
                  <p className="flex items-center">
                    <input className="mr-2" type="checkbox" />
                    Remember Me
                  </p>
                  <p>Forgot Password</p>
                </div>
                <button
                  className="bg-secondary w-full my-5 py-2 hover:scale-105 transition-all duration-500 ease-in-out rounded-lg"
                  type="submit"
                >
                  Login
                </button>
                <p className=" border-t-[1px] border-secondary py-5 mt-2 p-2 mx-auto">
                  Not a member yet?
                  <Link to="/signup" className="text-text font-semibold">
                    {" "}
                    Sign up
                  </Link>{" "}
                  today!
                </p>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Login;

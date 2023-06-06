import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider.jsx";

const Profile = () => {
  const { auth } = useContext(AuthContext);
  const isLoggedIn = auth?.token;

  return (
    <>
      {isLoggedIn ? (
        <div className="flex flex-col justify-center items-center h-screen">
          <h1 className="text-2xl text-text font-bold text-center">
            Welcome, {auth.username}!
          </h1>
          <p className="text-text text-center">
            You are now logged in and can access your profile.
          </p>
        </div>
      ) : (
        <div className="w-full md:h-[800px] max-w-[1244px] mx-auto flex justify-center py-40">
          <div className="flex flex-col justify-center p-6 mt-5 text-center">
            <h1 className="font-bold text-3xl text-text py-5">
              {" "}
              You are not logged in{" "}
            </h1>
            <p className="text-white py-2">
              Please{" "}
              <Link to="/login" className="text-accent">
                {" "}
                login to your account{" "}
              </Link>
            </p>
            <p className="text-white py-2">
              or{" "}
              <Link to="/signup" className="text-accent">
                {" "}
                signup for free{" "}
              </Link>{" "}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;

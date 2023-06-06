import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
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
        <Navigate to={"/login"} />
      )}
    </>
  );
};

export default Profile;

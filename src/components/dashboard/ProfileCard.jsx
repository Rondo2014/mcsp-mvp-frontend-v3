import React from "react";
import { Link } from "react-router-dom";

const ProfileCard = ({ profileData }) => {
  const firstName =
    profileData && profileData.name ? profileData.name.split(" ")[0] : "";
  console.log(profileData);

  const birthYear = new Date(profileData.date_of_birth).getFullYear();
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  return (
    <div className="text-white w-full mx-auto p-10 m-4 border-2 border-accent-dark rounded-lg ml-12 bg-bg-dark md:max-h-[600px]">
      <div className="flex justify-center mx-auto w-full">
        <img
          src="https://www.vhv.rs/dpng/d/436-4363443_view-user-icon-png-font-awesome-user-circle.png"
          className="rounded-full h-24 w-24 bg-bg-dark"
        ></img>
      </div>
      <div className="mx-auto w-full text-center">
        <h1 className="text-5xl text-secondary font-bold py-5">
          Hello {firstName}
        </h1>
        <h2 className="text-2xl text-accent font-bold py-4">
          Here's a quick look at your profile:
        </h2>
        <ul className="py-4 grid grid-cols-1 md:grid-cols-2 text-left">
          {profileData && profileData.name && (
            <li className="text-xl text-secondary font-bold">
              <span className="text-white">Name:</span> {profileData.name}
            </li>
          )}
          {profileData && profileData.email && (
            <li className="text-xl text-secondary font-bold">
              <span className="text-white">Email:</span> {profileData.email}
            </li>
          )}
          <li className="text-xl text-secondary font-bold">
            <span className="text-white">Age: </span>
            {age}
          </li>
          <li className="text-xl text-secondary font-bold">
            <span className="text-white">Gender: </span>
            {profileData.gender}
          </li>
          <li className="text-xl text-secondary font-bold">
            <span className="text-white">Current Gym: </span>
            {profileData && profileData.primary_gym
              ? profileData.primary_gym
              : "N/A"}
          </li>
          <li className="text-xl text-secondary font-bold">
            <span className="text-white">Primary Trainer: </span>
            {profileData.trainer ? "Yes" : "N/A"}
          </li>
        </ul>
        <h2 className="text-lg text-accent-dark font-semibold pt-10">
          To make changes to your profile, please visit the{" "}
          <Link to="/profile" className="text-text">
            profile page
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default ProfileCard;

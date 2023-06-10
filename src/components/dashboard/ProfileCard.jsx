import React, { useEffect, useState } from "react";
import axios from "../../api/axios";

const ProfileCard = () => {
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/users/:id", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setProfileData(response.data);
    }
    fetchData();
  }, []);

  const firstName =
    profileData && profileData.name ? profileData.name.split(" ")[0] : "";
  console.log(profileData);
  return (
    <div className="text-white w-full mx-auto p-10 m-4 border-2 border-accent-dark rounded-lg ml-10 bg-bg-dark">
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
        <ul className="py-4 grid grid-cols-2 text-left">
          <li className="text-xl text-secondary font-bold">
            <span className="text-white">Name:</span> {profileData.name}
          </li>
          <li className="text-xl text-secondary font-bold">
            <span className="text-white">Email:</span> {profileData.email}
          </li>
          <li className="text-xl text-secondary font-bold">
            <span className="text-white">Age:</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;

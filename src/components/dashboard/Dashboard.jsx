import React, { useState, useEffect } from "react";
import Tracker from "./Tracker";
import TrackerInput from "./TrackerInput";
import ProfileCard from "./ProfileCard.jsx";
import axios from "../../api/axios";

const Dashboard = () => {
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

  const handleWorkoutSubmit = (event) => {
    event.preventDefault();
    console.log(formArray);
    axios.post("/users/workouts", formArray, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setNewWorkout(true);
    setFormArray([]);
  };

  const [workoutData, setWorkoutData] = useState([]);
  return (
    <>
      <TrackerInput
        handleWorkoutSubmit={handleWorkoutSubmit}
        profileData={profileData}
      />
      <Tracker workoutData={workoutData} setWorkoutData={setWorkoutData}>
        <ProfileCard
          setProfileData={setProfileData}
          profileData={profileData}
        />
      </Tracker>
    </>
  );
};

export default Dashboard;

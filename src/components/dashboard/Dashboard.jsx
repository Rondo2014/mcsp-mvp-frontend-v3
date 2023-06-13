import React, { useState, useEffect } from "react";
import Tracker from "./Tracker";
import TrackerInput from "./TrackerInput";
import axios from "../../api/axios";

const Dashboard = () => {
  const [profileData, setProfileData] = useState([]);
  const [formArray, setFormArray] = useState([]);
  const [previousWorkout, setPreviousWorkout] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/users/:id", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setProfileData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const [workoutData, setWorkoutData] = useState([]);

  return (
    <>
      <TrackerInput
        profileData={profileData}
        formArray={formArray}
        setFormArray={setFormArray}
        previousWorkout={previousWorkout}
        setPreviousWorkout={setPreviousWorkout}
      />
      <Tracker
        workoutData={workoutData}
        setWorkoutData={setWorkoutData}
        profileData={profileData}
        formArray={formArray}
        setFormArray={setFormArray}
        previousWorkout={previousWorkout}
        setPreviousWorkout={setPreviousWorkout}
      />
    </>
  );
};

export default Dashboard;

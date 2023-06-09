import React, { useState } from "react";
import Tracker from "./Tracker";
import TrackerInput from "./TrackerInput";

const Dashboard = () => {
  const [workoutData, setWorkoutData] = useState([]);
  return (
    <>
      <TrackerInput />
      <Tracker workoutData={workoutData} setWorkoutData={setWorkoutData} />
    </>
  );
};

export default Dashboard;

import React, { useEffect, useState } from "react";
import axios from "../../api/axios.js";
import List from "./List.jsx";
import ProfileCard from "./ProfileCard.jsx";

const Tracker = ({ workoutData, setWorkoutData, profileData }) => {
  const [workoutClicked, setWorkoutClicked] = useState(null);
  useEffect(() => {
    axios
      .get("/users/workouts", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        const workoutData = res.data;
        setWorkoutData(workoutData);
        console.log(workoutData);
        console.log(typeof workoutData[0].date[0]);
      });
  }, []);

  const handleClick = (id) => {
    setWorkoutClicked(id);
  };

  const forbiddenKeys = ["id", "name", "type", "date", "time", "user_id"];

  return (
    <div className="w-full max-w-[1244px] flex flex-col md:flex md:flex-row md:flex-grow-1 mx-auto">
      <div className="md:flex md:w-7/12 md:full">
        <ul className="flex flex-col">
          {workoutData.map((workout, index) => {
            const date = new Date(workout.date[0]);
            const formattedDate = date.toLocaleDateString();
            return (
              <li
                key={workout.id}
                className="group grid grid-cols-2 gap-2 text-white py-3 border-b-2 border-accent hover:bg-accent-dark transition-all duration-500 ease-in-out my-2 rounded-md bg-bg p-2 cursor-pointer hover:scale-105"
                onClick={() => handleClick(workout.id)}
              >
                <h1 className="group-hover:text-primary col-span-2 text-xl font-bold text-accent transition-all duration-500 ease-in-out">
                  {workout.name}
                </h1>
                <p className="col-span-2 text-sm">
                  {formattedDate} {workout.time[0].slice(0, 5)}
                </p>
              </li>
            );
          })}
        </ul>
        {workoutClicked !== null && (
          <div className="w-full text-white ml-5 pl-5 text-left border-l-2 border-secondary">
            {workoutData.map((workout) => {
              if (workout.id === workoutClicked) {
                return (
                  <>
                    <List key={workout.id} workout={workout} />
                  </>
                );
              } else {
                return null;
              }
            })}
          </div>
        )}
      </div>
      <ProfileCard profileData={profileData} />
    </div>
  );
};

export default Tracker;

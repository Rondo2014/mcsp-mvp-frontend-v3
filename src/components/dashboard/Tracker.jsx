import React, { useEffect, useState } from "react";
import axios from "../../api/axios.js";

const Tracker = ({ workoutData, setWorkoutData }) => {
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
    <div className="w-full max-w-[1244px] mx-auto">
      <div className="hidden md:grid grid-cols-2 w-full md:w-1/3 left-0">
        <ul>
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
                  <div key={workout.id}>
                    <h1 className="col-span-2 text-xl font-bold text-accent transition-all duration-500 ease-in-out">
                      {workout.name}
                    </h1>
                    {workout.type.map((exercise, index) => (
                      <ul key={index} className="grid grid-cols-2 py-4 ">
                        <h1 className="group-hover:text-primary col-span-2 text-xl text-center font-bold text-accent transition-all duration-500 ease-in-out">
                          Target: {workout.workout[index]}
                        </h1>
                        <li className="col-span-2 font-bold text-xl border-b-2 border-t-2 border-primary text-center">
                          {exercise}
                        </li>
                        <li>
                          {" "}
                          <span className="text-text font-bold text-lg">
                            Sets:
                          </span>{" "}
                          {workout.sets[index]}
                        </li>
                        <li>
                          {" "}
                          <span className="text-text font-bold text-lg">
                            Reps:
                          </span>{" "}
                          {workout.reps[index]}
                        </li>
                        <li>
                          {" "}
                          <span className="text-text font-bold text-lg">
                            Weight:
                          </span>{" "}
                          {workout.weight[index]}
                        </li>
                        <li>
                          {" "}
                          <span className="text-text font-bold text-lg">
                            Calories:
                          </span>{" "}
                          {workout.calories[index]}
                        </li>
                        <li className="col-span-2">
                          <span className="text-text font-bold text-lg">
                            Notes:{" "}
                          </span>
                          {workout.notes[index]}
                        </li>
                      </ul>
                    ))}
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tracker;

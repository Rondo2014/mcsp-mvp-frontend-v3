import React, { useEffect, useState } from "react";
import { Add } from "@mui/icons-material";

const List = ({ workout, formArray, setFormArray }) => {
  console.log(workout);

  const handleAddExercise = (index) => {
    console.log(index);
    const newExercise = {
      workout: workout.workout[index],
      type: workout.type[index],
      sets: workout.sets[index],
      reps: workout.reps[index],
      weight: workout.weight[index],
      calories: workout.calories[index],
      notes: workout.notes[index],
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };
    console.log(newExercise);
    if (formArray.length > 0) {
      setFormArray([...formArray, newExercise]);
    }
  };

  return (
    <div>
      <h1 className="col-span-2 text-xl font-bold text-accent transition-all duration-500 ease-in-out">
        {workout.name}
      </h1>
      {workout.type.map((exercise, index) => {
        return (
          <div
            key={`exercise ${workout.id}-${index}`}
            className="bg-bg rounded-lg"
          >
            <Add
              className="hover:scale-105 hover:text-text transition-all duration-300 ease-in-out"
              onClick={() => handleAddExercise(index)}
            />
            <ul
              key={"workout" + workout.id}
              className="group grid grid-cols-2 gap-2 text-white pt-0 pb-3 border-b-2 border-accent hover:bg-accent-dark hover:text-primary transition-all duration-500 ease-in-out my-2 rounded-md p-4 cursor-pointer"
            >
              <h1 className="group-hover:text-primary col-span-2 text-xl text-center font-bold text-accent transition-all duration-500 ease-in-out">
                Target: {workout.workout[index]}
              </h1>
              <li
                key={`type` + workout.id}
                className="col-span-2 font-bold text-xl border-b-2 border-t-2 border-primary text-center group-hover:text-white"
              >
                {exercise}
              </li>
              <li key={`sets` + workout.id}>
                <span className="text-text group-hover:text-white font-bold text-lg">
                  Sets:
                </span>{" "}
                {workout.sets[index]}
              </li>
              <li key={`reps` + workout.id}>
                <span className="text-text group-hover:text-white font-bold text-lg">
                  Reps:
                </span>{" "}
                {workout.reps[index]}
              </li>
              <li key={`weight` + workout.id} className=" col-span-2">
                <span className="text-text group-hover:text-white font-bold text-lg">
                  Weight:
                </span>{" "}
                {workout.weight[index]}
              </li>
              <li key={`calories` + workout.id} className=" col-span-2">
                <span className="text-text group-hover:text-white font-bold text-lg">
                  Calories:
                </span>{" "}
                {workout.calories[index]}
              </li>
              <li key={`notes` + workout.id} className="col-span-2">
                <span className="text-text group-hover:text-white font-bold text-lg">
                  Notes:{" "}
                </span>
                {workout.notes[index]}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default List;

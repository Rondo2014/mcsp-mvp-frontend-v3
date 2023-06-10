import React from "react";

const List = ({ workout }) => {
  console.log(workout);

  return (
    <div>
      <h1 className="col-span-2 text-xl font-bold text-accent transition-all duration-500 ease-in-out">
        {workout.name}
      </h1>
      {workout.type.map((exercise, index) => {
        return (
          <div key={`exercise-${index}`} className="bg-bg-dark">
            <ul
              key={"workout"}
              className="group grid grid-cols-2 gap-2 text-white py-3 border-b-2 border-accent hover:bg-accent-dark hover:text-primary transition-all duration-500 ease-in-out my-2 rounded-md bg-bg p-2 cursor-pointer hover:scale-105"
            >
              <h1 className="group-hover:text-primary col-span-2 text-xl text-center font-bold text-accent transition-all duration-500 ease-in-out">
                Target: {workout.workout[index]}
              </h1>
              <li
                key={`type-${index}`}
                className="col-span-2 font-bold text-xl border-b-2 border-t-2 border-primary text-center group-hover:text-white"
              >
                {exercise}
              </li>
              <li key={`sets-${index}`}>
                <span className="text-text group-hover:text-white font-bold text-lg">
                  Sets:
                </span>{" "}
                {workout.sets[index]}
              </li>
              <li key={`reps-${index}`}>
                <span className="text-text group-hover:text-white font-bold text-lg">
                  Reps:
                </span>{" "}
                {workout.reps[index]}
              </li>
              <li key={`weight-${index}`} className=" col-span-2">
                <span className="text-text group-hover:text-white font-bold text-lg">
                  Weight:
                </span>{" "}
                {workout.weight[index]}
              </li>
              <li key={`calories-${index}`} className=" col-span-2">
                <span className="text-text group-hover:text-white font-bold text-lg">
                  Calories:
                </span>{" "}
                {workout.calories[index]}
              </li>
              <li key={`notes-${index}`} className="col-span-2">
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
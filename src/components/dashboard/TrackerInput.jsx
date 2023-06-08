import React, { useState, useContext } from "react";
import { TRACKERMENU } from "./trackerMenu";
import AuthContext from "../../context/AuthProvider";
import TrackerSubmit from "./TrackerSubmit";

const TrackerInput = () => {
  const [workout, setWorkout] = useState("");
  const [type, setType] = useState("");
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);
  const [distance, setDistance] = useState(0);
  const [time, setTime] = useState(0);
  const [calories, setCalories] = useState(0);
  const [notes, setNotes] = useState("");
  const [isCardio, setIsCardio] = useState(false);
  const [isStrength, setIsStrength] = useState(false);
  const [formData, setFormData] = useState({});
  const [formArray, setFormArray] = useState([]);

  const handleFormSubmit = (event, data) => {
    event.preventDefault();
    setFormData(data);
    setFormArray([...formArray, data]);
    console.log(formData);
  };

  const { auth } = useContext(AuthContext);
  const { username } = auth;

  const handleWorkoutChange = (event) => {
    const workoutType = event.target.value;
    setWorkout(event.target.value);
    setIsCardio(workoutType === "Cardio" && workoutType !== "");
    setIsStrength(workoutType !== "Cardio" && workoutType !== "");
    setType("");
  };

  const handleTypeChange = (event) => {
    const typeValue = event.target.value;
    setType(typeValue);
  };

  const handleSetsChange = (event) => {
    setSets(parseInt(event.target.value));
  };

  const handleRepsChange = (event) => {
    setReps(parseInt(event.target.value));
  };

  const handleWeightChange = (event) => {
    setWeight(parseInt(event.target.value));
  };

  const handleDistanceChange = (event) => {
    setDistance(parseInt(event.target.value));
  };

  const handleTimeChange = (event) => {
    setTime(parseInt(event.target.value));
  };

  const handleCaloriesChange = (event) => {
    setCalories(parseInt(event.target.value));
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("workout: ", workout);
    console.log("type: ", type);
    console.log("sets: ", sets);
    console.log("reps: ", reps);
    console.log("weight: ", weight);
    console.log("distance: ", distance);
    console.log("time: ", time);
    console.log("calories: ", calories);
    console.log("notes: ", notes);
  };

  return (
    <div className="grid grid-cols-1 max-w-[1244px] mx-auto h-100 p-4 border-[2px] border-primary my-14 overflow-auto shadow-lg shadow-accent-dark rounded-lg">
      <h1 className="text-4xl font-bold text-text mx-auto py-2 border-b-2 border-accent-dark">
        Welcome back {username}!
      </h1>
      <h2 className="text-2xl font-semibold text-secondary text-center mb-4 pt-4">
        Add a new workout
      </h2>
      <form
        className="grid md:grid-cols-2 py-4 gap-3 text-white mx-auto px-6 justify-between items-center w-full transition-all duration-500 ease-out"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-2 items-stretch py-2">
          <label className="p-3 font-semibold text-white" htmlFor="workout">
            Workout:
          </label>
          <select
            className="text-text bg-[#0c0c0c] border-[1px] border-secondary rounded-lg p-2"
            id="workout"
            value={workout}
            onChange={handleWorkoutChange}
          >
            <option value="">Select a workout</option>
            {TRACKERMENU.workout.map((option) => (
              <option key={option} value={option} className="text-text">
                {option}
              </option>
            ))}
          </select>
        </div>
        {isStrength && (
          <div className="grid grid-cols-2 items-stretch py-2">
            <label className="p-3 font-semibold text-white" htmlFor="type">
              Type:
            </label>
            <select
              id="type"
              value={type}
              onChange={handleTypeChange}
              className="text-text bg-[#0c0c0c] border-[1px] border-secondary rounded-lg p-2"
            >
              <option value="">Select a type</option>
              {TRACKERMENU.type
                .filter((option) => option.name !== "Cardio")
                .map((option) => {
                  if (typeof option === "string") {
                    return (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    );
                  } else {
                    return (
                      <optgroup
                        key={option.name}
                        label={option.name}
                        className="text-accent-dark font-bold text-xl"
                      >
                        {option.options.map((subOption) => (
                          <option
                            key={subOption}
                            value={subOption}
                            className="text-text font-normal text-base"
                          >
                            {subOption}
                          </option>
                        ))}
                      </optgroup>
                    );
                  }
                })}
            </select>
          </div>
        )}
        {isCardio && (
          <div className="grid grid-cols-2 items-stretch py-2">
            <label className="p-3 font-semibold text-white" htmlFor="type">
              Type:
            </label>
            <select
              id="type"
              value={type}
              onChange={handleTypeChange}
              className="text-text bg-[#0c0c0c] border-[1px] border-secondary rounded-lg p-2"
            >
              <option value="">Select a type</option>
              {TRACKERMENU.type
                .filter((option) => option.name === "Cardio")
                .map((option) => {
                  if (typeof option === "string") {
                    return (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    );
                  } else {
                    return (
                      <optgroup
                        className="text-accent-dark font-bold text-xl"
                        key={option.name}
                        label={option.name}
                      >
                        {option.options.map((subOption) => (
                          <option
                            className="text-text font-normal text-base"
                            key={subOption}
                            value={subOption}
                          >
                            {subOption}
                          </option>
                        ))}
                      </optgroup>
                    );
                  }
                })}
            </select>
          </div>
        )}
        {isStrength && (
          <>
            <div className="grid grid-cols-2 items-stretch py-2">
              <label className="p-3 font-semibold text-white" htmlFor="sets">
                Sets:
              </label>
              <input
                id="sets"
                type="number"
                value={sets}
                onChange={handleSetsChange}
                className="text-text bg-[#0c0c0c] border-[1px] border-secondary rounded-lg p-2"
              />
            </div>
            <div className="grid grid-cols-2 items-stretch py-2">
              <label className="p-3 font-semibold text-white" htmlFor="reps">
                Reps:
              </label>
              <input
                id="reps"
                type="number"
                value={reps}
                onChange={handleRepsChange}
                className="text-text bg-[#0c0c0c] border-[1px] border-secondary rounded-lg p-2"
              />
            </div>
            <div className="grid grid-cols-2 items-stretch py-2">
              <label className="p-3 font-semibold text-white" htmlFor="weight">
                Weight:
              </label>
              <input
                id="weight"
                type="number"
                value={weight}
                onChange={handleWeightChange}
                className="text-text bg-[#0c0c0c] border-[1px] border-secondary rounded-lg p-2"
              />
            </div>
          </>
        )}
        {isCardio && (
          <>
            <div className="grid grid-cols-2 items-stretch py-2">
              <label
                className="p-3 font-semibold text-white"
                htmlFor="distance"
              >
                Distance:
              </label>
              <input
                id="distance"
                type="number"
                value={distance}
                onChange={handleDistanceChange}
                className="text-text bg-[#0c0c0c] border-[1px] border-secondary rounded-lg p-2"
              />
            </div>
            <div className="grid grid-cols-2 items-stretch py-2">
              <label className="p-3 font-semibold text-white" htmlFor="time">
                Time:
              </label>
              <input
                id="time"
                type="number"
                value={time}
                onChange={handleTimeChange}
                className="text-text bg-[#0c0c0c] border-[1px] border-secondary rounded-lg p-2"
              />
            </div>
          </>
        )}
        <div className="grid grid-cols-2 items-stretch py-2">
          <label className="p-3 font-semibold text-white" htmlFor="calories">
            Calories:
          </label>
          <input
            id="calories"
            type="number"
            value={calories}
            onChange={handleCaloriesChange}
            className="text-text bg-[#0c0c0c] border-[1px] border-secondary rounded-lg p-2"
          />
        </div>
        <div className="grid grid-cols-2 items-stretch py-2">
          <label className="p-3 font-semibold text-white" htmlFor="notes">
            Notes:
          </label>
          <textarea
            id="notes"
            value={notes}
            onChange={handleNotesChange}
            className="text-text bg-[#0c0c0c] border-[1px] border-secondary rounded-lg p-2"
          />
        </div>
        <div className="md:col-span-2 flex flex-col justify-end">
          <button
            type="submit"
            className="mx-auto h-12 w-full md:w-36 bg-accent text-white text-semibold py-2 rounded-md hover:scale-105"
          >
            Add to workout
          </button>
        </div>
      </form>
      <TrackerSubmit formData={formData} />
    </div>
  );
};

export default TrackerInput;

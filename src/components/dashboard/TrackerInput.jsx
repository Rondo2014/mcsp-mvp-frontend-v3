import React, { useState, useContext, useRef, useEffect } from "react";
import { TRACKERMENU } from "./trackerMenu";
import axios from "../../api/axios";
import TrackerSubmit from "./TrackerSubmit";
import { Close, Done } from "@mui/icons-material";
import { motion } from "framer-motion";

const TrackerInput = ({ profileData, formArray, setFormArray }) => {
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

  const [newWorkout, setNewWorkout] = useState(true);

  const newWorkoutRef = useRef(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newFormData = {
      id: "New workout card" + formArray.length + 1,
      workout,
      type,
      sets,
      reps,
      weight,
      distance,
      time,
      calories,
      notes,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };
    setFormData(newFormData);
    setFormArray([...formArray, newFormData]);
    setType("");
    setSets(0);
    setReps(0);
    setWeight(0);
    setDistance(0);
    setTime(0);
    setCalories(0);
    setNotes("");
  };

  const handleWorkoutSubmit = (event) => {
    event.preventDefault();

    axios.post("/users/workouts", formArray, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    handleNewWorkout();
  };

  const firstName =
    profileData && profileData.name ? profileData.name.split(" ")[0] : "";

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

  const handleNewWorkout = () => {
    newWorkoutRef.current.value = null;
    newWorkoutRef.current.focus();
    setNewWorkout(true);
    setFormArray([]);
  };

  const handleNewWorkoutSubmit = (event) => {
    event.preventDefault();
    const newWorkout = newWorkoutRef.current.value;
    if (newWorkout === "") return;
    formArray.push(newWorkout);
    setNewWorkout(false);
  };

  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -150, opacity: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="grid grid-cols-1 max-w-[1244px] mx-auto h-100 p-4 border-[2px] border-primary my-14 overflow-auto shadow-lg shadow-accent-dark rounded-lg bg-bg"
    >
      <h1 className="text-4xl font-bold text-text mx-auto py-2 border-b-2 border-accent-dark">
        Welcome back {firstName}
      </h1>
      <h2 className="text-2xl font-semibold text-secondary text-center mb-4 pt-4">
        Add a{" "}
        <span
          onClick={handleNewWorkout}
          className="border-b-[1px] border-accent-dark hover:text-2xl transition-all duration-300 ease-in-out cursor-pointer"
        >
          {" "}
          new workout{" "}
        </span>
      </h2>
      {newWorkout ? (
        <div className="mx-auto">
          <div className="">
            <input
              className="rounded-lg bg-bg-dark border-secondary border-[1px] p-2 w-full md:w-60 text-text text-left"
              type="text"
              placeholder="Workout name"
              ref={newWorkoutRef}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleNewWorkoutSubmit(event);
                }
              }}
              required
            />
            <Done
              style={{ fontSize: 40 }}
              onClick={handleNewWorkoutSubmit}
              className="px-2 text-text hover:scale-125 transition-all duration-500 ease-in-out text-lg cursor-pointer"
            />
            <Close
              style={{ fontSize: 40 }}
              className="px-2 text-text hover:scale-125 transition-all duration-500 ease-in-out text-lg cursor-pointer"
              onClick={handleNewWorkout}
            />
          </div>
        </div>
      ) : (
        <div className="mx-auto">
          <div className="">
            <input
              className="rounded-lg bg-bg-dark border-secondary border-[1px] p-2 w-full md:w-60 text-text text-opacity-50 text-left"
              type="text"
              placeholder="Workout name"
              ref={newWorkoutRef}
              disabled
            />
            <Close
              style={{ fontSize: 40 }}
              className="px-2 text-text hover:scale-125 transition-all duration-500 ease-in-out text-lg cursor-pointer"
              onClick={handleNewWorkout}
            />
          </div>
        </div>
      )}
      {!newWorkout && (
        <form
          className="grid md:grid-cols-2 py-4 gap-3 text-white mx-auto px-6 justify-between items-center w-full transition-all duration-500 ease-out"
          onSubmit={handleFormSubmit}
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
              required
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
                required
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
                required
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
                <label
                  className="p-3 font-semibold text-white"
                  htmlFor="weight"
                >
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
              className="mx-auto h-12 w-full md:w-36 bg-accent text-white text-semibold py-2 rounded-md hover:scale-105 duration-300 ease-in-out mt-2 mb-[-20px]"
            >
              Add to workout
            </button>
          </div>
        </form>
      )}
      {formArray.length > 0 && (
        <TrackerSubmit formArray={formArray} setFormArray={setFormArray} />
      )}
      {formArray.length > 1 && (
        <button
          type="submit"
          className="mx-auto h-12 w-full md:w-36 bg-accent text-white text-semibold py-2 rounded-md hover:scale-105 duration-300 ease-in-out"
          onClick={handleWorkoutSubmit}
        >
          Submit workout
        </button>
      )}
    </motion.div>
  );
};

export default TrackerInput;

import React from "react";

const TrackerSubmit = ({ formArray }) => {
  if (!formArray || formArray.length < 2) return null;
  return (
    <div className="w-full max-w-[1244px] grid grid-cols-1 md:grid-cols-4 justify-center py-10">
      {formArray.slice(1).map((item) => {
        return (
          <div className="border-box w-auto shadow-xl shadow-secondary hover:shadow-accent hover:shadow-2xl hover:scale-105 flex flex-row p-4 my-4 rounded-lg transition-all duration-500 ease-in-out bg-bg-dark m-4">
            <div>
              <h1 className="text-accent text-3xl font-bold text-center py-4">
                {item.workout}
              </h1>
              <h2 className="text-white text-xl font-semibold text-center pb-4">
                {item.type}
              </h2>
              <div className="">
                <ul className="grid md:grid-cols-2 gap-2 whitespace-nowrap">
                  <li
                    key={item.id}
                    className="text-white text-xl font-bold text-left"
                  >
                    <label
                      className="text-text font-bold p-4 text-base"
                      htmlFor="exercise"
                    >
                      Sets:
                    </label>
                    {item.sets}
                  </li>
                  <li
                    key={item.id}
                    className="text-white text-left text-xl font-bold"
                  >
                    <label
                      className="text-text font-bold p-4 text-base"
                      htmlFor="exercise"
                    >
                      Reps:
                    </label>
                    {item.reps}
                  </li>
                  <li
                    key={item.id}
                    className="text-white text-left text-xl font-bold"
                  >
                    <label
                      className="text-text font-bold p-4 text-base"
                      htmlFor="exercise"
                    >
                      Weight:
                    </label>
                    {item.weight}
                  </li>
                  <li
                    key={item.id}
                    className="text-white text-left text-xl font-bold"
                  >
                    <label
                      className="text-text font-bold p-4 text-base"
                      htmlFor="exercise"
                    >
                      Calories:
                    </label>
                    {item.calories}
                  </li>
                  <li
                    key={item.id}
                    className="text-white text-base col-span-2 text-left box-content overflow-hidden h-auto"
                  >
                    <label
                      className="text-text font-bold p-4 text-base col-span-2"
                      htmlFor="exercise"
                    >
                      Notes:
                    </label>
                    {item.notes}
                  </li>
                  <li
                    key={item.id}
                    className="text-white text-base text-left mr-2 col-span-2"
                  >
                    <label
                      className="text-text font-bold p-4 text-left text-base"
                      htmlFor="exercise"
                    >
                      Date:
                    </label>
                    {item.date}
                  </li>
                  <li key={item.id} className="text-white text-base col-span-2">
                    <label
                      className="text-text font-bold p-4 text-base"
                      htmlFor="exercise"
                    >
                      Time:
                    </label>
                    {item.time}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TrackerSubmit;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Edit, EditOff, RemoveCircleOutline } from "@mui/icons-material";

const TrackerSubmit = ({
  formArray,
  setFormArray,
  exitAnimation,
  setExitAnimation,
}) => {
  const [editableIndex, setEditableIndex] = useState(null);

  const handleEditClick = (index) => {
    setEditableIndex(index);
  };
  const handleDeleteClick = (index) => {
    const newArray = [...formArray];
    newArray.splice(index, 1);
    setFormArray(newArray);
  };
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const newArray = [...formArray];
    newArray[index + 1][name] = value;
    setFormArray(newArray);
  };

  if (!formArray || formArray.length < 2) return null;
  return (
    <div className="w-full max-w-[1244px] grid grid-cols-1 md:grid-cols-4 justify-center py-10">
      <AnimatePresence>
        {formArray.slice(1).map((item, index) => {
          const key = item.id;
          console.log(item);
          const isEditable = editableIndex === index;
          return (
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              key={key}
              className="border-box w-auto shadow-xl shadow-secondary hover:shadow-accent hover:shadow-2xl hover:scale-105 flex flex-row p-4 my-4 rounded-lg transition-all duration-500 ease-in-out bg-bg-dark m-4"
            >
              <div>
                {!isEditable ? (
                  <Edit
                    onClick={() => handleEditClick(index)}
                    className="text-white hover:scale-105 hover:text-text"
                  />
                ) : (
                  <EditOff
                    onClick={() => setEditableIndex(null)}
                    className="text-white hover:scale-105 hover:text-text"
                  />
                )}
                {isEditable && (
                  <RemoveCircleOutline
                    onClick={() => handleDeleteClick(index)}
                    className="text-white hover:scale-105 hover:text-text"
                  />
                )}
                <h1 className="text-accent text-3xl font-bold text-center py-4">
                  {item.workout}
                </h1>
                <h2 className="text-white text-xl font-semibold text-center pb-4">
                  {item.type}
                </h2>
                <div className="">
                  <ul className="grid md:grid-cols-2 gap-2 whitespace-nowrap">
                    <li
                      key={`List sets-${formArray.length + 1}-${index}`}
                      className={`text-white text-xl font-bold text-left ${
                        isEditable ? "editable" : ""
                      }`}
                    >
                      <label
                        className="text-text font-bold p-4 text-base"
                        htmlFor="exercise"
                      >
                        Sets:
                      </label>
                      {isEditable ? (
                        <input
                          type="text"
                          name="sets"
                          className="text-white bg-primary rounded-lg w-[178px] p-1"
                          value={item.sets}
                          onChange={(event) => handleInputChange(event, index)}
                        />
                      ) : (
                        item.sets
                      )}
                    </li>
                    <li
                      key={`List reps-${formArray.length + 1}-${index}`}
                      className={`text-white text-left text-xl font-bold ${
                        isEditable ? " col-span-2" : ""
                      }`}
                    >
                      <label
                        className="text-text font-bold p-4 text-base"
                        htmlFor="exercise"
                      >
                        Reps:
                      </label>
                      {isEditable ? (
                        <input
                          type="text"
                          name="reps"
                          className="text-white bg-primary rounded-lg w-[175px] p-1"
                          value={item.reps}
                          onChange={(event) => handleInputChange(event, index)}
                        />
                      ) : (
                        item.reps
                      )}
                    </li>
                    <li
                      key={`List weight-${formArray.length + 1}-${index}`}
                      className={`text-white text-left text-xl font-bold ${
                        isEditable ? "editable" : ""
                      }`}
                    >
                      <label
                        className="text-text font-bold p-4 text-base"
                        htmlFor="exercise"
                      >
                        Weight:
                      </label>
                      {isEditable ? (
                        <input
                          type="text"
                          name="weight"
                          className="text-white bg-primary rounded-lg w-[155px] p-1"
                          value={item.weight}
                          onChange={(event) => handleInputChange(event, index)}
                        />
                      ) : (
                        item.weight
                      )}
                    </li>
                    <li
                      key={`List calories-${formArray.length + 1}-${index}`}
                      className={`text-white text-left text-xl font-bold ${
                        isEditable ? "col-span-2" : ""
                      } `}
                    >
                      <label
                        className="text-text font-bold p-4 text-base"
                        htmlFor="exercise"
                      >
                        Calories:
                      </label>
                      {isEditable ? (
                        <input
                          type="text"
                          className="text-white bg-primary rounded-lg w-[150px] p-1"
                          name="calories"
                          value={item.calories}
                          onChange={(event) => handleInputChange(event, index)}
                        />
                      ) : (
                        item.calories
                      )}
                    </li>
                    <li
                      key={`List notes-${formArray.length + 1}-${index}`}
                      className={`text-white w-full text-base col-span-2 text-left box-content overflow-hidden h-auto ${
                        isEditable ? "p-1 mr-5" : ""
                      }`}
                    >
                      <label
                        className="text-text font-bold p-4 text-base col-span-2"
                        htmlFor="exercise"
                      >
                        Notes:
                      </label>
                      {isEditable ? (
                        <textarea
                          name="notes"
                          value={item.notes}
                          className="text-white bg-primary rounded-lg w-40 p-1"
                          onChange={(event) => handleInputChange(event, index)}
                        />
                      ) : (
                        item.notes
                      )}
                    </li>
                    <li
                      key={`List date-${formArray.length + 1}-${index}`}
                      className={`text-white text-base text-left mr-2 col-span-2 ${
                        isEditable ? "editable" : ""
                      }`}
                    >
                      <label
                        className="text-text font-bold p-4 text-left text-base"
                        htmlFor="exercise"
                      >
                        Date:
                      </label>
                      {item.date}
                    </li>
                    <li
                      key={`List time-${formArray.length + 1}-${index}`}
                      className={`text-white text-base col-span-2 ${
                        isEditable ? "editable" : ""
                      }`}
                    >
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
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default TrackerSubmit;

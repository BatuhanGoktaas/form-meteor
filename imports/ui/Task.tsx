import React from "react";
import { Tasks, TasksCollection } from "../api/TasksCollection";

const toggleChecked = ({ _id, isChecked }: Tasks) => {
  TasksCollection.update(_id!, {
    $set: {
      isChecked: !isChecked,
    },
  });
};

export const Task = ({ task, _id, isChecked }: Tasks) => {
  return (
    <li>
      <input type="checkbox" checked={task ? false : true} onClick={() => toggleChecked({_id, isChecked})} readOnly />
      <span>{task}</span>
    </li>
  );
};

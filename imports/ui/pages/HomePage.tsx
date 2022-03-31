import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { TasksCollection, Tasks } from "/imports/api/TasksCollection";
import { Task } from "../Task";
import { TaskForm } from "../TaskForm";


export const Home = () => {
  const tasks: Tasks[] = useTracker(() => TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch());

  return (
    <div className="p-4">
      <h1>Welcome to Meteor!</h1>
      <TaskForm />
      <ul>
        {tasks.map((task) => (
          <Task key={task._id} {...task}  />
        ))}
      </ul>
    </div>
  );
};

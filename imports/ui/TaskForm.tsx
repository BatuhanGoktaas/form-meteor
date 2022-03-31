import React, { useState } from "react";
import { TasksCollection, Tasks } from "../api/TasksCollection";

export const TaskForm = () => {
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text) return;

    TasksCollection.insert({
      task: text.trim(),
      createdAt: new Date(),
      isChecked: false,
    });

    setText("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Type to add new tasks" value={text} onChange={(e) => setText(e.target.value)} />

      <button type="submit">Add Task</button>
    </form>
  );
};

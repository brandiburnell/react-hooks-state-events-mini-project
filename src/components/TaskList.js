import React from "react";
import Task from "./Task";

function TaskList({tasks}) {
  // console.log(tasks);

  const taskList = tasks.map((task) => {
    return <Task key={task.text} category={task.category} text={task.text} />;
  });

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {taskList}
    </div>
  );
}

export default TaskList;

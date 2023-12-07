import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  function handleCategorySelection(text) {
    setSelectedCategory(text);
  }

  function handleSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }

  const tasksToDisplay = tasks.filter((task) => {
    // does task category equal selected category
    if (selectedCategory === "All") return true;

    return task.category === selectedCategory;
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategoryChange={handleCategorySelection} selectedCategory={selectedCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleSubmit} selectedCategory={selectedCategory} />
      <TaskList tasks={tasksToDisplay}/>
    </div>
  );
}

export default App;

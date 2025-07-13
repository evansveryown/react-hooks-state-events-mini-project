import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  // STATE
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // DELETE HANDLER
  function handleDelete(deletedTask) {
    const updatedTasks = tasks.filter((task) => task !== deletedTask);
    setTasks(updatedTasks);
  }

  // ADD HANDLER
  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  // FILTERED TASKS
  const visibleTasks = tasks.filter((task) => {
    return selectedCategory === "All" || task.category === selectedCategory;
  });

  // RENDER
  return (
    <div className="App">
      <h2>My tasks</h2>

      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleAddTask}
      />

      <TaskList
        tasks={visibleTasks}
        onDeleteTask={handleDelete}
      />
    </div>
  );
}

export default App;

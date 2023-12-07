import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("Code");

  function handleDetailChange(e) {
    setDetails(e.target.value);
  }

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      category: category,
      text: details
    };
    console.log(newTask);
    onTaskFormSubmit(newTask);
  }
  const optionsWithoutAll = categories.filter(category => category !== "All");

  const options = optionsWithoutAll.map((category) => {
    return <option key={category}>{category}</option>
  })

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleDetailChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange}>
          {/* render <option> elements for each category here */}
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

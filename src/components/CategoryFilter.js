import React, {useState} from "react";

function CategoryFilter({categories, onCategoryChange, selectedCategory}) {
  // const [selectedCategory, setSelectedCategory] = useState("");

  function handleClick(category) {
    onCategoryChange(category);
  }

  const categoryFilters = categories.map((category) => {
    return <button className={category==selectedCategory? "selected":""} key={category} onClick={() => handleClick(category)}>{category}</button>;
  });

  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryFilters}
    </div>
  );
}

export default CategoryFilter;

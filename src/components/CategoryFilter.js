import React, {useState} from "react";

function CategoryFilter({categories, onCategoryChange}) {
  // const [selectedCategory, setSelectedCategory] = useState("");

  function handleClick(e) {
    e.target.className = "selected";
    onCategoryChange(e.target.innerText);
  }

  const categoryFilters = categories.map((category) => {
    return <button key={category} onClick={handleClick}>{category}</button>;
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

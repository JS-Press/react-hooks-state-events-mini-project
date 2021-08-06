import React from "react";

function CategoryFilter({categories, handleCatClick, selectedCategory}) {

const categoryButtons = categories.map(cat => {
  return <button key = {cat} className = {cat === selectedCategory ? 'selected' : ""} onClick = {() => handleCatClick(cat)} >{cat}</button>
})

// if(selectedCategory === 'All'){
//   null
// }else{
//   const withSelection = categoryButtons.map((buttons) => {
//       return
//   })
// }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;

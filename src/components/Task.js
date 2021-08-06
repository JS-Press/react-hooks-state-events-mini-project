import React from "react";

function Task({t, c, handleDelete}) {

  // console.log(c)
  return (
    <div className="task">
      <div className="label">{c}</div>
      <div className="text">{t}</div>
      <button className ="delete" onClick = {() => handleDelete(t)} >X</button>
    </div>
  );
}

export default Task;

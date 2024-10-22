import React from "react";

const Tarea = () => {
  return (
    <div>
      <input type="text" placeholder="Type new todo" />

      <div>
        <label></label>
        <input type="text" placeholder="Make dishes" />
      </div>

      <div>
        <button>All</button>
        <button>Pending</button>
        <button>Completed</button>
        <button>Clear completed</button>
        <span>0 item left</span>
      </div>
    </div>
  );
};

export default Tarea;
import { useContext, useState } from "react";
import { taskContext } from '../Context/Context';
import Tarea from "../Tarea/Tarea";
import Footer from "../Footer/Footer";

const Info = () => {

  const context = useContext(taskContext);

  return (
    <div>
      <h1>My Day</h1>
      <p>All my tasks in one place</p>
      <div>

      <Tarea />
        {context.tasks.map((task) => (
          <div key={task.id}>
            <p>{task.title}</p>
          </div>
        ))}
      <Footer />
      </div>
    </div>
  )
}

export default Info;
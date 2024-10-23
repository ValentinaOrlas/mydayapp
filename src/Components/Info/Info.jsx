import { useContext } from "react";
import { taskContext } from '../Context/Context';
import Tarea from "../Tarea/Tarea";
import Footer from "../Footer/Footer";
import CrearTarea from "../CraerTarea/CrearTarea";
import { useLocation } from "react-router-dom";

const Info = () => {
  const context = useContext(taskContext);
  const location = useLocation();

  const filter = location.pathname.substring(1); 
  
  const filteredTasks = context.tasks.filter(task => {
    if (filter === "completed") return task.status === "completed";
    if (filter === "pending") return task.status === "pending";
    return true; 
  });

  return (
    <div>
      <h1>My Day</h1>
      <p>All my tasks in one place</p>
      <div>
        <CrearTarea /> 
        {filteredTasks.map((task) => (
          <Tarea key={task.id} task={task} /> 
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Info;


import { useContext } from "react";
import { taskContext } from '../Context/Context';
import Tarea from "../Tarea/Tarea";
import Footer from "../Footer/Footer";
import CrearTarea from "../CraerTarea/CrearTarea";

const Info = () => {
  const context = useContext(taskContext);
  
  const hasTasks = context.tasks.length > 0;

  return (
    <div>
      <h1>My Day</h1>
      <p>All my tasks in one place</p>
      
      <CrearTarea /> 

<div id="main" className="task-list">
{ hasTasks && (
        <div  >
          {context.tasks.map((task) => (
            <Tarea key={task.id} task={task} />
          ))}
        </div>
      )}

</div>
      
      {hasTasks && <Footer />}
    </div>
  );
}

export default Info;


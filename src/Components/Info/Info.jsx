import { useContext } from "react";
import { taskContext } from "../Context/Context";
import Tarea from "../Tarea/Tarea";
import Footer from "../Footer/Footer";
import CrearTarea from "../CraerTarea/CrearTarea";
import { useLocation } from "react-router";

const Info = () => {
  
  const {tasks} = useContext(taskContext);
  const hasTasks = tasks.length > 0;3
  const location = useLocation();

  const filter = location.pathname.substring(1);

  const tareasFiltradas = tasks.filter(i =>{
    if ( filter === 'completed') return i.status === 'completed';
    if ( filter === 'pending') return i.status === 'pending';
    return true;
  });


  return (
    <div>
      <h1>My Day</h1>
      <p>All my tasks in one place</p>

      <CrearTarea />

      <div id="main" className="task-list">
        {hasTasks && (
          <div>
            {tareasFiltradas.map((task) => (
              <Tarea key={task.id} task={task} />
            ))}
          </div>
        )}
      </div>

      {hasTasks && <Footer />}
    </div>
  );
};

export default Info;

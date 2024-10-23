import { useContext } from "react";
import { taskContext } from "../Context/Context";
import { Link } from "react-router-dom";

const Footer = () => {
  const { tasks, setTasks } = useContext(taskContext);

  const tareasPendientes = tasks.filter(task => task.status === 'pending').length;
  const itemText = tareasPendientes === 1 ? 'item' : 'items';

  const handleEliminar = () => {
    setTasks(deleteTask => deleteTask.filter(tsk => tsk.status !== 'completed'));
  }

  return (
    <div>
      <footer id="footer">
        <span><strong>{tareasPendientes} {itemText} left</strong></span>
        <Link to="/all">
          <button>All</button>
        </Link>
        <Link to="/pending">
          <button>Pending</button>
        </Link>
        <Link to="/completed">
          <button>Completed</button>
        </Link>
        <button onClick={handleEliminar}>Clear completed</button>
      </footer>
    </div>
  );
};

export default Footer;

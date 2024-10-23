import { useContext } from "react";
import { taskContext } from "../Context/Context";

const Footer = () => {

  const { tasks } = useContext(taskContext);

  const tareasPendientes = tasks.filter(task => task.status === 'pending').length;

  const itemText = tareasPendientes === 1 ? 'item' : 'items';

  return (
    <div>
      <footer id="footer">
      <span><strong>{tareasPendientes} {itemText} left</strong></span>
        <button>All</button>
        <button>Pending</button>
        <button>Completed</button>
        <button>Clear completed</button>
      </footer>
    </div>
  );
};
export default Footer;
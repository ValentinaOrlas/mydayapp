import logicTarea from "./Hook/logicTarea";
import { taskContext } from "../Context/Context";
import { useContext , useState} from "react";

const Tarea = ({task}) => {

  const { title, handleTitleTask, handleCreateTask,} = logicTarea();
  const context = useContext(taskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [showDelete, setShowDelete] = useState(false);

  const handleToggleComplete = () => {
    const newStatus = task.status === 'pending' ? 'completed' : 'pending';
    context.updateTaskStatus(task.id, newStatus);
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    if (newTitle.trim()) {
      context.setTasks(prevTasks => 
        prevTasks.map(t => t.id === task.id ? { ...t, title: newTitle } : t)
      );
      setIsEditing(false);
    }
  };

  const handleDeleteTask = () => {
    context.setTasks(prevTasks => prevTasks.filter(t => t.id !== task.id));
  };

  return (
    <div 
      className="task-container"
      onMouseEnter={() => setShowDelete(true)} 
      onMouseLeave={() => setShowDelete(false)}
    >
      <input 
        type="checkbox" 
        checked={task.status === 'completed'} 
        onChange={handleToggleComplete} 
      />
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input 
            type="text" 
            value={newTitle} 
            onChange={(e) => setNewTitle(e.target.value)} 
            onBlur={() => setIsEditing(false)} 
            autoFocus 
          />
        </form>
      ) : (
        <label onDoubleClick={handleDoubleClick}>{task.title}</label>
      )}
      {showDelete && (
        <button className="destroy" onClick={handleDeleteTask}>Eliminar</button>
      )}
    </div>
  );
};

export default Tarea;
import logicTask from "./Hook/logicTask";
import { taskContext } from "../Context/Context";
import { useContext, useState, useEffect } from "react";

const Tarea = ({ task }) => {
  const context = useContext(taskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [showDelete, setShowDelete] = useState(false);

  // Función para manejar el cambio de estado de la tarea
  const handleToggleComplete = () => {
    const newStatus = task.status === 'pending' ? 'completed' : 'pending';
    context.updateTaskStatus(task.id, newStatus);
  };

  // Función para manejar el inicio de la edición
  const handleDoubleClick = () => {
    setIsEditing(true);
    setNewTitle(task.title); // Configura el título de la tarea para editar
  };

  // Función para manejar la edición de la tarea
  const handleEditSubmit = (event) => {
    event.preventDefault();
    if (newTitle.trim()) {
      context.setTasks(prevTasks =>
        prevTasks.map(t => t.id === task.id ? { ...t, title: newTitle.trim() } : t)
      );
      setIsEditing(false);
    }
  };

  // Función para manejar el borrado de la tarea
  const handleDeleteTask = () => {
    context.setTasks(prevTasks => prevTasks.filter(t => t.id !== task.id));
  };

  // Maneja el escape para salir de la edición
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setIsEditing(false);
      setNewTitle(task.title); 
    } else if (event.key === "Enter") {
      handleEditSubmit(event); 
    }
  };

  // Enfocar el input cuando se inicia la edición
  useEffect(() => {
    if (isEditing) {
      const input = document.getElementById(`input-${task.id}`);
      if (input) input.focus();
    }
  }, [isEditing, task.id]);

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
            id={`input-${task.id}`} 
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onKeyDown={handleKeyDown} 
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

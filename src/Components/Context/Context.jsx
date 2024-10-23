import { createContext, useState } from "react";

export const  taskContext = createContext();

export const TaskProvider = ({children}) =>{

    const [tasks, setTasks] = useState([]);
    const [pendingTasks, setPendingTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

     // Función para actualizar el estado de la tarea
  const updateTaskStatus = (taskId, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <taskContext.Provider
    value = {{tasks, setTasks, pendingTasks, setPendingTasks,completedTasks, setCompletedTasks , updateTaskStatus}}>
      {children}
    </taskContext.Provider>
  )

}
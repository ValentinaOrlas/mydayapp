import { createContext, useState, useEffect } from "react";

export const  taskContext = createContext();

export const TaskProvider = ({children}) =>{

  const [tasks, setTasks] = useState(() => {
  
    const guardarTareas = localStorage.getItem("mydayapp-reactjs");
    return guardarTareas ? JSON.parse(guardarTareas) : [];
  });

    const [pendingTasks, setPendingTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

useEffect(() => {
    
    localStorage.setItem("mydayapp-reactjs", JSON.stringify(tasks));
  }, [tasks]);

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
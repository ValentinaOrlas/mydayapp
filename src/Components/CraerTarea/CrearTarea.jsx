import { useContext, useState } from "react";
import { taskContext } from "../Context/Context";

const CrearTarea = () => {
  const context = useContext(taskContext);
  const [newTitle, setNewTitle] = useState('');

  const handleCreateTask = (event) => {
    event.preventDefault();
    if (newTitle.trim()) {
      const newTask = {
        id: Date.now(),
        title: newTitle,
        status: 'pending',
      };
      context.setTasks([...context.tasks, newTask]);
      setNewTitle(''); 
    }
  };

  return (
    <form onSubmit={handleCreateTask}>
      <input 
        type="text" 
        placeholder="Type new todo" 
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)} 
      />
    </form>
  );
};

export default CrearTarea;

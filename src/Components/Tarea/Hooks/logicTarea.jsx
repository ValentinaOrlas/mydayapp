import { useContext, useState } from "react";
import { taskContext } from '../../Context/Context';

const logicTask = () => {

  const context = useContext(taskContext);
  const [title, setTitle] = useState('');

  const handleTitleTask = (event) => setTitle(event.target.value);

  const handleCreateTask = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); 

      const vacioTitle = title.trim();
      

      if (vacioTitle === '') {

        return alert('Información incompleta');

      } else {

        const newTask = {
          id: Date.now(), 
          title: vacioTitle,
          status: 'pending',
        };

        
        context.setTasks([...context.tasks, newTask]);
        setTitle('');
      }
    }
  };

  return {
    title,
    handleTitleTask,
    handleCreateTask,
    setTitle,
  };
};

export default logicTask;

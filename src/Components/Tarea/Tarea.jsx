import logicTask from "./Hooks/logicTarea";

const Tarea = ({id, titleTask}) => {

  const { title, handleTitleTask, handleCreateTask,} = logicTask();


  return (
    <div>

      <input  value={title} onChange={handleTitleTask} autoFocus onKeyDown={handleCreateTask} type="text" placeholder="Type new todo" />

    </div>
  );
};

export default Tarea;
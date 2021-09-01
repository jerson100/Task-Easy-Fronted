import React from "react";
import TaskList from "../../../../components/common/TaskList";

const Tasks = ({ tasks, remove }) => {
  //aqui podemos pasar algunas configuraciones a la lista si es
  //que la queremos hacer un más compleja
  //ejemplo que en vez de grip se cambie la vista a Lista, etc.
  return <TaskList tasks={tasks} remove={remove} />;
};

export default Tasks;

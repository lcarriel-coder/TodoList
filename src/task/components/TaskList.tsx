import React from "react";
import { TaskListProps } from "../../interfaces";
import { Task } from ".";

export const TaskList: React.FC<TaskListProps> = ({
  listTask,
  setListTask,
}) => {
  const reversedList = listTask.slice().reverse();
  return (
    <>
      {reversedList?.map((task) => (
        <Task key={task?.taskId} data={task} setListTask={setListTask} />
      ))}
    </>
  );
};

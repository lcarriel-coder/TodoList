import { useState } from "react";
import { TaskItem } from "../interfaces";

const initialTasks: TaskItem[] = [
    {
      taskId: 1,
      detail: 'Hacer la compra',
      date: '2023-12-25',
      isComplete: false,
    },
    {
      taskId: 2,
      detail: 'Preparar presentación',
      date: '2023-12-27',
      isComplete: true,
    },
  ];

export const useTask = () => {
  const [listTask, setListTask] = useState<TaskItem[]>(initialTasks);

  return {
    listTask,
    setListTask,
  };
};

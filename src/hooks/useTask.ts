import { useState } from "react";
import { TaskItem } from "../interfaces";
import { useUtils } from ".";

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

  const { notification } = useUtils();

  const handleAddTask = (taskDetail:string,setTaskInput: React.Dispatch<React.SetStateAction<string>>) => {
    if (taskDetail.trim() !== '') {
      const newTask: TaskItem = {
        taskId: Math.floor(Math.random() * 1000), 
        detail: taskDetail,
        date: new Date().toISOString().slice(0, 10), 
        isComplete: false,
      };
  
      setListTask((prevList) => [...prevList, newTask]);
      setTaskInput('');
      notification('Tarea agregada exitosamente');
    }
  };

  


  

  return {
    listTask,
    setListTask,
    handleAddTask
  };
};

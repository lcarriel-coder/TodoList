export interface TaskItem {
    taskId:number;
    detail: string;
    date: string;
    isComplete: boolean;
  }

  export interface TaskAddProps {
    handleAddTask: (taskDetail: string, setTaskInput: React.Dispatch<React.SetStateAction<string>>) => void;
  }

  export interface TaskListProps {
    listTask: TaskItem[];
    setListTask: React.Dispatch<React.SetStateAction<TaskItem[]>>;
  }
  

  export interface TaskProps {
    data: TaskItem; 
    setListTask: React.Dispatch<React.SetStateAction<TaskItem[]>>; 
  }



  export interface UtilsProps {
    setListTask: React.Dispatch<React.SetStateAction<TaskItem[]>>;
  }

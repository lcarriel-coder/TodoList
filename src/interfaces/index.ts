export interface TaskItem {
    taskId:number;
    detail: string;
    date: string;
    isComplete: boolean;
  }

  export interface TaskAddProps {
    setListTask: React.Dispatch<React.SetStateAction<TaskItem[]>>;
  }

  export interface TaskListProps {
    listTask: TaskItem[];
    setListTask: React.Dispatch<React.SetStateAction<TaskItem[]>>;
  }
  

  export interface TaskProps {
    data: TaskItem; 
    setListTask: React.Dispatch<React.SetStateAction<TaskItem[]>>; 
  }



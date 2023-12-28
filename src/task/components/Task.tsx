import { Checkbox ,IconButton,Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { TaskProps } from "../../interfaces";
import { useUtils } from "../../hooks";

export const Task: React.FC<TaskProps> = ({ data, setListTask }) => {

    const { notification } = useUtils();

  const handleCompleteToggle = () => {
    
    setListTask((prevList) => {
      return prevList.map((task) => {
        if (task.taskId === data.taskId) {
          return {
            ...task,
            isComplete: !task.isComplete,
          };
        }
        return task;
      });
    });

    notification(`Se cambio el estado de la tarea exitosamente`);

  };
  

  const handleDelete = () => {
    setListTask((prevList) =>
      prevList.filter((task) => task.taskId !== data.taskId)
    );
    notification('Tarea eliminada exitosamente');
  };

  return (

    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <Typography
        variant="body1"
        style={{ textDecoration: data.isComplete ? 'line-through' : 'none', fontWeight: 'bold', }}
      >
        {data.detail}
      </Typography>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Checkbox
        checked={data.isComplete}
        onChange={handleCompleteToggle}
      />
     <IconButton
        color="error"
        onClick={handleDelete}
        aria-label="delete"
      >
        <DeleteIcon />
      </IconButton>
    </div>
  </div>


    
  );
};

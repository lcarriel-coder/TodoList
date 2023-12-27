
import { useState } from 'react';
import Button from '@mui/material/Button';
import { TaskAddProps, TaskItem } from '../../../interfaces';
import { TextField,InputAdornment,Grid} from '@mui/material';

export const TaskAdd: React.FC<TaskAddProps> = ({setListTask }) => {


  const [taskInput, setTaskInput] = useState<string>('');

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      const newTask: TaskItem = {
        taskId: Math.floor(Math.random() * 1000), 
        detail: taskInput,
        date: new Date().toISOString().slice(0, 10), 
        isComplete: false,
      };

      setListTask((prevList) => [...prevList, newTask]);
      setTaskInput('');
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInput(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  };


  return (
    <Grid mb={4}>
    <TextField 
      label="Nueva tarea"
      variant="outlined"
      value={taskInput}
      onChange={handleInputChange}
      fullWidth
      onKeyDown={handleKeyDown}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Button variant="contained" onClick={handleAddTask}>
              Agregar tarea
            </Button>
          </InputAdornment>
        ),
      }}
    />
    </Grid>
  )
}

import Button from "@mui/material/Button";
import { TaskAddProps } from "../../../interfaces";
import { TextField,  Grid } from "@mui/material";
import { useUtils } from "../../../hooks";

export const TaskAdd: React.FC<TaskAddProps> = ({ handleAddTask }) => {
  const { taskInput, setTaskInput, handleInputChange } = useUtils();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAddTask(taskInput, setTaskInput);
    }
  };

  return (
    <Grid container alignItems="flex-end"  mb={4}>
      <Grid item xs={12} sm={8}>
        <TextField 
          size="small"
          label="Nueva tarea"
          variant="outlined"
          value={taskInput}
          onChange={handleInputChange}
          fullWidth
          onKeyDown={handleKeyDown}
          sx={{
            height: '40px',
          }}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Button 
          variant="contained" 
          onClick={() => handleAddTask(taskInput, setTaskInput)}
          fullWidth
          sx={{
            height: '40px',
          }}
        >
          Agregar 
        </Button>
      </Grid>
    </Grid>
  );
};

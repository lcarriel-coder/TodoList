import { Typography } from "@mui/material";
import { useTask } from "../../hooks";
import { TaskList } from "../components";
import { TaskAdd } from "../components/header";
import Container from "@mui/material/Container";
export const TaskPage = () => {

  const { listTask, setListTask } = useTask();

  return (
    <Container style={{  maxWidth: "600px" }}>
      <Typography variant="h4" align="center" mt={5} mb={3}>Lista de tareas</Typography>
      <TaskAdd setListTask={setListTask} />
      <TaskList listTask={listTask} setListTask={setListTask} />
    </Container>
  );
};

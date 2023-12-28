import { TaskPage } from "./task/pages/TaskPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Task() {


  return (
    <>
      <TaskPage />
      <ToastContainer/>
    </>
  )
}

export default Task;

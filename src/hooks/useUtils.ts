import {  useState } from "react";
import { toast } from "react-toastify";

export const useUtils = () => {

  const [taskInput, setTaskInput] = useState<string>('');

const notification = (text:string) =>{
  toast(text, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
}


const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setTaskInput(event.target.value);
};


  return {
    notification,
    taskInput,
    setTaskInput,
    handleInputChange,
   
  };
};

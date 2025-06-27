import { createContext,useContext,react } from "react";
 
export const TodoContext=createContext({
    todos:[{
        id:1,
        task:"",
        completed:false,
    }],
    isCompleted:(id)=>{},
    addTask:(task)=>{},
    delTask:(id)=>{},
    updateTask:(id,task)=>{},
})

export const TodoProvider=TodoContext.Provider;

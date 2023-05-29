import React from "react";
import { render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TasksTable from "../TasksTable";

describe("Tasks Table Component",()=>{
    const tasks = [
        {id : 1 , title :"Taks1" , completed : true } ,
        {id : 2 , title :"Taks2" , completed : false } ,
        {id : 3 , title :"Taks3" , completed : true } ,
    ]
    test("renders the list of tasks correctly if isTaskVisible is true" , ()=>{
        const isTasksVisible = true 
        render(<TasksTable tasks={tasks}  isTasksVisible={isTasksVisible} />);
        const TasksElements = screen.getAllByTestId("todo")
        expect(TasksElements).toHaveLength(tasks.length)
    })

    test("the list will be empty of tasks if isTaskVisible is false" , ()=>{
        const isTasksVisible = false 
        render(<TasksTable tasks={tasks}  isTasksVisible={isTasksVisible} />);
        const TasksElements = screen.queryAllByTestId("todo")
        expect(TasksElements).toHaveLength(0)
    })

})
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from '../Footer'


describe("Footer Component",()=>{
    
    test("renders the correct number of tasks and numberof completed tasks" , () =>{
        const totalTasks = 10 
        const completedTasks = 3 

        render(<Footer totalTasks={totalTasks} completedTasks={completedTasks}/>); 
        
        const totalTasksElement = screen.getByText("Total Tasks : 10");
        expect(totalTasksElement).toBeInTheDocument();
    
        const completedTasksElement = screen.getByText("Completed Tasks : 3");
        expect(completedTasksElement).toBeInTheDocument();
    })

    test("renders zero tasks when there are no tasks" , () =>{
        const totalTasks = 0 
        const completedTasks = 0 

        render(<Footer totalTasks={totalTasks} completedTasks={completedTasks}/>); 
        
        const totalTasksElement = screen.getByText("Total Tasks : 0");
        expect(totalTasksElement).toBeInTheDocument();
    
        const completedTasksElement = screen.getByText("Completed Tasks : 0");
        expect(completedTasksElement).toBeInTheDocument();
    })

    test("renders zero in completedTasks Element when there are no completedTasks" , () =>{
        const totalTasks = 10 
        const completedTasks = 0 

        render(<Footer totalTasks={totalTasks} completedTasks={completedTasks}/>); 
        
        const totalTasksElement = screen.getByText("Total Tasks : 10");
        expect(totalTasksElement).toBeInTheDocument();
    
        const completedTasksElement = screen.getByText("Completed Tasks : 0");
        expect(completedTasksElement).toBeInTheDocument();
    })
})
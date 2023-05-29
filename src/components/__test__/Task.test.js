import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Task from "../Task";

describe("Task Component" , ()=>{
    const task = {id:1 , title :"Task1" , completed:true}
    const finishTaskMock = jest.fn();
    const deletTaskMock =jest.fn();
    test("renders all elements correctly",()=>{
        render(<Task task={task} finishTask={finishTaskMock} deletTask ={deletTaskMock}/>)
        const titleElement = screen.getByText(task.title)
        expect(titleElement).toBeInTheDocument()
        const deleteElement = screen.getByRole("button")
        expect(deleteElement).toBeInTheDocument()
        const checkBoxElement = screen.getByRole("checkbox")
        expect(checkBoxElement).toBeInTheDocument()
    })
    test("call finishTask function when you click on checkbox and the checkbox was checked",()=>{
        const task = {id:1 , title :"Task1" , completed:true}
        render(<Task task={task} finishTask={finishTaskMock} deletTask ={deletTaskMock}/>)
        const checkBoxElement = screen.getByRole("checkbox")
        fireEvent.click(checkBoxElement);
        expect(finishTaskMock).toHaveBeenCalledTimes(1);
        expect(finishTaskMock).toHaveBeenCalledWith(task.id);
        expect(checkBoxElement).not.toBeChecked()
    })
    test("call finishTask function when you click on checkbox and the checkbox was unchecked",()=>{
        const task = {id:1 , title :"Task1" , completed:false}
        render(<Task task={task} finishTask={finishTaskMock} deletTask ={deletTaskMock}/>)
        const checkBoxElement = screen.getByRole("checkbox")
        fireEvent.click(checkBoxElement);
        expect(finishTaskMock).toHaveBeenCalledTimes(2);
        expect(finishTaskMock).toHaveBeenCalledWith(task.id);
        expect(checkBoxElement).toBeChecked()
    })
    test("call deletTask function",()=>{
        const task = {id:1 , title :"Task1" , completed:false}
        render(<Task task={task} finishTask={finishTaskMock} deletTask ={deletTaskMock}/>)
        const deleteBoxElement = screen.queryByRole("button")
        fireEvent.click(deleteBoxElement);
        expect(deletTaskMock).toHaveBeenCalledTimes(1);
        expect(deletTaskMock).toHaveBeenCalledWith(task.id);
    })
})
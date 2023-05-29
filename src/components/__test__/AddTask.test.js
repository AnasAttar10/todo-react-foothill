import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AddTask from "../AddTask";

describe("Add Task Component" ,()=>{
    const addTaskMock = jest.fn()
    test("renders the elements correctly" ,()=>{
        render(<AddTask addTask={addTaskMock}/>)
        const inputElement =screen.getByRole("textbox")
        expect(inputElement).toBeInTheDocument()
        const addElement =screen.getByDisplayValue("ADD")
        expect(addElement).toBeInTheDocument()
    })

    test("should change input value when you write" ,()=>{
        render(<AddTask addTask={addTaskMock}/>)
        const inputElement =screen.getByRole("textbox")
        fireEvent.change(inputElement ,{target:{value:"portfolio"}})
        expect(inputElement).toHaveValue("portfolio")
    })

    test("input value will be empty when you click on Add btn" ,()=>{
        render(<AddTask addTask={addTaskMock}/>)
        const inputElement =screen.getByRole("textbox")
        const addElement =screen.getByDisplayValue("ADD")
        fireEvent.change(inputElement ,{target:{value:"portfolio"}})
        fireEvent.click(addElement)
        expect(inputElement).toHaveValue("")
    })
})
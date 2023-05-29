import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../../App";
import userEvent from "@testing-library/user-event";
describe("App Component" ,()=>{
            test("check when you enter task ,it should be in list of tasks then will increse the total tasks",async ()=>{
                render(<App />)
                const inputElement = screen.getByRole("textbox")
                expect(inputElement).toBeInTheDocument()
                const addBtn =screen.getByDisplayValue("ADD")
                expect(addBtn).toBeInTheDocument()
                fireEvent.change(inputElement , {target :{value : "Task1"}})
                fireEvent.click(addBtn)
                const taskDivElement = await screen.findByTestId("todo")
                expect(taskDivElement).toBeInTheDocument()
                expect(taskDivElement).toHaveTextContent("Task1")
                const totalTasksElement = screen.getByText("Total Tasks : 1");
                expect(totalTasksElement).toBeInTheDocument();
            })
            test("check if click on togglebtn it will hide the list",async ()=>{
                render(<App />)
                const toggleButton = screen.getByTestId("toggleswitch");
                expect(toggleButton).toBeInTheDocument()
                const listElement = await screen.findAllByTestId("todo")
                userEvent.click(toggleButton) 
                listElement.forEach((element,i) => {
                    expect(element).not.toBeInTheDocument()
                });
            })
            test("check if click on checkbox it will increse the number of completed Tasks",async ()=>{
                render(<App />)
                const listElement = await screen.findAllByTestId("todo")
                const checkboxElements = await screen.findAllByRole("checkbox") 
                expect(checkboxElements).toHaveLength(4)
                fireEvent.click(checkboxElements[1])
                const totalTasksElement = screen.getByText("Total Tasks : 3");
                expect(totalTasksElement).toBeInTheDocument();
                const completedTasksElement = screen.getByText("Completed Tasks : 2");
                expect(completedTasksElement).toBeInTheDocument(); 
            })
            test("renders the correct list when enter value in search Input",async ()=>{
                render(<App />)
                
                const searchInput = screen.getByPlaceholderText("Search by Task Text ...");
                await userEvent.type(searchInput , "Anas")
                const listElement = await screen.findAllByTestId("todo")
                expect(listElement).toHaveLength(1)
            })
            test("renders the correct list when enter value [ma => ahmad and omar tasks  just contains on (ma) ] in search Input",async ()=>{
                render(<App />)
                
                const searchInput = screen.getByPlaceholderText("Search by Task Text ...");
                await userEvent.type(searchInput , "ma")
                const listElement = await screen.findAllByTestId("todo")
                expect(listElement).toHaveLength(2)
            })
            test("check if render the List and fetching the data correctly, total of tasks correctly  ,then enter task by input field",async ()=>{
                render(<App />)
                const inputElement = screen.getByRole("textbox")
                expect(inputElement).toBeInTheDocument()
                const addBtn =screen.getByDisplayValue("ADD")
                expect(addBtn).toBeInTheDocument()
                const listElements = await screen.findAllByTestId("todo")
                listElements.forEach(element =>{
                    expect(element).toBeInTheDocument()
                })
                fireEvent.change(inputElement , {target :{value : "Task1"}})
                fireEvent.click(addBtn)
                expect(listElements).toHaveLength(3)
                const taskE = screen.getByText("Task1")
                expect(taskE).toBeInTheDocument()
                const totalTasksElement = screen.getByText("Total Tasks : 4");
                expect(totalTasksElement).toBeInTheDocument();

            })

})
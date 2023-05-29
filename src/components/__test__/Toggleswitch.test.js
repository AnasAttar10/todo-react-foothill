import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Toggleswitch from "../Toggleswitch";

describe("Toggleswitch Component",()=>{

    const setShowTasksMock = jest.fn();

    afterEach(cleanup);

    test("renders the toggle button correctly",()=>{
        render(
            <Toggleswitch isTasksVisible={true} showItems={setShowTasksMock} />
          );
        const toggleButton = screen.getByRole("checkbox");
        expect(toggleButton).toBeInTheDocument();  
    })

    test("calls the setShowTasks function with true  value when button is clicked (tasks are Shown )", () => {
        const setShowTasksMock = jest.fn();
        const isTasksVisible = true;
        render(
          <Toggleswitch
            isTasksVisible={isTasksVisible}
            showItems={setShowTasksMock}
          />
        );
        const toggleButton = screen.getByRole("checkbox");
    
        fireEvent.click(toggleButton);
        expect(setShowTasksMock).toHaveBeenCalledTimes(1);
      });

      it("calls the setShowTasks function with False value when button is clicked (tasks are Hidden )", () => {
        const setShowTasksMock1 = jest.fn();
        const isTasksVisible = false;
        render(
          <Toggleswitch
          isTasksVisible={isTasksVisible}
          showItems={setShowTasksMock1}
          />
        );
        const toggleButton = screen.getByRole("checkbox");
    
        fireEvent.click(toggleButton);
        expect(setShowTasksMock1).toHaveBeenCalledTimes(1);
      });

})
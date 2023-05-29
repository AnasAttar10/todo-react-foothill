import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Search from "../Search";

describe("Search component" , ()=>{
    const handleSearchInputMock = jest.fn();

    test("renders the search input correctly", () => {
        render(<Search handleSearchInput={handleSearchInputMock} />);
        const searchInput = screen.getByPlaceholderText("Search by Task Text ...");
        expect(searchInput).toBeInTheDocument();
    });

    it("check if the state changed correctly", async() => {
        render(<Search handleSearchInput={handleSearchInputMock} />);

        const searchInput = screen.getByPlaceholderText("Search by Task Text ...");
    
        fireEvent.change(searchInput, { target: { value: "Task 1" } });
        expect(handleSearchInputMock).toBeCalledWith("task 1")
        expect(searchInput).toHaveValue("task 1");

      });

      
})
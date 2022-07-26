import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";


describe("main functionality tests", () => {
    test("renders learn react link", () => {
        render(<App />);
        const linkElement = screen.getByText(/todos/i);
        expect(linkElement).toBeInTheDocument();
    });
    test("New task should be added", () => {
        render(<App />);

        userEvent.type(screen.getByRole("textbox"), "Task");

        // userEvent.keyboard[]
    });
});

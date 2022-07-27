import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";


describe("main functionality tests", () => {
    test("renders learn react link", () => {
        render(<App />);
        const linkElement = screen.getByText(/todos/i);
        expect(linkElement).toBeInTheDocument();
    });
});

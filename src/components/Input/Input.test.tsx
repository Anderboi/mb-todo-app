import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from "./Input";
import userEvent from "@testing-library/user-event";

describe("Input block functions tests", () => {
    test("New task should be added", async () => {
        const handleSubmit = jest.fn();
        render(<Input handleSubmit={() => jest.fn()} />);

        const input = screen.getByTestId("input");
        const form = screen.getByTestId("form");

        expect(input).toBeInTheDocument();

        // userEvent.type(input,'Test{enter}');
        fireEvent.change(input, { target: { value: "Test" } });
        expect(input).toHaveValue("Test");
        // userEvent.type("key", "enter");
        fireEvent.keyDown(form, {
            key: "Enter",
            code: "Enter",
            charCode: 13,
        });
        expect(handleSubmit).toHaveBeenCalled();
        // expect(input).toHaveValue("");
        // expect(screen.getByText(/Text/i)).toBeInTheDocument();
    });
});

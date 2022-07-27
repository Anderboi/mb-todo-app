import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from "./Input";
import { IInput } from './Input.props';



const setup = () => {
    // const handleSubmit = jest.fn();
    const utils = render(<Input handleSubmit={() => jest.fn()} value="" />);
    const input = screen.getByTestId("input");
    const form = screen.getByTestId("form");
    return {
        input,
        form,
        ...utils,
    };
};

describe("Input block functions tests", () => {
    
    test("New task should be added", () => {
        render(<Input handleSubmit={() => jest.fn()} value=''/>);
    const input = screen.getByTestId("input");
    const form = screen.getByTestId("form");

        // const { input } = setup();
        // const { form } = setup();

        expect(input).toBeInTheDocument();
        expect(form).toBeInTheDocument();

        fireEvent.change(input, { target: { value: "Test" } });
        expect(input.nodeValue).toBe("Test");
        fireEvent.keyDown(form, {
            key: "Enter",
            code: "Enter",
            charCode: 13,
        });
        // expect(handleSubmit).toHaveBeenCalled();
        // expect(input).toHaveValue("");
        // expect(screen.getByText(/Text/i)).toBeInTheDocument();
    });
});

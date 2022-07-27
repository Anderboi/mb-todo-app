import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from "./Input";
import { IInput } from "./Input.props";
import userEvent from "@testing-library/user-event";



const onChange = jest.fn();
const onSubmit = jest.fn();

describe("Input block functions tests", () => {
    // test("New task should be added", () => {
    //     render(<Input handleSubmit={onSubmit} value="" onChange={onChange} />);
    //     const input = screen.getByTestId(/input/i);
    //     const form = screen.getByTestId(/form/i);

    //     expect(input).toBeInTheDocument();
    //     expect(form).toBeInTheDocument();

    //     fireEvent.change(input, { target: { value: "Test" } });
    //     expect(screen.getByText(/test/i)).toBeInTheDocument();
    //     fireEvent.keyDown(form, {
    //         key: "Enter",
    //         code: "Enter",
    //         charCode: 13,
    //     });

    // });
    test("custom placeholder added", () => {
        render(
            <Input
                handleSubmit={onSubmit}
                onChange={onChange}
                placeholder="Custom"
            />
        );
        expect(screen.getByPlaceholderText(/custom/i)).toBeInTheDocument();
    });
    test("onChange event works", () => {
        render(<Input handleSubmit={onSubmit} value="" onChange={onChange} />);
        userEvent.type(screen.getByRole("textbox"), "Test");
        expect(onChange).toHaveBeenCalledTimes(4);
    });
});

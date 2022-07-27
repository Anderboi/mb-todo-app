import React from "react";
import { render, screen } from "@testing-library/react";
import { Input } from "./Input";
import userEvent from "@testing-library/user-event";

const onChange = jest.fn();
const onSubmit = jest.fn();

describe("Input block functions tests", () => {
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

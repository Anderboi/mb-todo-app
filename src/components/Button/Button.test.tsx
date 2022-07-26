import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import userEvent from "@testing-library/user-event";

describe("Task block functions tests", () => {
    test("renders a task name", () => {
        const onClick = jest.fn();
        render(<Button onClick={onClick}>Button</Button>);

        const button = screen.getByTestId("button");
        expect(button).toBeInTheDocument();

        userEvent.click(button);
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});

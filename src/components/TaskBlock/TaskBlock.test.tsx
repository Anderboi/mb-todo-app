import React from "react";
import { render, screen } from "@testing-library/react";
import { TaskBlock } from "./TaskBlock";
import userEvent from "@testing-library/user-event";

const onClick = jest.fn();
describe("Task block functions tests", () => {
    test("renders a task name", () => {
        render(
            <TaskBlock
                toggle={onClick}
                taskName="Test task"
                taskId={12}
                isDone={false}
            />
        );

        const divElement = screen.getByTestId("taskBlock");
        expect(divElement).toHaveTextContent("Test task");
    });
    test("onClick event is working", () => {
        render(
            <TaskBlock
                toggle={onClick}
                taskName="Test task"
                taskId={12}
                isDone={false}
            />
        );
        userEvent.click(screen.getByTestId("input"));
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    test("Checkbox have checked state", () => {
        render(
            <TaskBlock
                toggle={onClick}
                taskName="Test task"
                taskId={12}
                isDone={true}
            />
        );

        expect(screen.getByText(/Test task/i)).toHaveClass("checked");
    });
});

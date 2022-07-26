import React from "react";
import { render, screen } from "@testing-library/react";
import { TaskBlock } from "./TaskBlock";
import userEvent from "@testing-library/user-event";

describe("Task block functions tests", () => {
    test("renders a task name", () => {
        const onClick = jest.fn();
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

        userEvent.click(screen.getByTestId("input"));
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});

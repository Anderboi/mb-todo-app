import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { ITask } from "./components/TaskBlock/TaskBlock.props";

const taskList: Array<ITask> = [
    { taskName: "First", isDone: false, taskId: 1 },
    { taskName: "Second", isDone: false, taskId: 2 },
    { taskName: "Third", isDone: true, taskId: 3 },
    { taskName: "Fourth", isDone: false, taskId: 4 },
];

describe("main functionality tests", () => {
    test("renders learn react link", () => {
        render(<App />);
        const linkElement = screen.getByText(/todos/i);
        expect(linkElement).toBeInTheDocument();
    });
});

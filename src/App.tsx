import { ChangeEvent, FC, useState } from "react";
import "./App.css";
import { TaskBlock } from "./components";
import { ITask } from "./components/TaskBlock/TaskBlock.props";

const App: FC = (): JSX.Element => {
    const [task, setTask] = useState<string>("");
    const [todoList, setTodoList] = useState<Array<ITask>>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setTask(event.target.value);
    };
    const addTask = (event: ChangeEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (task.length === 0) {
            return;
        }
        const newTask = {
            taskName: task,
            isDone: false,
            taskId: Math.floor(Math.random() * 1000),
        };
        setTodoList([...todoList, newTask]);
        setTask("");
    };

    const toggleTaskComplete = (id: number): void => {
        setTodoList(
            todoList.map((todo) => {
                if (todo.taskId !== id) return todo;

                return {
                    ...todo,
                    isDone: !todo.isDone,
                };
            })
        );
    };

    const todoListElements = todoList.map((task: ITask, key: number) => {
        return (
            <TaskBlock
                key={key}
                isDone={task.isDone}
                taskId={task.taskId}
                taskName={task.taskName}
                toggle={toggleTaskComplete}
            />
        );
    });

    return (
        <div className="App">
            <h1 className="header">todos</h1>
            <div className="todoList">
                <form action="todo" onSubmit={addTask}>
                    <input
                        type="text"
                        name="todo"
                        id="todo"
                        className="todoList__input"
                        placeholder="What needs to be done?"
                        onChange={handleChange}
                        value={task}
                    />
                </form>

                {todoListElements}
                <div className="footer">
                    <span>{`${todoList.length} items left`}</span>
                    <div className="filterBlock">
                        <button className="button">All</button>
                        <button className="button">Active</button>
                        <button className="button">Completed</button>
                    </div>
                    <button className="button">Clear completed</button>
                </div>
            </div>
        </div>
    );
};

export default App;

import { ChangeEvent, FC, useEffect, useState } from "react";
import "./App.css";
import { TaskBlock } from "./components";
import { ITask } from "./components/TaskBlock/TaskBlock.props";

const App: FC = (): JSX.Element => {
    const [task, setTask] = useState<string>("");
    const [todoList, setTodoList] = useState<Array<ITask>>([]);
    const [filteredList, setFilteredList] = useState<Array<ITask>>(todoList);

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

    const filterTodoList = (status: "all" | "undone" | "done") => {
        switch (status) {
            case "all":
                setFilteredList(todoList);
                break;
            case "done":
                let newFilteredList = [...todoList].filter(
                    (item) => item.isDone
                );
                setFilteredList(newFilteredList);
                break;
            case "undone":
                let newFilteredListFalse = [...todoList].filter(
                    (item) => item.isDone === false
                );
                setFilteredList(newFilteredListFalse);
                break;
            default:
                break;
        }
    };

    const clearCompletedList = () => {
        let clearedList = todoList.filter(
            (task: ITask) => task.isDone === false
        );
        setTodoList(clearedList);
    };

    useEffect(() => {
        setFilteredList(todoList);
    }, [todoList]);

    const todoListElements = filteredList.map((task: ITask, key: number) => {
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
                        autoFocus
                    />
                </form>

                {todoListElements}
                <div className="footer">
                    <span>{`${todoList.length} items left`}</span>
                    <div className="filterBlock">
                        <button
                            className="button"
                            onClick={() => filterTodoList("all")}
                        >
                            All
                        </button>
                        <button
                            className="button"
                            onClick={() => filterTodoList("undone")}
                        >
                            Active
                        </button>
                        <button
                            className="button"
                            onClick={() => filterTodoList("done")}
                        >
                            Completed
                        </button>
                    </div>
                    <button className="button" onClick={clearCompletedList}>
                        Clear completed
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;

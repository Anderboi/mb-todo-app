import { ChangeEvent, FC, useEffect, useState } from "react";
import style from "./App.module.css";
import { Button, Input, TaskBlock } from "./components";
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
        <div className={style.App}>
            <h1 className={style.header}>todos</h1>
            <div className={style.todoList}>
                <Input
                    onChange={handleChange}
                    // handleOnChange={handleChange}
                    handleSubmit={addTask}
                    placeholder="What needs to be done?"
                    value={task}
                />
                {todoListElements}
                <div className={style.footer}>
                    <span>{`${todoList.length} items left`}</span>
                    <div className={style.filterBlock}>
                        <Button onClick={() => filterTodoList("all")}>
                            All
                        </Button>
                        <Button onClick={() => filterTodoList("undone")}>
                            Active
                        </Button>
                        <Button onClick={() => filterTodoList("done")}>
                            Completed
                        </Button>
                    </div>
                    <Button onClick={clearCompletedList}>
                        Clear completed
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default App;

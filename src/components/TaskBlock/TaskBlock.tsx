import React from "react";
import { Checkbox } from "../Checkbox/Checkbox";
import style from "./TaskBlock.module.css";
import { ITask } from "./TaskBlock.props";

export const TaskBlock = ({
    taskName,
    isDone,
    toggle,
    taskId,
    ...props
}: ITask): JSX.Element => {
    return (
        <div className={style.block} {...props}>
            {/* <Checkbox isChecked={isDone} /> */}
            <input
                type="checkbox"
                name="task"
                id="task"
                checked={isDone}
                onChange={() => toggle!(taskId)}
            />
            <span className={style.text}>{taskName}</span>
        </div>
    );
};

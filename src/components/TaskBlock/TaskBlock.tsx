import React from "react";
import style from "./TaskBlock.module.css";
import { ITask } from "./TaskBlock.props";
import cn from "classnames";

export const TaskBlock = ({
    taskName,
    isDone,
    toggle,
    taskId,
    ...props
}: ITask): JSX.Element => {
    return (
        <div className={style.block} {...props} role='taskBlock'>
            <input
                type="checkbox"
                className={style.checkbox}
                checked={isDone}
                onChange={() => toggle!(taskId)}
                data-testId='input'
                />
            <span
                role='checker'
                className={cn(style.text, {
                    [style.checked]: isDone,
                })}
            >
                {taskName}
            </span>
        </div>
    );
};

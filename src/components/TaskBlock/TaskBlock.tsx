import React from "react";
import style from "./TaskBlock.module.css";
import { ITask } from "./TaskBlock.props";
import cn from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const TaskBlock = ({
    taskName,
    isDone,
    toggle,
    taskId,
    ...props
}: ITask): JSX.Element => {
    return (
        <div className={style.block} {...props}>
            <input
                type="checkbox"
                className={style.checkbox}
                // name="task"
                // id="task"
                checked={isDone}
                onChange={() => toggle!(taskId)}
            />
            <span
                className={cn(style.text, {
                    [style.checked]: isDone,
                })}
            >
                {taskName}
            </span>
        </div>
    );
};

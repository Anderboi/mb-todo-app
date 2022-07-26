import React from "react";
import style from "./Input.module.css";
import { IInput } from "./Input.props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";



export const Input = ({
    handleSubmit,
    placeholder,
    // value,
    ...props
}: IInput) => {
    return (
        <form action="todo" onSubmit={handleSubmit} data-testid='form'>
            <FontAwesomeIcon icon={faAngleDown} className={style.icon} />
            <input
                type="text"
                className={style.input}
                placeholder={placeholder}
                {...props}
                // value={value}
                autoFocus
                data-testid="input"
            />
        </form>
    );
};
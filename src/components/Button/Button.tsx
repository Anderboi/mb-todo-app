import React from "react";
import style from "./Button.module.css";
import { IButton } from "./Button.props";

export const Button = ({ children, ...props }: IButton) => {
    return (
        <button className={style.button} {...props}  data-testid='button'>
            {children}
        </button>
    );
};

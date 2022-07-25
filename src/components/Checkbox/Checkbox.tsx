import { useState } from "react";
import style from "./Checkbox.module.css";
import ICheckbox from "./Checkbox.props";
import cn from "classnames";

export const Checkbox = ({
    isChecked = false,
    ...props
}: ICheckbox): JSX.Element => {
    const [isDone, setIsDone] = useState<boolean>(false);

    return (
        <>
            <div
            //  className={style.round}
            >
                <input
                    type="checkbox"
                    checked={isDone}
                    onChange={() => setIsDone(!isDone)}
                    id="checkbox"
                    {...props}
                />
                <label htmlFor="checkbox"></label>
            </div>
        </>
    );
};

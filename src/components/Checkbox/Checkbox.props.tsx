import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface ICheckbox
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    isChecked?: boolean;
}

export default ICheckbox;

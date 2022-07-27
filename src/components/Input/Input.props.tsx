import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface IInput
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    handleSubmit: (event: ChangeEvent<HTMLFormElement>) => void;
    placeholder?: string;
    value: string;
}

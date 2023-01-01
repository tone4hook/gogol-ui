import * as React from "react";
import styles from "./Input.Styles";

type TInputType =
    | "email"
    | "hidden"
    | "number"
    | "password"
    | "search"
    | "tel"
    | "text"
    | "url";

export interface InputProps {
    id?: string;
    value?: string;
    placeholder?: string;
    pattern?: string;
    type?: TInputType;
    autoFocus?: boolean;
    autoComplete?: "on" | "off";
    required?: boolean;
    disabled?: boolean;
    name?: string;
    hasError?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = (props) => {
    const {
        id,
        value,
        placeholder,
        pattern,
        type,
        autoFocus,
        autoComplete,
        required,
        disabled,
        name,
        onChange,
        onKeyDown,
    } = props;

    return (
        <input
            id={id}
            type={type}
            aria-label={type}
            aria-required="true"
            placeholder={placeholder}
            pattern={pattern}
            value={value}
            name={name}
            autoFocus={autoFocus}
            autoComplete={autoComplete}
            required={required}
            disabled={disabled ? true : false}
            css={styles(props)}
            onChange={onChange}
            onKeyDown={onKeyDown ? onKeyDown : () => {}}
        />
    );
};

export default Input;

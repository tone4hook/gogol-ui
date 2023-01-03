import * as React from "react";
import type { EmotionJSX } from "@emotion/react/types/jsx-namespace";
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
    autoComplete?: "on" | "off";
    required?: boolean;
    disabled?: boolean;
    name?: string;
    hasError?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = (props): EmotionJSX.Element => {
    const {
        id,
        value,
        placeholder,
        pattern,
        type,
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
            aria-required={required}
            placeholder={placeholder}
            pattern={pattern}
            value={value}
            name={name}
            autoComplete={autoComplete}
            required={required}
            disabled={!!disabled}
            css={styles()}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    );
};

export default Input;

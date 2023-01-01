import * as React from "react";
import { TThemeColors } from "../../styles/theme/colors";
import styles from "./Button.Styles";

export interface ButtonProps {
    children?: React.ReactNode;
    id?: string;
    text: string;
    color: TThemeColors;
    outline?: boolean;
    large?: boolean;
    small?: boolean;
    block?: boolean;
    tabIndex?: number;
    name?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    autofocus?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = (props) => {
    const {
        id,
        children,
        text,
        tabIndex,
        name,
        type,
        disabled,
        autofocus,
        onClick,
    } = props;
    return (
        <button
            id={id}
            tabIndex={tabIndex ? tabIndex : 0}
            name={name}
            aria-label={name ? name : text}
            type={type ? type : "button"}
            disabled={disabled ? true : false}
            autoFocus={autofocus ? true : false}
            css={styles(props)}
            onClick={onClick}
        >
            {text}
            {children}
        </button>
    );
};

export default Button;

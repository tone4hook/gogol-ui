import * as React from "react";
import styles from "./Column.Styles";

export type TBreakPointValues =
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12;

export interface ColumnProps {
    xs?: TBreakPointValues | "auto";
    sm?: TBreakPointValues | "auto";
    md?: TBreakPointValues | "auto";
    lg?: TBreakPointValues | "auto";
    xl?: TBreakPointValues | "auto";
    xxl?: TBreakPointValues | "auto";
    children?: React.ReactNode;
}

const Container: React.FC<ColumnProps> = (props) => {
    const { children } = props;
    return <div css={styles(props)}>{children}</div>;
};

export default Container;

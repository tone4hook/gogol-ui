import * as React from "react";
import styles from "./Row.Styles";

export interface RowProps {
    children?: React.ReactNode;
}

const Row: React.FC<RowProps> = (props) => {
    const { children } = props;
    return <div css={styles}>{children}</div>;
};

export default Row;

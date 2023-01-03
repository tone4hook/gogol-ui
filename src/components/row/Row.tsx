import * as React from "react";
import type { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import styles from "./Row.Styles";

export interface RowProps {
    children?: React.ReactNode;
}

const Row: React.FC<RowProps> = (props): EmotionJSX.Element => {
    const { children } = props;
    return <div css={styles}>{children}</div>;
};

export default Row;

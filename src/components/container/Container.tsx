import * as React from "react";
import type { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import styles from "./Container.Styles";

export interface ContainerProps {
    fluid?: boolean;
    children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = (props): EmotionJSX.Element => {
    const { fluid, children } = props;
    return <div css={fluid ? styles.fluid : styles.container}>{children}</div>;
};

export default Container;

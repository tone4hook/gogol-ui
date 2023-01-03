import * as React from "react";
import type { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import { Global, css } from "@emotion/react";
import styles from "./Wrapper.Styles";

interface IWrapperProps {
    children?: React.ReactNode;
}

const Wrapper: React.FC<IWrapperProps> = (props): EmotionJSX.Element => {
    const { children } = props;

    return (
        <>
            <Global styles={css(styles)} />
            {children}
        </>
    );
};

export default Wrapper;

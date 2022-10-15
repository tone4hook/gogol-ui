/* eslint-disable import/no-extraneous-dependencies */
import * as React from "react";
import { Global, css } from "@emotion/react";
import styles from "./Wrapper.Styles";

interface IWrapperProps {
    children?: React.ReactNode;
}

const Wrapper: React.FC<IWrapperProps> = (props) => {
    const { children } = props;

    return (
        <>
            <Global styles={css(styles)} />
            {children}
        </>
    );
};

export default Wrapper;

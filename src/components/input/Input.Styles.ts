import { css, SerializedStyles } from "@emotion/react";
import prefix from "../../styles/base/prefix";

const styles = (): SerializedStyles => css`
    position: relative;
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: var(--${prefix}input-color);
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid var(--${prefix}input-border-color);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.375rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:focus {
        color: var(--${prefix}input-color);
        background-color: #fff;
        border-color: var(--${prefix}primary);
        outline: 0;
        box-shadow: 0 0 0 0.25rem var(--${prefix}input-outline-color);
    }
    &::-moz-placeholder {
        color: var(--${prefix}gray-600);
        opacity: 1;
    }
    &::placeholder {
        color: var(--${prefix}gray-600);
        opacity: 1;
    }
    &:disabled {
        background-color: var(--${prefix}gray-200);
        opacity: 1;
    }
`;

export default styles;

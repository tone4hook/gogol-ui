/* eslint-disable import/no-extraneous-dependencies */
import { css } from "@emotion/react";
import prefix from "../../styles/base/prefix";
import { ButtonProps } from "./Button";

const styles = (props: ButtonProps) => {
    const { color, outline, large, small, block } = props;
    return css`
        display: inline-block;
        ${block ? `width: 100%;` : ""}
        padding: 0.5rem 1.5rem;
        ${large ? `padding: 0.75rem 1.75rem;` : ""}
        ${small ? `padding: 0.5rem 1.25rem;` : ""}
        ${block ? `padding: 0.75rem 1.75rem;` : ""}
        font-family: var(--${prefix}body-font-family);
        font-size: 1rem;
        ${large ? `font-size: 1.25rem;` : ""}
        ${small ? `font-size: 0.75rem;` : ""}
        ${block ? `font-size: 1.25rem;` : ""}
        font-weight: 400;
        line-height: 1.5;
        color: var(--${prefix}${color}-btn-text);
        ${outline === true ? `color: var(--${prefix}${color});` : ""}
        text-align: center;
        text-decoration: none;
        vertical-align: middle;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
        border: 1px solid var(--${prefix}${color});
        border-radius: var(--${prefix}border-radius-pill);
        background-color: var(--${prefix}${color});
        ${outline === true ? "background-color: transparent;" : ""}
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
            border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        &:hover {
            background-color: var(--${prefix}${color}-dark);
            border-color: var(--${prefix}${color}-dark);
            color: var(--${prefix}${color}-btn-text);
        }
        &:focus {
            outline: 4px solid var(--${prefix}${color}-light);
            color: var(--${prefix}${color}-btn-text);
            ${outline === true ? `color: var(--${prefix}${color});` : ""}
        }
        &:active {
            outline: 4px solid var(--${prefix}${color}-light);
            background-color: var(--${prefix}${color}-dark);
            color: var(--${prefix}${color}-btn-text);
        }
    `;
};

export default styles;

/* eslint-disable import/no-extraneous-dependencies */
import { css } from "@emotion/react";
import { mq } from "../../styles/utils/mediaQueries";
import { spacing } from "../../styles/theme/units";
import { ColumnProps } from "./Column";

export const colBreakPointStyles = [
    `flex: 0 0 auto; width: auto;`,
    `flex: 0 0 auto; width: 8.33333333%;`,
    `flex: 0 0 auto; width: 16.6666666667%;`,
    `flex: 0 0 auto; width: 25%;`,
    `flex: 0 0 auto; width: 33.33333333%;`,
    `flex: 0 0 auto; width: 41.66666667%;`,
    `flex: 0 0 auto; width: 50%;`,
    `flex: 0 0 auto; width: 58.33333333%;`,
    `flex: 0 0 auto; width: 66.66666667%;`,
    `flex: 0 0 auto; width: 75%;`,
    `flex: 0 0 auto; width: 83.33333333%;`,
    `flex: 0 0 auto; width: 91.66666667%;`,
    `flex: 0 0 auto; width: 100%;`,
];

const styles = (props: ColumnProps) => css`
    box-sizing: border-box;
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    margin-top: 0;
    padding-right: ${spacing.small};
    padding-left: ${spacing.small};
    ${props.xs === "auto" && colBreakPointStyles[0]}
    ${typeof props.xs === "number" && colBreakPointStyles[props.xs]}
    ${props.sm &&
    `${mq("sm")} {
        ${props.sm === "auto" && colBreakPointStyles[0]}
        ${typeof props.sm === "number" && colBreakPointStyles[props.sm]}
    }`}
    ${props.md &&
    `${mq("md")} {
        ${props.md === "auto" && colBreakPointStyles[0]}
        ${typeof props.md === "number" && colBreakPointStyles[props.md]}
    }`}
    ${props.lg &&
    `${mq("lg")} {
        ${props.lg === "auto" && colBreakPointStyles[0]}
        ${typeof props.lg === "number" && colBreakPointStyles[props.lg]}
    }`}
    ${props.xl &&
    `${mq("xl")} {
        ${props.xl === "auto" && colBreakPointStyles[0]}
        ${typeof props.xl === "number" && colBreakPointStyles[props.xl]}
    }`}
    ${props.xxl &&
    `${mq("xxl")} {
        ${props.xxl === "auto" && colBreakPointStyles[0]}
        ${typeof props.xxl === "number" && colBreakPointStyles[props.xxl]}
    }`}
`;

export default styles;

import { css } from "@emotion/react";
import { spacing } from "../../styles/theme/units";

const styles = css`
    display: flex;
    flex-wrap: wrap;
    margin-top: 0;
    margin-right: -${spacing.small};
    margin-left: -${spacing.small};
    & > * {
        box-sizing: border-box;
        flex-shrink: 0;
        width: 100%;
        max-width: 100%;
        padding-right: ${spacing.small};
        padding-left: ${spacing.small};
        margin-top: 0;
    }
`;

export default styles;

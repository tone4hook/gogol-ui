import { createStyles } from "../../styles/utils/createStyles";
import { spacing } from "../../styles/theme/units";
import { mq } from "../../styles/utils/mediaQueries";

const styles = createStyles({
    container: {
        margin: "0px auto",
        padding: `0px ${spacing.small}`,
        [mq("sm")]: {
            maxWidth: "540px",
        },
        [mq("md")]: {
            maxWidth: "720px",
        },
        [mq("lg")]: {
            maxWidth: "960px",
        },
        [mq("xl")]: {
            maxWidth: "1140px",
        },
        [mq("xxl")]: {
            maxWidth: "1320px",
        },
    },
    fluid: {
        padding: `0px ${spacing.small}`,
    },
});

export default styles;

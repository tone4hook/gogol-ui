import { createStyles } from "../../styles/utils/createStyles";

export const styles = createStyles({
    container: {
        padding: "2em",
        dark: {
            borderColor: "white",
            backgroundColor: "black",
        },
        light: {
            borderColor: "black",
            backgroundColor: "white",
        },
    },
    text: {
        fontSize: "1.5em",
        dark: {
            color: "white",
        },
        light: {
            color: "black",
        },
    },
});

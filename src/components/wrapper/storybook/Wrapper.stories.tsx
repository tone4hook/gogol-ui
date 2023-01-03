import React from "react";
import { Story } from "@storybook/react";
import Wrapper from "../../wrapper/Wrapper";

export default {
    title: "Components/Root/Wrapper",
    component: Wrapper,
    parameters: {
        docs: {
            description: {
                component:
                    "**Note:** `theme` is a global _Storybook_ `arg` for demo purposes and NOT a component prop.",
            },
        },
    },
};

const Template: Story = (args) => {
    React.useEffect(() => {
        if (args.theme === "dark") {
            document.documentElement.setAttribute("data-theme", "dark");
        } else document.documentElement.setAttribute("data-theme", "light");
    }, [args.theme]);

    return (
        <Wrapper>
            <h1>I am a Wrapper!</h1>
            <p>
                Use me at the <code>top level</code> of your app or part of the
                app where you plan on using <code>Gogol UI</code> components.
            </p>
            <p>
                Think of me as a <code>global wrapper</code> that has some{" "}
                <code>root</code> and <code>reset</code> styles required for the
                components to look as intended.
            </p>
        </Wrapper>
    );
};

export const Default = Template.bind({});

Default.args = {};

Default.argTypes = {
    fluid: {
        options: [true, false],
        control: { type: "inline-radio" },
    },
};

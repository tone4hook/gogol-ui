import React from "react";
import { Story } from "@storybook/react";
import Wrapper from "../../wrapper/Wrapper";
import Example from "../Example";

export default {
    title: "Example",
    component: Example,
};

const Template: Story = (args) => {
    React.useEffect(() => {
        if (args.theme === "dark") {
            document.documentElement.setAttribute("data-theme", "dark");
        } else document.documentElement.setAttribute("data-theme", "light");
    }, [args.theme]);

    return (
        <Wrapper>
            <Example />
        </Wrapper>
    );
};

export const ExampleComponent = Template.bind({});

ExampleComponent.args = {
    theme: "light",
};

ExampleComponent.argTypes = {
    theme: {
        options: ["light", "dark"],
        control: { type: "inline-radio" },
    },
};

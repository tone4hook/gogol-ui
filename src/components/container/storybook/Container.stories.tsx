import React from "react";
import { Story } from "@storybook/react";
import Wrapper from "../../wrapper/Wrapper";
import Container from "../Container";

export default {
    title: "Components/Grid/Container",
    component: Container,
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
            <Container {...args}>
                <h1>I am a Container</h1>
                <p>I can be default or fluid.</p>
            </Container>
        </Wrapper>
    );
};

export const Default = Template.bind({});

Default.args = {
    fluid: false,
};

Default.argTypes = {
    fluid: {
        options: [true, false],
        control: { type: "inline-radio" },
    },
};

export const Fluid = Template.bind({});

Fluid.args = {
    fluid: true,
};

Fluid.argTypes = {
    fluid: {
        options: [true, false],
        control: { type: "inline-radio" },
    },
};

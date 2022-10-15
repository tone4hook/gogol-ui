import React from "react";
import { Story } from "@storybook/react";
import Wrapper from "../../wrapper/Wrapper";
import Container, { ContainerProps } from "../Container";

export default {
    title: "Components/Grid/Container",
    component: Container,
};

const Template: Story<ContainerProps> = (args) => {
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

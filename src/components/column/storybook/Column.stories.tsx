import React from "react";
import { Story } from "@storybook/react";
import Wrapper from "../../wrapper/Wrapper";
import Column, { ColumnProps } from "../Column";
import Container from "../Column";
import Row from "../../row/Row";

const colControl = {
    options: ["auto", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    control: { type: "select" },
};

export default {
    title: "Components/Grid/Column",
    component: Column,
};

const Template: Story<ColumnProps> = (args) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <Column {...args}>
                        <h1>I am a Column</h1>
                        {Object.keys(args).map((key, index) => {
                            if (key === "children") {
                                return null;
                            } else
                                return (
                                    <p key={index}>
                                        Prop {key}: {args[key]}
                                    </p>
                                );
                        })}
                    </Column>
                    <Column {...args}>
                        <h1>I am a Column</h1>
                        {Object.keys(args).map((key, index) => {
                            if (key === "children") {
                                return null;
                            } else
                                return (
                                    <p key={index}>
                                        Prop {key}: {args[key]}
                                    </p>
                                );
                        })}
                    </Column>
                    <Column {...args}>
                        <h1>I am a Column</h1>
                        {Object.keys(args).map((key, index) => {
                            if (key === "children") {
                                return null;
                            } else
                                return (
                                    <p key={index}>
                                        Prop {key}: {args[key]}
                                    </p>
                                );
                        })}
                    </Column>
                    <Column {...args}>
                        <h1>I am a Column</h1>
                        {Object.keys(args).map((key, index) => {
                            if (key === "children") {
                                return null;
                            } else
                                return (
                                    <p key={index}>
                                        Prop {key}: {args[key]}
                                    </p>
                                );
                        })}
                    </Column>
                </Row>
            </Container>
        </Wrapper>
    );
};

export const Default = Template.bind({});

Default.args = {
    xs: "auto",
};

Default.argTypes = {
    xs: colControl,
};

export const Small = Template.bind({});

Small.args = {
    sm: "auto",
};

Small.argTypes = {
    sm: colControl,
};

export const Medium = Template.bind({});

Medium.args = {
    md: "auto",
};

Medium.argTypes = {
    md: colControl,
};

export const Large = Template.bind({});

Large.args = {
    lg: "auto",
};

Large.argTypes = {
    lg: colControl,
};

export const XLarge = Template.bind({});

XLarge.args = {
    xl: "auto",
};

XLarge.argTypes = {
    xl: colControl,
};

export const XXLarge = Template.bind({});

XXLarge.args = {
    xxl: "auto",
};

XXLarge.argTypes = {
    xxl: colControl,
};

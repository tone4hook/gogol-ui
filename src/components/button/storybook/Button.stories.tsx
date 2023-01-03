import React from "react";
import { Story } from "@storybook/react";
import Wrapper from "../../wrapper/Wrapper";
import Button from "../Button";

export default {
    title: "Components/Button",
    component: Button,
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
            <Button
                text={args.text}
                color={args.color}
                outline={args.outline}
                large={args.large}
                small={args.small}
                block={args.block}
                tabIndex={args.tabIndex}
                name={args.name}
                type={args.type}
                disabled={args.disabled}
            />
        </Wrapper>
    );
};

export const Primary = Template.bind({});

Primary.args = {
    color: "primary",
    text: "Primary",
};

export const Secondary = Template.bind({});

Secondary.args = {
    color: "secondary",
    text: "Secondary",
};

export const Success = Template.bind({});

Success.args = {
    color: "success",
    text: "Success",
};

export const Info = Template.bind({});

Info.args = {
    color: "info",
    text: "Info",
};

export const Warning = Template.bind({});

Warning.args = {
    color: "warning",
    text: "Warning",
};

export const Danger = Template.bind({});

Danger.args = {
    color: "danger",
    text: "Danger",
};

export const Light = Template.bind({});

Light.args = {
    color: "light",
    text: "Light",
};

export const Dark = Template.bind({});

Dark.args = {
    color: "dark",
    text: "Dark",
};

export const Outline = Template.bind({});

Outline.args = {
    color: "info",
    outline: true,
    text: "Outline",
};

export const Large = Template.bind({});

Large.args = {
    color: "info",
    text: "Large Button",
    large: true,
};

export const Small = Template.bind({});

Small.args = {
    color: "info",
    text: "Small Button",
    small: true,
};

export const Block = Template.bind({});

Block.args = {
    color: "info",
    text: "Block Button",
    block: true,
};

export const TabIndex = Template.bind({});

TabIndex.args = {
    color: "primary",
    text: "Tab Index",
    tabIndex: 1,
};

export const Name = Template.bind({});

Name.args = {
    color: "primary",
    text: "Name",
    name: "subject",
};

export const Type = Template.bind({});

Type.args = {
    color: "primary",
    text: "Type",
    type: "submit",
};

export const Disabled = Template.bind({});

Disabled.args = {
    color: "primary",
    text: "Disabled",
    disabled: true,
};

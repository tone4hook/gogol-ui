import React from "react";
import { Story } from "@storybook/react";
import Wrapper from "../../wrapper/Wrapper";
import Input from "../Input";

export default {
    title: "Components/Input",
    component: Input,
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
            <Input
                type={args.type}
                placeholder={args.placeholder}
                disabled={args.disabled}
                required={args.required}
                onChange={(e) => {
                    console.log(e.currentTarget.value);
                }}
            />
        </Wrapper>
    );
};

export const DefaultInput = Template.bind({});

DefaultInput.args = {
    type: "text",
    placeholder: "Default input",
};

export const DisabledInput = Template.bind({});

DisabledInput.args = {
    type: "text",
    placeholder: "Disabled input",
    disabled: true,
};

export const RequiredInput = Template.bind({});

RequiredInput.args = {
    type: "text",
    placeholder: "Required input",
    required: true,
};

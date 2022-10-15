import React from "react";
import { Story } from "@storybook/react";
import Wrapper from "../../wrapper/Wrapper";
import Row from "../Row";

export default {
    title: "Components/Grid/Row",
    component: Row,
    parameters: { options: { showPanel: false } },
};

const Template: Story = () => {
    return (
        <Wrapper>
            <Row>
                <div>
                    <h1>I am a Row</h1>
                </div>
            </Row>
        </Wrapper>
    );
};

export const Default = Template.bind({});

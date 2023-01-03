import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { matchers } from "@emotion/jest";
import Column, { TBreakPointValues } from "../Column";
import { spacing } from "../../../styles/theme/units";
import { colBreakPointStyles } from "../Column.Styles";
import { mq } from "../../../styles/utils/mediaQueries";

// Add the custom matchers provided by '@emotion/jest'
expect.extend(matchers);

interface ITestColProps {
    xs?: TBreakPointValues | "auto";
    sm?: TBreakPointValues | "auto";
    md?: TBreakPointValues | "auto";
    lg?: TBreakPointValues | "auto";
    xl?: TBreakPointValues | "auto";
    xxl?: TBreakPointValues | "auto";
}

const breakPointValues: TBreakPointValues[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
];

const breakPoints: Array<keyof ITestColProps> = [
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "xxl",
];

describe("Column component", () => {
    it("should render Column with default styles", () => {
        const { container } = render(
            <Column>
                <h1>Hello World</h1>
            </Column>
        );
        expect(container.firstChild).toHaveStyle("box-sizing: border-box");
        expect(container.firstChild).toHaveStyle("flex-shrink: 0");
        expect(container.firstChild).toHaveStyle("width: 100%");
        expect(container.firstChild).toHaveStyle("margin-top: 0");
        expect(container.firstChild).toHaveStyle(
            `padding-right: ${spacing.small};`
        );
        expect(container.firstChild).toHaveStyle(
            `padding-left: ${spacing.small}`
        );
    });
    it("should render Column breakpoint styles based on prop", () => {
        breakPoints.forEach((item: keyof ITestColProps) => {
            for (let i = 0; i < 12; i++) {
                let propObj: ITestColProps = {
                    [item]: breakPointValues[i],
                };

                const { container } = render(
                    <Column {...propObj}>
                        <h1>Hello World</h1>
                    </Column>
                );

                let j = i + 1;

                if (item !== "xs") {
                    const expectedStyles = colBreakPointStyles[j].substring(
                        colBreakPointStyles[j].indexOf("h") + 3
                    );
                    expect(container.firstChild).toHaveStyleRule(
                        "width",
                        expectedStyles.slice(0, -1),
                        {
                            media: mq(item).slice(7),
                        }
                    );
                }
            }
        });
    });
});

test("should render Column with default styles", () => {
    const { container } = render(
        <Column>
            <h1>Hello World</h1>
        </Column>
    );
    expect(container.firstChild).toHaveStyle("box-sizing: border-box");
    expect(container.firstChild).toHaveStyle("flex-shrink: 0");
    expect(container.firstChild).toHaveStyle("width: 100%");
    expect(container.firstChild).toHaveStyle("margin-top: 0");
    expect(container.firstChild).toHaveStyle(
        `padding-right: ${spacing.small};`
    );
    expect(container.firstChild).toHaveStyle(`padding-left: ${spacing.small}`);
});

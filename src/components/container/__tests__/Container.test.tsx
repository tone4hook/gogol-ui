import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Container from "../Container";

test("should render regular Container", () => {
    const { container } = render(<Container />);
    expect(container.firstChild).toHaveStyle("margin: 0px auto");
});

test("should render fluid Container", () => {
    const { container } = render(<Container fluid />);
    expect(container.firstChild).not.toHaveStyle("margin: 0px auto");
});

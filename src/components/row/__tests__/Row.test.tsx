import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Row from "../Row";

test("should render regular Container", () => {
    const { container } = render(<Row />);
    expect(container.firstChild).toHaveStyle("display: flex");
    expect(container.firstChild).toHaveStyle("flex-wrap: wrap;");
});

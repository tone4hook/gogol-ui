import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Row from "../Row";

describe("Row component", () => {
    it("should render Row", () => {
        const { container } = render(<Row />);
        expect(container.firstChild).toHaveStyle("display: flex");
        expect(container.firstChild).toHaveStyle("flex-wrap: wrap;");
    });
});

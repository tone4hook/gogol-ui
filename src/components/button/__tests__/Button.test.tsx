import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../Button";

describe("Button component", () => {
    it("should render Button", () => {
        render(<Button text="Foo" color="primary" />);
        const btn = screen.getByText("Foo");
        expect(btn).toBeInTheDocument();
    });
});

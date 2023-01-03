import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "../Input";

describe("Input component", () => {
    it("should render Input", () => {
        render(<Input type="text" onChange={() => {}} />);
        const testInput = screen.getByLabelText("text");
        expect(testInput).toBeInTheDocument();
    });
});

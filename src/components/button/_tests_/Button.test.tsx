import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../Button";

test("should render Primary Button", () => {
    const { container } = render(<Button text="Foo" color="primary" />);
    expect(container.firstChild).toHaveAccessibleName("Foo");
});

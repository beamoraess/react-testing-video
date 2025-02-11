import { fireEvent, render, screen } from "@testing-library/react"
import Button from "./Button"

describe ('Button Component', () => {
    it('should render with red background if disabled', () => {
        render(<Button onClick={() => {}} disabled={false}>Click Me</Button>)

        const button = screen.getByRole("button", {name: "Click Me"})

        expect(button).toHaveStyle({ backgroundColor : "blue" })
    })

    it('should call onClick prop on click', () => {
        const onClick = jest.fn();

        render(<Button disabled onClick={onClick}>Click Me</Button>)

        const button = screen.getByText(/click me/i);

        fireEvent.click(button);

        expect(onClick).toHaveBeenCalled();
    })
})
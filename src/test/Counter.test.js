import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "../Counter";

test("increments counter", () => {
   
    render(<Counter />);

    const counter = screen.getByTestId("counter");
    const incrementBtn = screen.getByTestId("increment");

    fireEvent.click(incrementBtn);

    expect(counter).toHaveTextContent("1");
});

it("increments counter with two button click", () => {
   
    render(<Counter />);

    const counter = screen.getByTestId("counter");
    const incrementBtn = screen.getByTestId("increment");

    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn); 
    
    expect(counter).toHaveTextContent("2");
});
import { render, screen } from "@testing-library/react";
import Cart from "../components/Cart/Cart";

afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
});

describe("Button Component", () => {
  const setToggle = jest.fn();
  render(<Cart />);
  const button = screen.getByTestId("button");

  // Test 1
  test("Button Rendering", () => {
    expect(button).toBeInTheDocument();
  });

  // Test 2
  test("Button Text Close", () => {
    expect(button).toHaveTextContent("Close");
  });
  test("Button Text Order", () => {
    expect(button).toHaveTextContent("Order");
  });
});

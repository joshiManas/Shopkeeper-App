import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomSearchBox from "../CustomSearchBox";

const mockHandleChange = jest.fn();

describe("Search Input TEST", () => {
  it("input field is rendered in UI", () => {
    render(
      <CustomSearchBox
        placeholderText="Your Name..."
        handleChange={mockHandleChange}
      />
    );
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  it("input field is displaying correct value or not", () => {
    render(
      <CustomSearchBox
        placeholderText="Your Name..."
        handleChange={mockHandleChange}
      />
    );
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "manas" } });
    expect(inputElement.value).toBe("manas");
  });
});

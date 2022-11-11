import { render, screen, fireEvent } from "@testing-library/react";
import CustomSearchBox from "../CustomSearchBox";

const mockHandleChange = jest.fn();

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

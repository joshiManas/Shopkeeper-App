import { fireEvent, render, screen } from "@testing-library/react";
import CustomerInput from "../CustomerInput";
import { Provider } from "react-redux";
import store from "../../../app/store";

const mockCustomerInput = () => {
  return (
    <Provider store={store}>
      <CustomerInput />
    </Provider>
  );
};

/* TEST BLOCKS */

it("form heading element is rendering", () => {
  render(mockCustomerInput());
  const headingElement = screen.getByText(/create customer/i);
  expect(headingElement).toBeInTheDocument;
});

describe("testing the input fields", () => {
  it("first name input field is working fine when user is typing", () => {
    render(mockCustomerInput());
    const firstNameInputElement = screen.getByPlaceholderText(
      /type your first name.../i
    );
    fireEvent.change(firstNameInputElement, { target: { value: "harry" } });
    expect(firstNameInputElement.value).toBe("harry");
  });

  it("last name input field is working fine when user is typing", () => {
    render(mockCustomerInput());
    const firstNameInputElement = screen.getByPlaceholderText(
      /type your last name.../i
    );
    fireEvent.change(firstNameInputElement, { target: { value: "potter" } });
    expect(firstNameInputElement.value).toBe("potter");
  });

  it("items input field is working fine when user is typing", () => {
    render(mockCustomerInput());
    const firstNameInputElement =
      screen.getByPlaceholderText(/total items.../i);
    fireEvent.change(firstNameInputElement, { target: { value: "9" } });
    expect(firstNameInputElement.value).toBe("9");
  });

  it("amount input field is working fine when user is typing", () => {
    render(mockCustomerInput());
    const firstNameInputElement =
      screen.getByPlaceholderText(/total amount.../i);
    fireEvent.change(firstNameInputElement, { target: { value: "555" } });
    expect(firstNameInputElement.value).toBe("555");
  });
});

describe("on clicking add button the form data is clearing out", () => {
  it("first name clears out", () => {
    render(mockCustomerInput());
    const buttonElement = screen.getByRole("button", { name: "Add" });
    const fistNameInputElement = screen.getByPlaceholderText(
      /type your first name.../i
    );
    fireEvent.click(buttonElement);
    expect(fistNameInputElement.value).toBe("");
  });

  it("last name clears out", () => {
    render(mockCustomerInput());
    const buttonElement = screen.getByRole("button", { name: "Add" });
    const lastNameInputElement = screen.getByPlaceholderText(
      /type your last name.../i
    );
    fireEvent.click(buttonElement);
    expect(lastNameInputElement.value).toBe("");
  });

  it("total items clears out", () => {
    render(mockCustomerInput());
    const buttonElement = screen.getByRole("button", { name: "Add" });
    const itemsInputElement = screen.getByPlaceholderText(/total items.../i);
    fireEvent.click(buttonElement);
    expect(itemsInputElement.value).toBe("");
  });

  it("total amount clears out", () => {
    render(mockCustomerInput());
    const buttonElement = screen.getByRole("button", { name: "Add" });
    const amountInputElement = screen.getByPlaceholderText(/total amount.../i);
    fireEvent.click(buttonElement);
    expect(amountInputElement.value).toBe("");
  });
});

/* it("on clicking the label element the corresponding input filed is getting focused", () => {
  render(mockCustomerInput());
  const firstNameLabelElement = screen.getByLabelText(/first name/i);
  const firstNameInputElement = screen.getByPlaceholderText(
    /type your first name.../i
  );
    fireEvent.click(firstNameLabelElement);
  expect(firstNameInputElement).toHaveFocus();
}) */

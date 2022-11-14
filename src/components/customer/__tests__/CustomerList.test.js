import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomerList from "../CustomerList";
import { Provider } from "react-redux";
import store from "app/store";

const mockCustomerList = () => {
  return (
    <Provider store={store}>
      <CustomerList />
    </Provider>
  );
};

/* TEST BLOCKS */

test("heading element is rendered on the UI", () => {
  render(mockCustomerList());
  const headingElement = screen.getByText(/customer details/i);
  expect(headingElement).toBeInTheDocument();
});

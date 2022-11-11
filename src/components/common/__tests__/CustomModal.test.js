import { render, screen, fireEvent } from "@testing-library/react";
import CustomModal from "../CustomModal";

const mockHandleClose = jest.fn();
const mockHandleDelete = jest.fn();

it("modal is displaying correctly or not", () => {
  render(
    <CustomModal
      title="title"
      body="body"
      show={true}
      handleClose={mockHandleClose}
      handleDelete={mockHandleDelete}
    />
  );
  const closeButtonElement = screen.getByText(/no/i);
  expect(closeButtonElement).toBeInTheDocument;
});

it("on clicking close button modal gets close", () => {
  render(
    <CustomModal
      title="title"
      body="body"
      show={true}
      handleClose={mockHandleClose}
      handleDelete={mockHandleDelete}
    />
  );
  const closeButtonElement = screen.getByText(/no/i);
  fireEvent.click(closeButtonElement);
  expect(closeButtonElement).toBeInTheDocument;
});

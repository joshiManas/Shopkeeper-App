import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomModal from "../CustomModal";

const mockHandleClose = jest.fn();
const mockHandleDelete = jest.fn();

it("modal is rendered to UI", () => {
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
  expect(closeButtonElement).toBeInTheDocument();
});

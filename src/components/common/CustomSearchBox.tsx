import React from "react";
import Form from "react-bootstrap/Form";

type CustomSearchBoxProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholderText: string;
};

const CustomSearchBox = ({
  handleChange,
  placeholderText,
}: CustomSearchBoxProps) => {
  return (
    <Form className="mb-3 w-75 mx-auto">
      <Form.Control
        type="text"
        placeholder={placeholderText}
        onChange={handleChange}
      />
    </Form>
  );
};

export default CustomSearchBox;

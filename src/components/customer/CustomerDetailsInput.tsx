import React, { useState } from "react";
import { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {
  addCustomer,
  updateCustomer,
  setCurrentSelected,
} from "features/customer/customerSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";

const CustomerDetailsInput = () => {
  const initialFormState = {
    fname: "",
    lname: "",
    items: "",
    amount: "",
  };

  /* ************* STATE FOR OUR FORM INPUTS ********* */
  const [formData, setFormData] = useState(initialFormState);

  /* GETTING CUSTOMERS FROM REDUX STORE */
  const { customerList: customers, selectedCustomerId } = useAppSelector(
    (state) => state.customer
  );

  const dispatch = useAppDispatch();

  // refilling the form when user clicks on edit button
  useEffect(() => {
    if (selectedCustomerId) {
      const customer = customers.find((c) => c.id == selectedCustomerId);
      if (customer) {
        const fullname = customer.name.split(" ");
        setFormData({
          fname: fullname[0],
          lname: fullname[1],
          items: customer.items,
          amount: customer.amount,
        });
      }
    }
  }, [selectedCustomerId]);

  /* *********** HANDLES FORM SUBMIT  **************** */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const customer = {
      name: formData.fname.toLowerCase() + " " + formData.lname.toLowerCase(),
      items: formData.items,
      amount: formData.amount,
      deleted: false,
      display: true,
    };

    // if selectedCustomerId exists that means we are upadating the customer
    if (selectedCustomerId) {
      console.log("updating user...");
      let updatedCustomer = {
        id: selectedCustomerId,
        ...customer,
      };
      dispatch(updateCustomer(updatedCustomer));
      // setting the current selected customer to null again
      dispatch(setCurrentSelected(null));
    } else {
      console.log("adding new user...");
      const newCustomer = {
        id: customers.length + 1,
        ...customer,
      };
      dispatch(addCustomer(newCustomer));
    }

    // clearing the form
    setFormData(initialFormState);
  };

  /*  HANDLES INPUT CHANGE EVENT */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex-fill">
      <h2 className="text-center text-primary mb-4">Add/Edit Customer List</h2>
      <Form onSubmit={handleSubmit} className="w-50 mx-auto">
        {/* FIRST NAME  */}
        <Form.Group as={Row} className="mb-3" controlId="firstname">
          <Form.Label column sm={2}>
            First Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              name="fname"
              type="text"
              placeholder="type your first name..."
              required
              minLength={3}
              maxLength={30}
              value={formData.fname}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        {/* LAST NAME  */}
        <Form.Group as={Row} className="mb-3" controlId="lastname">
          <Form.Label column sm={2}>
            Last Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="lname"
              placeholder="type your last name..."
              required
              minLength={3}
              maxLength={30}
              value={formData.lname}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        {/* ITEMS  */}
        <Form.Group as={Row} className="mb-3" controlId="items">
          <Form.Label column sm={2}>
            Items
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="number"
              name="items"
              placeholder="total items..."
              required
              min="1"
              value={formData.items}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        {/* AMOUNT  */}
        <Form.Group as={Row} className="mb-3" controlId="amount">
          <Form.Label column sm={2}>
            Amount
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="number"
              name="amount"
              placeholder="total amount..."
              required
              min="1"
              value={formData.amount}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        {/* UPDATE/ADD BTN  */}
        <div className="text-center">
          <Button variant="primary" type="submit">
            Update
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CustomerDetailsInput;

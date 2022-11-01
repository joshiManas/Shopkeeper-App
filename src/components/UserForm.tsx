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
} from "../features/customer/customerSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

const UserForm = () => {
  /* ************* STATES FOR OUR FORM INPUTS ********* */
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [items, setItems] = useState("");
  const [amount, setAmount] = useState("");

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
        setFname(fullname[0]);
        setLname(fullname[1]);
        setItems(customer.items);
        setAmount(customer.amount);
      }
    }
  }, [selectedCustomerId]);

  /* *********** HANDLES FORM SUBMIT  **************** */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const customer = {
      name: fname.toLowerCase() + " " + lname.toLowerCase(),
      items: items,
      amount: amount,
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
    setFname("");
    setLname("");
    setItems("");
    setAmount("");
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
              type="text"
              placeholder="type your first name..."
              required
              value={fname}
              onChange={(e) => setFname(e.target.value)}
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
              placeholder="type your last name..."
              required
              value={lname}
              onChange={(e) => setLname(e.target.value)}
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
              placeholder="total items..."
              required
              value={items}
              onChange={(e) => setItems(e.target.value)}
              min="1"
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
              placeholder="total amount..."
              required
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min="1"
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

export default UserForm;

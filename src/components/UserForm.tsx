import React from "react";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {
  addCustomer,
  updateCustomer,
  setCurrentSelected,
} from "../features/customer/customerSlice";
import { CustomerState, CustomerType, GlobalState } from "./types";

const UserForm = () => {
  const { customerList: customers, selectedCustomerId } = useSelector(
    (state: GlobalState): CustomerState => state.customer
  );
  const dispatch = useDispatch();

  // refrences for dom nodes
  const fnameRef = useRef<HTMLInputElement>(null!);
  const lnameRef = useRef<HTMLInputElement>(null!);
  const itemsRef = useRef<HTMLInputElement>(null!);
  const amountRef = useRef<HTMLInputElement>(null!);

  // refilling the form when user clicks on edit button
  useEffect(() => {
    if (selectedCustomerId) {
      const customer = customers.find((c) => c.id == selectedCustomerId);
      if (customer) {
        const fullname = customer.name.split(" ");
        fnameRef.current.value = fullname[0];
        lnameRef.current.value = fullname[1];
        itemsRef.current.value = String(customer.items);
        amountRef.current.value = String(customer.amount);
      }
    }
  }, [selectedCustomerId]);

  // handles form submit
  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();

    // if selectedCustomerId exists that means we are upadating the customer
    if (selectedCustomerId) {
      console.log("updating user...");
      let updatedCustomer = {
        id: selectedCustomerId,
        name: fnameRef.current.value + " " + lnameRef.current.value,
        items: itemsRef.current.value,
        amount: amountRef.current.value,
        delete: false,
        display: true,
      };
      dispatch(updateCustomer(updatedCustomer));
      // setting the current selected customer to null again
      dispatch(setCurrentSelected(null));
    } else {
      console.log("adding new user...");
      const newCustomer = {
        id: customers.length + 1,
        name: fnameRef.current.value + " " + lnameRef.current.value,
        items: itemsRef.current.value,
        amount: amountRef.current.value,
        delete: false,
        display: true,
      };
      dispatch(addCustomer(newCustomer));
    }

    // clearing the form
    fnameRef.current.value = "";
    lnameRef.current.value = "";
    itemsRef.current.value = "";
    amountRef.current.value = "";
  };

  return (
    <div className="flex-fill">
      <h2 className="text-center text-primary mb-4">Add/Edit Customer List</h2>
      <Form onSubmit={handleSubmit} className="w-50 mx-auto">
        {/* FIRST NAME  */}
        <Form.Group as={Row} className="mb-3" controlId="formBasicFirstName">
          <Form.Label column sm={2}>
            First Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="type your first name..."
              ref={fnameRef}
              required
            />
          </Col>
        </Form.Group>

        {/* LAST NAME  */}
        <Form.Group as={Row} className="mb-3" controlId="formBasicLasttName">
          <Form.Label column sm={2}>
            Last Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="type your last name..."
              ref={lnameRef}
              required
            />
          </Col>
        </Form.Group>

        {/* ITEMS  */}
        <Form.Group as={Row} className="mb-3" controlId="formBasicItems">
          <Form.Label column sm={2}>
            Items
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="number"
              placeholder="total items..."
              ref={itemsRef}
              required
              min="1"
            />
          </Col>
        </Form.Group>

        {/* AMOUNT  */}
        <Form.Group as={Row} className="mb-3" controlId="formBasicAmount">
          <Form.Label column sm={2}>
            Amount
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="number"
              placeholder="total amount..."
              ref={amountRef}
              required
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
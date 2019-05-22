import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { addContact } from "../utils/APIClient";
class AddContact extends Component {
  state = {
    contact_status: "wait for submit"
  };
  onHandleAddContact = async event => {
    event.preventDefault();
    const data = {
      first_name: event.target.first_name.value,
      last_name: event.target.last_name.value,
      dob: event.target.dob.value,
      note: event.target.note.value
    };
    addContact(data).then(response => {
      this.setState({ user: response });
      this.setState({ contact_status: "Contact Created!" });
    });
  };
  render() {
    return (
      <div className="header">
        <Header />
        <h2 className="text-center text-danger">Add Contact Form</h2>
        <Form onSubmit={this.onHandleAddContact}>
          <Form.Group controlId="first_name">
            <Form.Label>Firstname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter firstname"
              name="first_name"
            />
          </Form.Group>

          <Form.Group controlId="last_name">
            <Form.Label>Lastname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter lastname"
              name="last_name"
            />
          </Form.Group>
          <Form.Group controlId="note">
            <Form.Label>Note</Form.Label>
            <Form.Control type="text" placeholder="Enter Note" name="note" />
          </Form.Group>

          <Form.Group controlId="dob">
            <Form.Label>DOB</Form.Label>
            <Form.Control type="date" placeholder="Enter DOB" name="dob" />
          </Form.Group>
          <Alert variant="info">{this.state.contact_status}</Alert>
          <Button variant="success" type="submit">
            Add Contact
          </Button>
        </Form>
        ;
      </div>
    );
  }
}

export default AddContact;

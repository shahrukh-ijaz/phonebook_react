import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import Table from "react-bootstrap/Table";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { getContacts } from "../utils/APIClient";
class DashboardPage extends Component {
  state = {
    loading: true,
    contacts: {}
  };
  componentDidMount() {
    getContacts().then(response => {
      this.setState({ contacts: response, loading: false });
    });
  }
  render() {
    if (this.state.loading) {
      return <div> </div>;
    }
    return (
      <div className="header">
        <Header />
        <div className="body_div">
          <a id="addContact_link" href="/add_contact">+Add Contact</a>
          <Table striped bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>DOB</th>
                <th>Note</th>
                <th>Controls</th>
              </tr>
            </thead>
            <tbody>
              {this.state.contacts.map((contact, count) => (
                <tr>
                  <td>{count + 1}</td>
                  <td className="td_first_name">{contact.first_name}</td>
                  <td>{contact.last_name}</td>
                  <td>{contact.dob}</td>
                  <td>{contact.note}</td>
                  <td>
                    <ButtonGroup aria-label="Basic example">
                      <Button>Add Number</Button>
                      <Button>Add Email</Button>
                      <Button>Details</Button>
                      <Button>Delete</Button>
                    </ButtonGroup>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default DashboardPage;

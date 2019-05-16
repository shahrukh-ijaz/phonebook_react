import React, { Component } from 'react';
import '../App.css'
import Header from "./Header";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import {checkCookie, getCookie} from "../utils/cookies";
import {Redirect} from "react-router";
class AddContact extends Component {
    state = {
        contact_status: "wait for submit"
    };
    async componentDidMount() {


    }
    onHandleAddContact = async event => {
        event.preventDefault();
        let first_name = event.target.first_name.value;
        let last_name = event.target.last_name.value;
        let note = event.target.note.value;
        let dob = event.target.dob.value;

        var session_url = "http://localhost:8001/api/contacts";

        let formData = new FormData(); //formdata object

        formData.append("first_name", first_name); //append the values with key, value pair
        formData.append("last_name", last_name);
        formData.append("note", note);
        formData.append("dob", dob);

        axios(session_url, {
            method: "post",
            data: {
                "first_name": first_name,
                "last_name": last_name,
                "dob": dob,
                "note": note,
            },
            withCredentials: true
        }).then(response => {
            this.setState({contact_status: "Contact Created!"})
            console.login(response);
        }).catch(error => {
            console.login(error);
        })
    };
    render() {
        return (
            <div className="header">
                <Header/>
                <h2 className="text-center text-danger">Add Contact Form</h2>
                <Form onSubmit={this.onHandleAddContact}>
                    <Form.Group controlId="formBasicFirstname">
                        <Form.Label>Firstname</Form.Label>
                        <Form.Control type="text" placeholder="Enter firstname" name="first_name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicLastname">
                        <Form.Label>Lastname</Form.Label>
                        <Form.Control type="text" placeholder="Enter lastname" name="last_name"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicNote">
                        <Form.Label>Note</Form.Label>
                        <Form.Control type="text" placeholder="Enter Note" name="note"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicDob">
                        <Form.Label>DOB</Form.Label>
                        <Form.Control type="date" placeholder="Enter DOB" name="dob" />
                    </Form.Group>
                    <Alert variant="info">
                        {this.state.contact_status}
                    </Alert>
                    <Button variant="success" type="submit">
                        Add Contact
                    </Button>
                </Form>;
            </div>
        );
    }
}

export default AddContact;

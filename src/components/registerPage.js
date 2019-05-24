import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import {registerUserAction} from "../actions";
import {Jumbotron} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";
import Alert from "react-bootstrap/Alert";


class RegisterPage extends Component {
  state = {
    message: "Enter Details and click register button"
  };
  onHandleRegistration = (event) => {
    event.preventDefault();

    let username = event.target.username.value;
    let email = event.target.email.value;
    let password = event.target.password.value;
    let first_name = event.target.first_name.value;
    let last_name = event.target.last_name.value;
    const data = {
      username, email, password, first_name, last_name
    };
    this.props.registerUser(data);
    this.setState({message: "Account Created!"})
  };

  render() {
    return (
        <div>
          <Jumbotron fluid className="jumbotron">
            <Container className="text-center">
              <h1 >PhoneBook</h1>
              <p>
                This is the project for learning fundamentals of reactJs and Django.
              </p>
            </Container>
          </Jumbotron>
          <div align="center">
            <h2 className="text-danger">RegisterPage</h2>
            <div align="center">
              <Form className="form" onSubmit={this.onHandleRegistration}>
                <Form.Row>
                  <Form.Group as={Col} controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email"/>
                  </Form.Group>

                  <Form.Group as={Col} controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password"/>
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control placeholder="shahrukh123" name="username"/>
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="first_name">
                    <Form.Label>Firstname</Form.Label>
                    <Form.Control type="text" placeholder="firstname" name="first_name" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="last_name">
                    <Form.Label>Lastname</Form.Label>
                    <Form.Control type="text" placeholder="lastname" name="last_name"/>
                  </Form.Group>
                </Form.Row>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <Form.Group controlId="formBasicChecbox">
                  <Form.Label label=" Don't have account? "/>
                </Form.Group>
                Do you have account? <Link to="/">Login here</Link>
                  <Alert variant="info" className="response">{this.state.message}</Alert>
              </Form>

            </div>
          </div>
        </div>
    )
  }
}

const mapStateToProps = response => ({ response });
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
          registerUser: registerUserAction
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterPage);
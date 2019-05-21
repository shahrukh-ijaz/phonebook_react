import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loginUserAction } from "../actions";
import { Jumbotron } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class LoginPage extends Component {
  onHandleLogin = event => {
    event.preventDefault();
    let username = event.target.username.value;
    let password = event.target.password.value;

    const data = {
      username,
      password
    };

    this.props.loginUser(data);
  };

  render() {
    if (localStorage.getItem("token")) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div>
        <Jumbotron fluid className="jumbotron">
          <Container className="text-center">
            <h1>PhoneBook</h1>
            <p>
              This is the project for learning fundamentals of reactJs and
              Django.
            </p>
          </Container>
        </Jumbotron>

        <h2 className="text-center text-danger">Login Page</h2>
        <div align="center">
          <Form className="form" onSubmit={this.onHandleLogin}>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                name="username"
              />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Form.Group controlId="formBasicChecbox">
              <Form.Label label=" Don't have account? " />
            </Form.Group>
            Don't have account? <Link to="register">Register here</Link>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = response => ({ response });
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loginUser: loginUserAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);

import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import { Row, Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import { getProfile } from "../utils/APIClient";

class Profile extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    getProfile().then(response => {
      this.setState({ user: response });
    });
  }
  render() {
    return (
      <div className="header">
        <Header />
        <hr />
        <h2 className="text-center">Profile Details</h2>
        <hr />
        <Container>
          <Row>
            <Col>username</Col>
            <Col>{this.state.user.username}</Col>
          </Row>
          <Row>
            <Col>firstname</Col>
            <Col>{this.state.user.first_name}</Col>
          </Row>
          <Row>
            <Col>lastname</Col>
            <Col>{this.state.user.last_name}</Col>
          </Row>
          <Row>
            <Col>email</Col>
            <Col>{this.state.user.email}</Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default connect()(Profile);

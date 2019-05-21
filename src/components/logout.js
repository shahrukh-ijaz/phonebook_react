import React, { Component } from "react";
import "../App.css";
import { Redirect } from "react-router-dom";
import { logout } from "../utils/APIClient";
class Logout extends Component {
  state = {
    logout: false
  };
  componentDidMount() {
    logout().then(response => {
      localStorage.clear();
      this.setState({ logout: true });
    });
  }
  render() {
    if (this.state.logout === true) {
      return <Redirect to="/" />;
    }
    return (
      <div className="header">
        <h2>logout</h2>
      </div>
    );
  }
}

export default Logout;

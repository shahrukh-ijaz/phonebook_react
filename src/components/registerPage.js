import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import {registerUserAction} from "../actions";


class RegisterPage extends Component {
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

  };

  render() {
    return (
      <div>
        <h3>RegisterPage</h3>
        <form onSubmit={this.onHandleRegistration}>
          <div>
            <label>Name</label>
            <input type="text" name="username" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" />
          </div>
          <div>
            <label>first_name</label>
            <input type="text" name="first_name" />
          </div>
          <div>
            <label>last_name</label>
            <input type="text" name="last_name" />
          </div>
          <div>
            <button>Register</button>
          </div>
        </form>
        Already have account? <Link to='login'>Login here</Link>
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
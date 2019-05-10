import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { loginUserAction } from "../actions";

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
        return (
            <div>
                <h3>Login Page</h3>
                <form onSubmit={this.onHandleLogin}>
                    <div>
                        <label>username</label>
                        <input type="username" name="username" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" />
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
                Don't have account? <Link to="register">Register here</Link>
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

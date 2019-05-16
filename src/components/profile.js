import React, { Component } from 'react';
import '../App.css'
import Header from "./Header";
import axios from "axios";
import {Row, Container} from "react-bootstrap";
import Col from "react-bootstrap/Col";
class Profile extends Component {
    state = {
        user: {}
    };

    componentDidMount() {
        const config = {
            headers: {
                "content-type": "multipart/form-data",
                "Access-Control-Allow-Origin": true
            }
        };
        axios.get('http://localhost:8001/api/profile',{
            withCredentials: true
        }, config)
            .then(response => {
                const user = {
                    'id': response.data['id'],
                    'first_name': response.data['first_name'],
                    'last_name': response.data['last_name'],
                    'email': response.data['email'],
                    'username': response.data['username'],
                };
                console.log(user);
                this.setState({user: user});
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        return (
            <div className="header">
               <Header/>
                <hr/>
                <h2 className="text-center">Profile Details</h2>
                <hr/>
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
                </Container>;

            </div>
        );
    }
}

export default Profile;

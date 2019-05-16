import React, { Component } from 'react';
import '../App.css'
import axios from "axios";
import {Redirect} from "react-router-dom";
class Logout extends Component {
    state = {
        logout: false
    };
    async componentDidMount() {
        const config = {
            headers: {
                "content-type": "multipart/form-data",
                "Access-Control-Allow-Origin": true
            }
        };
        axios.get('http://localhost:8001/api/logout',{
            withCredentials: true
        }, config)
            .then(response => {
                console.log(response.data);
                this.setState({logout: true});
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        if (this.state.logout===true){
            return <Redirect to='/'/>;
        }
        return (
            <div className="header">
               <h2>logout</h2>
            </div>
        );
    }
}

export default Logout;

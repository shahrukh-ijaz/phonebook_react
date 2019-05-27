import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from '../components/loginPage';
import RegisterPage from '../components/registerPage';
import DashboardPage from '../components/dashboardPage';
import Profile from '../components/profile';
import Logout from '../components/logout'
import AddContact from '../components/AddContact'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path='/' exact component={LoginPage} />
                        <Route path='/register' component={RegisterPage} />
                        <Route path='/profile' component={Profile} />
                        <Route path='/logout' component={Logout} />
                        <Route path='/add_contact' component={AddContact} />
                        <Route path='/dashboard' component={DashboardPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
import React, { Component } from 'react'
import { Route } from "react-router-dom"
import UserProfile from './users-profile/UserProfile';
import LandingPage from './home/landingPage';
import RegisterView from './auth-views/RegisterView';
import LoginView from './auth-views/LoginView';
import CreateEventView from './events/CreateEventView';

/*
    module: application views
    author: riley mathews
    purpose: to handle routing for the application
*/

class ApplicationViews extends Component {


    render() {
        return (
            <React.Fragment>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/profile" component={UserProfile}/>
                <Route exact path="/jobs"/>
                <Route exact path="/create-event" component={CreateEventView}/>
                <Route exact path="/contact"/>
                <Route exact path="/login" component={LoginView}/>
                <Route exact path="/register" component={RegisterView}/>
            </React.Fragment>
        )
    }
}

export default ApplicationViews

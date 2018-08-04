import React, { Component } from 'react'
import { Route } from "react-router-dom"
import UserProfile from './users-profile/UserProfile';

/*
    module: application views
    author: riley mathews
    purpose: to handle routing for the application
*/

class ApplicationViews extends Component {


    render() {
        return (
            <React.Fragment>
                <Route exact path="/"/>
                <Route exact path="/profile" component={UserProfile}/>
                <Route exact path="/jobs"/>
                <Route exact path="/post-job"/>
                <Route exact path="/contact"/>
                <Route exact path="/login"/>
            </React.Fragment>
        )
    }
}

export default ApplicationViews

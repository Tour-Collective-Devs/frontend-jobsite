import React, { Component } from 'react'
import { Link } from 'react-router-dom'

/*
    module: navbar
    author: Riley Mathews
    purpose: to render a navbar to the dom when called. Links used are react router links using the react router dom routing. components called by these routes are defined in ApplicationViews.js
*/


class NavBar extends Component {


    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/profile">My Profile</Link>
                    </li>
                    <li>
                        <a href="https://www.tourcollective.co/" target="blank">My TC</a>
                    </li>
                    <li>
                        <Link to="/jobs">Find a Job</Link>
                    </li>
                    <li>
                        <Link to="/post-job">Post a Job</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/login">PH login PH</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar

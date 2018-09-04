import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Provider';

/*
    module: navbar
    author: Riley Mathews
    purpose: to render a navbar to the dom when called. Links used are react router links using the react router dom routing. components called by these routes are defined in ApplicationViews.js
*/


class NavBar extends Component {


    render() {
        return (
            <Context.Consumer>
                {context => (
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>

                            <li>
                                <a href="https://www.tourcollective.co/" target="blank">My TC</a>
                            </li>
                            {!context.state.user.is_employer ?
                                <li>
                                    <Link to="/jobs">Find a Job</Link>
                                </li>
                                :
                                null
                            }

                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            {/* 
                                following is blocks only to be rendered 
                                based on if the user is logged in or not
                            */}
                            {
                                context.isLoggedIn() ?
                                    /* return these components if they are logged in */
                                    <React.Fragment>
                                        <li>
                                            <Link to="/profile">My Profile</Link>
                                        </li>
                                        {context.state.user.is_employer ?
                                            <li>
                                                <Link to="/create-event">Post a Job</Link>
                                            </li>
                                            :
                                            null
                                        }

                                        <li>
                                            <a onClick={context.logOut}>Logout</a>
                                        </li>
                                    </React.Fragment>

                                    :

                                    /* or return these if user is not logged in */
                                    <React.Fragment>
                                        <li>
                                            <Link to="/login">login</Link>
                                        </li>
                                        <li>
                                            <Link to="/register">Register</Link>
                                        </li>

                                    </React.Fragment>
                            }

                        </ul>
                    </nav>
                )}
            </Context.Consumer>
        )
    }
}

export default NavBar

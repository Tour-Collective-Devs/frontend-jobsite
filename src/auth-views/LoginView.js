import React, { Component } from 'react'
import LoginForm from './LoginForm';
import { Context } from '../Provider';


class LoginView extends Component {


    render() {
        return (
            <React.Fragment>
                <h1>Login Here</h1>
                <Context.Consumer>
                    {context => (
                        <LoginForm 
                            logIn = {context.logIn}
                            redirectHome = {context.redirectHome}
                            isLoggedIn = {context.isLoggedIn}
                        />
                    )}
                </Context.Consumer>
            </React.Fragment>
        )
    }
}

export default LoginView

import React, { Component } from 'react'
import RegisterForm from './RegisterForm';
import { Context } from '../Provider';


class RegisterView extends Component {


    render() {
        return (
            <React.Fragment>
                <Context.Consumer>
                    {context => (
                        <React.Fragment>
                            <h1>Sign up for TCC</h1>
                            <RegisterForm 
                                register={context.register}
                            />
                        </React.Fragment>
                    )}
                </Context.Consumer>
            </React.Fragment>
        )
    }
}

export default RegisterView

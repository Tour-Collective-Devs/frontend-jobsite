import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import UserManager from './managers/UserManager'

/*
    module: context provider
    author: riley mathews
    purpose: to hold state at a top level in the application and pass that down to any component that would need to use it
*/

export const Context = React.createContext()

export class Provider extends Component {

    /*
    The initial state of the data provider should include
    default values for any top-level component that will
    need the data. In this case, PoliticianList is my only
    top-level component. It is not a child of any other
    component.
    */
    state = {
        userToken: "",
        user: {
            first_name: "",
            last_name: "",
            email: "",
            username: "",
        }
    }

    /*  
        bind manager methods here
    */

    // user manager methods
    register = UserManager.register.bind(this)
    logIn = UserManager.logIn.bind(this)
    logOut = UserManager.logOut.bind(this)
    isLoggedIn = UserManager.isLoggedIn.bind(this)

    redirect = (url) => {
        return <Redirect to={url} />
    }


    /*
        This component will not render any DOM element itself.
        Rather it becomes a virtual wrapper around any component
        that wants to serve as the data provider for its children.
    */
    render() {
        return (
            <Context.Provider value={{
                state: this.state,
                register: this.register,
                logIn: this.logIn,
                logOut: this.logOut,
                isLoggedIn: this.isLoggedIn,
                redirect: this.redirect,
            }}>
                {this.props.children}
            </Context.Provider>

        )
    }
}


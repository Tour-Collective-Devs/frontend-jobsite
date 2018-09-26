import React, { Component } from 'react'
import { Context } from '../Provider';
import EmployerEvents from '../events/EmployerEvents';



class EmployerProfile extends Component {


    render() {
        return (
            <Context.Consumer>
                {context => (
                    <React.Fragment>
                        <h1>This is the Employer Profile Dashboard</h1>
                        <div> {context.state.user.first_name} {context.state.user.last_name}</div>
                        <div>Company: {context.state.employer.organization_name}</div>
                        <div>Username: {context.state.user.username}</div>
                        <div>Email: {context.state.user.email}</div>

                        <EmployerEvents />

                    </React.Fragment>
                )}
            </Context.Consumer>
        )
    }
}

export default EmployerProfile

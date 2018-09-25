import React, { Component } from 'react'
import CrewProfile from './CrewProfile';
import EmployerProfile from './EmployerProfile';
import { Context } from '../Provider';



class UserProfile extends Component {

    render() {
        return (
            <Context.Consumer>
                {context => (
                    <React.Fragment>
                        {context.state.user.is_employer ? <EmployerProfile user ={context.state.user}/> : <CrewProfile user ={context.state.user}/>}
                    </React.Fragment>

                )}
            </Context.Consumer>
        )
    }
}

export default UserProfile

import React, { Component } from 'react';
import { Context } from '../Provider';


class CrewProfile extends Component {


// crewMember = (info) => {
//     if (info.state.user.is_crew_member === true) {
//         return <div>first name: {info.user.city}</div>
//         // <div>{info.user.last_name}</div>
//     }
// }


    render() {
        return (
            <Context.Consumer>
                {context => (
                    <React.Fragment>
                        <h1>This is the crew member profile</h1>
                        <div> {context.state.user.first_name} {context.state.user.last_name}</div>
                        <div>Username: {context.state.user.username}</div>
                        <div>Email: {context.state.user.email}</div>
                        <div>City: {context.state.crew_member.city}</div>
                        <div>State: {context.state.crew_member.state}</div>
                    </React.Fragment>
                )}
            </Context.Consumer>
        )
    }
}

export default CrewProfile

import React, { Component } from 'react';
import { Context } from '../Provider';
import CrewRoleForm from './CrewRoleForm';


class CrewProfile extends Component {



    render() {
        return (
            <Context.Consumer>
                {context => (
                    <React.Fragment>
                        {console.log(context)}
                        <h1>This is the crew member profile</h1>
                        <div> {context.state.user.first_name} {context.state.user.last_name}</div>
                        <div>Username: {context.state.user.username}</div>
                        <div>Email: {context.state.user.email}</div>
                        <div>City: {context.state.crew_member.city}</div>
                        <div>State: {context.state.crew_member.state}</div>
                        <div>Willing to Travel: {context.state.crew_member.will_travel ? 'Yes' : 'No'} </div>
                        <div>Roles: {context.state.crew_member_roles.map(position => <div key={position.id}>{position.role.name} - {position.years_experience} years</div>)}</div>

                        <CrewRoleForm/>
                    </React.Fragment>
                )}
            </Context.Consumer>
        )
    }
}

export default CrewProfile

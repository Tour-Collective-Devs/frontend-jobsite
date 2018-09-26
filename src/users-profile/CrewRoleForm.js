import React, { Component } from 'react';
import { Context } from '../Provider';

export default class CrewRoleForm extends Component {

    state = {
        toBeSubmitted: {
            role: "",
            years_experience: ""
        },
        roleSearchString: ""
    }

    searchedRole = (evt) => {
        this.setState({
            roleSearchString: evt.target.value
        })
    }
    yearsExperience = (evt) => {
        this.setState({
            toBeSubmitted: {
                role: this.state.toBeSubmitted.role,
                years_experience: evt.target.value
            }
        })
    }


    render() {
        return(
            <Context.Consumer>
                {context => (
                    <React.Fragment>
                        <form onSubmit={(evt) => {
                            evt.preventDefault()
                            context.addCrewMemberRole(this.state.toBeSubmitted)}
                        }>
                            <input type='text' placeholder='Role' value={this.state.roleSearchString} onChange={this.searchedRole}></input>
                            {this.state.roleSearchString !== '' ?
                            <React.Fragment>
                            {context.state.roles.filter(role => role.name.toLowerCase().includes(this.state.roleSearchString.toLowerCase())).map(role => (
                                <div onClick={() => this.setState({
                                    roleSearchString: role.name,
                                    toBeSubmitted: {
                                        role: role.url,
                                        years_experience: this.state.toBeSubmitted.years_experience
                                    }
                                })} key={role.id}>{role.name}</div>
                            ))}
                            </React.Fragment> : null}
                            <input onChange={this.yearsExperience} value={this.state.toBeSubmitted.years_experience} type='text' placeholder='Years Experience'></input>
                            <input type='submit' placeholder='Submit'></input>
                        </form>
                    </React.Fragment>
                )}
            </Context.Consumer>
        )}
}
import React, { Component } from 'react'
import APIManager from '../managers/APIManager';


class CrewPublicProfile extends Component {

    state = {
        user: {
            email: "",
            username: "",
            first_name: "",
            last_name: "",
        },
        city: "",
        state: "",
        will_travel: false
    }

    // on component mount, get a crew member based on the id in the url
    componentDidMount() {
        APIManager.getCollection('crew_member', `id=${this.props.match.params.id}`)
            .then(r => r.json())
            .then(response => {
                const crew_member = response[0]
                this.setState(crew_member)
            })
    }


    render() {
        return (
            <React.Fragment>
                <h1>{this.state.user.first_name} {this.state.user.last_name}</h1>
                <p>location: {this.state.city} {this.state.state}</p>
            </React.Fragment>
        )
    }
}

export default CrewPublicProfile

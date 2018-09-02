import React, { Component } from 'react';
import { Context } from '../Provider';


class CrewProfile extends Component {



    render() {
        return (
            <Context.Consumer>
                {currentUser => (
                    <React.Fragment>
                        {console.log('currentUser', currentUser)}
                        <div>This is the crew member profile</div>
                    </React.Fragment>
                )}
            </Context.Consumer>
        )
    }
}

export default CrewProfile

import React, { Component } from 'react';
import { Context } from '../Provider';


class CrewProfile extends Component {



    render() {
        return (
            <Context.Consumer>
                {currentUser => (
                    <React.Fragment>
                        {console.log(currentUser.displayProfile())}
                        {console.log('state', currentUser.state)}
                        <h1>This is a crew profile page</h1>
                    </React.Fragment>
                )}
            </Context.Consumer>
        )
    }
}

export default CrewProfile

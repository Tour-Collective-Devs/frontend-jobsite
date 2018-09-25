import React, { Component } from 'react'
import { Context } from '../Provider';
import EmployerEvent from './EmployerEvent';


class EmployerEvents extends Component {

    state = {
        showEvents: false
    }


    render() {
        return (
            <Context.Consumer>
                {context => (
                    <React.Fragment>
                        {/* button to toggle the showing of this component */}
                        <button onClick={() => this.setState({ showEvents: !this.state.showEvents })}>Toggle Events</button>
                        {/* check to see if the component state for showing the component is true */}
                        {this.state.showEvents ?
                            <React.Fragment>
                                {/* map over the employers events and generate an employer event component for each */}
                                {context.state.employer_events.map(event => (
                                    <EmployerEvent
                                        key={event.id}
                                        event={event}
                                    />
                                ))}
                            </React.Fragment>
                            : null
                        }
                    </React.Fragment>
                )}
            </Context.Consumer>
        )
    }
}

export default EmployerEvents

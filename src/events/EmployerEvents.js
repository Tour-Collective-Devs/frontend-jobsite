import React, { Component } from 'react'
import { Context } from '../Provider';
import EmployerEvent from './EmployerEvent';
import EmployerEventViewDetail from './EmployerEventViewDetail';

/*  
    module: employer events
    author: riley mathews
    purpose: to generate a component that allows employers to look at their events and see who has applied to them
*/

/*  
    This component handles all nessesary logic for 
    employers seeing who has applied to their events
    it does not currently have functionality
    for editing or deleting said events
    this needs to be edited to include that
    or a seperate event management component
    should be created to handle that
*/

class EmployerEvents extends Component {

    state = {
        showEvents: false,
        showEventDetail: false,
        detailEvent: {
            crew_member: [],
            name: ""
        }
    }

    setEventDetail = (event) => {
        this.setState({
            detailEvent: event,
            showEventDetail: true
        })
    }


    render() {
        return (
            <Context.Consumer>
                {context => (
                    <React.Fragment>
                        {/* button to toggle the showing of the rest of this component */}
                        <button onClick={() => this.setState({ showEvents: !this.state.showEvents })}>Toggle Events</button>

                        {/* check to see if the component state for showing the component is true */}
                        {this.state.showEvents ?
                            <React.Fragment>
                                {/* if user clicked a show detail button this component will render */}
                                {this.state.showEventDetail ?
                                    <EmployerEventViewDetail
                                        event={this.state.detailEvent}
                                    />
                                    :
                                    null
                                }

                                {/* map over the employers events and generate an employer event component for each */}
                                {context.state.employer_events.map(event => (
                                    <EmployerEvent
                                        key={event.id}
                                        event={event}
                                        setEventDetail={() => this.setEventDetail(event)}
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

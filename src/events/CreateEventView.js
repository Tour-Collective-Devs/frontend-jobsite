import React, { Component } from 'react'
import CreateEventForm from './CreateEventForm';
import { Context } from '../Provider';


class CreateEventView extends Component {


    render() {
        return (
            <React.Fragment>
                <Context.Consumer>
                    {context => (
                        <React.Fragment>
                            <h1>Create an Event</h1>
                            <CreateEventForm 
                                createEvent={context.createEvent}
                            />
                        </React.Fragment>
                    )}
                </Context.Consumer>
            </React.Fragment>
        )
    }
}

export default CreateEventView

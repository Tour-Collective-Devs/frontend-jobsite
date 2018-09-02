import React, { Component } from 'react'


class CreateEventForm extends Component {

    state = {
        name: "Awesome Event",
        description: "tour through the midwest",
        genres: [],
        role: "Audio Engineer",
        start_date: "2012-12-12",
        end_date: "2013-12-12",
        total_pay: 4000,
        show_count: 4,
        required_experience: "3 years",
        pay_type: "Daily",
    }


    submitForm = (evt) => {
        evt.preventDefault()
        console.log("event form submitted")
        this.props.createEvent()
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.submitForm}>
                    <input type="text" id="create-event__name" name="name" value="" placeholder="Event Name"/>
                    <input type="text" id="create-event__description" name="description" value="" placeholder="Description"/>
                    <input type="date" id="create-event__start_date" name="start_date" value=""/>
                    <input type="date" id="create-event__end_date" name="end_date" value=""/>
                    <input type="text" id="create-event__total_pay" name="total_pay" value="" placeholder="Total Pay"/>
                    <input type="text" id="create-event__show_count" name="show_count" value="" placeholder="Number of Shows"/>
                    <input type="text" id="create-event__required_experience" name="required_experience" value="" placeholder="Required Experience"/>

                    <button type="submit">Create Event</button>
                </form>
            </React.Fragment>
        )
    }
}

export default CreateEventForm

import React, { Component } from 'react'


class CreateEventForm extends Component {

    state = {
        name: "",
        description: "",
        genres: ["http://127.0.0.1:8000/api/genre/1/"],
        role: "http://127.0.0.1:8000/api/role/1/",
        start_date: "",
        end_date: "",
        total_pay: "",
        show_count: "",
        required_experience: "",
        pay_type: "day",
    }


    submitForm = (evt) => {
        evt.preventDefault()
        console.log("event form submitted")
        this.props.createEvent(this.state)
    }

    updateStringFields = (evt) => {
        let oldState = Object.assign({}, this.state)
        oldState[evt.target.name] = evt.target.value
        this.setState(oldState)
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.submitForm}>
                    <input type="text" onChange={this.updateStringFields} id="create-event__name" name="name" value={this.state.name} placeholder="Event Name"/>
                    <input type="text" onChange={this.updateStringFields} id="create-event__description" name="description" value={this.state.description} placeholder="Description"/>
                    <input type="date" onChange={this.updateStringFields} id="create-event__start_date" name="start_date" value={this.state.start_date}/>
                    <input type="date" onChange={this.updateStringFields} id="create-event__end_date" name="end_date" value={this.state.end_date}/>
                    <input type="text" onChange={this.updateStringFields} id="create-event__total_pay" name="total_pay" value={this.state.total_pay} placeholder="Total Pay"/>
                    <input type="text" onChange={this.updateStringFields} id="create-event__show_count" name="show_count" value={this.state.show_count} placeholder="Number of Shows"/>
                    <input type="text" onChange={this.updateStringFields} id="create-event__required_experience" name="required_experience" value={this.state.required_experience} placeholder="Required Experience"/>

                    <select id="create-event__pay_type" name="pay_type" onChange={this.updateStringFields}>
                        <option value="day">Daily</option>
                        <option value="upfront">Upfront</option>
                    </select>

                    <button type="submit">Create Event</button>
                </form>
            </React.Fragment>
        )
    }
}

export default CreateEventForm

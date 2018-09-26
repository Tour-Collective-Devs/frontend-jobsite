import React, { Component } from 'react'


class CreateEventForm extends Component {

    state = {
        event: {
            name: "",
            description: "",
            notes: "",
            genres: [],
            role: "",
            start_date: "",
            end_date: "",
            total_pay: "",
            show_count: "",
            required_experience: "",
            pay_type: "day",
        },
        formValid: false,
    }

    isFormValid = () => {
        if (this.state.event.name === '') return false
        if (this.state.event.description === '') return false
        if (this.state.event.notes === '') return false
        if (this.state.event.role === '') return false
        if (this.state.event.start_date === '') return false
        if (this.state.event.end_date === '') return false
        if (this.state.event.total_pay === '') return false
        if (this.state.event.show_count === '') return false
        if (this.state.event.required_experience === '') return false
        if (this.state.event.pay_type === '') return false
        if (this.state.event.genres.length === 0) return false
        return true
    }

    validateForm = () => {
        this.isFormValid() ? this.setState({formValid: true}) : this.setState({formValid: false})
    }


    submitForm = (evt) => {
        evt.preventDefault()
        console.log("event form submitted")
        this.props.createEvent(this.state.event)
    }

    updateStringFields = (evt) => {
        let state = Object.assign({}, this.state)
        state.event[evt.target.name] = evt.target.value
        this.setState(state, () => {
            this.validateForm()
        })
    }

    addGenre = (url) => {
        let state = Object.assign({}, this.state)
        state.event.genres.push(url)
        this.setState(state, () => {
            this.validateForm()
        })
    }

    removeGenre = (url) => {
        let state = Object.assign({}, this.state)
        const index = state.event.genres.findIndex(item => item === url)
        state.event.genres.splice(index, 1)
        this.setState(state, () => {
            this.validateForm()
        })
    }

    checkbox = (evt) => {
        console.log(evt)
        const checked = document.getElementById(evt.target.id).checked
        console.log(checked)
        checked ? this.addGenre(evt.target.value) : this.removeGenre(evt.target.value)
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.submitForm}>
                    <input type="text" onChange={this.updateStringFields} id="create-event__name" name="name" value={this.state.name} placeholder="Event Name" />
                    <input type="text" onChange={this.updateStringFields} id="create-event__description" name="description" value={this.state.description} placeholder="Description" />
                    <textarea onChange={this.updateStringFields} id="create-event__notes" name="notes" value={this.state.notes} placeholder="notes" />
                    <input type="date" onChange={this.updateStringFields} id="create-event__start_date" name="start_date" value={this.state.start_date} />
                    <input type="date" onChange={this.updateStringFields} id="create-event__end_date" name="end_date" value={this.state.end_date} />
                    <input type="text" onChange={this.updateStringFields} id="create-event__total_pay" name="total_pay" value={this.state.total_pay} placeholder="Total Pay" />
                    <input type="text" onChange={this.updateStringFields} id="create-event__show_count" name="show_count" value={this.state.show_count} placeholder="Number of Shows" />
                    <input type="text" onChange={this.updateStringFields} id="create-event__required_experience" name="required_experience" value={this.state.required_experience} placeholder="Required Experience" />

                    <select id="create-event__pay_type" name="pay_type" onChange={this.updateStringFields}>
                        <option value="day">Daily</option>
                        <option value="upfront">Upfront</option>
                    </select>

                    {/* select box for role the event needs filled */}
                    <select id="create-event__role" name="role" defaultValue={"default"} onChange={this.updateStringFields}>
                        <option disabled value={"default"}>Select a Role</option>
                        {this.props.roles.map(role => (
                            <option key={role.id} value={role.url}>{role.name}</option>
                        ))}
                    </select>

                    {this.props.genres.map(genre => (
                        <React.Fragment key={`fragment_${genre.id}`}>
                            <input type="checkbox" key={genre.id} id={`genre_checkbox_${genre.id}`} value={genre.url} onChange={this.checkbox}/><span key={`${genre.id}_span`}>{genre.name}</span>
                        </React.Fragment>
                    ))}

                    <button type="submit" disabled={!this.state.formValid}>Create Event</button>
                </form>
            </React.Fragment>
        )
    }
}

export default CreateEventForm

import React, { Component } from 'react'


class RegisterForm extends Component {

    state = {
        first_name: "",
        last_name: "",
        email: "",
        password1: "",
        password2: "",
        username: "",
        is_employer: false,
        is_crew_member: true,
    }

    submitForm = (evt) => {
        evt.preventDefault()
        if (this.state.is_employer === this.state.is_crew_member) {
            alert("error")
        } else {
            this.props.register(this.state)
        }
    }

    updateForm = (evt) => {
        const user = Object.assign({}, this.state)
        user[evt.target.name] = evt.target.value
        this.setState(user)
    }

    changeUserType = (evt) => {
        const userType = evt.target.value
        console.log(userType)
        if (userType === 'crew') {
            this.setState({
                is_employer: false,
                is_crew_member: true,
            })
        } else if (userType === 'employer') {
            this.setState({
                is_employer: true,
                is_crew_member: false,
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.submitForm}>

                    <input required type="text" id="register__first_name" name="first_name" placeholder="First Name" value={this.state.first_name} onChange={this.updateForm} />
                    <input required type="text" id="register__last_name" name="last_name" placeholder="Last Name" value={this.state.last_name} onChange={this.updateForm} />
                    <input required type="text" id="register__email" name="email" placeholder="you@website.com" value={this.state.email} onChange={this.updateForm} />
                    <input required type="text" id="register__username" name="username" placeholder="Username" value={this.state.username} onChange={this.updateForm} />
                    <input required type="password" id="register__password1" name="password1" placeholder="password" value={this.state.password1} onChange={this.updateForm} />
                    <input required type="password" id="register__password2" name="password2" placeholder="password" value={this.state.password2} onChange={this.updateForm} />
                    <select id="register__user_type" onChange={this.changeUserType}>
                        <option value="crew">Crew</option>
                        <option value="employer">Employer</option>
                    </select>
                    <button type="submit" >Sign Up!</button>
                </form>
            </React.Fragment>
        )
    }
}

export default RegisterForm

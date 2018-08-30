import React, { Component } from 'react'


class RegisterForm extends Component {

    state = {
        first_name: "",
        last_name: "",
        email: "",
        password1: "",
        password2: "",
        username: "",
    }

    submitForm = (evt) => {
        evt.preventDefault()
        this.props.register(this.state)
    }

    updateForm = (evt) => {
        const user = Object.assign({}, this.state)
        user[evt.target.name] = evt.target.value
        this.setState(user)
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.submitForm}>
                    <input type="text" id="register__first_name" name="first_name" placeholder="First Name" value={this.state.first_name} onChange={this.updateForm} />
                    <input type="text" id="register__last_name" name="last_name" placeholder="Last Name" value={this.state.last_name} onChange={this.updateForm} />
                    <input type="text" id="register__email" name="email" placeholder="you@website.com" value={this.state.email} onChange={this.updateForm} />
                    <input type="text" id="register__username" name="username" placeholder="Username" value={this.state.username} onChange={this.updateForm} />
                    <input type="password" id="register__password1" name="password1" placeholder="password" value={this.state.password1} onChange={this.updateForm} />
                    <input type="password" id="register__password2" name="password2" placeholder="password" value={this.state.password2} onChange={this.updateForm} />
                    <button type="submit" >Sign Up!</button>
                </form>
            </React.Fragment>
        )
    }
}

export default RegisterForm

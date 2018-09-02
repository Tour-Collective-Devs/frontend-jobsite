import React, { Component } from 'react'


class LoginForm extends Component {

    state = {
        username: "",
        password: "",
        email: "",
    }

    updateForm = (evt) => {
        const user = Object.assign({}, this.state)
        user[evt.target.name] = evt.target.value
        this.setState(user)
    }

    submitForm = (evt) => {
        evt.preventDefault()
        this.props.logIn(this.state)
    }


    render() {
        return (
            <form onSubmit={this.submitForm}>

                <input type="text" id="login__email" name="email" placeholder="you@website.com" value={this.state.email} onChange={this.updateForm} />
                <input type="text" id="login__username" name="username" placeholder="Username" value={this.state.username} onChange={this.updateForm} />
                <input type="password" id="login__password" name="password" placeholder="password" value={this.state.password} onChange={this.updateForm} />
                <button type="submit" >Log In</button>
            </form>
        )
    }
}

export default LoginForm

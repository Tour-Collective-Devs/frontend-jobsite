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
                {/* 
                    the following code block is used 
                    redirect the user back to the home page
                    once they have sucsessfully logged in
                    after the full registration cycle is completed,
                    providers state will contain the users auth token
                    which will make the 'isLoggedIn' method return true
                    which will then render the redirectHome method which
                    returns a redirect component to the home page
                */}
                {this.props.isLoggedIn() ? this.props.redirect('/') : null}

                <input type="text" id="login__email" name="email" placeholder="you@website.com" value={this.state.email} onChange={this.updateForm} />
                <input type="text" id="login__username" name="username" placeholder="Username" value={this.state.username} onChange={this.updateForm} />
                <input type="password" id="login__password" name="password" placeholder="password" value={this.state.password} onChange={this.updateForm} />
                <button type="submit" >Log In</button>
            </form>
        )
    }
}

export default LoginForm

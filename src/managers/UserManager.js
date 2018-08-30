import APIManager from "./APIManager";

/* 
    module: user manager
    author: riley mathews
    purpose: to hold methods pertaining to managing user information throughout the application
*/


const UserManager = Object.create(null, {

    // method for registering a new user
    register: {
        value: function (userToRegister) {
            
            APIManager.registerNewUser(userToRegister)
                .then(r => r.json())
                .then(response => {
                    const token = response.key
                    this.setState({ userToken: token })
                    localStorage.setItem('token', token)
                })
        }
    }

})

export default UserManager
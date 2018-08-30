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
            // pass user object onto api manager
            APIManager.registerNewUser(userToRegister)
                .then(r => r.json())
                .then(response => {
                    // check to see if response is the key, indicated a sucsessful registration
                    if (response.key) {
                        // get the token
                        const token = response.key
                        // set token in state and local storage to be used in future requests to api
                        this.setState({ userToken: token })
                        localStorage.setItem('token', token)
                    
                    // else logic to run if response did not contain an auth token
                    } else {
                        // build up error string
                        let errorString = ""
                        // add to error string for each item in the error response object from django
                        for (const key in response) {
                            errorString += `${key}: ${response[key]} \n`
                        }
                        alert(errorString)
                    }
                })
        }
    }

})

export default UserManager
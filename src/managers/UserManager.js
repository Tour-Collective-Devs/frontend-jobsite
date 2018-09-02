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
    },


    // method to log the user in
    logIn: {
        value: function (userToLogIn) {
            APIManager.logInUser(userToLogIn)
                .then(r => r.json())
                .then(response => {
                    if (response.key) {
                        const token = response.key
                        console.log(response)
                        this.setState({ userToken: token })
                        localStorage.setItem('token', token)
                        return true
                    } else {
                        alert("sorry something wen't wrong")
                    }
                })
        }
    },


    // method to log the user out
    logOut: {
        value: function () {
            console.log('logging out')
            APIManager.logOutUser()
                .then(r => r.json())
                .then(response => {
                    this.setState({userToken: ""})
                    localStorage.removeItem("token")
                })
        }
    },


    // method to check if the user is logged in
    isLoggedIn: {
        value: function () {
            return this.state.userToken === "" ? false : true
        }
    },
    loadUserInformation: {
        value: function () {
            APIManager.getUserInformation()
            .then(r => r.json())
            .then(userInfo => {
                const user = userInfo[0]
                if (user.is_employer) {
                    APIManager.getEmployerInformation()
                    .then(r => r.json())
                    .then(employerInfo => {
                        const employer = employerInfo[0]
                        this.setState({
                                user: {
                                        first_name: user.first_name,
                                        last_name: user.last_name,
                                        email: user.email,
                                        username: user.username,
                                        isEmployer: user.is_employer,
                                        isCrew: user.is_crew_member,
                                    },
                                employer: {
                                        organization: employer.organization_name
                                }
                                })
                    })
                } else {
                    APIManager.getCrewInformation()
                    .then(r => r.json())
                    .then(crewInfo => {
                        const crew = crewInfo[0]
                        console.log('what are you',crew)
                        this.setState({
                            user: {
                                first_name: user.first_name,
                                last_name: user.last_name,
                                email: user.email,
                                username: user.username,
                                isEmployer: user.is_employer,
                                isCrew: user.is_crew_member,
                            },
                            crewMember: {
                                roles: crew.roles,
                                city: crew.city,
                                state: crew.state,
                                willTravel: crew.will_travel
                            }

                        })
                    })
                }
            })
        }
    }

})

export default UserManager
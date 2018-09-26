import APIManager from "./APIManager";
import history from '../history'

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
            const userObj = {
                first_name: userToRegister.first_name,
                last_name: userToRegister.last_name,
                email: userToRegister.email,
                password: userToRegister.password1,
                username: userToRegister.username,
                is_employer: userToRegister.is_employer,
                is_crew_member: userToRegister.is_crew_member,
            }
            APIManager.registerNewUser(userObj)
                .then(r => r.json())
                .then(response => {
                    // check to see if response is the key, indicated a sucsessful registration
                    if (response.token) {
                        // get the token
                        const token = response.token
                        // set token in state and local storage to be used in future requests to api
                        this.setState({ userToken: token })
                        localStorage.setItem('token', token)
                        // set user profile type based on what profile they are creating
                        const userProfileType = userObj.is_crew_member ? "crew_member" : "employer"

                        // create user profile data based on what type of user they are creating
                        const userProfileData = userObj.is_crew_member ? {
                            city: userToRegister.city,
                            state: userToRegister.state,
                            will_travel: userToRegister.will_travel,
                        } : {
                            organization_name: userToRegister.organization_name
                        }


                        APIManager.createUsersProfile(userProfileData, userProfileType)
                            .then(r => r.json())
                            .then(response => {
                                console.log(response)
                                this.setUserState(response.user)
                                delete response.user
                                console.log(response)
                                this.setProfileState(userProfileType, response)
                            })
                        history.push('/')
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
                    if (response.token) {
                        const token = response.token
                        console.log(response)
                        this.setState({ userToken: token })
                        localStorage.setItem('token', token)
                        this.loadUserInformation()
                        history.push('/')
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
            this.clearUserInformation()
            history.push('/')
        }
    },


    // method to check if the user is logged in
    isLoggedIn: {
        value: function () {
            return this.state.userToken === "" ? false : true
        }
    },

    // method to load user information
    loadUserInformation: {
        value: function () {
            APIManager.getUserInformation()
            .then(r => r.json())
            .then(userInfo => {
                console.log(userInfo)
                const user = userInfo[0]
                this.setUserState(user)

                // if the user is an employer
                // get their information
                if (user.is_employer) {
                    // get their events and set them in state
                    this.getEmployerEvents()
                    // get their profile information from the api
                    APIManager.getEmployerInformation()
                    .then(r => r.json())
                    .then(employerInfo => {
                        const employer = employerInfo[0]
                        this.setProfileState(employer, 'employer')
                    })

                // else get crew member information
                } else {
                    this.getCrewProfile()
                }
            })
        }
    },

    // method to clear user information from app
    clearUserInformation: {
        value: function() {
            localStorage.removeItem("token")
            this.setState({
                userToken: "",
                user: {
                    first_name: "",
                    last_name: "",
                    email: "",
                    username: "",
                    isEmployer: false,
                    isCrew: false
                },
                crew_member: {
                    roles: [],
                    city: "",
                    state: "",
                    willTravel: false,
                },
                employer: {
                    organization_name: ""
                },
            })
        }
    },

    setUserState: {
        value: function(userObj) {
            this.setState({user: userObj})
        }
    },

    setProfileState: {
        value: function(profileData, profileType) {
            this.setState({
                [profileType]: profileData
            })
        }
    },

    addCrewMemberRole: {
        value: function(data) {
            APIManager.post(data, 'crew_member_role')
            .then(r => r.json())
            .then(response => {
                this.getCrewProfile()
            })
        }
    },

    getCrewProfile: {
        value: function() {
            APIManager.getCrewInformation()
            .then(r => r.json())
            .then(crewInfo => {
                const crew = crewInfo[0]
                this.setProfileState(crew, 'crew_member')
                this.getCrewRoles(crew.id)
            })
        }
    },

    getCrewRoles: {
        value: function(id) {
            APIManager.getCollection('crew_member_role', `crew_member=${id}`)
            .then(r => r.json())
            .then(roles => {
                this.setState({
                    crew_member_roles: roles
                })
            })
        }
    }

})

export default UserManager
/*
    module: api manager
    author: riley mathews
    purpose: to handle all calls to the api
*/

// variable to hold url, this will change in production vs development
const url = "http://127.0.0.1:8000/api/"

const APIManager = Object.create(null, {

    authHeader: {
        value: {
            "content-type": "application/json",
            "Authorization": `Token ${localStorage.getItem('token')}`
        }
    },

    basicJsonHeader: {
        value: {
            "content-type": "application/json"
        }
    },

    // function to post a user object to the registration endpoint of the api
    registerNewUser: {
        value: function (userData) {
            return fetch(`${url}auth/register/`, {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: this.basicJsonHeader
            })
        }
    }, // end of registerNewUser method

    // method to create a new user profile
    createUsersProfile: {
        value: function (data, profileType) {
            return fetch(`${url}${profileType}/`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "content-type": "application/json",
                    "Authorization": `Token ${localStorage.getItem('token')}`
                }
            })
        }
    },

    logInUser: {
        value: function (userData) {
            return fetch(`${url}auth/login/`, {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: this.basicJsonHeader
            })
        }
    }, // end of login user method

    // method to post token to logout endpoint
    logOutUser: {
        value: function () {
            return fetch(`${url}user-auth/logout/`, {
                method: 'POST',
                headers: this.authHeader
            })
        }
    },
    getUserInformation: {
        value: function () {
            return fetch(`${url}user/`, {
                headers: {
                    'content-type': 'application/json',
                    'Authorization': `Token ${localStorage.getItem('token')}`
                }
            })
        }
    },
    getCrewInformation: {
        value: function () {
            return fetch(`${url}crew_member/`, {
                headers: {
                    'content-type': 'application/json',
                    'Authorization': `Token ${localStorage.getItem('token')}`
                }
            })
        }
    },
    getEmployerInformation: {
        value: function () {
            return fetch(`${url}employer/`, {
                headers: {
                    'content-type': 'application/json',
                    'Authorization': `Token ${localStorage.getItem('token')}`
                }
            })
        }
    },
    // method to load genre information
    getGenres: {
        value: function () {
            return fetch(`${url}genre/`)
        }
    },
    getRoles: {
        value: function () {
            return fetch(`${url}role/`)
        }
    },

    // method for posting an event
    postEvent: {
        value: function (event) {
            return fetch(`${url}event/`, {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                    'Authorization': `Token ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify(event)
            })
        }
    },
    post: {
        value: function(data, collection) {
            return fetch(`${url}${collection}/`, {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                    'Authorization': `Token ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify(data)
            })
        }
    }

})

export default APIManager
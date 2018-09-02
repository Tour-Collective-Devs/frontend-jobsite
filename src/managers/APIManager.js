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
            return fetch(`${url}user/registration/`, {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: this.basicJsonHeader
            })
        }
    }, // end of registerNewUser method

    logInUser: {
        value: function (userData) {
            return fetch(`${url}user-auth/login/`, {
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
    }

})

export default APIManager
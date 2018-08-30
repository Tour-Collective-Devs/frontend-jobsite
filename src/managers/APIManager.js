/*  
    module: api manager
    author: riley mathews
    purpose: to handle all calls to the api
*/

// variable to hold url, this will change in production vs development
const url = "http://127.0.0.1:8000/api/"

const APIManager = Object.create(null, {

    // function to post a user object to the registration endpoint of the api
    registerNewUser: {
        value: function (userData) {
            return fetch(`${url}user/registration/`, {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: {
                    "Content-type": "application/json"
                }
            })
        }
    } // end of registerNewUser method


})

export default APIManager
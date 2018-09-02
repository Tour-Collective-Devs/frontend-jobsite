import APIManager from "./APIManager";

/*  
    module: event manager
    author: riley mathews
    purpose: to hold methods pertaining to handeling event data in the application
*/

const EventManager = Object.create(null, {
    
    createEvent: {
        value: function(event) {
            console.log("event created", event)
            APIManager.postEvent(event)
                .then(r => r.json())
                .then(response => {
                    console.log(response)
                })
        }
    }

})

export default EventManager
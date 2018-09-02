/*  
    module: event manager
    author: riley mathews
    purpose: to hold methods pertaining to handeling event data in the application
*/

const EventManager = Object.create(null, {
    
    createEvent: {
        value: function() {
            console.log("event created")
        }
    }

})

export default EventManager
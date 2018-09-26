import APIManager from "./APIManager";

/*  
    module: event manager
    author: riley mathews
    purpose: to hold methods pertaining to handeling event data in the application
*/

const EventManager = Object.create(null, {

    createEvent: {
        value: function (event) {
            console.log("event created", event)
            APIManager.postEvent(event)
                .then(r => r.json())
                .then(response => {
                    console.log(response)
                    // add new event to apps state
                    const events = [...this.state.employer_events]
                    events.push(response)
                    this.setState({ employer_events: events })
                })
        }
    },

    getEmployerEvents: {
        value: function () {
            APIManager.getCollection("event", "employer=true")
                .then(r => r.json())
                .then(response => {
                    console.log(response)
                    this.setState({ employer_events: response })
                })
        }
    }

})

export default EventManager
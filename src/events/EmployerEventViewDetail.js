import React, { Component } from 'react'
import EmployerEventApplicants from './EmployerEventApplicants';

/*  
    module: employer event view detail
    author: riley mathews
    purpose: to show the details of an event passed to it
*/

/*  
    this component is currently called when the user is viewing
    their list of events on their profile and click the show
    detail button on that event
*/


class EmployerEventViewDetail extends Component {


    render() {
        return (
            <React.Fragment>
                <h4>{this.props.event.name}</h4>
                <p>Applicants:</p>
                <EmployerEventApplicants 
                    applicants={this.props.event.crew_member}
                />
            </React.Fragment>
        )
    }
}

export default EmployerEventViewDetail

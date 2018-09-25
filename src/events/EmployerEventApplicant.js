import React, { Component } from 'react'


class EmployerEventApplicant extends Component {


    render() {
        return (
            <React.Fragment>
                {/* an individual applicant component to be used for each applicant of an event */}
                <p>{this.props.applicant.user.first_name}. email: {this.props.applicant.user.email}</p>
            </React.Fragment>
        )
    }
}

export default EmployerEventApplicant

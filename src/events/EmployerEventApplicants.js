import React, { Component } from 'react'
import EmployerEventApplicant from './EmployerEventApplicant';


class EmployerEventApplicants extends Component {


    render() {
        return (
            <React.Fragment>
                {/* if the event has applicants, render a list of applicants, else say there are no applicants */}
                {this.props.applicants.length !== 0 ?
                    <React.Fragment>
                        {this.props.applicants.map(applicant => (
                            <EmployerEventApplicant key={applicant.user.id} applicant={applicant} />
                        ))}
                    </React.Fragment>
                    :
                    <p>This event has no applicants</p>
                }

            </React.Fragment>
        )
    }
}

export default EmployerEventApplicants

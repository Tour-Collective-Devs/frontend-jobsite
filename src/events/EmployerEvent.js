import React, { Component } from 'react'
import EmployerEventApplicants from './EmployerEventApplicants';


class EmployerEvent extends Component {

    state = {
        showApplicants: false,
    }


    render() {
        return (
            <React.Fragment>
                <div className="test">
                    <p>{this.props.event.name}</p>
                    {/* button to toggle state of showing applicants or not */}
                    <button onClick={() => this.setState({ showApplicants: !this.state.showApplicants })}>Toggle Applicants</button>
                    {/* if the user wants to see applicants render an applicants component passing in this events applicants */}
                    {this.state.showApplicants ?
                        <EmployerEventApplicants
                            applicants={this.props.event.crew_member}
                        />
                        :
                        null
                    }

                </div>
            </React.Fragment>
        )
    }
}

export default EmployerEvent

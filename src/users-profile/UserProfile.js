import React, { Component } from 'react'
import CrewProfile from './CrewProfile';
import EmployerProfile from './EmployerProfile';
import ErrorPage from '../ErrorPage';


class UserProfile extends Component {
    /*
        TEST CODE FOLLOWING
        DO NOT KEEP THIS CODE INTO PRODUCTION
        THIS INFORMATION WILL EVENTUALLY COME FROM
        CURRENT USER CALL FROM API
    */
    state = {
        user_type: 'crew'
        // user_type: 'employer'
    }
    /*
        END TEST CODE
    */

    renderApplicableProfilePage = () => {
        // function to render employer or crew profile based on current user
        switch (this.state.user_type) {
            case 'crew':
                return <CrewProfile />
                break;
            case 'employer':
                return <EmployerProfile />
                break;
            default:
                return <ErrorPage />
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.renderApplicableProfilePage()}
            </React.Fragment>
        )
    }
}

export default UserProfile

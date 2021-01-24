import {Link} from "react-router-dom";
import React from "react";
import "../../css/user-home-style.css"
import {connect} from "react-redux";
import {getProfile, logout} from "../../services/AdminService";


class ResidentNav extends React.Component {
    logout = () => {
        logout()
        // getProfile().then(response => {console.log(JSON.stringify(response))})
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light user-nav">
                    <a className="navbar-brand d-none d-md-block" href="#"><h3>Resident Management System</h3></a>
                    <div className="" id="navbarSupportedContent">
                        <div className="navbar-nav ml-auto">
                            <Link to={`/resident/${this.props.user._id}/profile`} className="nav-item nav-link user-nav-item">
                                Profile
                            </Link>
                            <Link to={`/resident/${this.props.user._id}/payments`} className="nav-item nav-link user-nav-item">
                                Make Payments
                            </Link>
                            <Link to={`/resident/${this.props.user._id}/adminContacts`} className="nav-item nav-link user-nav-item">
                                Maintenance Requests
                            </Link>
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}

export default ResidentNav


import {Link} from "react-router-dom";
import React from "react";
import "../../Admin.style.css"
import {getProfile, logout} from "../../services/AdminService";

class AdminNav extends React.Component {

    logout = () => {
        logout()
        // getProfile().then(response => {console.log(JSON.stringify(response))})
    }

    // getProfile = () => {
    //     getProfile().then(response => {console.log(JSON.stringify(response))})
    // }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light user-nav">
                    <a className="navbar-brand" href="#"><h3>Admin Management System</h3></a>
                    <div className="" id="navbarSupportedContent">
                        <div className="navbar-nav ml-auto">
                            <Link to={`/admin/${this.props.admin._id}/admin/management`} className="nav-item nav-link user-nav-item">
                                Admin Management
                            </Link>
                            <Link to={`/admin/${this.props.admin._id}/resident/management`} className="nav-item nav-link user-nav-item">
                                Resident Management
                            </Link>
                            <Link to={`/admin/${this.props.admin._id}/plans`} className="nav-item nav-link user-nav-item">
                                Unit Management
                            </Link>
                            <Link to={`/admin/${this.props.admin._id}/profile`} className="nav-item nav-link user-nav-item">
                                Profile
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default AdminNav

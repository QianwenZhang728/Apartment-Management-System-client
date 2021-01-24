import React from "react";
import "../../css/user-home-style.css";
import "../../css/admin-profile-card.css";
import {findAdminById, getProfile} from "../../services/AdminService";
import ResidentNav from "./ResidentNav";

class AdminProfileCard extends React.Component {
    state = {
        resident: {},
        admin: {}
    }

    componentDidMount() {
        const adminId = this.props.match.params.adminId
        if (adminId) {
            findAdminById(adminId)
                .then(user => {
                    this.setState({admin: user})
                })
        }
        getProfile().then(response => {
            this.setState({user: response})
            console.log(JSON.stringify(response))
        })
    }

    render() {
        return(
            <div className="resident-body admin-card">
                <ResidentNav user={this.state.resident}/>
                <h3 className="text-center card-title">Admin Contact Card</h3>
                <div className="container-fluid admin-contact-card">
                    <form className="user-login-form">
                        <div className="form-group row admin-contact-item">
                            <h4>First Name: {this.state.admin.firstName}</h4>
                        </div>

                        <div className="form-group row admin-contact-item">
                            <h4>Last Name: {this.state.admin.lastName}</h4>
                        </div>

                        <div className="form-group row admin-contact-item">
                            <h4>Role: {this.state.admin.role}</h4>
                        </div>

                        <div className="form-group row admin-contact-item">
                            <h4>Email: {this.state.admin.email}</h4>
                        </div>

                        <div className="form-group row admin-contact-item">
                            <h4>Phone Number: {this.state.admin.phoneNumber}</h4>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default AdminProfileCard

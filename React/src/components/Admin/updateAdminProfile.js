import React from "react";
import {Link} from "react-router-dom";
import {findAdminById, updateAdmin} from "../../services/AdminService";

export default class updateAdminProfile extends  React.Component {
    state = {
        admin: {},
        editing: false
    }

    updateAdmin = (newAdmin) => {
        updateAdmin(this.props.match.params.userId, newAdmin)
            .then(alert("You have updated your profile successfully."))
        this.setState({editing: false})
    }

    componentDidMount() {
        const userId = this.props.match.params.userId
        if (userId) {
            findAdminById(userId)
                .then(admin => {
                    this.setState({admin: admin})
                })
        }
    }

    render() {
        return (
            <div className="wbdv-admin-login-header container">
                <h1>Profile</h1>
                <div className="container">
                    <div className="form-group row">
                        <label htmlFor="usernameFld" className="col-sm-2 col-form-label">
                            Username </label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-field wbdv-username"
                                   id="usernameFld"
                                   placeholder={this.state.admin.userName}
                                   onChange={(event) => {
                                       const newUserName = event.target.value
                                       this.setState(prevState => ({
                                           admin: {...prevState.admin, userName: newUserName}
                                       }))}
                                   }
                                   value={this.state.admin.userName}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="passwordFld" className="col-sm-2 col-form-label">
                            Password </label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-field wbdv-username"
                                   id="passwordFld"
                                   placeholder={this.state.admin.password}
                                   onChange={(event) => {
                                       const newPassword = event.target.value
                                       this.setState(prevState => ({
                                           admin: {...prevState.admin, password: newPassword}
                                       }))}
                                   }
                                   value={this.state.admin.password}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="firstNameFld" className="col-sm-2 col-form-label">
                            First Name </label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-field wbdv-username"
                                   id="firstNameFld"
                                   placeholder={this.state.admin.firstName}
                                   onChange={(event) => {
                                       const newFirstName = event.target.value
                                       this.setState(prevState => ({
                                           admin: {...prevState.admin, firstName: newFirstName}
                                       }))}
                                   }
                                   value={this.state.admin.firstName}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="lastNameFld" className="col-sm-2 col-form-label">
                            Last Name </label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-field wbdv-username"
                                   id="lastNameFld"
                                   placeholder={this.state.admin.lastName}
                                   onChange={(event) => {
                                       const newLastName = event.target.value
                                       this.setState(prevState => ({
                                           admin: {...prevState.admin, lastName: newLastName}
                                       }))}
                                   }
                                   value={this.state.admin.lastName}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="phoneFld" className="col-sm-2 col-form-label">
                            Phone </label>
                        <div className="col-sm-10">
                            <input type="tel" className="form-control wbdv-field wbdv-phone"
                                   id="phoneFld" placeholder="(555) 123-4324"
                                   placeholder={this.state.admin.phoneNumber}
                                   onChange={(event) => {
                                       const newPhoneName = event.target.value
                                       this.setState(prevState => ({
                                           admin: {...prevState.admin, phoneNumber: newPhoneName}
                                       }))}
                                   }
                                   value={this.state.admin.phoneNumber}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="emailFld" className="col-sm-2 col-form-label">
                            Email </label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control wbdv-field wbdv-email"
                                   id="emailFld"
                                   placeholder={this.state.admin.email}
                                   onChange={(event) => {
                                       const newEmail = event.target.value
                                       this.setState(prevState => ({
                                           admin: {...prevState.admin, email: newEmail}
                                       }))}
                                   }
                                   value={this.state.admin.email}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="roleFld" className="col-sm-2 col-form-label">
                            Role </label>
                        <div className="col-sm-10">
                            <select className="form-control wbdv-field wbdv-role" id="roleFld"
                                    onChange={(event) => {
                                        const newRole = event.target.value
                                        this.setState(prevState => ({
                                            admin: {...prevState.admin, role: newRole}
                                        }))}
                                    }
                                    value={this.state.admin.role}>
                                <option value="Receptionist" selected>Receptionist</option>
                                <option value="Cleaner">Cleaner</option>
                                <option value="Repairman">Repairman</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="updateBtn" className="col-sm-2 col-form-label"/>
                        <div className="col-sm-10">
                            <button id="updateBtn" className="btn btn-success btn-block wbdv-button wbdv-update"
                                    onClick={() => this.updateAdmin(this.state.admin)}>
                                Update
                            </button>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="updateBtn" className="col-sm-2 col-form-label"/>
                        <div className="col-sm-10">
                            <Link to={`/admin/${this.props.match.params.userId}`} id="updateBtn" className="btn btn-danger btn-block wbdv-button wbdv-update">
                                Go back
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

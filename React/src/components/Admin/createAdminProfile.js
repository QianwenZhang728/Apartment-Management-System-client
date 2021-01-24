import React from "react";
import {Link} from "react-router-dom";
import {createAdmin} from "../../services/AdminService";
import "../../css/user-signup-style.css";

class CreateAdminProfile extends React.Component {

    state = {
        admins: [],
        recordUserName: "",
        recordPassword: "",
        recordFirstName: "",
        recordLastName: "",
        recordEmail: "",
        recordPhoneNumber: "",
        recordRole: "Receptionist",
        admin: {},
    }

    addAdmin = () => {
        const newAdmin = {
            userName: this.state.recordUserName,
            password: this.state.recordPassword,
            firstName: this.state.recordFirstName,
            lastName: this.state.recordLastName,
            email: this.state.recordEmail,
            phoneNumber: this.state.recordPhoneNumber,
            role: this.state.recordRole,
            type: "Admin"
        }

        createAdmin(newAdmin)
            .then(actualAdmin => this.setState(prevState => ({
                admins: [
                    ...prevState.admins, actualAdmin
                ]
            })))
            .then(alert("You have created a new account succesfully."))
    }

    render () {
        return (
            <div className="container-fluid user-signup-template">
                <div className="user-signup-card container">
                    {/*<h1>Profile</h1>*/}

                    <div className="form-group row">
                        <label htmlFor="usernameFld" className="col-sm-2 col-form-label">
                            Username </label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-field wbdv-username"
                                   id="usernameFld"
                                   placeholder="Alice"
                                   onChange={(event) => {
                                       this.state.recordUserName = event.target.value
                                   }}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="passwordFld" className="col-sm-2 col-form-label">
                            Password </label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-field wbdv-username"
                                   id="passwordFld"
                                   placeholder="123"
                                   onChange={(event) => {
                                       this.state.recordPassword = event.target.value
                                   }}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="firstNameFld" className="col-sm-2 col-form-label">
                            First Name </label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-field wbdv-username"
                                   id="firstNameFld"
                                   placeholder="alice"
                                   onChange={(event) => {
                                       this.state.recordFirstName = event.target.value
                                   }}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="lastNameFld" className="col-sm-2 col-form-label">
                            Last Name </label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-field wbdv-username"
                                   id="lastNameFld"
                                   placeholder="Wang"
                                   onChange={(event) => {
                                       this.state.recordLastName = event.target.value
                                   }}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="phoneFld" className="col-sm-2 col-form-label">
                            Phone </label>
                        <div className="col-sm-10">
                            <input type="tel" className="form-control wbdv-field wbdv-phone"
                                   id="phoneFld" placeholder="(555) 123-4324"
                                   onChange={(event) => {
                                       this.state.recordPhoneNumber = event.target.value
                                   }}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="emailFld" className="col-sm-2 col-form-label">
                            Email </label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control wbdv-field wbdv-email"
                                   id="emailFld" placeholder="alice@wondeiland.com"
                                   onChange={(event) => {
                                       this.state.recordEmail = event.target.value
                                   }}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="roleFld" className="col-sm-2 col-form-label">
                            Role </label>
                        <div className="col-sm-10">
                            <select className="form-control wbdv-field wbdv-role" id="roleFld"
                                    onChange={(event) => {
                                        this.state.recordRole = event.target.value}}>
                                <option value="Receptionist" selected>Receptionist</option>
                                <option value="Cleaner">Cleaner</option>
                                <option value="Repairman">Repairman</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="updateBtn" className="col-sm-2 col-form-label"/>
                        <div className="col-sm-10">
                            <button id="updateBtn" className="btn btn-info btn-block wbdv-button wbdv-update" onClick={this.addAdmin}>
                                Create
                            </button>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="updateBtn" className="col-sm-2 col-form-label"/>
                        <div className="col-sm-10">
                            <Link to="/admin" id="updateBtn" className="btn btn-secondary btn-block wbdv-button wbdv-update">
                                Go to Login
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default CreateAdminProfile

import React from "react";
import {Link} from "react-router-dom";
import "../../css/user-signup-style.css";
import {createUser} from "../../services/UserService"

class ResidentSignUp extends React.Component {
    state = {
        recordUserName: "",
        recordFirstName: "",
        recordLastName: "",
        recordPassword: "",
        recordEmail: "",
        recordPhoneNumber: "",
        role: ""
    }

    create = () => {
        const newResident = {
            userName: this.state.recordUserName,
            password: this.state.recordPassword,
            firstName: this.state.recordFirstName,
            lastName: this.state.recordLastName,
            email: this.state.recordEmail,
            phoneNumber: this.state.recordPhoneNumber,
            role: this.state.recordApartmentNumber,
            type: "Resident"
        }

        return createUser(newResident)
            .then(resident => {
                alert("You have created a new account successfully.")
            })
    }

    render () {
        return (
            <div className="container-fluid user-signup-template">
                <h1>Welcome to Team-20 Apartment</h1>

                <div className="user-signup-card container">
                    <div className="form-group row">
                        <label htmlFor="usernameFld" className="col-sm-2 col-form-label text-left">
                            User Name </label>
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
                        <label htmlFor="firstnameFld" className="col-sm-2 col-form-label text-left">
                            First Name </label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-field wbdv-firstname"
                                   id="firstnameFld"
                                   placeholder="Alice"
                                   onChange={(event) => {
                                       this.state.recordFirstName = event.target.value
                                   }}/>
                        </div>
                    </div>


                    <div className="form-group row">
                        <label htmlFor="lastnameFld" className="col-sm-2 col-form-label text-left">
                            Last Name </label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-field wbdv-lastname"
                                   id="lastnameFld"
                                   placeholder="Wang"
                                   onChange={(event) => {
                                       this.state.recordLastName = event.target.value
                                   }}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="apartmentFld" className="col-sm-2 col-form-label text-left">
                            Apartment Number </label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-field wbdv-apartment"
                                   id="apartmentFld"
                                   placeholder="101"
                                   onChange={(event) => {
                                       this.state.recordApartmentNumber = event.target.value
                                   }}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="phoneFld" className="col-sm-2 col-form-label text-left">
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
                        <label htmlFor="emailFld" className="col-sm-2 col-form-label text-left">
                            Email </label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control wbdv-field wbdv-email"
                                   id="emailFld" placeholder="alice@wondeiland.com"
                                   onChange={(event) => {
                                       this.state.recordEmail = event.target.value
                                   }}/>
                        </div>
                    </div>

                    {/*<div className="form-group row">*/}
                    {/*    <label htmlFor="roleFld" className="col-sm-2 col-form-label">*/}
                    {/*        Role </label>*/}
                    {/*    <div className="col-sm-10">*/}
                    {/*        <select className="form-control wbdv-field wbdv-role" id="roleFld">*/}
                    {/*            <option value="Faculty">Faculty</option>*/}
                    {/*            <option value="Student">Student</option>*/}
                    {/*            <option value="Admin">Admin</option>*/}
                    {/*        </select>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className="form-group row">
                        <label htmlFor="Password" className="col-sm-2 col-form-label text-left">
                            Password </label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control wbdv-field wbdv-dob"
                                   id="Password"
                                   onChange={(event) => {
                                       this.state.recordPassword = event.target.value
                                   }}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="updateBtn" className="col-sm-2 col-form-label"/>
                        <div className="col-sm-10">
                            <Link to="/resident/login" id="signUpBtn" className="btn btn-info btn-block wbdv-button wbdv-update"
                            onClick={() => this.create()}>
                                Sign up
                            </Link>
                        </div>
                    </div>

                    {/*<div className="form-group row">*/}
                    {/*    <label htmlFor="updateBtn" className="col-sm-2 col-form-label"></label>*/}
                    {/*    <div className="col-sm-10">*/}
                    {/*        <Link to="/resident/login" id="updateBtn" className="btn btn-secondary btn-block wbdv-button wbdv-update">*/}
                    {/*            Log in*/}
                    {/*        </Link>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                </div>
            </div>
        )
    }

}

export default ResidentSignUp

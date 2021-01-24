import React from "react";
import ResidentNav from "./ResidentNav";
import "../../css/user-home-style.css";
import {updateUser} from "../../services/UserService";
import {getProfile} from "../../services/AdminService";
import {Link} from "react-router-dom";

export default class ResidentProfile extends React.Component {
    state = {
        user: {},
        editing: false,
    }

    update = (newUser) => {
        updateUser(this.props.match.params.userId, newUser)
            .then(response => alert("You have updated your profile successfully."))
        this.setState({editing: false})
    }

    componentDidMount() {
        getProfile().then(response => {
            this.setState({user: response})
            console.log(JSON.stringify(response))
        })

        // const userId = this.props.match.params.userId
        // if (userId) {
        //     findUserById(userId)
        //         .then(user => {
        //             this.setState({user: user})
        //         })
        // }
    }

    render() {
        return (
            <div className="resident-body ">
                <ResidentNav user={this.state.user}/>

                {
                    !this.state.editing &&
                    <div className="container-fluid user-profile-card">
                        <form className="user-login-form">
                            <div className="form-group row user-login-item">
                                <h5> User Name: {this.state.user.userName}</h5>
                            </div>

                            <div className="form-group row user-login-item">
                                <h5>First Name: {this.state.user.firstName}</h5>
                            </div>

                            <div className="form-group row user-login-item">
                                <h5>Last Name：<span>{this.state.user.lastName}</span></h5>
                            </div>

                            <div className="form-group row user-login-item">
                                <h5> Password: <span>{this.state.user.password}</span></h5>
                            </div>

                            <div className="form-group row user-login-item">
                                <h5>Email: <span>{this.state.user.email}</span></h5>
                            </div>

                            <div className="form-group row user-login-item">
                                <h5>Phone Number: <span>{this.state.user.phoneNumber}</span></h5>
                            </div>

                            <div className="form-group row user-login-item">
                                <h5>Apartment Number: <span>{this.state.user.role}</span></h5>
                            </div>
                        </form>

                        <Link className="btn btn-info btn-block wbdv-button wbdv-login"
                              onClick={() => this.setState({editing: true})}>
                            Update profile
                        </Link>
                    </div>
                }
                {
                    this.state.editing &&
                    <div className="container-fluid user-update-card">
                        <div className="form-group row">
                            <label htmlFor="usernameFld" className="col-sm-2 col-form-label">
                                User Name </label>
                            <div className="col-sm-10">

                                <input className="form-control wbdv-field wbdv-username"
                                       id="usernameFld"
                                       placeholder={this.state.user.userName}
                                       onChange={(event) => {
                                           const newUserName = event.target.value
                                           this.setState(prevState => ({
                                               user: {...prevState.user, userName: newUserName}
                                           }))}
                                       }
                                       value={this.state.user.userName}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="firstnameFld" className="col-sm-2 col-form-label">
                                First Name </label>
                            <div className="col-sm-10">
                                <input className="form-control wbdv-field wbdv-username"
                                       id="firstnameFld"
                                       placeholder={this.state.user.firstName}
                                       onChange={(event) => {
                                           const newFirstName = event.target.value
                                           this.setState(prevState => ({
                                               user: {...prevState.user, firstName: newFirstName}
                                           }))}
                                       }
                                       value={this.state.user.firstName}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="lastnameFld" className="col-sm-2 col-form-label">
                                Last Name </label>
                            <div className="col-sm-10">
                                <input className="form-control wbdv-field wbdv-username"
                                       id="lastnameFld"
                                       placeholder={this.state.user.lastName}
                                       onChange={(event) => {
                                           const newLastName = event.target.value
                                           this.setState(prevState => ({
                                               user: {...prevState.user, lastName: newLastName}
                                           }))}
                                       }
                                       value={this.state.user.lastName}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="passwordFld" className="col-sm-2 col-form-label">
                                Password </label>
                            <div className="col-sm-10">
                                <input className="form-control wbdv-field wbdv-username"
                                       id="passwordFld"
                                       placeholder={this.state.user.password}
                                       onChange={(event) => {
                                           const newPassword = event.target.value
                                           this.setState(prevState => ({
                                               user: {...prevState.user, password: newPassword}
                                           }))}
                                       }
                                       value={this.state.user.password}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="emailFld" className="col-sm-2 col-form-label">
                                Email </label>
                            <div className="col-sm-10">
                                <input className="form-control wbdv-field wbdv-username"
                                       id="emailFld"
                                       placeholder={this.state.user.email}
                                       onChange={(event) => {
                                           const newEmail = event.target.value
                                           this.setState(prevState => ({
                                               user: {...prevState.user, email: newEmail}
                                           }))}
                                       }
                                       value={this.state.user.email}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="phoneNumberFld" className="col-sm-2 col-form-label">
                                Phone Number </label>
                            <div className="col-sm-10">
                                <input className="form-control wbdv-field wbdv-username"
                                       id="phoneNumberFld"
                                       placeholder={this.state.user.phoneNumber}
                                       onChange={(event) => {
                                           const newPhoneNumber = event.target.value
                                           this.setState(prevState => ({
                                               user: {...prevState.user, phoneNumber: newPhoneNumber}
                                           }))}
                                       }
                                       value={this.state.user.phoneNumber}/>
                            </div>
                        </div>

                        <button className="btn btn-success"
                                onClick={() => this.update(this.state.user)}>
                            Update
                        </button>
                    </div>
                }

            </div>
        )
    }
}

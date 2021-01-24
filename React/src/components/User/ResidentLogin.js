import React from "react";
import {Link} from "react-router-dom";
import "../../css/user-login.style.client.css";
import {findUserWhenLogin} from "../../services/AdminService";

class ResidentLogin extends React.Component {
    state = {
        recordUserName: "",
        recordPassword: "",
        userId:""
    }

    login = (user) => {
        return findUserWhenLogin(user)
            .then(user => {
                console.log(user)
                this.state.userId = user._id
                if (this.state.userId === null) {
                    alert("You have no permission to sign in, please create an account first.")
                } else {
                    const path = '/resident/' + user._id + '/profile'
                    this.props.history.push(path)
                }
            })
    }

    render () {
        return (
            <div className="container-fluid wbdv-user-login-header">
                <div className="row">
                    <div className="col-md-4 col-xs-12 user-login-card">
                        <form className="user-login-form">
                            <div className="form-group row user-login-item">
                                <label htmlFor="username" className="col-form-label">
                                    Username </label>
                                <input className="form-control wbdv-field wbdv-username"
                                       id="username"
                                       placeholder="Alice"
                                       onChange={(event) => {
                                           this.state.recordUserName = event.target.value
                                       }}/>
                            </div>

                            <div className="form-group row user-login-item">
                                <label htmlFor="password" className="col-form-label">
                                    Password </label>
                                <input type="password" className="form-control wbdv-field wbdv-password"
                                       id="password" placeholder="123qwe#$%"
                                       onChange={(event) => {
                                            this.state.recordPassword = event.target.value
                                       }}/>
                            </div>

                            <div className="form-group row user-login-item">
                                <label className="user-longin-link"></label>
                                <Link className="btn btn-info btn-block wbdv-button wbdv-login"
                                      onClick={() => this.login(
                                          {userName: this.state.recordUserName,
                                                password: this.state.recordPassword})}>
                                    Log in
                                </Link>
                            </div>
                        </form>

                        {/*<a>Forgot Password?</a><br/>*/}
                        <Link to="/resident/signUp" className="user-register-link">
                            Sign up
                        </Link>

                    </div>

                    <div className="col-md-8 d-none d-md-block">
                        <div className="row user-payment-icon">
                            <div className="col-2">
                                <img src="https://cdngeneral.rentcafe.com/images/money.png" alt=""/>
                            </div>
                            <div className="col-10">
                                <h2>Make Payments</h2>
                                <p>Make payments online.</p>
                            </div>
                        </div>
                        <div className="row user-maintenance-icon">
                            <div className="col-2">
                                <img src="https://cdngeneral.rentcafe.com/images/resources.png" alt=""/>
                            </div>
                            <div className="col-10">
                                <h2>Maintenance Requests</h2>
                                <p>Contact our apartment managers.</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}


export default ResidentLogin

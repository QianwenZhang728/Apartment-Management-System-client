import React from "react";
import {Redirect, Link} from "react-router-dom";
import "../../css/admin-login.css";
import {findAllAdmins, findUserWhenLogin} from "../../services/AdminService";
import {connect} from "react-redux";

class LogInTemplate extends React.Component {

    state = {
        admins: [],
        recordUserName: "",
        recordPassword: "",
        admin: "",
        userId:""
    }

    componentDidMount() {

    }

    findUserWhenLogin = () => {
        const admin = {
            userName: this.state.recordUserName,
            password: this.state.recordPassword,
        }

        return findUserWhenLogin(admin)
            .then(admin => {
                this.props.loginDispatch(admin)
                this.state.userId=admin._id
                if (this.state.userId === null) {
                    // alert("You have no permission to sign in, please create an account first.")
                } else {
                    const path = '/admin/' + admin._id
                    this.props.history.push(path)
                }
            })
    }

    render () {
        return (
            <div className="container-fluid wbdv-admin-login-header">
                {/*<h1>Admin Sign In</h1>*/}
                <div className="container-fluid admin-login-card">
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
                                  onClick={() => this.findUserWhenLogin()}>
                                Log in
                            </Link>
                        </div>
                    </form>

                    <Link to="/admin/profile" className="user-register-link">
                        Sign up
                    </Link>
                </div>

                {/*<form>*/}
                {/*    <div className="form-group row">*/}
                {/*        <label htmlFor="username" className="col-sm-2 col-form-label">*/}
                {/*            Username </label>*/}
                {/*        <div className="col-sm-10">*/}
                {/*            <input className="form-control wbdv-field wbdv-username"*/}
                {/*                   id="username"*/}
                {/*                   placeholder="Alice"*/}
                {/*                   onChange={(event) => {*/}
                {/*                       this.state.recordUserName = event.target.value*/}
                {/*                   }}/>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    <div className="form-group row">*/}
                {/*        <label htmlFor="password" className="col-sm-2 col-form-label">*/}
                {/*            Password </label>*/}
                {/*        <div className="col-sm-10">*/}
                {/*            <input type="password" className="form-control wbdv-field wbdv-password"*/}
                {/*                   id="password" placeholder="123qwe#$%"*/}
                {/*                   onChange={(event) => {*/}
                {/*                       this.state.recordPassword = event.target.value*/}
                {/*                   }}/>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    <div className="form-group row">*/}
                {/*        <label className="col-sm-2 col-form-label"/>*/}
                {/*        <div className="col-sm-10">*/}
                {/*            <div className="row">*/}
                {/*                <button type="button" className="btn btn-primary btn-block wbdv-button wbdv-login"*/}
                {/*                        onClick={() => this.findUserWhenLogin()}>*/}
                {/*                    Sign in*/}
                {/*                </button>*/}

                {/*                <div className="col-6  wbdv-link wbdv-forgot-password">*/}
                {/*                    <Link to="/admin/profile">Create a new account</Link>*/}
                {/*                </div>*/}
                {/*                <div className="col-6">*/}
                {/*                    <Link to="/" className="float-right wbdv-link wbdv-register">*/}
                {/*                        Sign up*/}
                {/*                    </Link>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</form>*/}
            </div>
        )
    }
}

const propertyToDispatchMapper = (dispatch) => ({
    loginDispatch: (user) =>
        dispatch({
            type: "ADMIN_LOGIN",
            admin: user
        })
})

export default connect
(null, propertyToDispatchMapper)
(LogInTemplate)

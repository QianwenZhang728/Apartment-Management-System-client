import React from "react";
import {Link} from "react-router-dom";
import ResidentNav from "./ResidentNav";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from 'react-bootstrap/Table';
import "../../css/user-home-style.css";
import {findAllAdmins, findUserById} from "../../services/UserService";
import {getProfile} from "../../services/AdminService";

export default class UserHome extends React.Component {
    state = {
        searchText: "",
        user: {},
        admins: []
    }

    search = () => {
        let allAdmins = []
        findAllAdmins().then(
            response => {
                allAdmins = response
                this.setState({admins: allAdmins.filter(admin => admin.role === this.state.searchText)})
            }
        )
    }

    componentDidMount() {
        findAllAdmins()
            .then(allAdmins => {
                this.setState({admins: allAdmins})
            })

        getProfile().then(response => {
            this.setState({user: response})
            console.log(JSON.stringify(response))
        })
    }

    render() {
        return (
            <div className="resident-body text-center">
                <ResidentNav user={this.state.user}/>

                <h1 className="admin-management-head ">Search Admins</h1>

                <br/>
                <br/>

                    <form className="form-inline float-right">
                        <input className="form-control mr-sm-2 font-italic" type="text"
                               placeholder="Search by role" aria-label="Search"
                               onChange={(event) => {
                                   const searchText = event.target.value
                                   this.setState({searchText: searchText})
                               }}
                               value={this.state.searchText}/>
                        <i className="btn fa fa-2x fa-search"
                           onClick={() => this.search()}
                        />
                    </form>

                    <div className="container-fluid admin-table">
                        <Table className="table table-hover table-lg">
                            <thead>
                            <tr>
                                <th className="wbdv-header wbdv-title">Name</th>
                                <th scope="col" className="d-none d-sm-table-cell wbdv-header wbdv-owner">Email</th>
                                <th scope="col" className="d-none d-md-table-cell wbdv-header wbdv-last-modified">Phone number</th>
                                <th scope="col" className="wbdv-header wbdv-last-modified">Role</th>
                            </tr>
                            </thead>

                            <tbody className="table-body">
                            {
                                this.state.admins.map(admin =>
                                    <tr key={admin._id}>
                                        <td className="">
                                        <Link to={`/profile/${admin._id}`}>{admin.firstName}, {admin.lastName}</Link>
                                        </td>
                                        <td className="d-none d-sm-table-cell">{admin.email}</td>
                                        <td className="d-none d-sm-table-cell">{admin.phoneNumber}</td>
                                        <td className="">{admin.role}</td>
                                    </tr>

                                )
                            }
                            </tbody>
                        </Table>

                    </div>

            </div>
        )
    }
}


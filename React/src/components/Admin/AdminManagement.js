import React from "react";
import "../../Admin.style.css"
import {createAdmin, deleteAdmin, findAdminById, findAllAdmins, updateAdmin} from "../../services/AdminService"
import "../../css/admin-home-style.css"
import AdminManagementRow from "./AdminManagementRow";
import AdminNav from "./AdminNav";

class AdminManagement extends React.Component {

    state = {
        admins: [],
        adminBeingEditing: {},
        recordUserName: "",
        recordFirstName: "",
        recordLastName: "",
        recordEmail: "",
        recordPhoneNumber: "",
        recordRole: "Receptionist",
        searchText: "",
        admin: "",
    }

    componentDidMount() {
        findAllAdmins()
            .then(admins => {
                this.setState({
                    admins: admins
                })
            })
        const adminId = this.props.match.params.userId
        if (adminId) {
            findAdminById(adminId)
                .then(admin => {
                    this.setState({admin: admin})
                })
        }
    }

    searchAdmins = () => {
        let allAdmins = []
        findAllAdmins().then(
            response => {
                allAdmins = response
                this.setState({admins: allAdmins.filter(admin => admin.firstName === this.state.searchText)})
            }
        )
    }

    updateAdmin = (admin) => {
        updateAdmin(admin._id, admin)
            .then(response => findAllAdmins())
            .then(admins => {
                this.setState({
                    admins: admins
                })
            })
    }

    deleteAdmin = (admin) => {
        deleteAdmin(admin._id)
            .then(status => this.setState(prevState =>({
                    admins: prevState.admins.filter(c => c._id !== admin._id)
                })
            ))
            .catch(error => {

            })
    }

    addAdmin = () => {
        const newAdmin = {
            userName: this.state.recordUserName,
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
    }

    render() {
        return (
            <div className="text-center admin-management-body">
                <AdminNav admin={this.state.admin}/>
                <h1 className="admin-management-head ">Manage Admins</h1>

                <br/>
                <br/>

                <form className="form-inline float-right">
                    <input className="form-control mr-sm-2 font-italic" type="text"
                           placeholder="Search by first name" aria-label="Search"
                           onChange={(event) => {
                               const searchText = event.target.value
                               this.setState({searchText: searchText})
                           }}/>
                    <i className="btn fa fa-2x fa-search"
                       onClick={() => this.searchAdmins()}/>
                </form>

                <div>
                    <table className="table no-wrap user-table mb-0">
                        <thead>
                        <tr>
                            <th scope="col" className="border-0 text-uppercase font-medium">User Name</th>
                            <th scope="col" className="border-0 text-uppercase font-medium">First Name</th>
                            <th scope="col" className="border-0 text-uppercase font-medium">Last Name</th>
                            <th scope="col" className="d-none d-md-table-cell border-0 text-uppercase font-medium">Email</th>
                            <th scope="col" className="d-none d-md-table-cell border-0 text-uppercase font-medium">Phone Number</th>
                            <th scope="col" className="d-none d-md-table-cell border-0 text-uppercase font-medium">Role</th>
                        </tr>
                        <tr>
                            <td>
                                <input id="firstNameFld" className="form-control" placeholder="FirstName"
                                       onChange={(event) => {
                                           this.state.recordUserName = event.target.value
                                       }}/>
                            </td>
                            <td>
                                <input id="firstNameFld" className="form-control" placeholder="FirstName"
                                       onChange={(event) => {
                                           this.state.recordFirstName = event.target.value
                                       }}/>
                            </td>
                            <td>
                                <input id="lastNameFld" className="form-control" placeholder="LastName"
                                       onChange={(event) => {
                                           this.state.recordLastName = event.target.value
                                       }}/>
                            </td>
                            <td className="d-none d-md-table-cell">
                                <input id="email" className="form-control" placeholder="Email"
                                       onChange={(event) => {
                                           this.state.recordEmail = event.target.value
                                       }}/>
                            </td>
                            <td className="d-none d-md-table-cell">
                                <input id="phone" className="form-control" placeholder="PhoneNumber"
                                       onChange={(event) => {
                                           this.state.recordPhoneNumber = event.target.value
                                       }}/>
                            </td>
                            <td className="d-none d-md-table-cell">
                                <select id="roleFld" className="form-control" onChange={(event) => {
                                    this.state.recordRole = event.target.value
                                }}>
                                    <option value="Receptionist" selected>Receptionist</option>
                                    <option value="Cleaner">Cleaner</option>
                                    <option value="Repairman">Repairman</option>
                                </select>
                            </td>
                            <td>
                                <button type="button" className="btn btn-outline-info btn-circle btn-circle pull-right" onClick={this.addAdmin}>
                                    <i className="fa fa-plus" aria-hidden="true"/>
                                </button>
                            </td>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.admins.map(admin =>
                                <AdminManagementRow
                                    deleteAdmin={this.deleteAdmin}
                                    updateAdmin={this.updateAdmin}
                                    admin={admin}/>)
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default AdminManagement

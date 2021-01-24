import React from "react";
import {createResident, deleteResident, findAllResidents, updateResident} from "../../services/ResidentService";
import "../../Admin.style.css"
import ResidentManagementRow from "./ResidentManagementRow";
import {Link} from "react-router-dom";
import {findAdminById} from "../../services/AdminService";
import AdminNav from "./AdminNav";

class ResidentManagement extends React.Component {

    state = {
        residents: [],
        residentBeingEditing: {},
        recordFirstName: "",
        recordLastName: "",
        recordEmail: "",
        recordPhoneNumber: "",
        recordAptNo: "",
        recordUserName: "",
        admin: "",
    }

    componentDidMount() {
        findAllResidents()
            .then(residents => {
                this.setState({
                    residents: residents
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
        let allResidents = []
        findAllResidents().then(
            response => {
                allResidents = response
                this.setState({residents: allResidents.filter(resident => resident.firstName === this.state.searchText)})
            }
        )
    }

    updateResident = (resident) => {
        updateResident(resident._id, resident)
            .then(response => findAllResidents())
            .then(residents => {
                this.setState({
                    residents: residents
                })
            })
    }

    deleteResident = (resident) => {
        deleteResident(resident._id)
            .then(status => this.setState(prevState =>({
                    residents: prevState.residents.filter(c => c._id !== resident._id)
                })
            ))
            .catch(error => {

            })
    }

    addResident = () => {
        const newResident = {
            userName: this.state.recordUserName,
            firstName: this.state.recordFirstName,
            lastName: this.state.recordLastName,
            email: this.state.recordEmail,
            phoneNumber: this.state.recordPhoneNumber,
            role: this.state.recordAptNo,
            type: "Resident"
        }

        createResident(newResident)
            .then(actualResident => this.setState(prevState => ({
                residents: [
                    ...prevState.residents, actualResident
                ]
            })))
    }

    render() {
        return (
            <div className="text-center admin-management-body">
                <AdminNav admin={this.state.admin}/>
                <h1 className="admin-management-head ">Manage Residents</h1>

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
                            <th scope="col" className="border-0 text-uppercase font-medium">Apt No.</th>
                            <th scope="col" className="border-0 text-uppercase font-medium">User Name</th>
                            <th scope="col" className="border-0 text-uppercase font-medium">First Name</th>
                            <th scope="col" className="border-0 text-uppercase font-medium">Last Name</th>
                            <th scope="col" className="d-none d-md-table-cell border-0 text-uppercase font-medium">Email</th>
                            <th scope="col" className="d-none d-md-table-cell border-0 text-uppercase font-medium">Phone Number</th>
                        </tr>
                        <tr>
                            <td>
                                <input id="aptNumberFld" className="form-control" placeholder="Apt No."
                                       onChange={(event) => {
                                           this.state.recordAptNo = event.target.value
                                       }}/>
                            </td>
                            <td>
                                <input id="userNameFld" className="form-control" placeholder="UserName"
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
                            <td>
                                <button type="button" className="btn btn-outline-info btn-circle btn-circle pull-right" onClick={this.addResident}>
                                    <i className="fa fa-plus" aria-hidden="true"/>
                                </button>
                            </td>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.residents.map(resident =>
                                <ResidentManagementRow
                                    deleteResident={this.deleteResident}
                                    updateResident={this.updateResident}
                                    resident={resident}/>)
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ResidentManagement

import React from "react"

export default class AdminManagementRow extends  React.Component {
    state = {
        editing: false,
        admin: this.props.admin,
    }
    render() {
        return (
            <tr>
                <td>
                    <h5 className="font-medium mb-0">
                        {this.props.admin.userName}
                    </h5>
                </td>
                <td>
                    <h5 className="font-medium mb-0">
                        {this.props.admin.firstName}
                    </h5>
                </td>
                <td>
                    <span className="text-muted">
                        {this.props.admin.lastName}
                    </span>
                </td>
                <td className="d-none d-md-table-cell">
                    {
                        this.state.editing &&
                            <input className="form-control"
                                onChange={(event) => {
                                const newEmail = event.target.value
                                this.setState(prevState => ({
                                    admin: {...prevState.admin, email: newEmail}
                                }))}}
                                value={this.state.admin.email}/>
                    }
                    {
                        !this.state.editing &&
                        <span className="text-muted">
                            {this.props.admin.email}
                        </span>
                    }
                </td>
                <td className="d-none d-md-table-cell">
                    {
                        this.state.editing &&
                        <input className="form-control"
                               onChange={(event) => {
                                   const newPhoneNumber = event.target.value
                                   this.setState(prevState => ({
                                       admin: {...prevState.admin, phoneNumber: newPhoneNumber}
                                   }))}}
                               value={this.state.admin.phoneNumber}/>
                    }
                    {
                        !this.state.editing &&
                        <span className="text-muted">
                            {this.props.admin.phoneNumber}
                        </span>
                    }
                </td>
                <td className="d-none d-md-table-cell">
                    <span className="text-muted">
                        {this.props.admin.role}
                    </span>
                </td>
                <td>
                    {
                        <button type="button" className="btn btn-outline-info btn-circle ml-1"
                                onClick={() => {this.props.deleteAdmin(this.state.admin)}}>
                            <i className="fa fa-trash"/>
                        </button>
                    }
                    {
                        !this.state.editing &&
                        <button type="button" className="btn btn-outline-info btn-circle ml-1"
                                onClick={() => this.setState({editing: true})}>
                            <i className="fa fa-pencil"/>
                        </button>
                    }
                    {
                        this.state.editing &&
                        <button type="button" className="btn btn-outline-info btn-circle ml-1"
                                onClick={() => {
                            this.props.updateAdmin(this.state.admin)
                            this.setState({editing: false})
                        }}>
                            <i className="fa fa-check"/>
                        </button>
                    }
                </td>
            </tr>
        )
    }
}




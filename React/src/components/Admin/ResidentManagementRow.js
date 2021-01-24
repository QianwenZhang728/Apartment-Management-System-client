import React from "react"

export default class ResidentManagementRow extends  React.Component {
    state = {
        editing: false,
        resident: this.props.resident,
    }
    render() {
        return (
            <tr>
                <td>
                    <h5 className="font-medium mb-0">
                        {this.props.resident.role}
                    </h5>
                </td>
                <td>
                    <h5 className="font-medium mb-0">
                        {this.props.resident.userName}
                    </h5>
                </td>
                <td>
                    <h5 className="font-medium mb-0">
                        {this.props.resident.firstName}
                    </h5>
                </td>
                <td>
                    <span className="text-muted">
                        {this.props.resident.lastName}
                    </span>
                </td>
                <td className="d-none d-md-table-cell">
                    {
                        this.state.editing &&
                        <input className="form-control"
                               onChange={(event) => {
                                   const newEmail = event.target.value
                                   this.setState(prevState => ({
                                       resident: {...prevState.resident, email: newEmail}
                                   }))}}
                               value={this.state.resident.email}/>
                    }
                    {
                        !this.state.editing &&
                        <span className="text-muted">
                            {this.props.resident.email}
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
                                       resident: {...prevState.resident, phoneNumber: newPhoneNumber}
                                   }))}}
                               value={this.state.resident.phoneNumber}/>
                    }
                    {
                        !this.state.editing &&
                        <span className="text-muted">
                            {this.props.resident.phoneNumber}
                        </span>
                    }
                </td>
                <td>
                    {
                        <button type="button" className="btn btn-outline-info btn-circle ml-1" onClick={() => {this.props.deleteResident(this.state.resident)}}>
                            <i className="fa fa-trash"></i>
                        </button>
                    }
                    {
                        !this.state.editing &&
                        <button type="button" className="btn btn-outline-info btn-circle ml-1" onClick={() => this.setState({editing: true})}>
                            <i className="fa fa-pencil"></i>
                        </button>
                    }
                    {
                        this.state.editing &&
                        <button type="button" className="btn btn-outline-info btn-circle ml-1" onClick={() => {
                            this.props.updateResident(this.state.resident)
                            this.setState({editing: false})
                        }}>
                            <i className="fa fa-check"></i>
                        </button>
                    }
                </td>
            </tr>
        )
    }
}




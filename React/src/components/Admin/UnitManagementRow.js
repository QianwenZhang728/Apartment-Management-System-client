import React from "react"

export default class UnitManagementRow extends React.Component {
    state = {
        unit: this.props.unit,
        recordWasherAndDryer: this.props.unit.washerAndDryer === false ? "NO" : "Yes",
        editing: false
    }
    render() {
        return (
            <tr>
                <td>
                    <h5 className="font-medium mb-0">
                        {this.props.unit.aptNo}
                    </h5>
                </td>
                <td>
                    {
                        this.state.editing &&
                        <input className="form-control"
                               onChange={(event) => {
                                   const newRent = event.target.value
                                   this.setState(prevState => ({
                                       unit: {...prevState.unit, rent: newRent}
                                   }))}}
                               value={this.state.unit.rent}/>
                    }
                    {
                        !this.state.editing &&
                        <h5 className="font-medium mb-0">
                            {this.props.unit.rent}
                        </h5>
                    }
                </td>
                <td>
                    {
                        this.state.editing &&
                        <input className="form-control"
                               onChange={(event) => {
                                   const newDeposit = event.target.value
                                   this.setState(prevState => ({
                                       unit: {...prevState.unit, deposit: newDeposit}
                                   }))}}
                               value={this.state.unit.deposit}/>
                    }
                    {
                        !this.state.editing &&
                        <span className="text-muted">
                        {this.props.unit.deposit}
                    </span>
                    }
                </td>
                <td className="d-none d-md-table-cell">
                    <span className="text-muted">
                        {this.props.unit.floor}
                    </span>
                </td>
                <td className="d-none d-md-table-cell">
                    <span className="text-muted">
                        {this.state.recordWasherAndDryer}
                    </span>
                </td>
                <td>
                    {
                        <button type="button" className="btn btn-outline-info btn-circle ml-1"
                                onClick={() => {this.props.deleteUnit(this.state.unit)}}>
                            <i className="fa fa-trash"/>
                        </button>
                    }
                    {
                        !this.state.editing &&
                        <button type="button" className="btn btn-outline-info btn-circle ml-1" onClick={() => this.setState({editing: true})}>
                            <i className="fa fa-pencil"/>
                        </button>
                    }
                    {
                        this.state.editing &&
                        <button type="button" className="btn btn-outline-info btn-circle ml-1" onClick={() => {
                            this.props.updateUnit(this.state.unit)
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

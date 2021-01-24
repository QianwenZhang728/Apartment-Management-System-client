import AdminNav from "./AdminNav";
import React from "react";
import "../../css/admin-home-style.css"
import "../../Admin.style.css"
import {findAdminById} from "../../services/AdminService";
import {createUnit, deleteUnit, findUnitsForPlan, updateUnit} from "../../services/UnitService";
import {findAllPlans} from "../../services/PlanService";
import {Link} from "react-router-dom";
import UnitManagementRow from "./UnitManagementRow";

export default class UnitManagement extends React.Component {
    state = {
        admin: {},
        plans: [],
        units: [],
        planId: '',
        adminId: '',
        recordAptNo: "",
        recordRent: "",
        recordDeposit: "",
        recordWasherAndDryer: false,
        recordFloor: "",
        plan: {},
    }

    componentDidMount() {
        const adminId = this.props.match.params.userId
        const planId = this.props.match.params.planId
        if (adminId) {
            findAdminById(adminId)
                .then(admin => {
                    this.setState({admin: admin})
                })
            findAllPlans().then(response => this.setState({
                plans: response
            }))
        }
        if (planId) {
            this.state.planId = planId
            findUnitsForPlan(planId)
                .then(response => this.setState({
                    units: response
                }))
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const planId = this.props.match.params.planId
        if (planId !== undefined && planId !== this.state.planId) {
            this.state.planId = planId
            findUnitsForPlan(planId)
                .then(response => this.setState({
                    units: response
                }))
        }
    }

    addUnitForPlan = () => {
        const newUnit = {
            aptNo: this.state.recordAptNo,
            rent: this.state.recordRent,
            deposit: this.state.recordDeposit,
            washerAndDryer: this.state.recordWasherAndDryer,
            floor: this.state.recordFloor
        }

        createUnit(this.state.planId, newUnit)
            .then(actualUnit => this.setState(prevState => ({
                units: [
                    ...prevState.units, actualUnit
                ]
            })))
    }

    deleteUnit = (unit) => {
        deleteUnit(unit._id)
            .then(status => this.setState(prevState =>({
                    units: prevState.units.filter(c => c._id !== unit._id)
                })
            ))
    }

    updateUnit = (unit) => {
        updateUnit(unit._id, unit)
            .then(response => findUnitsForPlan(this.state.planId))
            .then(units => {
                this.setState({
                    units: units
                })
            })
    }

    render() {
        return (
            <div className="text-center admin-management-body">
                <AdminNav admin={this.state.admin}/>
                <h1 className="admin-management-head text-center">Manage Units</h1>
                <div className="row">
                    <div className="col-md-4 col-xs-12 wbdv-left-col">
                        <br/>
                        <h3>Choose One Plan First</h3>
                        <br/>
                        <div>
                            <ul className="list-group">
                                {
                                    this.state.plans.map(plan =>
                                            <li key={plan._id}>
                                                <span>
                                                    <Link to={`/admin/${this.state.admin._id}/plans/${plan._id}/units`}>
                                                        {plan.type} | {plan.area}
                                                    </Link>
                                                </span>
                                            </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-8 wbdv-right-col">
                        <br/>
                        <h3>Units For Plan</h3>
                        {
                            this.state.planId !== '' &&
                            <table className="table no-wrap user-table mb-0">
                                <thead>
                                <tr>
                                    <th scope="col" className="border-0 text-uppercase font-medium">Apt No</th>
                                    <th scope="col" className="border-0 text-uppercase font-medium">rent</th>
                                    <th scope="col" className="border-0 text-uppercase font-medium">deposit</th>
                                    <th scope="col" className="d-none d-md-table-cell border-0 text-uppercase font-medium">floor</th>
                                    <th scope="col" className="d-none d-md-table-cell border-0 text-uppercase font-medium">WasherAndDryer</th>
                                </tr>
                                <tr>
                                    <td>
                                        <input id="AptNoFld" className="form-control" placeholder="Apt No"
                                               onChange={(event) => {
                                                   this.state.recordAptNo = event.target.value
                                               }}/>
                                    </td>
                                    <td>
                                        <input id="rentFld" className="form-control" placeholder="Rent"
                                               onChange={(event) => {
                                                   this.state.recordRent = event.target.value
                                               }}/>
                                    </td>
                                    <td>
                                        <input id="depositFld" className="form-control" placeholder="Deposit"
                                               onChange={(event) => {
                                                   this.state.recordDeposit = event.target.value
                                               }}/>
                                    </td>
                                    <td className="d-none d-md-table-cell">
                                        <input id="floorFld" className="form-control" placeholder="Floor"
                                               onChange={(event) => {
                                                   this.state.recordFloor = event.target.value
                                               }}/>
                                    </td>
                                    <td className="d-none d-md-table-cell">
                                        <select id="washerAndDryerFld" className="form-control" onChange={(event) => {
                                            if (event.target.value === "Yes") {
                                                this.state.recordWasherAndDryer = true
                                            } else if (event.target.value === 'No') {
                                                this.state.recordWasherAndDryer = false
                                            }
                                        }}>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-outline-info btn-circle btn-circle pull-right" onClick={this.addUnitForPlan}>
                                            <i className="fa fa-plus" aria-hidden="true"/>
                                        </button>
                                    </td>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.units.map(unit =>
                                        <UnitManagementRow
                                            deleteUnit={this.deleteUnit}
                                            updateUnit={this.updateUnit}
                                            unit={unit}/>)
                                }
                                </tbody>
                            </table>
                        }
                    </div>
                </div>
            </div>
        )
    }
}


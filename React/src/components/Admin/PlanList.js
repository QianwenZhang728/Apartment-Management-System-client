import React from "react";
import "../../Admin.style.css"
import {Link} from "react-router-dom";
import {findAllPlans} from "../../services/PlanService";

export default class PlanList extends React.Component {
    state = {
        plans: [],
        planId: "",
        admin: this.props.admin,
    }
    componentDidMount() {
        findAllPlans()
            .then(plans => {this.setState({plans: plans})})

    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    {
                        this.state.plans.map(plan => 
                            <li key={plan._id}>
                                <span>
                                    <Link to={`/admin/${this.props.admin._id}/plans/${plan._id}`}>
                                        {plan.type} | {plan.area}
                                    </Link>
                                </span>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import React from "react";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {findApartments} from "../../services/UserService";
import {getProfile} from "../../services/AdminService";
import ResidentNav from "./ResidentNav";

class ResidentPayments extends React.Component {
    state = {
        user: {},
        product: {
            name: "Rent",
            price: null
        }
    }

    componentDidMount() {
        getProfile().then(response => {
            this.setState({user: response})
            console.log(JSON.stringify(response))
        })

        findApartments()
            .then(apartments => {
                let apartment = apartments.filter(apartment => apartment.aptNo === this.state.user.role)
                let rent = parseInt(apartment[0].rent.substring(1))
                this.setState(prevState => ({
                    product: {
                        ...prevState,
                        price: rent
                    }
                }))
            })
    }

    handleToken = (token, product) => {
        axios.post('http://localhost:8080/checkout', {
            token,
            product
        }).then(response => {
            toast.configure();
            const {status} = response.data
            if (status === 'success') {
                toast('Success! Check emails for details',
                    {type:'success'})
            } else {
                toast('Something went wrong',
                    {type:'error'})
            }
        })
    }

    render() {
        return (
            <div className="resident-body  text-center">
                <ResidentNav user={this.state.user}/>
                <h1 className="payment-title text-center">Make payments for rent: ${this.state.product.price}</h1>
                <StripeCheckout
                    stripeKey="pk_test_51Hsy9MIit3xyVnWkEEIzrQ8llTLSNdKYJjy3KU0Jp4XH8VZyVqfnmbUzYbUjPzaU8SKwioMQBIa2JpdnsVHjdKcF00NgzEjYbT"
                    token={this.handleToken}
                    billingAddress
                    shippingAddress
                    amount={this.state.product.price * 100}
                    name={this.state.user.userName}
                />
            </div>

        )
    }
}

export default ResidentPayments


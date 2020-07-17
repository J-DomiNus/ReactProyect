import React, { Component } from 'react'

import { Route } from 'react-router-dom'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: null,
        price: 0,
        displayForm: false
    }

    componentWillMount () {
        const query = new URLSearchParams(this.props.location.search);
        let price = 0;
        const ingredients = {};
        for (let param of query.entries()) {
            if (param[0] === 'price') {
                price = param[1]
            }else {
                ingredients[param[0]] = +param[1] // the + turns the string into a number
            // ['salad', '1']
            }
            
        }
        console.log('Checkout', ingredients, price);
        this.setState({ingredients: ingredients, price: price})
    }

    checkoutCanceledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
        this.setState({displayForm: true})
    }

    render () {
        let output = (
            <CheckoutSummary 
                ingredients={this.state.ingredients}
                checkoutCanceled={this.checkoutCanceledHandler}
                checkoutContinued={this.checkoutContinuedHandler} />
        )
        if (this.state.displayForm) {
            output = <Route 
            path={this.props.match.path + '/contact-data'} 
            render={(props) => (<ContactData ingredients={this.state.ingredients} 
                                        totalPrice={this.state.price}
                                        {...props} />)} >
        </Route>
        // {...props} => sending URLparams with the render
        }
        return (
            <div>
                {output}
            </div>
        )
    }
}

export default Checkout;
import React, { Component } from 'react'

import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    checkoutCanceledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render () {
        let summary = <Redirect to='/' />
        if ( this.props.localIngredients) {
            const orderPostedRedirect = this.props.orderPosted ? <Redirect to='/' /> : null
            summary = (
                <div>
                    {orderPostedRedirect}
                    <CheckoutSummary 
                        ingredients={this.props.localIngredients}
                        checkoutCanceled={this.checkoutCanceledHandler}
                        checkoutContinued={this.checkoutContinuedHandler} />
                    <Route 
                        path={this.props.match.path + '/contact-data'} 
                        component={ContactData}></Route>
                </div>
                
            )
        }
        return summary;
    }
}

const mapStateToProps = state => {
    return {
        localIngredients: state.burgerBuilder.ingredients,
        orderPosted: state.order.orderPosted
    }
    
}

export default connect(mapStateToProps)(Checkout);
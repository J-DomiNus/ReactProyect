import React, { Component } from 'react';
import { connect } from 'react-redux';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/ErrorHandler';
import * as actions from '../../store/actions/IndexActions';
import Spinner from '../../components/UI/Spinner/Spinner';

class OrdersList extends Component {

    componentDidMount () {
        this.props.onFetchOrders(this.props.token, this.props.userId)
    }
    render () {
        let orders = <Spinner />;
        if (!this.props.loading) {
            orders = this.props.orders.map(order => (
                <Order key={order.id} 
                        ingredients={order.ingredients}
                        price={+order.price}/>// '+' converts the string into a number
            ))
        }
        return (
            <div className='u-margin-top-large'>
                {orders}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(OrdersList, axios));
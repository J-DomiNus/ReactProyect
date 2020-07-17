import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/ErrorHandler';

class OrdersList extends Component {
    state = {
        orders: [],
        loading: true
    }
    componentDidMount () {
        axios.get('/order.json')
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],//key=lenght[key]
                        id: key//key=paibvpaijvfn;v
                    })
                }
                this.setState({loading: false, orders: fetchedOrders})
                console.log(fetchedOrders)
            })
            .catch(err => {
                this.setState({loading: false})
            })
    }
    render () {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order key={order.id} 
                            ingredients={order.ingredients}
                            price={+order.price}/>// '+' converts the string into a number
                ))}
            </div>

        )
    }
}

export default withErrorHandler(OrdersList, axios);
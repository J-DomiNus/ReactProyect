import React, { Component } from 'react';

import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';

// import Button from '../../../components/UI/Button/Button';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true})
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'Joel Hacker',
                addres: {
                    street: 'anywhere1234',
                    zipcode: '4321',
                    country: 'Uruguay'
                },
                email: 'joel@email.com'
            },
            deliveryMethod: 'MVDelivery'
        }
        axios.post('/order.json', order)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading: false})
            })
    }

    render () {
        let form = (
            <form className='Form'>
                    <input type='text' name='name' placeholder='Your name' />
                    <input type='email' email='email' placeholder='Your email' />
                    <input type='text' name='street' placeholder='Your street' />
                    <input type='text' name='address' placeholder='Your addres' />
                    <button className='order-button'                            
                            onClick={this.orderHandler}>Order</button>
                </form>
        )
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className='contactData'>
                <h3 className='price'>Enter your Contact Data</h3>
                {form}
            </div>
        )
    }
}

export default ContactData;
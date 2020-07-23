import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionCreator from '../../../store/actions/IndexActions'

import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/FormInputs/Input';
import axios from '../../../axios-orders';
import withErrorHanlder from '../../../hoc/withErrorHandler/ErrorHandler'



class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name',
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                focus: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your email',
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                focus: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your street',
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                focus: false
            },
            zipcode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code',
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 4,
                    maxLength: 8
                },
                valid: false,
                focus: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country',
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                focus: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', display: 'Fastest'},
                        {value: 'cheapest', display: 'Cheapest'},
                    ]
                },
                value: 'fastest',//default value, to prevent sending a form with a value of blank
                validation: {},
                valid: true
            },
        },
        formIsValid: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        const formData = {}
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value
        }
        const order = {
            ingredients: this.props.localIngredients,
            price: this.props.localTotalPrice,
            orderData: formData
        }
        this.props.onPostOrder(order)
    }

    checkValidity (value, rules) {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid; 
            // && isValid is used because of the element in the state that has no 'valid' element
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {...this.state.orderForm}
        const updatedFormElement = this.state.orderForm[inputIdentifier];
        updatedFormElement.value = event.target.value;
        updatedFormElement.focus = true;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedOrderForm[inputIdentifier] = updatedFormElement
        
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
                formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
                // '&& isValid' is used because of the element in the state that has no 'valid' element
                // false overwrites true, so if it is one false element, formIsValid is false
        }
        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid})
    }

    render () {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType} 
                        elementConfig={formElement.config.elementConfig} 
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        focus={formElement.config.focus}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <button className='order-button' disabled={!this.state.formIsValid}>Order</button>
            </form>
        )
        if (this.props.loading) {
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

const mapStateToProps = state => {
    return {
        localIngredients: state.burgerBuilder.ingredients,
        localTotalPrice: state.burgerBuilder.totalPrice,
        loading: state.order.loading,
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onPostOrder: (orderData) => dispatch(actionCreator.postOrderToServer(orderData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHanlder(ContactData, axios));
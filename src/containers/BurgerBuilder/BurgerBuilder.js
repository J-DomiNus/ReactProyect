import React, { Component } from 'react';
import Auxiliar from '../../hoc/Auxiliar/Auxiliar';
import Burger from '../../components/Burger/Burger';
import ControlsList from '../../components/Burger/Controls/ControlsList';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import LoadingSpinner from '../../components/UI/Spinner/Spinner';
import ErrorHandler from '../../hoc/withErrorHandler/ErrorHandler';
import axios from '../../axios-orders';

const INGREDIENT_PRICES = {
    tomato: 0.5,
    salad: 0.5,
    cheese: 0.6,
    meat: 1,
    bacon: 0.5
}
class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        enableOrderButton: false,
        displayOrderBox: false,
        loading: false,
        fetchIngredients: false
    }

    componentDidMount () {
        // console.log('burgerbuilder');
        // console.log(this.props);
        // BurgerBuilder is routed, so recives the props location, history, etc
        axios.get('/ingredients.json')
            .then(response => {
                this.setState({ingredients: response.data})
            })
            .catch(error => {
                this.setState({fetchIngredients: true})
        })
    }

    addIngredientHandler = (type) => {
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type]++
        this.setState({
            totalPrice: this.state.totalPrice + INGREDIENT_PRICES[type],
            ingredients: updatedIngredients})
            this.enableOrderButtonHandler(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        if(this.state.ingredients[type] <= 0) { 
            return; 
        }
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type]--
            this.setState({
                totalPrice: this.state.totalPrice - INGREDIENT_PRICES[type],
                ingredients: updatedIngredients});
                this.enableOrderButtonHandler(updatedIngredients);
    }

    enableOrderButtonHandler (updatedIngredients) {
        const totalIngredients = Object.keys(updatedIngredients)
            .map(key => {
                return updatedIngredients[key]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
            //console.log('ingredients: ' + totalIngredients);
        this.setState({enableOrderButton: totalIngredients > 0})
        //console.log(this.state.enableOrderButton)
    }

    displayOrderBoxHandler = () => {
        //console.log('displayOrderBoxHandler')
        this.setState({displayOrderBox: true});
    }

    closeOrderBoxHandler = () => {
        this.setState({displayOrderBox: false});
    }

    orderContinuedHandler = () => {
        const queryParams = [];
        for (let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
            //encodeURIcomponent encodes the element to be used in the url
            // (propertyName) = [key]
        }
        queryParams.push('price=' + this.state.totalPrice)
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
    }
    render () {
        const disableButtonInfo = {
            ...this.state.ingredients
        };
        for (let key in disableButtonInfo) {
            disableButtonInfo[key] = disableButtonInfo[key] <=0;
        }
        //salad: true, meat: false...

        let BurgerAndControlsList = this.state.fetchIngredients ? 
                <p>Failed to connect to server</p> 
                : <LoadingSpinner />
                
        let orderSummary = null;
        
        if (this.state.ingredients) {
            BurgerAndControlsList = (
                <Auxiliar>
                    <Burger 
                    ingredients={this.state.ingredients}/>
                    <ControlsList 
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disableButton={disableButtonInfo}
                        price={this.state.totalPrice}   
                        enableOrderButton={this.state.enableOrderButton}
                        displayOrderBox={this.displayOrderBoxHandler}/>
                </Auxiliar>
            )
            orderSummary = <OrderSummary 
                ingredientsObject={this.state.ingredients}
                orderCanceled={this.closeOrderBoxHandler}
                continueOrder={this.orderContinuedHandler}
                totalPrice={this.state.totalPrice}/>
        }

        if (this.state.loading) {
            orderSummary = <LoadingSpinner />
        }

        return (
            <Auxiliar>
                <Modal display={this.state.displayOrderBox} closeModal={this.closeOrderBoxHandler}>
                    {orderSummary}
                </Modal>
                {BurgerAndControlsList}
            </Auxiliar>
            
        );
    }
}

export default ErrorHandler(BurgerBuilder, axios);
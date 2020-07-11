import React, { Component } from 'react';
import Auxiliar from '../../hoc/Auxiliar';
import Burger from '../../components/Burger/Burger';
import ControlsList from '../../components/Burger/Controls/ControlsList';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.6,
    meat: 1,
    bacon: 0.5
}
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        enableOrderButton: false,
        displayOrderBox: false,
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
        console.log('orderContinuedHandler');
    }
    
    render () {
        const disableButtonInfo = {
            ...this.state.ingredients
        };
        for (let key in disableButtonInfo) {
            disableButtonInfo[key] = disableButtonInfo[key] <=0;
        }
        //salad: true, meat: false...
        return (
            <Auxiliar>
                <Modal display={this.state.displayOrderBox}
                        closeModal={this.closeOrderBoxHandler}>
                    <OrderSummary ingredientsObject={this.state.ingredients}
                                    orderCanceled={this.closeOrderBoxHandler}
                                    continueOrder={this.orderContinuedHandler}
                                    totalPrice={this.state.totalPrice}/>
                </Modal>
                <Burger 
                ingredientsObject={this.state.ingredients}/>
                <ControlsList 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disableButton={disableButtonInfo}
                    price={this.state.totalPrice}   
                    enableOrderButton={this.state.enableOrderButton}
                    displayOrderBox={this.displayOrderBoxHandler}/>
            </Auxiliar>
            
        );
    }
}

export default BurgerBuilder;
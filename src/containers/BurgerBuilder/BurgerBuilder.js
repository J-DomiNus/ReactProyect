import React, { Component } from 'react';
import Auxiliar from '../../hoc/Auxiliar';
import Burger from '../../components/Burger/Burger';
import ControlsList from '../../components/Burger/Controls/ControlsList'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.6,
    meat: 1,
    bacon: 0.5
}
class BurguerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type]++
        this.setState({
            totalPrice: this.state.totalPrice + INGREDIENT_PRICES[type],
            ingredients: updatedIngredients})
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
                totalPrice: this.state.totalPrice + INGREDIENT_PRICES[type],
                ingredients: updatedIngredients});
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
                <Burger 
                ingredientsObject={this.state.ingredients} />
                <ControlsList 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disableButton={disableButtonInfo}/>
            </Auxiliar>
            
        );
    }
}

export default BurguerBuilder;
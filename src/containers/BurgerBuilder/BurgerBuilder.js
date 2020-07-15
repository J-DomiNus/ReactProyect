import React, { Component } from 'react';
import Auxiliar from '../../hoc/Auxiliar';
import Burger from '../../components/Burger/Burger';
import ControlsList from '../../components/Burger/Controls/ControlsList'

class BurguerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }
    render () {
        return (
            <Auxiliar>
                <Burger 
                ingredientsObject={this.state.ingredients} />
                <ControlsList />
            </Auxiliar>
            
        );
    }
}

export default BurguerBuilder;
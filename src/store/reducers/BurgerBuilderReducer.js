import * as actionTypes from '../actions/actionTypes';
import  {updateObject} from '../utility';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    ingredientsPrices: null
}

const burgerBuilderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            const addUpdatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] +1 }
            const addUpdatedIngredients = updateObject(state.ingredients, addUpdatedIngredient);
            const addUpdatedState = {
                ingredients: addUpdatedIngredients,
                totalPrice: state.totalPrice + state.ingredientsPrices[action.ingredientName]
            }
            return updateObject(state, addUpdatedState);
        case actionTypes.REMOVE_INGREDIENT: 
            const removeUpdatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 }
            const removeUpdatedIngredients = updateObject(state.ingredients, removeUpdatedIngredient);
            const removeUpdatedState = {
                ingredients: removeUpdatedIngredients,
                totalPrice: state.totalPrice + state.ingredientsPrices[action.ingredientName]
            }
            return updateObject(state, removeUpdatedState);
        case actionTypes.SET_PRICES:
            return updateObject( state, {
                ingredientsPrices: action.prices,
                totalPrice: action.basePrice
            })
        case actionTypes.SET_INGREDIENTS:
            return updateObject(state,{
                ingredients: {
                    tomato: action.ingredients.tomato,
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat
                },
                error: false
            })
        case actionTypes.FETCH_DATA_FAILED:
            return updateObject( state, {
                error: true
            })
        default:
            return state;
    }
}

export default burgerBuilderReducer;
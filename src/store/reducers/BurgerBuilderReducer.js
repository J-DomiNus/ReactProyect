import * as actionTypes from '../actions/actionTypes';
import  {updateObject} from '../utility';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    ingredientsPrices: null
}

const addIngredient = (state, action) => {
    const addUpdatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] +1 }
    const addUpdatedIngredients = updateObject(state.ingredients, addUpdatedIngredient);
    const addUpdatedState = {
        ingredients: addUpdatedIngredients,
        totalPrice: state.totalPrice + state.ingredientsPrices[action.ingredientName]
    }
    return updateObject(state, addUpdatedState);
}

const removeIngredient = (state, action) => {
    const removeUpdatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 }
    const removeUpdatedIngredients = updateObject(state.ingredients, removeUpdatedIngredient);
    const removeUpdatedState = {
        ingredients: removeUpdatedIngredients,
        totalPrice: state.totalPrice + state.ingredientsPrices[action.ingredientName]
    }
    return updateObject(state, removeUpdatedState);
}

const setPrices = (state, action) => {
    return updateObject( state, {
        ingredientsPrices: action.prices,
        totalPrice: action.basePrice
    })
}

const setIngredients = (state, action) => {
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
}

const fetchDataFailed = (state, action) => {
    return updateObject( state, {
        error: true
    })
}

const burgerBuilderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT:  return removeIngredient(state, action);
        case actionTypes.SET_PRICES: return setPrices(state, action);
        case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);
        case actionTypes.FETCH_DATA_FAILED: return fetchDataFailed(state, action);
        default: return state;
    }
}

export default burgerBuilderReducer;
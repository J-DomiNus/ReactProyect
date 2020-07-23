import * as actionTypes from '../actions/actionTypes'

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    ingredientsPrices: null
}

const burgerBuilderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + state.ingredientsPrices[action.ingredientName]
            }
        case actionTypes.REMOVE_INGREDIENT: 
            return {
            ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
            },
            totalPrice: state.totalPrice - state.ingredientsPrices[action.ingredientName]
        }
        case actionTypes.SET_PRICES:
            return {
                ...state,
                ingredientsPrices: action.prices,
                totalPrice: action.basePrice
            }
        case actionTypes.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    tomato: action.ingredients.tomato,
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat
                },
                error: false
            }
        case actionTypes.FETCH_DATA_FAILED:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
}

export default burgerBuilderReducer;
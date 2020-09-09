import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
}
export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
}

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
}

export const fetchDataFailed = () => {
    return {
        type: actionTypes.FETCH_DATA_FAILED,
    }
}

export const initIngredients = () => {
        return dispatch => {
        axios.get('/ingredients.json')
            .then(response => {
                dispatch(setIngredients(response.data))
            })
            .catch(error => {
                dispatch(fetchDataFailed())
        })
        }
}

export const setPrices = (prices, basePrice) => {
    return {
        type: actionTypes.SET_PRICES,
        prices: prices,
        basePrice: basePrice
    }
}

export const initPrices = () => {
    return dispatch => {
        axios.get('/prices.json')
            .then(response => {
                dispatch(setPrices(response.data, response.data.baseprice))
            })
            .catch(error => {
                dispatch(error)
            })
    }
}

export const initStateFromServer = () => {
    return dispatch => {
        dispatch(initIngredients())
        dispatch(initPrices())
    }
}
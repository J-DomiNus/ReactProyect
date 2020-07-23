import * as actionTypes from './actionTypes';
import axios from '../../axios-orders'

export const postOrderSucceded = (id, orderData) => {
    return {
        type: actionTypes.POST_ORDER_SUCCEDED,
        orderId: id,
        orderData: orderData
    }
}

export const postOrderFailed = (error) => {
    return {
        type: actionTypes.POST_ORDER_FAILED,
        error: error
    }
}

export const postOrderStart = () => {
    return {
        type: actionTypes.POST_ORDER_START
    }
}

export const postOrderToServer = (orderData) => {
    return dispatch => {
        dispatch(postOrderStart())
        axios.post('/order.json', orderData)
            .then(response => {
                dispatch(postOrderSucceded(response.data.name, orderData));
            })
            .catch(error => {
                dispatch(postOrderFailed(error))
            })
    }
}

export const orderInit = () => {
    return {
        type: actionTypes.ORDER_INIT
    }
}
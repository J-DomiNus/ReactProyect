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

//--------FETCH ORDERS----------------------------------

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    };
};

export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    };
};

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START,
    };
};

export const fetchOrders = () => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        axios.get('/order.json')
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],//key=lenght[key]
                        id: key//key=paibvpaijvfn;v
                    })
                }
                dispatch(fetchOrdersSuccess(fetchedOrders));
            })
            .catch(err => {
                dispatch(fetchOrdersFail(err))
            })
    }
}
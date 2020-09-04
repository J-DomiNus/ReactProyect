import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    orders: [],
    loading: false,
    orderPosted: false
}

const orderReducer = (state = initialState, action) => {
        switch (action.type) {
            case actionTypes.ORDER_INIT:
                return updateObject(state, {
                    orderPosted: false
                })
            case actionTypes.POST_ORDER_START:
                return updateObject( state, {
                    loading:true
                })
            case actionTypes.POST_ORDER_SUCCEDED:
                const newOrder = updateObject(action.orderData, {
                    id: action.orderId,
                })
                return updateObject( state, {
                    loading: false,
                    orders: state.orders.concat(newOrder),
                    orderPosted: true
                })
            case actionTypes.POST_ORDER_FAILED:
                return updateObject(state, {
                    loading: false
                })
            case actionTypes.FETCH_ORDERS_START:
                return updateObject(state, {
                    loading: true
                })
            case actionTypes.FETCH_ORDERS_SUCCESS:
                return updateObject( state, {
                    orders: action.orders,
                    loading: false
                })
            case actionTypes.FETCH_ORDERS_FAIL:
                return updateObject( state, {
                    loading: false
                })
            default: return state
        }
}

export default orderReducer;
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    orders: [],
    loading: false,
    orderPosted: false
}

const orderReducer = (state = initialState, action) => {
        switch (action.type) {
            case actionTypes.ORDER_INIT:
                return {
                    ...state,
                    orderPosted: false
                }
            case actionTypes.POST_ORDER_START:
                return {
                    ...state,
                    loading:true
                }
            case actionTypes.POST_ORDER_SUCCEDED:
                const newOrder = {
                    ...action.orderData, 
                    id: action.orderId,
                }
                return {
                    ...state,
                    loading: false,
                    orders: state.orders.concat(newOrder),
                    orderPosted: true
                }
            case (actionTypes.POST_ORDER_FAILED):
                return {
                    ...state,
                    loading: false
                }
            default: return state
        }
}

export default orderReducer;
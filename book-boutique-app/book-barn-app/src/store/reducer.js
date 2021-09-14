//used to change the state
import * as actionTypes from '../store/actions/actionTypes'

const initialState = {
    cartItems: []
}

const reducer = (state = initialState,action) => {

    switch(action.type) {
        case actionTypes.ADDED_TO_CART:
            return {
                ...state,
                cartItems: action
            }
        default:
            return state
    }
    
}

export default reducer



import * as actionTypes from '../actions/actionTypes'

export const addToCart = (book) => {
    return {
        type:actionTypes.ADDED_TO_CART,
        payload:book
    }
}
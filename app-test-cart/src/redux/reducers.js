import { createReducer } from 'reduxsauce'
import { Types } from './actions'

export const INITIAL_STATE = { 
  cart: {
    items: [],
    total: 0, 
  },
  user: {},
  name: 'Bradley'
  
}


export const addToCart = (state, action) => {
  return {
    ...state,
    cart: {
      ...state.cart,
      items: [
        ...state.cart.items, 
        {
          product: action.product, 
          quantity: action.quantity
        }
      ]

    }
  }
}

export const changeName = (state, action) => {
  return {
    ...state,
    name: action.name
  }
}

// map our action types to our reducer functions
export const HANDLERS = {
  [Types.ADD_TO_CART]: addToCart,
  [Types.CHANGE_NAME]: changeName
}

export default createReducer(INITIAL_STATE, HANDLERS)
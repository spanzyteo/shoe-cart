import React, { createContext, useContext, useReducer } from 'react'

const initialState = {
  cartValue: 0,
  showCartValue: false,
}

const CartContext = createContext()

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, cartValue: state.cartValue + 1 }
    case 'DECREMENT': {
      if (state.cartValue > 0)
        return { ...state, cartValue: state.cartValue - 1 }
    }
    case 'SHOW_CART_VALUE':
      return { ...state, showCartValue: true }
    default:
      return state
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be within a cart provider')
  }
  return context
}

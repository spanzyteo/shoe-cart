import React, { createContext, useContext, useReducer } from 'react'

import imageThumbnail1 from './images/image-product-1-thumbnail.jpg'
import imageThumbnail2 from './images/image-product-2-thumbnail.jpg'
import imageThumbnail3 from './images/image-product-3-thumbnail.jpg'
import imageThumbnail4 from './images/image-product-4-thumbnail.jpg'

const data = [
  { image: imageThumbnail1, count: 0, id: 0 },
  { image: imageThumbnail2, count: 0, id: 1 },
  { image: imageThumbnail3, count: 0, id: 2 },
  { image: imageThumbnail4, count: 0, id: 3 },
]

const initialState = {
  data,
  cartValue: 0,
  showCartValue: false,
  showCartItems: false,
  selectedImage: 0,
  imageIndex: null,
}

const CartContext = createContext()

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SELECTED_IMAGE':
      return { ...state, selectedImage: action.payload }
    case 'INCREMENT': {
      return {
        ...state,
        data: state.data.map((item) =>
          item.id === action.id ? { ...item, count: item.count + 1 } : item
        ),
      }
    }
    case 'DECREMENT': {
      if (state.cartValue > 0)
        return {
          ...state,
          data: state.data.map((item) =>
            item.id === action.id ? { ...item, count: item.count - 1 } : item
          ),
        }
    }
    case 'NEXT_IMAGE': {
      return {
        ...state,
        selectedImage:
          state.selectedImage === state.data.length - 1
            ? 0
            : state.selectedImage + 1,
      }
    }

    case 'PREVIOUS_IMAGE': {
      return {
        ...state,
        selectedImage:
          state.selectedImage === 0
            ? state.data.length - 1
            : state.selectedImage - 1,
      }
    }

    case 'SHOW_CART_VALUE':
      return { ...state, showCartValue: true }
    case 'SHOW_CART_ITEMS':
      return { ...state, showCartItems: !state.showCartItems }
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
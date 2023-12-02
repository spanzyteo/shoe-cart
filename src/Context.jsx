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

];
const cartData = [
  { image: imageThumbnail1, count: 0, id: 0 },
  { image: imageThumbnail2, count: 0, id: 1 },
  { image: imageThumbnail3, count: 0, id: 2 },
  { image: imageThumbnail4, count: 0, id: 3 },
];

const initialState = {
  data,
  cartData,
  cartValue: 0,
  showCartValue: false,
  showCartItems: false,
  selectedImage: 0,
  imageIndex: null,
  cartItems: [],
}

const CartContext = createContext()

const cartReducer = (state, action) => {
  console.log(state.data)
  switch (action.type) {
    case 'SET_SELECTED_IMAGE':
      return { ...state, selectedImage: action.payload }
    case 'INCREMENT': {
      return {
        ...state,
        data: state.data.map((item) =>
          item.id === state.selectedImage
            ? { ...item, count: item.count + 1 }
            : item
        ),
      }
    }
    case 'DECREMENT': {
      // if (state.cartValue > 0)
      return {
        ...state,
        data: state.data.map((item) =>
          item.id === state.selectedImage
            ? { ...item, count: item.count >= 1 ? item.count - 1 : 0 }
            : item
        ),
      }
    }
    case 'ADD_TO_CART': {
      return {
        ...state,
        cartData: state.cartData.map((item) => {
          if (item.id === state.selectedImage) {
            return {
              ...item,
              count: (item.count += state.data[state.selectedImage].count),
            };
          }
          return item;
        }),
      };
    }

    case 'DELETE_CART_ITEM': {
      console.log('Delete');
      return {
        ...state,
        cartData: state.cartData.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              count: 0,
            };
          }
          return item;
        }),
      };
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
    case 'SUM_CART_VALUE': {

      let updatedCartValue = state.cartData.reduce((total, item) => {
        total += item.count;
        return total;
      }, 0);


      return {
        ...state,
        cartValue: updatedCartValue,
      }
    }
    case 'ADD_ITEMS': {
      return { ...state, cartItems: [...state.cartItems, action.payload] }
    }
    case 'DELETE_ITEMS': {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (itemId) => itemId !== action.payload
        ),
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

import React, { createContext, useContext, useReducer } from 'react'
import { reviews } from './utils/trendingItems'

import imageThumbnail1 from './images/image-product-1-thumbnail.jpg'
import imageThumbnail2 from './images/image-product-2-thumbnail.jpg'
import imageThumbnail3 from './images/image-product-3-thumbnail.jpg'
import imageThumbnail4 from './images/image-product-4-thumbnail.jpg'

import femaleImage1 from './images/female-1.avif'
import femaleImage2 from './images/female-2.jpg'
import femaleImage3 from './images/female-3.jpg'
import femaleImage4 from './images/female-4.jpg'

import trending1 from './images/trending-1.jpg'
import trending2 from './images/trending-2.jpg'
import trending3 from './images/trending-3.jpg'
import trending4 from './images/trending-4.jpg'
import trending5 from './images/trending-5.jpg'
import trending6 from './images/trending-6.jpg'
import trending7 from './images/trending-7.jpg'
import trending8 from './images/trending-8.jpg'
import trending9 from './images/trending-9.jpg'
import trending10 from './images/trending-10.jpg'

import kids1 from './images/kids-1.jpg'
import kids2 from './images/kids-2.jpg'
import kids3 from './images/kids-3.jpg'
import kids4 from './images/kids-5.jpg'

import giftCard1 from './images/cropcopy.webp'
import giftCard2 from './images/cropcopy-2.webp'

const data = [
  {
    image: imageThumbnail1,
    count: 0,
    id: 0,
    gender: 'male',
    brand: 'Reebok Club C 85',
    sizes: 'XXS/12',
    price: 54000,
  },
  {
    image: imageThumbnail2,
    count: 0,
    id: 1,
    gender: 'male',
    brand: 'New Balance 990',
    sizes: 'XS/14',
    price: 43000,
  },
  {
    image: imageThumbnail3,
    count: 0,
    id: 2,
    gender: 'male',
    brand: 'Vans Sk8-Hi',
    sizes: 'XXS/12',
    price: 48000,
  },
  {
    image: imageThumbnail4,
    count: 0,
    id: 3,
    gender: 'male',
    brand: 'Converse Jack Purcell',
    sizes: 'XXS/12',
    price: 34000,
  },
]

const femaleData = [
  {
    image: femaleImage1,
    count: 0,
    id: 0,
    gender: 'female',
    brand: 'Reebok Freestyle Hi',
    sizes: 'XXS/12',
    price: 76000,
  },
  {
    image: femaleImage2,
    count: 0,
    id: 1,
    gender: 'female',
    brand: 'Vans Authentic',
    sizes: 'XS/14',
    price: 49000,
  },
  {
    image: femaleImage3,
    count: 0,
    id: 2,
    gender: 'female',
    brand: 'Converse Chuck Taylor All Star Lift',
    sizes: 'XS/14',
    price: 94000,
  },
  {
    image: femaleImage4,
    count: 0,
    id: 3,
    gender: 'female',
    brand: 'Puma Cali',
    sizes: 'XXS/12',
    price: 62000,
  },
]

const trendingData = [
  {
    image: trending1,
    brand: 'malvestidaren',
    sizes: 'XXS/12',
    price: 100000,
    count: 0,
    gender: 'trending',
    id: 0,
  },
  {
    image: trending2,
    brand: 'ryana-plomper',
    sizes: 'XS/14',
    price: 130000,
    count: 0,
    gender: 'trending',
    id: 1,
  },
  {
    image: trending3,
    brand: 'maksim-laryner',
    sizes: 'XS/14',
    price: 170000,
    count: 0,
    gender: 'trending',
    id: 2,
  },
  {
    image: trending4,
    brand: 'andress-jasomen',
    sizes: 'XS/14',
    price: 300000,
    count: 0,
    gender: 'trending',
    id: 3,
  },
  {
    image: trending5,
    brand: 'New Balance 990',
    sizes: 'XXS/12',
    price: 120000,
    count: 0,
    gender: 'trending',
    id: 4,
  },
  {
    image: trending6,
    brand: 'Converse Jack Purcell',
    sizes: 'XXS/12',
    price: 600000,
    count: 0,
    gender: 'trending',
    id: 5,
  },
  {
    image: trending7,
    brand: 'Asics Gel-Lyte III',
    sizes: 'XS/14',
    price: 200000,
    count: 0,
    gender: 'trending',
    id: 6,
  },
  {
    image: trending8,
    brand: 'Skechers Energy Lights',
    sizes: 'XS/14',
    price: 150000,
    count: 0,
    gender: 'trending',
    id: 7,
  },
  {
    image: trending9,
    brand: 'Adidas Superstar',
    sizes: 'XXS/12',
    price: 250000,
    count: 0,
    gender: 'trending',
    id: 8,
  },
  {
    image: trending10,
    brand: 'Nike React Element',
    sizes: 'XXS/12',
    price: 350000,
    count: 0,
    gender: 'trending',
    id: 9,
  },
]

const kidsData = [
  {
    image: kids1,
    count: 0,
    id: 0,
    gender: 'kids',
    brand: 'Asics Gel-Lyte GS',
    sizes: 'XXS/12',
    price: 51000,
  },
  {
    image: kids2,
    count: 0,
    id: 1,
    gender: 'kids',
    brand: 'New Balance 574 Kids',
    sizes: 'XXS/12',
    price: 50000,
  },
  {
    image: kids3,
    count: 0,
    id: 2,
    gender: 'kids',
    brand: 'Puma Suede Classic Kids',
    sizes: 'XXS/12',
    price: 32000,
  },
  {
    image: kids4,
    count: 0,
    id: 3,
    gender: 'kids',
    brand: 'Reebok Classic Leather Kids',
    sizes: 'XXS/12',
    price: 28000,
  },
]

const cartData = [
  { image: imageThumbnail1, image2: femaleImage1, count: 0, id: 0 },
  { image: imageThumbnail2, image2: femaleImage2, count: 0, id: 1 },
  { image: imageThumbnail3, image2: femaleImage3, count: 0, id: 2 },
  { image: imageThumbnail4, image2: femaleImage4, count: 0, id: 3 },
]

const giftData = [
  {
    image: giftCard1,
    gender: 'gift',
    id: 0,
    brand: 'SNEAKERS DIGITAL GIFT CARD',
    sizes: 'Digital Gift Card $25',
    price: 40000,
    count: 1,
  },
  {
    image: giftCard2,
    gender: 'gift',
    id: 1,
    brand: 'SNEAKERS DIGITAL GIFT CARD',
    sizes: 'Digital Gift Card $50',
    price: 80000,
    count: 1,
  },
]

const initialState = {
  reviews,
  data,
  cartData,
  femaleData,
  kidsData,
  trendingData,
  giftData,
  cartValue: 0,
  showCartValue: false,
  showCartItems: false,
  selectedImage: 0,
  selectedImageFemale: 0,
  selectedImageKids: 0,
  selectedTrendingImage: 0,
  selectedGiftCard: 0,
  imageIndex: null,
  cartItems: [],
  isOpen: false,
  isFemaleOpen: false,
  isKidsOpen: false,
  totalPrice: 0,
  collectionRef: null,
}

const CartContext = createContext()

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SELECTED_IMAGE':
      return { ...state, selectedImage: action.payload }

    case 'SET_SELECTED_IMAGE_FEMALE':
      return { ...state, selectedImageFemale: action.payload }

    case 'SET_SELECTED_IMAGE_KIDS':
      return { ...state, selectedImageKids: action.payload }

    case 'SET_SELECTED_TRENDING_IMAGE':
      return { ...state, selectedTrendingImage: action.payload }

    case 'SET_SELECTED_GIFT_CARD':
      return { ...state, selectedGiftCard: action.payload }

    case 'INCREMENT': {
      return {
        ...state,
        data: state.data.map((item) => {
          return item.id === state.selectedImage
            ? { ...item, count: item.count + 1 }
            : item
        }),
      }
    }

    case 'INCREMENT_FEMALE': {
      return {
        ...state,
        femaleData: state.femaleData.map((item) => {
          return item.id === state.selectedImageFemale
            ? { ...item, count: item.count + 1 }
            : item
        }),
      }
    }

    case 'INCREMENT_KIDS': {
      return {
        ...state,
        kidsData: state.kidsData.map((item) => {
          return item.id === state.selectedImageKids
            ? { ...item, count: item.count + 1 }
            : item
        }),
      }
    }

    case 'INCREMENT_TRENDING': {
      return {
        ...state,
        trendingData: state.trendingData.map((item) => {
          return item.id === action.payload
            ? { ...item, count: item.count + 1 }
            : item
        }),
      }
    }

    case 'DECREMENT': {
      return {
        ...state,
        data: state.data.map((item) => {
          return item.id === state.selectedImage
            ? { ...item, count: item.count >= 1 ? item.count - 1 : 0 }
            : item
        }),
      }
    }

    case 'DECREMENT_FEMALE': {
      return {
        ...state,
        femaleData: state.femaleData.map((item) => {
          return item.id === state.selectedImageFemale
            ? { ...item, count: item.count >= 1 ? item.count - 1 : 0 }
            : item
        }),
      }
    }

    case 'DECREMENT_KIDS': {
      return {
        ...state,
        kidsData: state.kidsData.map((item) => {
          return item.id === state.selectedImageKids
            ? { ...item, count: item.count >= 1 ? item.count - 1 : 0 }
            : item
        }),
      }
    }

    case 'DECREMENT_TRENDING': {
      return {
        ...state,
        trendingData: state.trendingData.map((item) => {
          return item.id === action.payload
            ? { ...item, count: item.count >= 1 ? item.count - 1 : 0 }
            : item
        }),
      }
    }

    case 'ADD_TO_CART': {
      const selectedItem =
        action.payload.gender === 'male'
          ? state.data.find((item) => item.id === state.selectedImage)
          : action.payload.gender === 'female'
          ? state.femaleData.find(
              (item) => item.id === state.selectedImageFemale
            )
          : action.payload.gender === 'kids'
          ? state.kidsData.find((item) => item.id === state.selectedImageKids)
          : action.payload.gender === 'gift'
          ? state.giftData.find((item) => item.id === state.selectedGiftCard)
          : state.trendingData.find((item) => item.id === action.payload)

      if (!selectedItem) {
        return state
      }

      return {
        ...state,
        cartItems: [...state.cartItems, selectedItem],
      }
    }

    case 'DELETE_CART_ITEM': {
      const { id, gender } = action.payload
      console.log('deleted')

      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => !(item.id === id && item.gender === gender)
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

    case 'NEXT_IMAGE_FEMALE': {
      return {
        ...state,
        selectedImageFemale:
          state.selectedImageFemale === state.data.length - 1
            ? 0
            : state.selectedImageFemale + 1,
      }
    }

    case 'NEXT_IMAGE_KIDS': {
      return {
        ...state,
        selectedImageKids:
          state.selectedImageKids === state.kidsData.length - 1
            ? 0
            : state.selectedImageKids + 1,
      }
    }

    case 'NEXT_GIFT_CARD_IMAGE': {
      console.log(state.selectedGiftCard)
      return {
        ...state,
        selectedGiftCard:
          state.selectedGiftCard === state.giftData.length - 1
            ? 0
            : state.selectedGiftCard + 1,
      }
    }

    case 'NEXT_IMAGE_TRENDING': {
      return {
        ...state,
        selectedTrendingImage:
          state.selectedTrendingImage === state.trendingData.length,
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

    case 'PREVIOUS_IMAGE_FEMALE': {
      return {
        ...state,
        selectedImageFemale:
          state.selectedImageFemale === 0
            ? state.data.length - 1
            : state.selectedImageFemale - 1,
      }
    }

    case 'PREVIOUS_IMAGE_KIDS': {
      return {
        ...state,
        selectedImageKids:
          state.selectedImageKids === 0
            ? state.kidsData.length - 1
            : state.selectedImageKids - 1,
      }
    }

    case 'PREVIOUS_GIFT_CARD_IMAGE': {
      console.log(state.selectedGiftCard)
      return {
        ...state,
        selectedGiftCard:
          state.selectedGiftCard === 0
            ? state.giftData.length - 1
            : state.selectedGiftCard - 1,
      }
    }

    case 'PREVIOUS_IMAGE_TRENDING': {
      return {
        ...state,
        selectedTrendingImage:
          state.selectedTrendingImage === 0
            ? state.trendingData.length - 1
            : state.selectedTrendingImage - 1,
      }
    }

    case 'SUM_CART_VALUE': {
      let updatedCartValue = state.cartItems.reduce((total, item) => {
        total += item.count
        return total
      }, 0)

      return {
        ...state,
        cartValue: updatedCartValue,
      }
    }

    case 'SUM_TOTAL_PRICE': {
      let updatedPrice = state.cartItems.reduce((total, item) => {
        total += item.price
        return total
      }, 0)

      return {
        ...state,
        totalPrice: updatedPrice,
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
    case 'OPEN_MODAL':
      return { ...state, isOpen: true }
    case 'CLOSE_MODAL':
      return { ...state, isOpen: false }
    case 'OPEN_FEMALE_MODAL':
      return { ...state, isFemaleOpen: true }
    case 'CLOSE_FEMALE_MODAL':
      return { ...state, isFemaleOpen: false }
    case 'OPEN_KIDS_MODAL':
      return { ...state, isKidsOpen: true }
    case 'CLOSE_KIDS_MODAL':
      return { ...state, isKidsOpen: false }
    case 'SET_COLLECTION_REF':
      return { ...state, collectionRef: action.payload }
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

import React from 'react'
import { useCart } from '../../Context'

const GiftCardLeftArrow = () => {
  const { dispatch } = useCart()
  const previousImage = () => {
    dispatch({ type: 'PREVIOUS_GIFT_CARD_IMAGE' })
  }
  return (
    <svg
      className="previous-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 15"
      style={{
        top: '50%',
        marginLeft: '-15px',
        marginTop: '-10px',
      }}
      onClick={() => {
        previousImage()
      }}
    >
      <style>{`.previous-icon path:hover { stroke: hsl(26, 100%, 55%);} `}</style>
      <path
        d="M11 1 3 9l8 8"
        stroke="#1D2026"
        stroke-width="3"
        fill="none"
        fill-rule="evenodd"
      />
    </svg>
  )
}

export default GiftCardLeftArrow

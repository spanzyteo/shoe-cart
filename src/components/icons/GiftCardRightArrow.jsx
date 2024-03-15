import React from 'react'
import { useCart } from '../../Context'

const GiftCardRightArrow = () => {
  const { dispatch } = useCart()

  const nextImage = () => {
    dispatch({ type: 'NEXT_GIFT_CARD_IMAGE' })
  }
  return (
    <svg
      className="next-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 15"
      style={{ marginRight: '-15px', marginTop: '-10px' }}
      onClick={() => {
        nextImage()
      }}
    >
      <style>{`.next-icon path:hover { stroke: hsl(26, 100%, 55%);} `}</style>
      <path
        d="m2 1 8 8-8 8"
        stroke="#1D2026"
        stroke-width="3"
        fill="none"
        fill-rule="evenodd"
      />
    </svg>
  )
}

export default GiftCardRightArrow

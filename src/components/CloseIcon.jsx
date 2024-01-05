import React from 'react'
import { useCart } from '../Context'

const CloseIcon = () => {
  const { dispatch } = useCart()
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }
  return (
    <svg
      className="close-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 15"
      height="14px"
      width="14px"
      style={{
        marginTop: '-35px',
        cursor: 'pointer',
      }}
      onClick={() => {
        closeModal()
      }}
    >
      <style>{`.close-icon path:hover { fill: hsl(26, 100%, 55%);} `}</style>
      <path
        d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
        fill="#fff"
      />
    </svg>
  )
}

export default CloseIcon

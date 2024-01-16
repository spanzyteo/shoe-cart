import React, { useState } from 'react'
import { Stack, Typography, Button } from '@mui/material'
import { useCart } from '../Context'

import plusIcon from '../images/icon-plus.svg'
import minusIcon from '../images/icon-minus.svg'
import cartIcon from '../images/icon-cart.svg'

const MenShoeDetails = () => {
  const { state, dispatch } = useCart()

  const currentThumbnail = state.data.find(
    (item) => item.id === state.selectedImage
  )

  const increaseCount = () => {
    dispatch({ type: 'INCREMENT' })
  }

  const decreaseCount = () => {
    dispatch({ type: 'DECREMENT' })
  }

  const showValue = () => {
    dispatch({ type: 'SHOW_CART_VALUE' })
  }
  const updateCartValue = () => {
    dispatch({ type: 'SUM_CART_VALUE' })
  }

  const imageStyle = {
    filter: 'brightness(0) invert(1) grayscale(100%)',
  }
  return (
    <Stack
      direction="column"
      sx={{ ml: { lg: '10rem', xs: '1rem' } }}
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="start"
        sx={{ mt: { lg: '2rem', xs: '1.8rem' } }}
      >
        <Typography fontSize="1rem" color="hsl(26, 100%, 55%)" fontWeight={700}>
          SNEAKER COMPANY
        </Typography>
        <Typography
          fontSize={{ lg: '2.4rem', xs: '1.8rem' }}
          fontWeight={700}
          lineHeight={1.2}
          sx={{ mt: { lg: '0.5rem', xs: '0.7rem' } }}
        >
          Fall Limited Edition <br /> Sneakers
        </Typography>
        <Typography
          fontSize="1rem"
          color="hsl(219, 9%, 45%)"
          width={{ lg: '26rem', xs: '21rem' }}
          lineHeight={1.6}
          sx={{ mt: { lg: '1.2rem', xs: '1.2rem' } }}
        >
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </Typography>
        <Stack direction="row" sx={{ mt: '0.8rem' }} alignItems="center">
          <Typography fontWeight={700} fontSize="1.6rem">
            $125.00
          </Typography>
          <Typography
            color="hsl(26, 100%, 55%)"
            borderRadius="0.3rem"
            bgcolor="hsl(25, 100%, 94%)"
            sx={{ ml: '1rem' }}
            p="0.3rem"
          >
            50%
          </Typography>
          <Typography
            className="cancel"
            color="hsl(219, 9%, 45%)"
            sx={{ ml: '7rem' }}
            display={{ lg: 'none', xs: 'block' }}
          >
            $250.00
          </Typography>
        </Stack>
        <Typography
          className="cancel"
          color="hsl(219, 9%, 45%)"
          sx={{ mt: '0.1rem' }}
          display={{ xs: 'none', lg: 'block' }}
        >
          $250.00
        </Typography>

        <Stack
          direction={{ lg: 'row', xs: 'column' }}
          alignItems="center"
          justifyContent="center"
        >
          <Stack
            direction="row"
            alignItems="center"
            gap={{ lg: '2rem', xs: '8rem' }}
            sx={{
              mt: { lg: '1rem', xs: '2rem' },
              py: { xs: '0.8rem' },
              px: { xs: '0.8rem' },
            }}
            bgcolor="hsl(223, 64%, 98%)"
            borderRadius="0.6rem"
          >
            <img
              style={{ cursor: 'pointer' }}
              src={minusIcon}
              alt="minus-icon"
              onClick={decreaseCount}
            />
            <Typography fontWeight={700}>{currentThumbnail.count}</Typography>
            <img
              style={{ cursor: 'pointer' }}
              src={plusIcon}
              alt="plus-icon"
              onClick={increaseCount}
            />
          </Stack>

          <Button
            onClick={() => {
              showValue()
              dispatch({ type: 'ADD_TO_CART' })
              updateCartValue()
            }}
            variant="contained"
            color="error"
            style={{ textTransform: 'none' }}
            sx={{
              backgroundColor: 'hsl(26, 100%, 55%)',
              py: { xs: '0.8rem', lg: '0.7rem' },
              px: { xs: '6rem', lg: '4rem' },
              borderRadius: '0.6rem',
              ml: { lg: '3rem' },
              mt: { lg: '0.7rem', xs: '2rem' },
              ':hover': { opacity: 0.4 },
            }}
          >
            <Stack direction="row" gap="1rem">
              <img style={imageStyle} src={cartIcon} alt="cart-icon" />
              <Typography fontWeight={700} color="white">
                Add to cart
              </Typography>
            </Stack>
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default MenShoeDetails

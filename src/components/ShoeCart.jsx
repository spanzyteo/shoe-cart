import React, { useEffect } from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import { useCart } from '../Context'
import { Link, useLocation } from 'react-router-dom'

import deleteIcon from '../images/icon-delete.svg'

const ShoeCart = () => {
  const location = useLocation()
  const { state, dispatch } = useCart()
  const filteredCart = state.cartItems.filter((item) => item.count > 0)
  const handleDeleteItem = (id, gender) => {
    dispatch({
      type: 'DELETE_CART_ITEM',
      payload: { id, gender },
    })
  }
  const totalPrice = () => {
    dispatch({
      type: 'SUM_TOTAL_PRICE',
    })
  }
  useEffect(() => {}, [state.cartItems])

  return (
    <Box
      sx={{
        display: 'flex',
        position: 'absolute',
        top: '100%',
        right: { lg: '0', xs: '5%' },
        width: '21rem',
        // height: '20px',
        maxHeight: '25rem',
        maxWidth: '30rem',
        zIndex: '100',
      }}
    >
      {state.showCartItems && (
        <Stack
          flexDirection="column"
          bgcolor="white"
          height="100%"
          width="100%"
          marginTop="0.5rem"
          borderRadius="0.6rem"
          boxShadow="0px 3px 3px rgba(0,0,0,0.5) "
        >
          <Stack borderBottom="1px solid hsl(220, 14%, 75%)">
            <Stack sx={{ py: '0.8rem', px: '0.8rem' }}>
              <Typography variant="h6" fontWeight={700}>
                Cart
              </Typography>
            </Stack>
          </Stack>
          {state.showCartValue ? (
            <Stack
              direction="column"
              sx={{ p: '1rem' }}
              gap={3}
              alignItems="center"
              justifyContent="start"
            >
              {filteredCart.length > 0 ? (
                <>
                  {filteredCart.map((item) => (
                    <Stack
                      direction="row"
                      gap={2}
                      alignItems="center"
                      key={item.id}
                    >
                      <img
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '6px',
                        }}
                        src={item.gender === 'male' ? item.image : item.image}
                        alt=""
                      />

                      <Typography color="hsl(219, 9%, 45%)">
                        Fall Limited Edition Sneakers <br /> ₦{item.price} x{' '}
                        {''}
                        {item.count}
                        <span
                          style={{
                            fontWeight: '700',
                            color: 'hsl(0, 0%, 0%)',
                          }}
                        >
                          {' '}
                          ₦{(item.count * item.price).toFixed(2)}
                        </span>
                        {/* Comment */}
                      </Typography>
                      <img
                        src={deleteIcon}
                        alt=""
                        onClick={() => {
                          handleDeleteItem(item.id, item.gender)
                          dispatch({ type: 'SUM_CART_VALUE' })
                        }}
                        style={{ cursor: 'pointer' }}
                      />
                    </Stack>
                  ))}
                  <Stack>
                    <Link to="/checkout">
                      <Button
                        onClick={() => {
                          totalPrice()
                        }}
                        variant="contained"
                        color="error"
                        sx={{
                          bgcolor: 'hsl(26, 100%, 55%)',
                          width: '18rem',
                          height: '3rem',
                          borderRadius: '0.6rem',
                          fontWeight: '700',
                          fontSize: '16px',
                          ':hover': { opacity: 0.4 },
                          mb: '1rem',
                        }}
                      >
                        Checkout
                      </Button>
                    </Link>
                  </Stack>
                </>
              ) : (
                <Stack
                  gap={1}
                  sx={{ p: { lg: '4rem', xs: '6rem' }, m: 'auto' }}
                >
                  <Typography fontWeight={700} color="hsl(219, 9%, 45%)">
                    Your cart is empty
                  </Typography>
                </Stack>
              )}
            </Stack>
          ) : (
            <Stack gap={1} sx={{ p: { lg: '4rem', xs: '6rem' }, m: 'auto' }}>
              <Typography fontWeight={700} color="hsl(219, 9%, 45%)">
                Your cart is empty
              </Typography>
            </Stack>
          )}
        </Stack>
      )}
    </Box>
  )
}

export default ShoeCart

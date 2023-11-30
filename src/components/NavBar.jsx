import React, { useState } from 'react'
import { Stack, Typography, Box } from '@mui/material'
import ShoeCart from './ShoeCart'
import { useCart } from '../Context'

import menuIcon from '../images/icon-menu.svg'
import cartIcon from '../images/icon-cart.svg'
import avatar from '../images/image-avatar.png'

const NavBar = ({ toggleSideBar, itemInCart }) => {
  const { state, dispatch } = useCart()

  const showCartItems = () => {
    dispatch({ type: 'SHOW_CART_ITEMS' })
  }
  return (
    <Box position="relative">
      <ShoeCart />
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        borderBottom="1px solid #E8E8E8"
        position="sticky"
        top="0"
        width={{ xs: '100%' }}
        zIndex={100}
        bgcolor="white"
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            gap: { xs: '10px', lg: '15px' },
            my: { sm: '17px', lg: '26px' },
            px: { xs: '10px', lg: '0px' },
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            gap={{ xs: '10px', lg: '25px' }}
          >
            <Stack display={{ xs: 'block', lg: 'none' }}>
              <img
                style={{
                  height: '20px',
                  width: '20px',
                  marginTop: '10px',
                  marginRight: '14px',
                  cursor: 'pointer',
                }}
                src={menuIcon}
                alt="menu icon"
                onClick={toggleSideBar}
              />
            </Stack>
            <Typography variant="h3" fontWeight={700}>
              sneakers
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              display={{ xs: 'none', lg: 'flex' }}
              gap="36px"
              sx={{ ml: '15px' }}
            >
              <Typography fontSize="16px" color="hsl(219, 9%, 45%)">
                Collection
              </Typography>
              <Typography fontSize="16px" color="hsl(219, 9%, 45%)">
                Men
              </Typography>
              <Typography fontSize="16px" color="hsl(219, 9%, 45%)">
                Women
              </Typography>
              <Typography fontSize="16px" color="hsl(219, 9%, 45%)">
                About
              </Typography>
              <Typography fontSize="16px" color="hsl(219, 9%, 45%)">
                Contact
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            gap={{ xs: '25px', lg: '35px' }}
          >
            <Stack
              position="relative"
              width="50px"
              height="50px"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
            >
              {state.showCartValue && (
                <Stack
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="center"
                  position="absolute"
                  top="10%"
                  right="0"
                  height="18px"
                  width="22px"
                  borderRadius="7px"
                  bgcolor="hsl(26, 100%, 55%)"
                >
                  <Typography variant="h7" fontWeight={700} color="white">
                    {state.cartValue}
                  </Typography>
                </Stack>
              )}
              <img
                onClick={() => {
                  showCartItems()
                }}
                style={{ height: '30px', width: '30px', cursor: 'pointer' }}
                src={cartIcon}
                alt="cart icon"
              />
            </Stack>
            <img
              style={{ height: '40px', width: '40px' }}
              src={avatar}
              alt="image avatar"
            />
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}

export default NavBar

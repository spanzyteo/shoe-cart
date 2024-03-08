import React, { useState } from 'react'
import { Stack, Typography, Box } from '@mui/material'
import ShoeCart from './ShoeCart'
import { useCart } from '../Context'
import { Link, useLocation } from 'react-router-dom'

import menuIcon from '../images/icon-menu.svg'
import cartIcon from '../images/icon-cart.svg'
import avatar from '../images/image-avatar.png'

const NavBar = ({ toggleSideBar }) => {
  const { state, dispatch } = useCart()
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  const activeStyle = {
    backgroundColor: 'black',
    color: '#fff',
    padding: '3px',
    borderRadius: '3px',
  }

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
            <Stack display={{ xs: 'flex', lg: 'none' }}>
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
            <Link to="/" className="text-decoration">
              <Typography variant="h3" fontWeight={700}>
                sneakers
              </Typography>
            </Link>
            <Stack
              direction="row"
              alignItems="center"
              display={{ xs: 'none', lg: 'flex' }}
              gap="36px"
              sx={{ ml: '1rem', mt: '1rem' }}
            >
              <Link
                to="/collection"
                className="text-decoration"
                style={
                  isActive('/collection')
                    ? activeStyle
                    : { color: 'hsl(219, 9%, 45%)' }
                }
              >
                COLLECTION
              </Link>
              <Link
                to="/male"
                className="text-decoration"
                style={
                  isActive('/male')
                    ? activeStyle
                    : { color: 'hsl(219, 9%, 45%)' }
                }
              >
                MEN
              </Link>
              <Link
                to="/female"
                className="text-decoration"
                style={
                  isActive('/female')
                    ? activeStyle
                    : { color: 'hsl(219, 9%, 45%)' }
                }
              >
                WOMEN
              </Link>
              <Link
                to="/kids"
                className="text-decoration"
                style={
                  isActive('/kids')
                    ? activeStyle
                    : { color: 'hsl(219, 9%, 45%)' }
                }
              >
                KIDS
              </Link>
              <Link
                to="/about"
                className="text-decoration"
                style={
                  isActive('/about')
                    ? activeStyle
                    : { color: 'hsl(219, 9%, 45%)' }
                }
              >
                ABOUT
              </Link>
              <Link
                to="/contact"
                className="text-decoration"
                style={
                  isActive('/contact')
                    ? activeStyle
                    : { color: 'hsl(219, 9%, 45%)' }
                }
              >
                CONTACT
              </Link>
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
              {state.cartValue > 0 && (
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

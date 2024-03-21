import React, { useEffect, useState } from 'react'
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
  const [isScrolling, setIsScrolling] = useState(false)

  const collectionRef = state.collectionRef

  const handleScrollToCollection = () => {
    if (collectionRef && collectionRef.current) {
      collectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

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

  let timeoutId

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true)

      clearTimeout(timeoutId)

      timeoutId = setTimeout(() => {
        setIsScrolling(false)
      }, 1000)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <Box position="relative">
      <ShoeCart />
      <div className={`navbar-wrapper ${isScrolling ? 'scrolled' : ''}`}>
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          borderBottom="1px solid #E8E8E8"
          // position="sticky"
          // top="0"
          width={{ xs: '100%' }}
          zIndex={100}
          bgcolor={{
            sm: isScrolling ? 'rgba(255, 255, 255, 0.4)' : 'white',
            xs: isScrolling ? 'rgba(255, 255, 255, 0.4)' : 'white',
            lg: 'white',
          }}
          sx={{ transition: 'bgcolor 0.8s ease' }}
          pr={{ lg: '0rem', sm: '1rem', xs: '1.3rem' }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              gap: { xs: '10px', lg: '15px' },
              my: { sm: '0px', xs: '0px', lg: '26px' },
              px: { xs: '10px', lg: '0px' },
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              gap={{ sm: '0px', xs: '0px', lg: '25px' }}
            >
              <Stack display={{ xs: 'flex', lg: 'none' }}>
                <img
                  style={{
                    height: '20px',
                    width: '20px',
                    marginTop: '8px',
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
                  onClick={handleScrollToCollection}
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
                <Stack>
                  <img
                    onClick={() => {
                      showCartItems()
                    }}
                    style={{ height: '30px', width: '30px', cursor: 'pointer' }}
                    src={cartIcon}
                    alt="cart icon"
                  />
                </Stack>
              </Stack>
              <Stack>
                <img
                  style={{ height: '40px', width: '40px' }}
                  src={avatar}
                  alt="image avatar"
                />
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </div>
    </Box>
  )
}

export default NavBar

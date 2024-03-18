import React, { useCallback, useEffect, useRef } from 'react'
import { Stack, Typography, Box } from '@mui/material'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import closeIcon from '../images/icon-close.svg'
import { useCart } from '../Context'

const SideBar = ({ isSideBarOpen, toggleSideBar }) => {
  const { state } = useCart()
  const sidebarRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()

  const collectionRef = state.collectionRef

  const handleScrollToCollection = useCallback(() => {
    if (collectionRef && collectionRef.current) {
      collectionRef.current.scrollIntoView({ behavior: 'smooth' })
      toggleSideBar()
    }
  }, [collectionRef, toggleSideBar])

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isSideBarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        toggleSideBar()
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isSideBarOpen, toggleSideBar])

  useEffect(() => {
    const { state: locationState } = location
    if (locationState && locationState.scrollToCollection) {
      handleScrollToCollection()
    }
  }, [location, handleScrollToCollection])

  const handleCollectionLinkClick = useCallback(() => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToCollection: true } })
    } else {
      handleScrollToCollection()
    }
  }, [navigate, location.pathname, handleScrollToCollection])

  return (
    <div ref={sidebarRef}>
      <Stack
        // ref={sidebarRef}
        className={`sidebar ${isSideBarOpen ? 'open' : 'close'}`}
        direction="column"
        display={{ lg: 'none', sm: 'flex', xs: 'flex' }}
        sx={{ zIndex: '1000' }}
      >
        <Stack sx={{ ml: '0px' }} gap={3} p={3} mt="-1rem">
          <Stack
            width="123%"
            height="40px"
            borderTop="1px solid black"
            borderBottom="1px solid black"
            ml="-1.5rem"
          >
            <img
              style={{
                height: '15px',
                width: '15px',
                marginTop: '10px',
                marginLeft: '1rem',
                cursor: 'pointer',
                marginBottom: '28px',
              }}
              src={closeIcon}
              alt="delete-icon"
              onClick={toggleSideBar}
            />
          </Stack>
          <Stack
            mt="-0.8rem"
            width="123%"
            height="30px"
            borderBottom="1px solid black"
            ml="-1.5rem"
          >
            <Link
              to="/"
              onClick={handleCollectionLinkClick}
              style={{ textDecoration: 'none' }}
            >
              <Typography
                fontWeight={700}
                fontSize={16}
                color="black"
                ml="1rem"
              >
                COLLECTIONS
              </Typography>
            </Link>
          </Stack>
          <Stack
            mt="-0.8rem"
            width="123%"
            height="30px"
            borderBottom="1px solid black"
            ml="-1.5rem"
          >
            <Link
              to="/male"
              onClick={toggleSideBar}
              style={{ textDecoration: 'none' }}
            >
              <Typography
                fontWeight={700}
                fontSize={16}
                color="black"
                ml="1rem"
              >
                MEN
              </Typography>
            </Link>
          </Stack>
          <Stack
            mt="-0.8rem"
            width="123%"
            height="30px"
            borderBottom="1px solid black"
            ml="-1.5rem"
          >
            <Link
              to="/female"
              onClick={toggleSideBar}
              style={{ textDecoration: 'none' }}
            >
              <Typography
                fontWeight={700}
                fontSize={16}
                color="black"
                ml="1rem"
              >
                WOMEN
              </Typography>
            </Link>
          </Stack>
          <Stack
            mt="-0.8rem"
            width="123%"
            height="30px"
            borderBottom="1px solid black"
            ml="-1.5rem"
          >
            <Link
              to="/kids"
              onClick={toggleSideBar}
              style={{ textDecoration: 'none' }}
            >
              <Typography
                fontWeight={700}
                fontSize={16}
                color="black"
                ml="1rem"
              >
                KIDS
              </Typography>
            </Link>
          </Stack>
          <Stack
            mt="-0.8rem"
            width="123%"
            height="30px"
            borderBottom="1px solid black"
            ml="-1.5rem"
          >
            <Link
              to="/contact"
              onClick={toggleSideBar}
              style={{ textDecoration: 'none' }}
            >
              <Typography
                fontWeight={700}
                fontSize={16}
                color="black"
                ml="1rem"
              >
                CONTACT
              </Typography>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </div>
  )
}

export default SideBar

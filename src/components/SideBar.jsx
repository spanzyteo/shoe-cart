import React, { useState } from 'react'
import { Stack, Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom'

import closeIcon from '../images/icon-close.svg'

const SideBar = ({ isSideBarOpen, toggleSideBar }) => {
  return (
    <Stack
      className={`sidebar ${isSideBarOpen ? 'open' : 'close'}`}
      direction="column"
      display={{ lg: 'none', sm: 'flex', xs: 'flex' }}
    >
      <Stack sx={{ ml: '0px' }} gap={3} p={3} mt="0.5rem">
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
          <Link to="/collections" style={{ textDecoration: 'none' }}>
            <Typography fontWeight={700} fontSize={16} color="black" ml="1rem">
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
          <Link to="/male" style={{ textDecoration: 'none' }}>
            <Typography fontWeight={700} fontSize={16} color="black" ml="1rem">
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
          <Link to="/female" style={{ textDecoration: 'none' }}>
            <Typography fontWeight={700} fontSize={16} color="black" ml="1rem">
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
          <Link to="/kids" style={{ textDecoration: 'none' }}>
            <Typography fontWeight={700} fontSize={16} color="black" ml="1rem">
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
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <Typography fontWeight={700} fontSize={16} color="black" ml="1rem">
              ABOUT
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
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <Typography fontWeight={700} fontSize={16} color="black" ml="1rem">
              CONTACT
            </Typography>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default SideBar

import React, { useState } from 'react'
import { Stack, Typography, Box } from '@mui/material'

import closeIcon from '../images/icon-close.svg'

const SideBar = ({ isSideBarOpen, toggleSideBar }) => {
  return (
    <Stack
      className={`sidebar ${isSideBarOpen ? 'open' : 'close'}`}
      direction="column"
      display={{ lg: 'none', sm: 'flex', xs: 'flex' }}
    >
      <Stack sx={{ ml: '10px' }} gap={3} p={3}>
        <img
          style={{
            height: '15px',
            width: '15px',
            marginTop: '10px',
            marginRight: '14px',
            cursor: 'pointer',
            marginBottom: '28px',
          }}
          src={closeIcon}
          alt="delete-icon"
          onClick={toggleSideBar}
        />

        <Typography fontWeight={700} fontSize={16}>
          Collections
        </Typography>
        <Typography fontWeight={700} fontSize={16}>
          Men
        </Typography>
        <Typography fontWeight={700} fontSize={16}>
          Women
        </Typography>
        <Typography fontWeight={700} fontSize={16}>
          About
        </Typography>
        <Typography fontWeight={700} fontSize={16}>
          Contact
        </Typography>
      </Stack>
    </Stack>
  )
}

export default SideBar

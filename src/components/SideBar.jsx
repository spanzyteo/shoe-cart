import React, { useState } from 'react'
import { Stack, Typography, Box } from '@mui/material'

import NavBar from './NavBar'
import closeIcon from '../images/icon-close.svg'

const SideBar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)

  const toggleSideBar = () => {
    setIsSideBarOpen((prevIsOPen) => !prevIsOPen)
  }
  return (
    <Stack
      className={`sidebar ${isSideBarOpen ? 'open' : 'close'}`}
      direction="column"
      gap={2}
    >
      <img
        style={{
          height: '20px',
          width: '20px',
          marginTop: '10px',
          marginRight: '14px',
          cursor: 'pointer',
        }}
        src={closeIcon}
        alt="delete-icon"
        onClick={toggleSideBar}
      />
      {/* <NavBar toggleSideBar={toggleSideBar} /> */}

      <Typography fontWeight={400} fontSize={16}>
        Collections
      </Typography>
      <Typography fontWeight={400} fontSize={16}>
        Men
      </Typography>
      <Typography fontWeight={400} fontSize={16}>
        Women
      </Typography>
      <Typography fontWeight={400} fontSize={16}>
        About
      </Typography>
      <Typography fontWeight={400} fontSize={16}>
        Contact
      </Typography>
    </Stack>
  )
}

export default SideBar

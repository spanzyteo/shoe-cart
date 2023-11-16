import React, { useState } from 'react'
import { Box } from '@mui/material'

import NavBar from './components/NavBar'
import MenShoe from './components/MenShoe'
import SideBar from './components/SideBar'

const App = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)

  const toggleSideBar = () => {
    setIsSideBarOpen((prevIsOPen) => !prevIsOPen)
  }
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Box sx={{ px: { sm: '120px', xs: '0px' } }}>
        <NavBar toggleSideBar={toggleSideBar} />
        <SideBar isSideBarOpen={isSideBarOpen} toggleSideBar={toggleSideBar} />
        <MenShoe />
      </Box>
    </Box>
  )
}

export default App

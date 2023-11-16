import React from 'react'
import { Box } from '@mui/material'

import NavBar from './components/NavBar'
import MenShoe from './components/MenShoe'
import SideBar from './components/SideBar'

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Box sx={{ px: { sm: '120px', xs: '0px' } }}>
        <NavBar toggleSideBar />
        <SideBar />
        <MenShoe />
      </Box>
    </Box>
  )
}

export default App

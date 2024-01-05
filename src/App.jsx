import React, { createContext, useState } from 'react'
import { Box } from '@mui/material'
export const Context = createContext()

import NavBar from './components/NavBar'
import MenShoe from './components/MenShoe'
import SideBar from './components/SideBar'
import { useCart } from './Context'
import ShoeModal from './components/shoeModal'

const App = () => {
  const { state } = useCart()
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)

  const toggleSideBar = () => {
    setIsSideBarOpen((prevIsOPen) => !prevIsOPen)
  }

  return (
    <Box height="100vh" position="relative">
      <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
        <ShoeModal />
        <Box sx={{ px: { sm: '120px', xs: '0px' } }}>
          <NavBar toggleSideBar={toggleSideBar} />
          <SideBar
            isSideBarOpen={isSideBarOpen}
            toggleSideBar={toggleSideBar}
          />
          <Box>
            <MenShoe />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default App

import React, { createContext, useState } from 'react'
import { Box } from '@mui/material'
export const Context = createContext()
import { Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar'
import MenShoe from './pages/MenShoe'
import SideBar from './components/SideBar'
import { useCart } from './Context'
import ShoeModal from './components/shoeModal'
import Home from './pages/Home'

const App = () => {
  const { state } = useCart()
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)

  const toggleSideBar = () => {
    setIsSideBarOpen((prevIsOPen) => !prevIsOPen)
  }

  return (
    <Box>
      <Box
        width="400px"
        height="100vh"
        sx={{ width: { xl: '1488px' } }}
        m="auto"
        position="relative"
      >
        <ShoeModal />
        <Box sx={{ px: { lg: '120px', xs: '0px' } }}>
          <NavBar toggleSideBar={toggleSideBar} />
          <SideBar
            isSideBarOpen={isSideBarOpen}
            toggleSideBar={toggleSideBar}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/men" element={<MenShoe />} /> */}
          </Routes>
        </Box>
      </Box>
    </Box>
  )
}

export default App

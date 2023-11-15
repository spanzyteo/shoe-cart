import React from 'react'
import { Box } from '@mui/material'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Box sx={{ px: { sm: '30px', xs: '0px' } }}>
        <NavBar />
      </Box>
    </Box>
  )
}

export default App

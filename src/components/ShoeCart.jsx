import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const ShoeCart = () => {
  return (
    <Stack flexDirection="column" sx={{ mt: { xs: 'rem' } }}>
      <Stack sx={{ mt: { xs: '0rem' } }}>
        <Stack className="toggle-bar"></Stack>
      </Stack>
    </Stack>
  )
}

export default ShoeCart

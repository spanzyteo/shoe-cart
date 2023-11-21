import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const ShoeCart = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        position: 'absolute',
        top: '100%',
        right: { lg: '0', xs: '5%' },
        width: '21rem',
        // height: '20px',
        maxHeight: '25rem',
        maxWidth: '30rem',
        zIndex: '100',
      }}
    >
      <Stack
        flexDirection="column"
        bgcolor="white"
        height="100%"
        width="100%"
        marginTop="0.5rem"
        borderRadius="0.6rem"
        boxShadow="0px 3px 3px rgba(0,0,0,0.5) "
      >
        <Stack borderBottom="1px solid hsl(220, 14%, 75%)">
          <Stack sx={{ py: '0.8rem', px: '0.8rem' }}>
            <Typography variant="h6" fontWeight={700}>
              Cart
            </Typography>
          </Stack>
        </Stack>
        <Stack sx={{ p: { lg: '4rem', xs: '6rem' }, m: 'auto' }}>
          <Typography fontWeight={700} color="hsl(219, 9%, 45%)">
            Your cart is empty
          </Typography>
        </Stack>
      </Stack>
    </Box>
  )
}

export default ShoeCart

import { Stack, Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

const Marquee = ({ text }) => {
  return (
    <Box>
      <Stack
        position="relative"
        display="block"
        height="90px"
        width={{ lg: '100%', sm: '100%', xs: '100%' }}
        sx={{ mt: '1rem' }}
        borderTop="1px solid black"
        borderBottom="1px solid black"
        overflow="hidden"
      >
        <Typography
          className="scrolling-text"
          fontSize="4.5rem"
          fontWeight={900}
          fontFamily="Montserrat"
        >
          <span>IN STORE FOR HOLIDAYS WITH DISCOUNT PRICES😍😍</span>
        </Typography>
        <Typography
          className="scrolling-text scrolling-text2"
          fontSize="4.5rem"
          fontWeight={900}
          fontFamily="Montserrat"
        >
          <span>IN STORE FOR HOLIDAYS WITH DISCOUNT PRICES😍😍</span>
        </Typography>
      </Stack>
    </Box>
  )
}

export default Marquee

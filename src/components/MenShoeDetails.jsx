import React from 'react'
import { Stack, Typography, Box } from '@mui/material'

const MenShoeDetails = () => {
  return (
    <Stack direction="column" sx={{ ml: { lg: '10rem', xs: '2rem' } }}>
      <Stack sx={{ mt: { lg: '2rem', xs: '1.8rem' } }}>
        <Typography fontSize="1rem" color="hsl(26, 100%, 55%)" fontWeight={700}>
          SNEAKER COMPANY
        </Typography>
        <Typography
          fontSize={{ lg: '2.4rem', xs: '1.8rem' }}
          fontWeight={700}
          lineHeight={1.2}
          sx={{ mt: { lg: '0.5rem', xs: '0.7rem' } }}
        >
          Fall Limited Edition <br /> Sneakers
        </Typography>
        <Typography
          fontSize="1rem"
          color="hsl(219, 9%, 45%)"
          width={{ lg: '26rem', xs: '21rem' }}
          lineHeight={1.6}
          sx={{ mt: { lg: '1.2rem', xs: '1.2rem' } }}
        >
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </Typography>
        <Stack direction="row" sx={{ mt: '0.8rem' }} alignItems="center">
          <Typography fontWeight={700} fontSize="1.6rem">
            $125.00
          </Typography>
          <Typography
            color="hsl(26, 100%, 55%)"
            borderRadius="0.3rem"
            bgcolor="hsl(25, 100%, 94%)"
            sx={{ ml: '1rem' }}
          >
            50%
          </Typography>
          <Typography
            className="cancel"
            color="hsl(219, 9%, 45%)"
            sx={{ ml: '7.8rem' }}
            display={{ lg: 'none', xs: 'block' }}
          >
            $250.00
          </Typography>
        </Stack>
        <Typography
          className="cancel"
          color="hsl(219, 9%, 45%)"
          sx={{ mt: '0.1rem' }}
          display={{ xs: 'none', lg: 'block' }}
        >
          $250.00
        </Typography>
      </Stack>
    </Stack>
  )
}

export default MenShoeDetails

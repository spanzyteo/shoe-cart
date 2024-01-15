import { Stack, Box, Typography } from '@mui/material'

const ContactMarquee = () => {
  return (
    <Box sx={{ mt: '4rem' }}>
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
          fontWeight={800}
          fontFamily="Montserrat"
        >
          <span>AT YOUR SERVICE</span>
        </Typography>
        <Typography
          className="scrolling-text scrolling-text2"
          fontSize="4.5rem"
          fontWeight={800}
          fontFamily="Montserrat"
        >
          <span>AT YOUR SERVICE</span>
        </Typography>
      </Stack>
    </Box>
  )
}

export default ContactMarquee

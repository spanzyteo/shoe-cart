import { Stack, Typography, Box } from '@mui/material'
import giftImage from '../images/Gift-Card.webp'

const GiftCard = () => {
  return (
    <Box
      sx={{ mt: '1rem' }}
      display="flex"
      flexDirection={{ lg: 'row', sm: 'column', xs: 'column' }}
      justifyContent="space-between"
      mx={{ sm: '1rem', xs: '1rem' }}
    >
      <Stack width={{ lg: '550px', sm: '100%', xs: '100%' }}>
        <img className="gift-card" src={giftImage} alt="gift-image" />
      </Stack>
      <Stack
        display="flex"
        flexDirection="column"
        alignItems={{ lg: 'center', sm: 'start' }}
        justifyContent="center"
        mx={{ lg: '0rem', sm: '2rem', xs: '2rem' }}
      >
        <Typography
          fontSize="3.5rem"
          textAlign={{ lg: 'center', sm: 'start' }}
          fontWeight={800}
          fontFamily="Montserrat"
          lineHeight="4rem"
          letterSpacing="0.2rem"
          sx={{ mt: { lg: '5rem', sm: '1rem', xs: '1rem' } }}
        >
          GIVING IS <br /> TRUE HAVING
        </Typography>
        <Typography color="grey" letterSpacing="0.04rem" sx={{ mt: '2rem' }}>
          GIVING IS THE MOST FUN YOU'LL HAVE WITH MONEY
        </Typography>
        <Typography
          color="grey"
          fontSize="0.7rem"
          letterSpacing="0.2rem"
          sx={{ mt: '1.2rem' }}
        >
          SURPRISE YOUR LOVED ONE WITH A GIFT CARD
        </Typography>
        <Typography
          sx={{
            mt: '2rem',
            cursor: 'pointer',
            ':hover': { opacity: 0.8, transition: 'opacity 0.3s ease-in-out' },
            ':active': { opacity: 0.4, transition: 'opacity 0.3s ease-in-out' },
          }}
          bgcolor="#e74683"
          color="white"
          fontSize="0.8rem"
          px="2rem"
          py="1rem"
          borderRadius="3rem"
          fontWeight={500}
        >
          GIVE NOW
        </Typography>
        <Typography
          fontSize="2.5rem"
          mt="1rem"
          ml={{ lg: '0rem', sm: '1rem', xs: '1rem' }}
        >
          💖
        </Typography>
      </Stack>
    </Box>
  )
}

export default GiftCard

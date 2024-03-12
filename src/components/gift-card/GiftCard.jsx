import { Stack, Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import giftImage from '../../images/Gift-Card.webp'

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
        <Link
          to="/products/sneakers-digital-gift-card"
          style={{ textDecoration: 'none' }}
        >
          <button
            className="gift-card-button"
            style={{
              marginTop: '2rem',
              cursor: 'pointer',
              backgroundColor: '#e74683',
              fontSize: '0.8rem',
              borderRadius: '2rem',
              fontWeight: '500',
              width: '6rem',
              border: 'none',
              paddingTop: '0.8rem',
              paddingBottom: '0.8rem',
              paddingLeft: '1.3rem',
              paddingRight: '1.3rem',
              color: 'white',
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            GIVE NOW
          </button>
        </Link>
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

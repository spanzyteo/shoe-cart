import { Box, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Checkout = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Stack
        display="flex"
        flexDirection="row"
        // alignItems="center"
        justifyContent="space-around"
        width="100%"
        height="120px"
        borderBottom="1px solid grey"
      >
        <Stack
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt="2rem"
        >
          <Typography variant="h4" fontWeight={900} mb="-0.5rem">
            SNEAKERS
          </Typography>
          <Typography variant="h4" fontWeight={900} mt="0rem">
            STORE
          </Typography>
        </Stack>
        <Stack display="flex" mt="3rem">
          <Link to="/cart" style={{ textDecoration: 'none' }}>
            <Typography fontSize="1.6rem">👜</Typography>
          </Link>
        </Stack>
      </Stack>
      <Stack
        display="flex"
        flexDirection={{ lg: 'row', sm: 'column', xs: 'column' }}
      >
        <Stack display="flex" flexDirection="column" width="50%">
          <Stack
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="2rem"
          >
            <Typography fontSize="0.8rem">Express Checkout</Typography>
            <button
              style={{
                marginTop: '1rem',
                width: '14rem',
                height: '2rem',
                backgroundColor: '#5433EB',
                border: 'none',
                color: 'white',
                paddingTop: '1.4rem',
                paddingBottom: '1.4rem',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              <p style={{ fontSize: '1.3rem', fontFamily: 'sans-serif' }}>
                shop
              </p>{' '}
              <span
                style={{
                  marginLeft: '0.3rem',
                  backgroundColor: 'white',
                  color: '#5433EB',
                  padding: '0.2rem',
                  paddingLeft: '0.3rem',
                  paddingRight: '0.3rem',
                  borderRadius: '4px',
                  fontFamily: 'sans-serif',
                  marginTop: '0.3rem',
                }}
              >
                pay
              </span>
            </button>
            <Stack
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap={2}
            >
              <Stack
                width="12rem"
                height="0rem"
                border="1px solid grey"
                mt="1rem"
              ></Stack>
              <Typography mt="1rem" color="grey">
                OR
              </Typography>
              <Stack
                width="12rem"
                height="0rem"
                border="1px solid grey"
                mt="1rem"
              ></Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          display="flex"
          flexDirection="column"
          width="50%"
          borderLeft={{ lg: '1px solid grey', sm: 'none', xs: 'none' }}
          bgcolor="rgb(244, 244, 244)"
        ></Stack>
      </Stack>
    </Box>
  )
}

export default Checkout

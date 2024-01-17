import { Stack, Box, Typography } from '@mui/material'
import { useState } from 'react'

const Contact = () => {
  const [email, setEmail] = useState('')

  const handleChange = (event) => {
    setEmail(event.target.value)
  }
  return (
    <Box
      display="flex"
      flexDirection={{ lg: 'row' }}
      width={{ lg: '100%', sm: '100%', xs: '100%' }}
      height={{ lg: '350px', sm: '600px', xs: '600px' }}
    >
      <Stack
        width="100%"
        borderBottom={{
          lg: '2px solid black',
          sm: '2px solid black',
          xs: '2px solid black',
        }}
        mb="3rem"
        display="flex"
        flexDirection={{ lg: 'row', sm: 'column', xs: 'column' }}
      >
        <Stack
          width={{ lg: '50%' }}
          height={{ sm: '40%', xs: '40%', lg: '100%' }}
          borderRight={{ lg: '1px solid black' }}
          borderBottom={{ sm: '1px solid black', xs: '1px solid black' }}
        >
          <Stack
            display="flex"
            flexDirection="column"
            mt={{ lg: '3rem', sm: '1rem', xs: '1rem' }}
            ml={{ lg: '2rem', sm: '2rem', xs: '2rem' }}
          >
            <Typography
              fontSize="0.8rem"
              fontWeight={600}
              letterSpacing="0.1rem"
              fontFamily="Montserrat"
            >
              STAY IN TOUCH
            </Typography>
            <Typography
              fontSize="0.8rem"
              color="grey"
              // letterSpacing="0.1rem"
              fontWeight="Montserrat"
              mt={{ lg: '1rem', sm: '0.6rem', xs: '0.6rem' }}
            >
              SIGN UP BELOW FOR EXCLUSIVE UPDATES, OFFERS & FUTURE SNEAKERS
              PRODUCTS
            </Typography>
            <Stack
              mt="2rem"
              display="flex"
              alignItems={{ lg: 'start', sm: 'center', xs: 'center' }}
              position="relative"
            >
              <form className="form-field">
                <input
                  className="input-contact"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={handleChange}
                  style={{
                    height: '3.2rem',
                    width: '23.9rem',
                    border: '1px solid black',
                    paddingLeft: '1.2rem',
                    fontSize: '1.2rem',
                    transition: 'border 0.3s',
                  }}
                />
              </form>
              <Stack
                position="absolute"
                right="27%"
                bgcolor="#e74683"
                width="50px"
                height="50px"
                mt="1px"
                sx={{ cursor: 'pointer', ':active': { opacity: '0.7' } }}
              >
                <Stack
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mt="1rem"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="14"
                    viewBox="0 0 448 512"
                    style={{
                      cursor: 'pointer',
                    }}
                  >
                    <path
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                      fill="white"
                    />
                  </svg>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Contact

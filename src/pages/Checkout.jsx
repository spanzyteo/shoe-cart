import { Box, Stack, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { FormControlLabel } from '@mui/material'
import { useState } from 'react'
import Checkbox from '@mui/material/Checkbox'
import { countries } from 'countries-list'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { nigerianStates } from '../utils/trendingItems'

const Checkout = () => {
  const [checked, setChecked] = useState(true)
  const [selectedCountry, setSelectedCountry] = useState('NG')
  const [selectedState, setSelectedState] = useState('placeholder')

  const handleStateChange = (event) => {
    setSelectedState(event.target.value)
  }

  const handleChange = (event) => {
    setSelectedCountry(event.target.value)
  }

  const handleChecked = () => {
    setChecked((prevChecked) => !prevChecked)
  }
  return (
    <Box display="flex" flexDirection="column">
      <Stack
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-around"
        width="100%"
        height="120px"
        borderBottom="1px solid grey"
        position="relative"
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
        alignItems={{ lg: 'normal', sm: 'center', xs: 'center' }}
      >
        <Stack display="flex" flexDirection="column" width="50%">
          <Stack
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="2rem"
          >
            <Typography fontSize={{ lg: '0.8rem', sm: '1rem', xs: '1rem' }}>
              Express Checkout
            </Typography>
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
                width={{ lg: '12rem', sm: '10rem', xs: '10rem' }}
                height="3rem"
                borderBottom="1px solid grey"
                mt="-2rem"
              ></Stack>
              <Typography mt="1rem" color="grey">
                OR
              </Typography>
              <Stack
                width={{ lg: '12rem', sm: '10rem', xs: '10rem' }}
                height="3rem"
                borderBottom="1px solid grey"
                mt="-2rem"
              ></Stack>
            </Stack>
            <Stack
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              gap={{ lg: 28, sm: 20, xs: 20 }}
              mt="1rem"
            >
              <Typography
                fontSize={{ lg: '1.3rem', sm: '1.5rem', xs: '1.5rem' }}
                ml={{ lg: '0rem', sm: '1rem', xs: '1rem' }}
              >
                Contact
              </Typography>
              <Stack
                display="flex"
                flexDirection="row"
                gap={1}
                ml={{ lg: '0rem', sm: '-5rem', xs: '-5rem' }}
                whiteSpace="nowrap"
              >
                <Typography
                  fontSize={{ lg: '0.8rem', sm: '1rem', xs: '1rem' }}
                  color="rgba(0, 0, 0, 0.75)"
                  letterSpacing={{ lg: '0rem', sm: '0.05rem', xs: '0.05rem' }}
                >
                  Have an account?
                </Typography>
                <Link>
                  <Typography
                    fontSize={{ lg: '0.8rem', sm: '1rem', xs: '1rem' }}
                    color="rgba(0, 0, 0, 0.75)"
                  >
                    Log in
                  </Typography>
                </Link>
              </Stack>
            </Stack>
            <TextField
              label="Email"
              margin="normal"
              name="email"
              sx={{
                width: { lg: '450px', sm: '350px', xs: '350px' },
                height: '150px',
              }}
            />
            <Stack
              display="flex"
              flexDirection="row"
              alignItems="center"
              mt="-5.5rem"
              ml={{ lg: '-12rem', sm: '-6rem', xs: '-6rem' }}
            >
              <FormControlLabel
                control={
                  <Checkbox checked={checked} onChange={handleChecked} />
                }
              />
              <Typography color="rgba(0, 0, 0, 0.75)" ml="-1rem" mt="0.1rem">
                Email me with news and others
              </Typography>
            </Stack>
            <Typography
              fontSize={{ lg: '1.3rem', sm: '1.5rem', xs: '1.5rem' }}
              mt="1rem"
              ml={{ lg: '-23.5rem', sm: '-16.5rem', xs: '-16.5rem' }}
            >
              Delivery
            </Typography>
            <Stack>
              <FormControl>
                <Select
                  className="country-form"
                  id="country"
                  value={selectedCountry}
                  onChange={handleChange}
                  sx={{
                    height: '60px',
                    fontSize: '12px',
                    borderRadius: '4px',
                    marginTop: '1rem',
                    width: { lg: '450px', sm: '350px', xs: '350px' },
                  }}
                >
                  {Object.keys(countries).map((code) => (
                    <MenuItem key={code} value={code}>
                      {countries[code].name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Stack>
            <Stack display="flex" flexDirection="row" gap={6}>
              <TextField
                label="First name"
                margin="normal"
                name="name"
                sx={{
                  width: { lg: '200px', sm: '150px', xs: '150px' },
                  height: '150px',
                }}
              />
              <TextField
                label="Last name"
                margin="normal"
                name="name"
                sx={{
                  width: { lg: '200px', sm: '150px', xs: '150px' },
                  height: '150px',
                }}
              />
            </Stack>
            <TextField
              label="Address"
              margin="normal"
              name="address"
              sx={{
                width: { lg: '450px', sm: '350px', xs: '350px' },
                height: '150px',
                mt: '-5rem',
              }}
            />
            <Typography
              fontSize={{ lg: '0.8rem' }}
              mt="-5rem"
              ml={{ lg: '-18rem', sm: '-9.5rem', xs: '-9.5rem' }}
            >
              + Add apartment, suite, etc.
            </Typography>
            <Stack
              display="flex"
              flexDirection="row"
              gap={{ lg: 4, sm: 3, xs: 3 }}
            >
              <TextField
                label="City"
                margin="normal"
                name="city"
                sx={{
                  width: { lg: '130px', sm: '100px', xs: '100px' },
                  height: '150px',
                }}
              />
              <FormControl>
                <Select
                  id="state-selector-label"
                  value={selectedState}
                  onChange={handleStateChange}
                  sx={{
                    height: '55px',
                    fontSize: '16px',
                    borderRadius: '4px',
                    marginTop: '1rem',
                    width: { lg: '130px', sm: '100px', xs: '100px' },
                  }}
                >
                  <MenuItem value="placeholder" disabled>
                    state
                  </MenuItem>
                  {nigerianStates.map((code) => (
                    <MenuItem key={code} value={code}>
                      {[code]}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                label="Postal code"
                margin="normal"
                name="postal code"
                sx={{
                  width: { lg: '130px', sm: '100px', xs: '100px' },
                  height: '150px',
                }}
              />
            </Stack>
          </Stack>
        </Stack>
        <Stack
          display="flex"
          flexDirection="column"
          width="50%"
          bgcolor={{ lg: 'rgb(214, 214, 214)', sm: 'none', xs: 'none' }}
          borderLeft={{ lg: '1px solid grey', sm: 'none', xs: 'none' }}
          position="sticky"
          top="120px"
          height="110vh"
        ></Stack>
      </Stack>
    </Box>
  )
}

export default Checkout

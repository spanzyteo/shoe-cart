import {
  Box,
  FormHelperText,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { FormControlLabel } from '@mui/material'
import { useState } from 'react'
import Checkbox from '@mui/material/Checkbox'
import { countries } from 'countries-list'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { nigerianStates } from '../utils/trendingItems'
import CreditCardIcon from '@mui/icons-material/CreditCard'

import creditCard1 from '../images/credit-card-1.png'
import creditCard2 from '../images/credit-card-2.webp'
import creditCard3 from '../images/credit-card-3.jpg'
import creditCard4 from '../images/credit-card-4.webp'
import creditCard5 from '../images/credit-card-5.png'
import creditCard6 from '../images/credit-card-6.png'
import creditCard7 from '../images/credit-card-7.png'
import creditCard8 from '../images/credit-card-8.png'
import creditCard9 from '../images/credit-card-9.png'
import creditCard10 from '../images/credit-card-10.png'

const formatCardNumber = (input) => {
  const digitsOnly = input.replace(/\D/g, '')
  let formattedInput = ''
  for (let i = 0; i < digitsOnly.length; i++) {
    if (1 > 0 && i % 4 === 0) {
      formattedInput += ' '
    }
    formattedInput += digitsOnly[i]
  }

  return formattedInput
}

const formatExpirationDate = (inputValue) => {
  const numericValue = inputValue.replace(/\D/g, '')

  let formattedValue = numericValue
  if (numericValue.length > 2) {
    formattedValue = numericValue.slice(0, 2) + '/' + numericValue.slice(2)
  }

  formattedValue = formattedValue.slice(0, 7)

  return formattedValue
}

const formatSecurityCode = (input) => {
  const digitsOnly = input.replace(/\D/g, '')

  const formattedValue = digitsOnly.slice(0, 4)

  return formattedValue
}

const Checkout = () => {
  const [checked, setChecked] = useState(true)
  const [selectedCountry, setSelectedCountry] = useState('NG')
  const [selectedState, setSelectedState] = useState('placeholder')
  const [state, setState] = useState('')
  const [error, setError] = useState('')
  const [checkedOffers, setCheckedOffers] = useState(false)
  const [cardNumber, setCardNumber] = useState('')
  const [expirationDate, setExpirationDate] = useState('')
  const [securityCode, setSecurityCode] = useState('')
  const [checkedBilling, setCheckedBilling] = useState(true)
  const [savedChecked, setSavedChecked] = useState(false)
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [firstNameError, setFirstNameError] = useState('')
  const [lastNameError, setLastNameError] = useState('')
  const [address, setAddress] = useState('')
  const [addressError, setAddressError] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [phone, setPhone] = useState('')
  const [cityError, setCityError] = useState('')
  const [postalCodeError, setPostalCodeError] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [cardNumberError, setCardNumberError] = useState('')
  const [expirationDateError, setExpirationDateError] = useState('')
  const [securityCodeError, setSecurityCodeError] = useState('')
  const [cardName, setCardName] = useState('')
  const [cardNameError, setCardNameError] = useState('')

  const handleCheckedOffers = () => {
    setCheckedOffers((prevChecked) => !prevChecked)
  }

  const handleSavedChecked = () => {
    setSavedChecked((prevChecked) => !prevChecked)
  }

  const handleCheckedBilling = () => {
    setCheckedBilling((prevChecked) => !prevChecked)
  }

  const handleSecurityCodeChange = (event) => {
    const inputValue = event.target.value
    const formattedValue = formatSecurityCode(inputValue)
    setSecurityCode(formattedValue)
  }

  const handleExpirationDateChange = (event) => {
    const inputValue = event.target.value
    const formattedValue = formatExpirationDate(inputValue)
    setExpirationDate(formattedValue)
  }

  const handleInputChange = (event) => {
    let input = event.target.value

    input = input.slice(0, 20)
    const formattedInput = formatCardNumber(input)
    setCardNumber(formattedInput)
  }

  const handleStateChange = (event) => {
    setSelectedState(event.target.value)
  }

  const handleChange = (event) => {
    setSelectedCountry(event.target.value)
  }

  const handleChecked = () => {
    setChecked((prevChecked) => !prevChecked)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    try {
      if (email === '') {
        setEmailError('Enter an email')
      }
      if (firstName === '') {
        setFirstNameError('Enter a firstname')
      }
      if (lastName === '') {
        setLastNameError('Enter a lastname')
      }
      if (address === '') {
        setAddressError('enter address')
      }
      if (phone === '') {
        setPhoneError('Enter phone number')
      }
      if (city === '') {
        setCityError('Enter city')
      }
      if (postalCode === '') {
        setPostalCodeError('Enter postal code')
      }
      if (selectedState === 'placeholder') {
        setError('select a state/province')
      }
      if (cardNumber === '') {
        setCardNumberError('Enter a card number')
      }
      if (expirationDate === '') {
        setExpirationDateError('Enter a valid expiration date')
      }
      if (securityCode === '') {
        setSecurityCodeError('Enter the CVV or security code on your card')
      }
      if (cardName === '') {
        setCardNameError("Enter your name exactly as it's written on your card")
      }
    } catch (error) {
      console.error(error)
    }
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
        position="relative"
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
            <form onSubmit={handleSubmit}>
              <TextField
                label="Email"
                margin="normal"
                name="email"
                value={email}
                helperText={emailError}
                color="primary"
                variant="outlined"
                error={emailError}
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
                // ml={{ lg: '0rem', sm: '-6rem', xs: '-6rem' }}
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
                // ml={{ lg: '0rem', sm: '', xs: '-16.5rem' }}
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
                  value={firstName}
                  error={firstNameError}
                  helperText={firstNameError}
                  sx={{
                    width: { lg: '200px', sm: '150px', xs: '150px' },
                    height: '150px',
                  }}
                />
                <TextField
                  label="Last name"
                  margin="normal"
                  name="name"
                  value={lastName}
                  error={lastNameError}
                  helperText={lastNameError}
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
                value={address}
                error={addressError}
                helperText={addressError}
                sx={{
                  width: { lg: '450px', sm: '350px', xs: '350px' },
                  height: '150px',
                  mt: '-5rem',
                }}
              />
              <Typography
                fontSize={{ lg: '0.8rem' }}
                mt="-5rem"
                // ml={{ lg: '-18rem', sm: '-9.5rem', xs: '-9.5rem' }}
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
                  value={city}
                  error={cityError}
                  helperText={cityError}
                  sx={{
                    width: { lg: '130px', sm: '100px', xs: '100px' },
                    height: '150px',
                  }}
                />
                <FormControl error={error}>
                  <Select
                    id="state-selector-label"
                    value={selectedState}
                    onChange={handleStateChange}
                    // error={selectedStateError}
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
                  {error && <FormHelperText>{error}</FormHelperText>}
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
              <Stack mt="-6rem">
                <TextField
                  label="Phone"
                  margin="normal"
                  name="phone_number"
                  type="number"
                  value={phone}
                  error={phoneError}
                  helperText={phoneError}
                  sx={{
                    width: { lg: '450px', sm: '350px', xs: '350px' },
                    height: '150px',
                    mt: '2rem',
                  }}
                />
              </Stack>
              <Stack
                display="flex"
                flexDirection="row"
                alignItems="center"
                mt="-5.5rem"
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkedOffers}
                      onChange={handleCheckedOffers}
                    />
                  }
                />
                <Typography
                  ml="-1rem"
                  mt="0.15rem"
                  fontSize={{ lg: '0.85rem', sm: '1rem', xs: '1rem' }}
                >
                  Text me with news and others
                </Typography>
              </Stack>
              {checkedOffers && (
                <Stack display="flex" flexDirection="column">
                  <TextField
                    label="Mobile Phone Number"
                    margin="normal"
                    name="phone_number"
                    type="tel"
                    defaultValue="+234"
                    InputProps={{ inputProps: { pattern: '\\+\\d{1,3}' } }}
                    sx={{
                      width: { lg: '450px', sm: '350px', xs: '350px' },
                      height: '100px',
                    }}
                  />
                  <Typography
                    fontSize={{ lg: '0.6rem', sm: '0.8rem', xs: '0.8rem' }}
                    color="rgba(0, 0, 0, 0.56)"
                    mt="-2rem"
                    width={{ lg: '450px', sm: '350px', xs: '350px' }}
                  >
                    By signing up via text, you agree to receive recurring
                    automated marketing messages, including cart reminders, at
                    the phone number provided. Consent is not a condition of
                    purchase. Reply STOP to unsubscribe. Reply HELP for help.
                    Message frequency varies. Msg & data rates may apply. View
                    our{' '}
                    <Link
                      to="/policies/privacy-policy"
                      style={{ color: 'rgba(0, 0, 0, 0.56)' }}
                    >
                      Privacy Policy{' '}
                    </Link>
                    and{' '}
                    <Link
                      to="/policies/terms-of-service"
                      style={{ color: 'rgba(0, 0, 0, 0.56)' }}
                    >
                      Terms of Service
                    </Link>
                  </Typography>
                </Stack>
              )}
              <Typography
                mt="1rem"
                fontSize={{ lg: '0.9rem', sm: '1rem', xs: '1rem' }}
              >
                Shipping method
              </Typography>
              <Stack
                display="flex"
                flexDirection="row"
                width={{ lg: '450px', sm: '350px', xs: '350px' }}
                height="50px"
                border="1px solid black"
                borderRadius="6px"
                mt="1rem"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography
                  fontSize={{ lg: '0.8rem', sm: '1rem', xs: '1rem' }}
                  ml="1rem"
                >
                  Economy international
                </Typography>
                <Typography
                  fontSize={{ lg: '0.8rem', sm: '1rem', xs: '1rem' }}
                  mr="1rem"
                >
                  ₦22,500.00
                </Typography>
              </Stack>
              <Typography
                fontSize={{ lg: '1.3rem', sm: '1.5rem', xs: '1.5rem' }}
                mt="1rem"
              >
                Payment
              </Typography>
              <Typography
                fontSize={{ lg: '0.8rem', sm: '0.9rem', xs: '0.9rem' }}
                color="rgba(0, 0, 0, 0.75)"
                mt="0.3rem"
                whiteSpace="nowrap"
              >
                All transactions are secure and encrypted
              </Typography>
              <Stack
                display="flex"
                flexDirection="row"
                width={{ lg: '450px', sm: '350px', xs: '350px' }}
                height="50px"
                border="1px solid black"
                mt="1rem"
                alignItems="center"
                justifyContent="space-between"
                sx={{ borderTopLeftRadius: '6px', borderTopRightRadius: '6px' }}
              >
                <Typography
                  fontSize={{ lg: '0.8rem', sm: '1rem', xs: '1rem' }}
                  ml="1rem"
                >
                  credit card
                </Typography>
                <Stack
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  gap={0.5}
                >
                  <img
                    style={{ height: '35px', width: '35px' }}
                    src={creditCard1}
                    alt="credit-card"
                  />
                  <img
                    style={{ height: '30px', width: '40px' }}
                    src={creditCard2}
                    alt="credit-card"
                  />
                  <img
                    style={{ height: '37px', width: '35px' }}
                    src={creditCard3}
                    alt="credit-card"
                  />
                  <img
                    style={{ height: '30px', width: '35px' }}
                    src={creditCard4}
                    alt="credit-card"
                  />
                  <Typography
                    bgcolor="rgb(214, 214, 214)"
                    px="10px"
                    py="-1px"
                    mr="1rem"
                    sx={{ cursor: 'pointer' }}
                    fontSize="0.84rem"
                  >
                    +4
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                display="flex"
                flexDirection="column"
                alignItems="center"
                width={{ lg: '450px', sm: '350px', xs: '350px' }}
                height={checkedBilling ? '350px' : '800px'}
                borderLeft="1px solid #E8E8E8"
                borderRight="1px solid #E8E8E8"
                borderBottom="1px solid #E8E8E8"
              >
                <div style={{ position: 'relative', display: 'inline-block' }}>
                  <TextField
                    placeholder="Card number"
                    margin="normal"
                    name="card_number"
                    type="text"
                    value={cardNumber}
                    error={cardNumberError}
                    helperText={cardNumberError}
                    onChange={handleInputChange}
                    sx={{
                      width: { lg: '400px', sm: '300px', xs: '300px' },
                      height: '100px',
                    }}
                  />
                  <CreditCardIcon
                    sx={{
                      position: 'absolute',
                      top: '35%',
                      right: '15px',
                      transform: 'translateY(-50%)',
                    }}
                  />
                </div>
                <Stack
                  display="flex"
                  flexDirection="row"
                  gap={{ lg: 4.5, sm: 1, xs: 1 }}
                >
                  <TextField
                    placeholder="Expiration date (MM/YYYY)"
                    margin="normal"
                    name="expiration_date"
                    type="text"
                    value={expirationDate}
                    error={expirationDateError}
                    helperText={expirationDateError}
                    onChange={handleExpirationDateChange}
                    inputProps={{
                      maxLength: 7,
                      pattern: '(0[1-9]|1[0-2])/[0-9]{4}',
                      title:
                        'Please enter a valid expiration date in MM/YYYY format',
                    }}
                    sx={{
                      width: { lg: '180px', sm: '145px', xs: '145px' },
                      height: '100px',
                      mt: '-2rem',
                    }}
                  />
                  <TextField
                    placeholder="Security code"
                    margin="normal"
                    name="security_code"
                    type="text"
                    value={securityCode}
                    onChange={handleSecurityCodeChange}
                    error={securityCodeError}
                    helperText={securityCodeError}
                    inputProps={{
                      maxLength: 4,
                      pattern: '[0-9]{4}',
                      title: 'Enter a valid 4-digit security code',
                    }}
                    sx={{
                      width: { lg: '180px', sm: '145px', xs: '145px' },
                      height: '100px',
                      mt: '-2rem',
                    }}
                  />
                </Stack>
                <TextField
                  label="Name on card"
                  margin="normal"
                  name="name_on_card"
                  value={cardName}
                  error={cardNameError}
                  helperText={cardNameError}
                  sx={{
                    width: { lg: '400px', sm: '300px', xs: '300px' },
                    height: '150px',
                    mt: '0rem',
                  }}
                />
                <Stack
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  // mt="-6rem"
                  ml={{ lg: '-11rem', sm: '-3rem', xs: '-3rem' }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkedBilling}
                        onChange={handleCheckedBilling}
                      />
                    }
                  />
                  <Typography
                    // color="rgba(0, 0, 0, 0.75)"
                    ml="-1rem"
                    mt="0.15rem"
                    fontSize={{ lg: '0.85rem', sm: '1rem', xs: '1rem' }}
                  >
                    Use shipping as billing address
                  </Typography>
                </Stack>
                {!checkedBilling && (
                  <Stack display="flex" flexDirection="column" mt="0rem">
                    <Typography
                      mt="1rem"
                      fontSize={{ lg: '0.9rem', sm: '1rem', xs: '1rem' }}
                    >
                      Billing address
                    </Typography>
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
                          width: { lg: '400px', sm: '300px', xs: '300px' },
                        }}
                      >
                        {Object.keys(countries).map((code) => (
                          <MenuItem key={code} value={code}>
                            {countries[code].name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <Stack
                      display="flex"
                      flexDirection="row"
                      gap={{ lg: 4.5, sm: 1, xs: 1 }}
                    >
                      <TextField
                        placeholder="First Name"
                        margin="normal"
                        name="first_name"
                        type="text"
                        value={firstName}
                        error={firstNameError}
                        helperText={firstNameError}
                        sx={{
                          width: { lg: '180px', sm: '145px', xs: '145px' },
                          height: '100px',
                        }}
                      />
                      <TextField
                        placeholder="Last Name"
                        margin="normal"
                        name="last_name"
                        type="text"
                        value={lastName}
                        error={lastNameError}
                        helperText={lastNameError}
                        sx={{
                          width: { lg: '180px', sm: '145px', xs: '145px' },
                          height: '100px',
                        }}
                      />
                    </Stack>
                    <TextField
                      label="Address"
                      margin="normal"
                      name="address"
                      value={address}
                      error={addressError}
                      helperText={addressError}
                      sx={{
                        width: { lg: '400px', sm: '300px', xs: '300px' },
                        height: '150px',
                        mt: '-2rem',
                      }}
                    />
                    <Typography fontSize={{ lg: '0.8rem' }} mt="-5rem">
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
                        value={city}
                        error={cityError}
                        helperText={cityError}
                        sx={{
                          width: { lg: '110px', sm: '80px', xs: '80px' },
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
                            width: { lg: '110px', sm: '80px', xs: '80px' },
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
                          width: { lg: '110px', sm: '80px', xs: '80px' },
                          height: '150px',
                        }}
                      />
                    </Stack>
                    <TextField
                      label="Phone(optional)"
                      margin="normal"
                      name="phone_number"
                      type="number"
                      sx={{
                        width: { lg: '400px', sm: '300px', xs: '300px' },
                        height: '150px',
                        mt: '-5rem',
                      }}
                    />
                  </Stack>
                )}
              </Stack>
              <Typography
                mt="1rem"
                fontSize={{ lg: '1rem', sm: '1rem', xs: '1rem' }}
              >
                Remember me
              </Typography>
              <Stack
                display="flex"
                flexDirection="row"
                height="50px"
                width={{ lg: '450px', sm: '350px', xs: '350px' }}
                border="1px solid black"
                mt="1rem"
                alignItems="center"
              >
                <FormControlLabel
                  sx={{ ml: { lg: '1rem', sm: '0rem', xs: '0rem' } }}
                  control={
                    <Checkbox
                      checked={savedChecked}
                      onChange={handleSavedChecked}
                    />
                  }
                />
                <Typography
                  // color="rgba(0, 0, 0, 0.75)"
                  ml="-1rem"
                  mt="0.15rem"
                  fontSize={{ lg: '0.85rem', sm: '1rem', xs: '1rem' }}
                  whiteSpace="nowrap"
                >
                  Save my information for faster checkout
                </Typography>
              </Stack>
              {savedChecked && (
                <Stack
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  width={{ lg: '450px', sm: '350px', xs: '350px' }}
                  height={{ lg: '170px', sm: '230px', xs: '230px' }}
                  borderLeft="1px solid #E8E8E8"
                  borderRight="1px solid #E8E8E8"
                  borderBottom="1px solid #E8E8E8"
                >
                  <TextField
                    label="Mobile Phone Number"
                    margin="normal"
                    name="phone_number"
                    type="tel"
                    defaultValue="+234"
                    InputProps={{ inputProps: { pattern: '\\+\\d{1,3}' } }}
                    sx={{
                      width: { lg: '400px', sm: '300px', xs: '300px' },
                      height: '100px',
                    }}
                  />
                  <Typography
                    // color="rgba(0, 0, 0, 0.75)"
                    // ml="-1rem"
                    mt={{ lg: '-2rem', sm: '-2rem', xs: '-2rem' }}
                    fontSize={{ lg: '0.75rem', sm: '0.85rem', xs: '0.85rem' }}
                    width={{ lg: '400px', sm: '300px', xs: '300px' }}
                  >
                    Next time you check out here or on other stores powered by
                    Shopify, you’ll receive a code by text message to securely
                    purchase with Shop Pay.
                  </Typography>
                  <Typography
                    // color="rgba(0, 0, 0, 0.75)"
                    mt={{ lg: '1rem', sm: '-1rem', xs: '1rem' }}
                    fontSize={{ lg: '0.7rem', sm: '0.85rem', xs: '0.85rem' }}
                    width={{ lg: '400px', sm: '300px', xs: '300px' }}
                    color="grey"
                  >
                    By continuing, you agree to Shop Pay’s{' '}
                    <Link
                      to="/policies/privacy-policy"
                      style={{ color: 'grey' }}
                    >
                      Privacy Policy{' '}
                    </Link>
                    and{' '}
                    <Link
                      to="/policies/terms-of-service"
                      style={{ color: 'grey' }}
                    >
                      Terms of Service.
                    </Link>
                  </Typography>
                </Stack>
              )}
              <Typography
                fontSize={{ lg: '0.7rem', sm: '0.85rem', xs: '0.85rem' }}
                width={{ lg: '450px', sm: '350px', xs: '350px' }}
                color="grey"
                mt="2rem"
                display={{ lg: 'block', sm: 'none', xs: 'none' }}
              >
                By clicking below and completing your order, you agree to
                purchase your item(s) from Global-e as merchant of record for
                this transaction, on Global-e's and . Global-e is an
                international fulfilment service provider to MrBeast.store
              </Typography>
              <Stack
                width={{ lg: '450px', sm: '350px', xs: '350px' }}
                mt="2rem"
                display={{ lg: 'block', sm: 'none', xs: 'none' }}
              >
                <button
                  style={{
                    border: 'none',
                    backgroundColor: '#e74683',
                    padding: '1rem',
                    borderRadius: '6px',
                    width: '450px',
                  }}
                  type="submit"
                >
                  <p
                    style={{
                      color: 'white',
                      fontSize: '1rem',
                    }}
                  >
                    Pay now
                  </p>
                </button>
              </Stack>
            </form>
            <Stack
              display={{ lg: 'block', sm: 'none', xs: 'none' }}
              mt="2rem"
              height="40px"
              width="100%"
              borderBottom="1px solid gray"
              marginBottom="2rem"
            ></Stack>
            <Stack
              display={{ lg: 'flex', sm: 'none', xs: 'none' }}
              flexDirection="row"
              alignItems="center"
              gap={1}
              marginBottom="1rem"
            >
              <Link to="/policies/refund-policy">
                <Typography color="rgba(0, 0, 0, 0.75)" fontSize="0.8rem">
                  Refund Policy
                </Typography>
              </Link>
              <Link to="/policies/shipping-policy">
                <Typography color="rgba(0, 0, 0, 0.75)" fontSize="0.8rem">
                  Shipping Policy
                </Typography>
              </Link>
              <Link to="/policies/privacy-policy">
                <Typography color="rgba(0, 0, 0, 0.75)" fontSize="0.8rem">
                  Privacy Policy
                </Typography>
              </Link>
              <Link to="/policies/terms-of-service">
                <Typography color="rgba(0, 0, 0, 0.75)" fontSize="0.8rem">
                  Terms Of Service
                </Typography>
              </Link>
              <Link to="/policies/contact-information">
                <Typography color="rgba(0, 0, 0, 0.75)" fontSize="0.8rem">
                  Contact Information
                </Typography>
              </Link>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          display="block"
          flexDirection="column"
          width="50%"
          bgcolor={{ lg: 'rgb(214, 214, 214)', sm: 'none', xs: 'none' }}
          borderLeft={{ lg: '1px solid grey', sm: 'none', xs: 'none' }}
          position="sticky"
          top="0px"
          bottom="auto"
          right="auto"
          style={
            {
              // position: 'relative',
              // maxHeight: 'calc(100vh - navbarHeight)',
              // overflowY: 'auto',
            }
          }
          // style={{ overflowY: 'auto', maxHeight: '100vh' }}
          // height="110vh"
          zIndex={1}
        >
          this
        </Stack>
      </Stack>
    </Box>
  )
}

export default Checkout

import { Stack, Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

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
import { useState } from 'react'

const Bottom = () => {
  const [isHovered, setIsHovered] = useState(false)

  const linkStyle = {
    textDecoration: 'none',
  }
  return (
    <Box mt="3rem" display="flex" flexDirection="column" pb="2rem">
      <Stack
        display="flex"
        flexDirection={{ lg: 'row', sm: 'column', xs: 'column' }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack></Stack>
        <Stack
          display="flex"
          flexDirection={{ lg: 'row', sm: 'column', xs: 'column' }}
          alignItems="center"
        >
          <Stack display="flex" flexDirection="row" alignItems="center">
            <img
              style={{ height: '40px', width: '40px' }}
              src={creditCard1}
              alt="credit-card"
            />
            <img
              style={{ height: '35px', width: '45px' }}
              src={creditCard2}
              alt="credit-card"
            />
            <img
              style={{ height: '43px', width: '40px' }}
              src={creditCard3}
              alt="credit-card"
            />
            <img
              style={{ height: '35px', width: '40px' }}
              src={creditCard4}
              alt="credit-card"
            />
            <img
              style={{ height: '27px', width: '43px' }}
              src={creditCard5}
              alt="credit-card"
            />
            <img
              style={{ height: '25px', width: '37px' }}
              src={creditCard6}
              alt="credit-card"
            />
          </Stack>
          <Stack
            display="flex"
            flexDirection="row"
            ml={{ lg: '0.4rem', sm: '0rem', xs: '0rem' }}
            gap={1}
            alignItems="center"
          >
            <img
              style={{ height: '23px', width: '35px' }}
              src={creditCard7}
              alt="credit-card"
            />
            <img
              style={{ height: '35px', width: '35px' }}
              src={creditCard8}
              alt="credit-card"
            />
            <img
              style={{ height: '26px', width: '40px' }}
              src={creditCard9}
              alt="credit-card"
            />
            <img
              style={{ height: '22px', width: '40px' }}
              src={creditCard10}
              alt="credit-card"
            />
          </Stack>
        </Stack>
      </Stack>
      <Stack
        mt={{ lg: '2rem', sm: '1rem', xs: '1rem' }}
        display="flex"
        flexDirection={{ lg: 'row', sm: 'column', xs: 'column' }}
        alignItems="center"
      >
        <Stack
          display="flex"
          flexDirection="row"
          color="rgba(18, 18, 18, 0.75)"
          fontSize="0.7rem"
        >
          <Typography fontSize="0.7rem">© 2024, </Typography>
          <Link to="/" style={linkStyle}>
            <Typography
              sx={{
                textDecoration: 'none',
                ':hover': { textDecoration: 'underline' },
              }}
              fontSize="0.7rem"
              color="rgba(18, 18, 18, 0.75)"
              ml="0.5rem"
            >
              FALL LIMITED EDITION
            </Typography>
          </Link>
          <Link
            to="https://www.shopify.com/?utm_campaign=poweredby&utm_medium=shopify&utm_source=onlinestore"
            style={linkStyle}
          >
            <Typography
              sx={{
                textDecoration: 'none',
                ':hover': { textDecoration: 'underline' },
              }}
              fontSize="0.7rem"
              color="rgba(18, 18, 18, 0.75)"
              ml="0.5rem"
            >
              POWERED BY SHOPIFY
            </Typography>
          </Link>
        </Stack>
        <Stack display="flex" flexDirection="row" alignItems="center">
          <Typography
            ml="0.5rem"
            display={{ lg: 'block', sm: 'none', xs: 'none' }}
          >
            ·
          </Typography>
          <Link to="/policies/refund-policy" style={linkStyle}>
            <Typography
              sx={{
                textDecoration: 'none',
                ':hover': { textDecoration: 'underline' },
              }}
              fontSize="0.7rem"
              color="rgba(18, 18, 18, 0.75)"
              ml="0.5rem"
            >
              REFUND POLICY
            </Typography>
          </Link>
          <Typography ml="0.5rem">·</Typography>
          <Link to="/policies/privacy-policy" style={linkStyle}>
            <Typography
              sx={{
                textDecoration: 'none',
                ':hover': { textDecoration: 'underline' },
              }}
              fontSize="0.7rem"
              color="rgba(18, 18, 18, 0.75)"
              ml="0.5rem"
            >
              PRIVACY POLICY
            </Typography>
          </Link>
          <Typography ml="0.5rem">·</Typography>
          <Link to="/policies/terms-of-service" style={linkStyle}>
            <Typography
              sx={{
                textDecoration: 'none',
                ':hover': { textDecoration: 'underline' },
              }}
              fontSize="0.7rem"
              color="rgba(18, 18, 18, 0.75)"
              ml="0.5rem"
            >
              TERMS OF SERVICE
            </Typography>
          </Link>
        </Stack>
        <Stack display="flex" flexDirection="row" alignItems="center">
          <Typography
            ml="0.5rem"
            display={{ lg: 'block', sm: 'none', xs: 'none' }}
          >
            ·
          </Typography>
          <Link to="/policies/shipping-policy" style={linkStyle}>
            <Typography
              sx={{
                textDecoration: 'none',
                ':hover': { textDecoration: 'underline' },
              }}
              fontSize="0.7rem"
              color="rgba(18, 18, 18, 0.75)"
              ml="0.5rem"
            >
              SHIPPING POLICY
            </Typography>
          </Link>
          <Typography
            ml="0.5rem"
            display={{ lg: 'block', sm: 'none', xs: 'none' }}
          >
            ·
          </Typography>
          <Link to="/policies/contact-information" style={linkStyle}>
            <Typography
              sx={{
                textDecoration: 'none',
                ':hover': { textDecoration: 'underline' },
              }}
              fontSize="0.7rem"
              color="rgba(18, 18, 18, 0.75)"
              ml="0.5rem"
            >
              CONTACT INFORMATION
            </Typography>
          </Link>
        </Stack>
        <Stack display="flex" flexDirection="row" alignItems="center">
          <Typography
            ml="0.5rem"
            display={{ lg: 'block', sm: 'none', xs: 'none' }}
          >
            ·
          </Typography>
          <Link to="/policies/subscription-policy" style={linkStyle}>
            <Typography
              sx={{
                textDecoration: 'none',
                ':hover': { textDecoration: 'underline' },
              }}
              fontSize="0.7rem"
              color="rgba(18, 18, 18, 0.75)"
              ml="0.5rem"
            >
              SUBSCRIPTION POLICY
            </Typography>
          </Link>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Bottom

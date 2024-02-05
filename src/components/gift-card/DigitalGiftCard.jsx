import { Box, Stack, Typography, Grid, Paper } from '@mui/material'
import giftCard1 from '../../images/cropcopy.webp'
import giftCard2 from '../../images/cropcopy-2.webp'
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { denomination1 } from '../../utils/trendingItems'
import { denomination2 } from '../../utils/trendingItems'
import { denomination3 } from '../../utils/trendingItems'

const DigitalGiftCard = () => {
  const location = useLocation()
  const isActive = (path) => {
    return location.pathname + location.search === path
  }

  const activeStyle = {
    backgroundColor: 'black',
    color: '#fff',
    padding: '7px',
  }

  useEffect(() => {
    console.log('Location:', location.pathname + location.search)
  }, [location])

  return (
    <Box
      mt="2rem"
      display="flex"
      flexDirection={{ lg: 'row', sm: 'column', xs: 'column' }}
      height="300vh"
      // overflow="hidden"
    >
      <Stack
        className="scroll-part-1"
        display="flex"
        flexDirection={{ lg: 'column', sm: 'row', xs: 'row' }}
        width="50%"
        gap={1}
      >
        <img
          className="gift-card-1"
          style={{
            borderRadius: '20px',
            objectFit: 'cover',
          }}
          src={giftCard1}
          alt="gift-card-1"
        />
        <Stack
          display="flex"
          alignItems={{ sm: 'center', xs: 'center', lg: 'normal' }}
          justifyContent={{ sm: 'center', xs: 'center', lg: 'normal' }}
        >
          <img
            className="gift-card-2"
            src={giftCard2}
            alt="gift-card-2"
            style={{ borderRadius: '20px', objectFit: 'cover' }}
          />
        </Stack>
      </Stack>

      <Stack
        className="scroll-part-2"
        width={{ lg: '400px', sm: '520px', xs: '520px' }}
        display="flex"
        flexDirection="column"
        ml={{ lg: '5rem', sm: '2rem', xs: '2rem' }}
        mt="2rem"
      >
        <Typography fontSize="0.9rem" fontWeight={600} letterSpacing="0.05rem">
          SNEAKERS DIGITAL GIFT CARD
        </Typography>
        <Stack display="flex" alignItems="center" direction="row" spacing={0.5}>
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              style={{
                display: 'inline-block',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="15"
                width="17"
                viewBox="0 0 576 512"
              >
                <path
                  fill="#e74683"
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                />
              </svg>
            </div>
          ))}
          <Typography fontSize="0.85rem" color="rgba(0, 0, 0, 0.75)">
            3 reviews
          </Typography>
        </Stack>
        <Typography fontSize="0.8rem" fontWeight={600}>
          ₦24,396.54{` `}NGN
        </Typography>
        <Stack
          mt="2rem"
          width="100%"
          // height="0rem"
          border="1px solid #E8E8E8"
        ></Stack>
        <Stack display="flex" flexDirection="column" mt="1rem">
          <Stack display="flex" flexDirection="row" alignItems="center">
            <Link
              to="/policies/shipping-policy"
              style={{ textDecoration: 'none' }}
            >
              <Typography
                display="inline-block"
                borderBottom="1px solid black"
                fontSize="0.8rem"
                color="rgba(0, 0, 0, 0.75)"
              >
                Shipping & Duties
              </Typography>
            </Link>
            <Typography
              fontSize="0.8rem"
              color="rgba(0, 0, 0, 0.75)"
              ml="0.5rem"
            >
              calculated at checkout
            </Typography>
          </Stack>
          <Typography mt="1rem" color="rgba(0, 0, 0, 0.75)" fontSize="0.65rem">
            DENOMINATIONS
          </Typography>
          <Stack
            width="90%"
            height={{ lg: '100px', sm: '170px', xs: '170px' }}
            // bgcolor="black"
            ml="1rem"
            mt="0.6rem"
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
          >
            <Stack
              display="flex"
              flexDirection="row"
              gap={4}
              alignItems="center"
            >
              <Link
                to={{
                  pathname: '/products/sneakers-digital-gift-card',
                  search: '?variant=1',
                }}
                className="text-decoration1"
                style={
                  isActive(`/products/sneakers-digital-gift-card?variant=${1}`)
                    ? activeStyle
                    : { color: 'black' }
                }
              >
                Digital Gift Card $25.00
              </Link>
              <Link
                to={{
                  pathname: '/products/sneakers-digital-gift-card',
                  search: '?variant=2',
                }}
                className="text-decoration1"
                style={
                  isActive(`/products/sneakers-digital-gift-card?variant=${2}`)
                    ? activeStyle
                    : { color: 'black' }
                }
              >
                Digital Gift Card $50.00
              </Link>
              <Link
                to={{
                  pathname: '/products/sneakers-digital-gift-card',
                  search: '?variant=3',
                }}
                className="text-decoration1"
                style={
                  isActive(`/products/sneakers-digital-gift-card?variant=${3}`)
                    ? activeStyle
                    : { color: 'black' }
                }
              >
                Digital Gift Card $60.00
              </Link>
            </Stack>
            <Stack
              display="flex"
              flexDirection="row"
              gap={4}
              alignItems="center"
            >
              <Link
                to={{
                  pathname: '/products/sneakers-digital-gift-card',
                  search: '?variant=4',
                }}
                className="text-decoration1"
                style={
                  isActive(`/products/sneakers-digital-gift-card?variant=${4}`)
                    ? activeStyle
                    : { color: 'black' }
                }
              >
                Digital Gift Card $75.00
              </Link>
              <Link
                to={{
                  pathname: '/products/sneakers-digital-gift-card',
                  search: '?variant=5',
                }}
                className="text-decoration1"
                style={
                  isActive(`/products/sneakers-digital-gift-card?variant=${5}`)
                    ? activeStyle
                    : { color: 'black' }
                }
              >
                Digital Gift Card $100.00
              </Link>
              <Link
                to={{
                  pathname: '/products/sneakers-digital-gift-card',
                  search: '?variant=6',
                }}
                className="text-decoration1"
                style={
                  isActive(`/products/sneakers-digital-gift-card?variant=${6}`)
                    ? activeStyle
                    : { color: 'black' }
                }
              >
                Digital Gift Card $150.00
              </Link>
            </Stack>
            <Stack
              display="flex"
              flexDirection="row"
              gap={4}
              alignItems="center"
            >
              <Link
                to={{
                  pathname: '/products/sneakers-digital-gift-card',
                  search: '?variant=7',
                }}
                className="text-decoration1"
                style={
                  isActive(`/products/sneakers-digital-gift-card?variant=${7}`)
                    ? activeStyle
                    : { color: 'black' }
                }
              >
                Digital Gift Card $200.00
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default DigitalGiftCard

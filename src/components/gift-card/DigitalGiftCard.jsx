import { Box, Stack, Typography, Grid, Paper, TextField } from '@mui/material'
import giftCard1 from '../../images/cropcopy.webp'
import giftCard2 from '../../images/cropcopy-2.webp'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Checkbox from '@mui/material/Checkbox'
import { FormControlLabel } from '@mui/material'
import Share from '../../images/share.png'

const DigitalGiftCard = ({ title, url }) => {
  const [showForm, setShowForm] = useState(false)

  const handleChange = () => {
    setShowForm((prevShowForm) => !prevShowForm)
  }

  const location = useLocation()
  const isActive = (path) => {
    return location.pathname + location.search === path
  }

  const activeStyle = {
    backgroundColor: 'black',
    color: '#fff',
    padding: '7px',
  }

  const handleShareClick = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'SNEAKERS DIGITAL GIFT CARD - Sneakers.store',
          url: '/products/sneakers-digital-gift-card',
        })
      } else {
        alert('Web Share API not supported in this browser.')
      }
    } catch (error) {
      console.error('Error sharing:', error)
    }
  }

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
          <Stack
            mt="1rem"
            width="100%"
            // height="0rem"
            border="1px solid #E8E8E8"
          ></Stack>
          <Stack display="flex" flexDirection="row" alignItems="center">
            <FormControlLabel
              control={<Checkbox checked={showForm} onChange={handleChange} />}
              // label="Show Form"
            />
            <Typography
              fontSize="0.9rem"
              color="rgba(0, 0, 0, 0.75)"
              ml="-1rem"
            >
              I want to send this as a gift
            </Typography>
          </Stack>
          <Stack display="flex" flexDirection="column">
            {showForm && (
              <>
                <Stack
                  mt="1rem"
                  width="100%"
                  // height="0rem"
                  border="1px solid #E8E8E8"
                ></Stack>
                <form>
                  <TextField
                    label="Recipient email"
                    margin="normal"
                    name="email"
                    fullWidth
                  />
                  <TextField
                    label="Recipient name (optional)"
                    margin="normal"
                    name="name"
                    fullWidth
                  />
                  <TextField
                    label="MESSAGE (OPTIONAL)"
                    margin="normal"
                    name="description"
                    multiline
                    rows={3}
                    inputProps={{ maxLength: 200 }}
                    fullWidth
                  />
                  <Typography color="grey" fontSize="0.6rem" mt="-0.4rem">
                    200 characters max
                  </Typography>
                  <TextField
                    label="SEND ON (OPTIONAL)"
                    margin="normal"
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                  />
                </form>
              </>
            )}
          </Stack>
          <Typography
            bgcolor="#e74683"
            width="100%"
            p="0.8rem"
            color="white"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="0.6rem"
            sx={{
              cursor: 'pointer',
              ':hover': { opacity: 0.7 },
              ':active': { opacity: 0.4 },
            }}
            mt="1rem"
          >
            ADD TO CART
          </Typography>
          <Typography color="grey" fontSize="0.6rem" mt="1rem" fontWeight={600}>
            GET 20% OFF ANY CARD FOR A LIMITED TIME ONLY.
          </Typography>
          <Typography color="grey" fontSize="0.6rem" mt="0.3rem">
            Discount is only applied when added to your cart.
          </Typography>
          <Typography color="grey" fontSize="0.6rem" mt="1rem">
            <span style={{ fontWeight: 'bold' }}>
              {' '}
              NOTE: "It's never too late for gifting"
            </span>{' '}
            discount will apply at cart.
          </Typography>
          <Typography
            color="rgba(0, 0, 0, 0.75)"
            fontSize="0.6rem"
            mt="0.7rem"
            fontWeight={600}
          >
            NOTE: THIS IS NOT A PHYSICAL ITEM
          </Typography>
          <Typography color="rgba(0, 0, 0, 0.75)" fontSize="0.6rem" mt="0.7rem">
            • Digital gift card purchases are delivered via email and contain
            instructions on how the code can be redeemed at checkout.
          </Typography>
          <Typography color="rgba(0, 0, 0, 0.75)" fontSize="0.6rem" mt="0.9rem">
            • The redeemable code will be sent via email and can also be printed
            at home and given to the recipient in person. No physical item will
            be sent with a digital gift card purchase.
          </Typography>
          <Typography color="rgba(0, 0, 0, 0.75)" fontSize="0.6rem" mt="0.9rem">
            • Good for anything in the storefront, including all physical and
            digital products. Codes will apply to this storefront only.
          </Typography>
          <Typography color="rgba(0, 0, 0, 0.75)" fontSize="0.6rem" mt="0.9rem">
            • Digital gift cards can be used multiple times until the card
            balance hits zero.
          </Typography>
          <Stack
            display="flex"
            flexDirection="row"
            mt="3rem"
            alignItems="center"
            gap={1.2}
          >
            <img
              style={{ height: '12px', width: '12px', cursor: 'pointer' }}
              src={Share}
              alt="share-button"
              onClick={handleShareClick}
            />
            <button
              className="hover"
              style={{
                border: 'none',
                backgroundColor: 'transparent',
                fontSize: '0.7rem',
                color: 'rgba(0, 0, 0, 0.75)',
                cursor: 'pointer',
              }}
              onClick={handleShareClick}
            >
              Share
            </button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default DigitalGiftCard

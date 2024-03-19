import { Box, Stack, Typography, Grid, Paper, TextField } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Checkbox from '@mui/material/Checkbox'
import { FormControlLabel } from '@mui/material'
import { useCart } from '../../Context'

import giftCard2 from '../../images/cropcopy-2.webp'
import giftCard1 from '../../images/cropcopy.webp'
import Share from '../../images/share.png'
import vanIcon from '../../images/van-icon.png'
import upArrow from '../../images/up-arrow-icon.png'
import downArrow from '../../images/down-arrow-icon.png'
import leftArrow from '../../images/icon-previous.svg'
import RightArrow from '../../images/icon-next.svg'

const DigitalGiftCard = ({ title, url }) => {
  const [showForm, setShowForm] = useState(false)
  const [visibleContent, setVisibleContent] = useState(false)
  const { state, dispatch } = useCart()

  const nextImage = () => {
    dispatch({ type: 'NEXT_GIFT_CARD_IMAGE' })
  }

  const previousImage = () => {
    dispatch({ type: 'PREVIOUS_GIFT_CARD_IMAGE' })
  }

  const handleImageClick = (id) => {
    dispatch({ type: 'SET_SELECTED_GIFT_CARD', payload: id })
  }

  const showValue = () => {
    dispatch({ type: 'SHOW_CART_VALUE' })
  }
  const updateCartValue = () => {
    dispatch({ type: 'SUM_CART_VALUE' })
  }

  const images = [giftCard1, giftCard2]

  const toggleContent = () => {
    setVisibleContent(!visibleContent)
  }

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
  const openModal = () => {
    dispatch({ type: 'OPEN_GIFT_CARD_MODAL' })
  }

  return (
    <Box
      mt={{ lg: '2rem', sm: '5rem', xs: '3rem' }}
      px={{ lg: '0rem', sm: '1rem', xs: '1rem' }}
      // mb={{ lg: '-30rem', sm: '-30rem', xs: '-30rem' }}
      display="flex"
      flexDirection={{ lg: 'row', sm: 'column', xs: 'column' }}
      // height="300vh"
      // overflow="hidden"
    >
      <Stack
        display="flex"
        flexDirection="column"
        width={{ lg: '50%', sm: '100%', xs: '100%' }}
        gap={1}
      >
        <Stack display="flex" alignItems="center" justifyContent="center">
          <img
            className="gift-card-1"
            style={{
              borderRadius: '20px',
              objectFit: 'cover',
              cursor: 'pointer',
            }}
            src={images[state.selectedGiftCard]}
            alt="gift-card-1"
            onClick={() => {
              openModal()
            }}
          />
        </Stack>

        <Stack
          direction="row"
          display={{ xs: 'none', lg: 'flex' }}
          sx={{ mt: '25px' }}
          gap={3}
          ml="1rem"
        >
          {state.giftData.map((item) => (
            <img
              key={item.id}
              src={item.image}
              alt="image-1b"
              onClick={() => handleImageClick(item.id)}
              className={
                item.id === state.selectedGiftCard
                  ? 'active-shoe-thumbnail'
                  : 'shoe-thumbnail'
              }
            />
          ))}
        </Stack>
        <Stack
          display={{ lg: 'none', sm: 'flex', xs: 'flex' }}
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          mt="1rem"
          gap={1}
        >
          <img onClick={previousImage} src={leftArrow} alt="left-arrow" />
          <p>
            {state.selectedGiftCard + 1} / {state.giftData.length}
          </p>
          <img onClick={nextImage} src={RightArrow} alt="right-arrow" />
        </Stack>
      </Stack>

      <Stack
        width={{ lg: '400px', sm: '100%', xs: '100%' }}
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
              <Stack display={{ lg: 'block', sm: 'none', xs: 'none' }}>
                <Link
                  to={{
                    pathname: '/products/sneakers-digital-gift-card',
                    search: '?variant=3',
                  }}
                  className="text-decoration1"
                  style={
                    isActive(
                      `/products/sneakers-digital-gift-card?variant=${3}`
                    )
                      ? activeStyle
                      : { color: 'black' }
                  }
                >
                  Digital Gift Card $60.00
                </Link>
              </Stack>
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
              <Stack display={{ lg: 'block', sm: 'none', xs: 'none' }}>
                <Link
                  to={{
                    pathname: '/products/sneakers-digital-gift-card',
                    search: '?variant=6',
                  }}
                  className="text-decoration1"
                  style={
                    isActive(
                      `/products/sneakers-digital-gift-card?variant=${6}`
                    )
                      ? activeStyle
                      : { color: 'black' }
                  }
                >
                  Digital Gift Card $150.00
                </Link>
              </Stack>
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
          <button
            onClick={() => {
              showValue()
              dispatch({
                type: 'ADD_TO_CART',
                payload: { gender: 'gift' },
              })
              updateCartValue()
            }}
            className="gift-card-add-to-cart"
            style={{
              backgroundColor: '#e74683',
              color: 'white',
              padding: '0.8rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.6rem',
              cursor: 'pointer',
              marginTop: '1rem',
              width: '100%',
              border: 'none',
            }}
          >
            ADD TO CART
          </button>
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
          <Stack mt="2rem" width="100%" border="1px solid #E8E8E8"></Stack>
          <Stack
            display="flex"
            flexDirection="row"
            mt="1rem"
            alignItems="center"
            justifyContent="space-between"
            sx={{ cursor: 'pointer' }}
          >
            <div onClick={toggleContent}>
              <Stack display="flex" flexDirection="row" alignItems="center">
                <img
                  style={{ height: '20px', width: '20px' }}
                  src={vanIcon}
                  alt="van-icon"
                />
                <Typography
                  fontSize="0.7rem"
                  ml="1rem"
                  color="rgba(0, 0, 0, 0.75)"
                >
                  SHIPPING
                </Typography>
              </Stack>
            </div>
            <div onClick={toggleContent}>
              {visibleContent ? (
                <img
                  style={{ width: '10px', height: '10px', cursor: 'pointer' }}
                  src={upArrow}
                  alt="down-arrow"
                  onClick={toggleContent}
                />
              ) : (
                <img
                  style={{ width: '10px', height: '10px', cursor: 'pointer' }}
                  src={downArrow}
                  alt="up-arrow"
                  onClick={toggleContent}
                />
              )}
            </div>
          </Stack>
          {visibleContent && (
            <Stack
              display="flex"
              flexDirection="column"
              ml="1rem"
              mt="1rem"
              gap={0.6}
            >
              <Typography
                fontSize="0.9rem"
                fontWeight={600}
                color="rgba(0, 0, 0, 0.75)"
              >
                USA Orders:
              </Typography>
              <Typography fontSize="0.9rem" color="rgba(0, 0, 0, 0.75)">
                1-3 business days
              </Typography>
              <Typography
                fontSize="0.9rem"
                fontWeight={600}
                color="rgba(0, 0, 0, 0.75)"
              >
                Other countries:
              </Typography>
              <Typography fontSize="0.9rem" color="rgba(0, 0, 0, 0.75)">
                Canada and Europe: 4-15 business days
              </Typography>
              <Typography fontSize="0.9rem" color="rgba(0, 0, 0, 0.75)">
                Rest of world: 8-15 business days
              </Typography>
              <Link to="/pages/faqs">
                <Typography mt="1rem" color="rgba(0, 0, 0, 0.75)">
                  More information
                </Typography>
              </Link>
            </Stack>
          )}
          <Stack mt="1rem" width="100%" border="1px solid #E8E8E8"></Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default DigitalGiftCard

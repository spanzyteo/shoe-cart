import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useCart } from '../../Context'

import image from '../../images/govixid.svg'
import upArrow from '../../images/up-arrow-icon.png'
import downArrow from '../../images/down-arrow-icon.png'

const CheckoutCartItems = () => {
  const { scrollY } = useScroll()
  const yRange = useTransform(scrollY, [0, 0], [0, 0])
  const { state, dispatch } = useCart()
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [visible, setVisible] = useState(false)
  const filteredCart = state.cartItems.filter((item) => item.count > 0)

  const toggleContent = () => {
    setVisible(!visible)
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 992)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  useEffect(() => {}, [state.cartItems])

  return (
    <>
      {!isSmallScreen && (
        <motion.div
          style={{
            width: '50%',
            position: 'sticky',
            top: 0,
            right: 0,
            bottom: 0,
            height: '100vh',
            zIndex: 1,
            y: yRange,
            backgroundColor: 'rgb(214, 214, 214)',
            overflowY: 'auto',
          }}
        >
          {filteredCart.length > 0 && (
            <>
              {filteredCart.map((item) => (
                <Stack
                  key={item.id}
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-between"
                  mt="2rem"
                  ml="2rem"
                  // gap={}
                >
                  <Stack display="flex" flexDirection="row" gap={1}>
                    <img
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '6px',
                      }}
                      src={item.gender === 'male' ? item.image : item.image}
                      alt=""
                    />
                    <Stack display="flex" flexDirection="column">
                      <Typography>{item.brand}</Typography>
                      <Typography fontSize="0.9rem" color="rgba(0, 0, 0, 0.75)">
                        {item.sizes}
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack mr="7rem">
                    <Typography fontSize="0.8rem">
                      ₦{item.price.toFixed(2)}
                    </Typography>
                  </Stack>
                </Stack>
              ))}
            </>
          )}
          <Stack display="flex" mt="2rem" ml="2rem">
            <form onSubmit={handleSubmit}>
              <Stack display="flex" flexDirection="row" gap={4}>
                <TextField
                  type="text"
                  placeholder="Discount code or gift card"
                  value={inputValue}
                  onChange={handleInputChange}
                  inputProps={{
                    style: {
                      backgroundColor: 'white',
                      height: '15px',
                      width: '280px',
                    },
                  }}
                />
                <Button
                  type="submit"
                  disabled={!inputValue.trim()}
                  sx={{
                    color: 'white',
                    bgcolor: '#46E850',
                    ':hover': {
                      backgroundColor: 'white',
                      border: '1px solid #46E850',
                      color: '#46E850',
                    },
                    borderRadius: '9px',
                    width: '80px',
                    ':disabled': {
                      backgroundColor: 'rgb(214, 214, 214)',
                      border: '1px solid grey',
                    },
                  }}
                >
                  APPLY
                </Button>
              </Stack>
            </form>
          </Stack>
          <Stack
            display="flex"
            flexDirection="column"
            mt="2rem"
            ml="2rem"
            gap={1}
          >
            <Stack
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Typography>Subtotal</Typography>
              <Typography mr="7rem" fontSize="0.8rem">
                ₦{state.totalPrice.toFixed(2)}
              </Typography>
            </Stack>
            <Stack
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Typography>Shipping</Typography>
              <Typography
                mr="7rem"
                fontSize="0.8rem"
                color="rgba(0, 0, 0, 0.75)"
              >
                Enter shipping address
              </Typography>
            </Stack>
            <Stack
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Typography>Total</Typography>
              <Typography fontSize="1.7rem" mr="7rem">
                <span
                  style={{ fontSize: '0.8rem', color: 'rgba(0, 0, 0, 0.75)' }}
                >
                  NGN
                </span>
                {` `}₦{state.totalPrice.toFixed(2)}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            display="flex"
            flexDirection="row"
            alignItems="center"
            height="60px"
            width="420px"
            border="1px solid grey"
            ml="2rem"
            mt="1rem"
          >
            <img
              style={{
                marginLeft: '0.5rem',
                borderRadius: '6px',
                height: '45px',
                width: '50px',
              }}
              src={image}
              alt="image"
            />
            <Typography
              ml="0.5rem"
              color="rgba(0, 0, 0, 0.75)"
              fontSize="0.97rem"
            >
              Discount available for Military, First Responders, Medical Workers
              and Teachers
            </Typography>
          </Stack>
        </motion.div>
      )}
      {isSmallScreen && (
        <>
          <Stack display="flex" flexDirection="column" mt="2rem">
            <Stack
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap={5}
            >
              <Typography
                fontWeight={600}
                fontSize="1.5rem"
                ml={visible ? '2rem' : '0rem'}
              >
                ORDER SUMMARY ({state.cartValue})
              </Typography>
              {visible ? (
                <Stack
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  gap={1}
                >
                  <Typography>Hide</Typography>
                  <img
                    style={{ height: '10px', width: '10px', cursor: 'pointer' }}
                    src={upArrow}
                    alt="up-arrow"
                    onClick={toggleContent}
                  />
                </Stack>
              ) : (
                <Stack
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  gap={1}
                >
                  <Typography>Show</Typography>
                  <img
                    style={{ height: '10px', width: '10px', cursor: 'pointer' }}
                    src={downArrow}
                    alt="down-arrow"
                    onClick={toggleContent}
                  />
                </Stack>
              )}
            </Stack>
            {visible && (
              <Stack display="flex" width="420px" pl="2rem">
                {filteredCart.length > 0 && (
                  <>
                    {filteredCart.map((item) => (
                      <Stack
                        key={item.id}
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="space-between"
                        mt="1rem"
                        // ml="2rem"
                        gap={1}
                      >
                        <Stack display="flex" flexDirection="row" gap={1}>
                          <img
                            style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '6px',
                            }}
                            src={
                              item.gender === 'male' ? item.image : item.image
                            }
                            alt=""
                          />
                          <Stack display="flex" flexDirection="column">
                            <Typography>{item.brand}</Typography>
                            <Typography
                              fontSize="0.9rem"
                              color="rgba(0, 0, 0, 0.75)"
                            >
                              {item.sizes}
                            </Typography>
                          </Stack>
                        </Stack>
                        <Stack mr="7rem">
                          <Typography fontSize="0.8rem">
                            ₦{item.price.toFixed(2)}
                          </Typography>
                        </Stack>
                      </Stack>
                    ))}
                  </>
                )}
              </Stack>
            )}
          </Stack>
          <Stack display="flex" mt="2rem" ml="">
            <form onSubmit={handleSubmit}>
              <Stack
                display="flex"
                flexDirection="row"
                gap={4}
                alignItems="center"
              >
                <TextField
                  type="text"
                  placeholder="Discount code or gift card"
                  value={inputValue}
                  onChange={handleInputChange}
                  inputProps={{
                    style: {
                      backgroundColor: 'white',
                      height: '15px',
                      width: '220px',
                    },
                  }}
                />
                <Button
                  type="submit"
                  disabled={!inputValue.trim()}
                  sx={{
                    color: 'white',
                    bgcolor: '#46E850',
                    ':hover': {
                      backgroundColor: 'white',
                      border: '1px solid #46E850',
                      color: '#46E850',
                    },
                    borderRadius: '9px',
                    width: '60px',
                    height: '45px',
                    ':disabled': {
                      backgroundColor: 'rgb(214, 214, 214)',
                      border: '1px solid grey',
                    },
                  }}
                >
                  APPLY
                </Button>
              </Stack>
            </form>
          </Stack>
          <Stack display="flex" flexDirection="column" mt="2rem" gap={1}>
            <Stack
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              gap={30}
            >
              <Typography>Subtotal</Typography>
              <Typography fontSize="0.8rem">
                ₦{state.totalPrice.toFixed(2)}
              </Typography>
            </Stack>
            <Stack
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography>Shipping</Typography>
              <Typography fontSize="0.8rem" color="rgba(0, 0, 0, 0.75)">
                Enter shipping address
              </Typography>
            </Stack>
            <Stack
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography>Total</Typography>
              <Typography fontSize="1.7rem">
                <span
                  style={{ fontSize: '0.8rem', color: 'rgba(0, 0, 0, 0.75)' }}
                >
                  NGN
                </span>
                {` `}₦{state.totalPrice.toFixed(2)}
              </Typography>
            </Stack>
            <Typography fontSize="0.85rem" width="350px" color="grey" mt="1rem">
              By clicking below and completing your order, you agree to purchase
              your item(s) from Global-e as merchant of record for this
              transaction, on Global-e's and . Global-e is an international
              fulfilment service provider to MrBeast.store
            </Typography>
          </Stack>
        </>
      )}
    </>
  )
}

export default CheckoutCartItems

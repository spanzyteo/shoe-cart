import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useCart } from '../../Context'

import image from '../../images/govixid.svg'

const CheckoutCartItems = () => {
  const { scrollY } = useScroll()
  const yRange = useTransform(scrollY, [0, 0], [0, 0])
  const { state, dispatch } = useCart()
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const filteredCart = state.cartItems.filter((item) => item.count > 0)

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  const borderStyle = isFocused ? { borderColor: 'black' } : {}

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
                      border: '1px solid black',
                      height: '15px',
                      width: '280px',
                    },
                  }}
                />
                <Button
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
    </>
  )
}

export default CheckoutCartItems

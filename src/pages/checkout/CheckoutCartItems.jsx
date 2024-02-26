import { Box, Stack, Typography } from '@mui/material'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useCart } from '../../Context'

const CheckoutCartItems = () => {
  const { scrollY } = useScroll()
  const yRange = useTransform(scrollY, [0, 0], [0, 0])
  const { state, dispatch } = useCart()
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const filteredCart = state.cartItems.filter((item) => item.count > 0)

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
            // marginTop: '-6rem',
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
                  mt="2rem"
                  ml="2rem"
                  gap={2}
                >
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
              ))}
            </>
          )}
          {/* this */}
        </motion.div>
      )}
    </>
  )
}

export default CheckoutCartItems

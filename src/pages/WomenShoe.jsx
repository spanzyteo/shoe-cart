import React, { useState } from 'react'
import { Stack, Box } from '@mui/material'
import MenShoeDetails from '../components/MenShoeDetails'

import nextIcon from '../images/icon-next.svg'
import previousIcon from '../images/icon-previous.svg'

import image1 from '../images/female-1.avif'
import image2 from '../images/female-2.jpg'
import image3 from '../images/female-3.jpg'
import image4 from '../images/female-4.jpg'
import { useCart } from '../Context'

const WomenShoe = () => {
  const { state, dispatch } = useCart()

  const images = [image1, image2, image3, image4]

  const nextImage = () => {
    dispatch({ type: 'NEXT_IMAGE' })
  }

  const previousImage = () => {
    dispatch({ type: 'PREVIOUS_IMAGE' })
  }

  const handleImageClick = (id) => {
    dispatch({ type: 'SET_SELECTED_IMAGE', payload: id })
  }

  const openModal = () => {
    dispatch({ type: 'OPEN_MODAL' })
  }
  return (
    <Box>
      <Box
        flexDirection={{ xs: 'column', lg: 'row' }}
        alignItems="center"
        justifyContent="space-between"
        sx={{
          mt: { xs: '0px', lg: '50px' },
          mx: { xs: '0rem', lg: '2rem' },
        }}
      >
        <Stack
          className="cart-menu"
          direction={{ xs: 'column', lg: 'row' }}
          justifyContent="center"
          gap={{ lg: '3rem' }}
        >
          <Stack direction="column">
            <Stack className="slider">
              <img
                className="shoe-image"
                src={images[state.selectedImage]}
                alt="images"
                onClick={() => {
                  openModal()
                }}
              />
              <Stack direction="row" display={{ xs: 'flex', lg: 'none' }}>
                <img
                  className="previous-icon"
                  src={previousIcon}
                  alt="previous-icon"
                  onClick={previousImage}
                />
                <img
                  className="next-icon"
                  src={nextIcon}
                  alt="next-icon"
                  onClick={nextImage}
                />
              </Stack>
            </Stack>
            <Stack
              direction="row"
              display={{ xs: 'none', lg: 'flex' }}
              sx={{ mt: '25px' }}
              gap={6}
            >
              {state.data.map((item) => (
                <img
                  key={item.id}
                  src={item.image2}
                  alt="image-1b"
                  onClick={() => handleImageClick(item.id)}
                  className={
                    item.id === state.selectedImage
                      ? 'active-shoe-thumbnail'
                      : 'shoe-thumbnail'
                  }
                />
              ))}
            </Stack>
          </Stack>
          <MenShoeDetails />
        </Stack>
      </Box>
    </Box>
  )
}

export default WomenShoe

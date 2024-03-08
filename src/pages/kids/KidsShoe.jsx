import React, { useState } from 'react'
import { Stack, Box } from '@mui/material'

import nextIcon from '../../images/icon-next.svg'
import previousIcon from '../../images/icon-previous.svg'
import image1 from '../../images/kids-1.jpg'
import image2 from '../../images/kids-2.jpg'
import image3 from '../../images/kids-3.jpg'
import image4 from '../../images/kids-4.jpg'
import { useCart } from '../../Context'
import KIdsShoeDetails from './KIdsShoeDetails'

const KidsShoe = () => {
  const { state, dispatch } = useCart()

  const images = [image1, image2, image3, image4]

  const nextImage = () => {
    dispatch({ type: 'NEXT_IMAGE_KIDS' })
  }

  const previousImage = () => {
    dispatch({ type: 'PREVIOUS_IMAGE_KIDS' })
  }

  const handleImageClick = (id) => {
    dispatch({ type: 'SET_SELECTED_IMAGE_KIDS', payload: id })
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
          <Stack display="flex" flexDirection="column">
            <Stack className="slider">
              <img
                className="shoe-image"
                src={images[state.selectedImageKids]}
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
              {state.kidsData.map((item) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt="image-1b"
                  onClick={() => handleImageClick(item.id)}
                  className={
                    item.id === state.selectedImageKids
                      ? 'active-shoe-thumbnail'
                      : 'shoe-thumbnail'
                  }
                />
              ))}
            </Stack>
          </Stack>
          <KIdsShoeDetails />
        </Stack>
      </Box>
    </Box>
  )
}

export default KidsShoe

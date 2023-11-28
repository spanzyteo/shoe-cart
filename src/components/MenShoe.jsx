import React, { useState } from 'react'
import { Stack, Box, Typography } from '@mui/material'
import MenShoeDetails from './MenShoeDetails'

import nextIcon from '../images/icon-next.svg'
import previousIcon from '../images/icon-previous.svg'
import image1 from '../images/image-product-1.jpg'
import image2 from '../images/image-product-2.jpg'
import image3 from '../images/image-product-3.jpg'
import image4 from '../images/image-product-4.jpg'
import image1b from '../images/image-product-1-thumbnail.jpg'
import image2b from '../images/image-product-2-thumbnail.jpg'
import image3b from '../images/image-product-3-thumbnail.jpg'
import image4b from '../images/image-product-4-thumbnail.jpg'
import { useCart } from '../Context'

const MenShoe = () => {
  const { state, dispatch } = useCart()

  const images = [image1, image2, image3, image4]
  const imageThumbnails = [image1b, image2b, image3b, image4b]

  // const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    dispatch({ type: 'NEXT_IMAGE' })
  }

  const previousImage = () => {
    dispatch({ type: 'PREVIOUS_IMAGE' })
  }

  const selectImage = () => {
    dispatch({ type: 'SET_SELECTED_IMAGE' })
  }

  // const goToNextImage = () => {
  //   setCurrentImageIndex((prevIndex) =>
  //     prevIndex === images.length - 1 ? 0 : prevIndex + 1
  //   )
  // }

  // const goToPrevImage = () => {
  //   setCurrentImageIndex((prevIndex) =>
  //     prevIndex === 0 ? images.length - 1 : prevIndex - 1
  //   )
  // }

  const handleClickThumbnail = (index) => {
    setCurrentImageIndex(index)
  }

  const handleImageClick = (id) => {
    dispatch({ type: 'SET_SELECTED_IMAGE', payload: id })
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
                alt="image-1"
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
              gap={5}
            >
              {state.data.map((item, id) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt="image-1b"
                  onClick={handleImageClick(id)}
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

export default MenShoe

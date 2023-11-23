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

const MenShoe = ({
  itemInCart,
  setItemInCart,
  addToCart,
  cartCount,
  setCartCount,
}) => {
  const images = [image1, image2, image3, image4]
  const imageThumbnails = [image1b, image2b, image3b, image4b]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const handleClickThumbnail = (index) => {
    setCurrentImageIndex(index)
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
                src={images[currentImageIndex]}
                alt="image-1"
              />
              <Stack direction="row" display={{ xs: 'flex', lg: 'none' }}>
                <img
                  className="previous-icon"
                  src={previousIcon}
                  alt="previous-icon"
                  onClick={goToPrevImage}
                />
                <img
                  className="next-icon"
                  src={nextIcon}
                  alt="next-icon"
                  onClick={goToNextImage}
                />
              </Stack>
            </Stack>
            <Stack
              direction="row"
              display={{ xs: 'none', lg: 'flex' }}
              sx={{ mt: '25px' }}
              gap={5}
            >
              {imageThumbnails.map((image, index) => (
                <img
                  src={image}
                  key={index}
                  alt="image-1b"
                  onClick={() => handleClickThumbnail(index)}
                  className={
                    index === currentImageIndex
                      ? 'active-shoe-thumbnail'
                      : 'shoe-thumbnail'
                  }
                />
              ))}
            </Stack>
          </Stack>
          <MenShoeDetails
            itemInCart={itemInCart}
            setItemInCart={setItemInCart}
            addToCart={addToCart}
            cartCount={cartCount}
            setCartCount={setCartCount}
          />
        </Stack>
      </Box>
    </Box>
  )
}

export default MenShoe

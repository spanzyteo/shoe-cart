import { useContext, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { trendingItems } from '../../utils/trendingItems'
import { useParams } from 'react-router-dom'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

import nextIcon from '../../images/icon-next.svg'
import previousIcon from '../../images/icon-previous.svg'
import trending1 from '../../images/trending-1.jpg'
import trending2 from '../../images/trending-2.jpg'
import trending3 from '../../images/trending-3.jpg'
import trending4 from '../../images/trending-4.jpg'
import trending5 from '../../images/trending-5.jpg'
import trending6 from '../../images/trending-6.jpg'
import trending7 from '../../images/trending-7.jpg'
import trending8 from '../../images/trending-8.jpg'
import trending9 from '../../images/trending-9.jpg'
import trending10 from '../../images/trending-10.jpg'
import { useCart } from '../../Context'
import ProductDetails from './ProductDetails'

const Product = ({ match }) => {
  const { id } = useParams()
  const { state, dispatch } = useCart()
  const images = [
    trending1,
    trending2,
    trending3,
    trending4,
    trending5,
    trending6,
    trending7,
    trending8,
    trending9,
    trending10,
  ]

  // const nextImage = () => {
  //   dispatch({ type: 'NEXT_IMAGE_TRENDING' })
  // }

  // const previousImage = () => {
  // dispatch({ type: 'PREVIOUS_IMAGE_TRENDING' })
  // }

  const handleImageClick = (id) => {
    dispatch({ type: 'SET_SELECTED_TRENDING_IMAGE', payload: id })
  }

  const itemId = parseInt(id)
  // const item = state.trendingData.find((item) => item.id === itemId)

  const initialIndex = state.trendingData.findIndex(
    (item) => item.id === itemId
  )
  const [currentIndex, setCurrentIndex] = useState(
    initialIndex >= 0 ? initialIndex : 0
  )

  const handleThumbnailClick = (itemId) => {
    const newIndex = state.trendingData.findIndex((item) => item.id === itemId)
    setCurrentIndex(newIndex)
  }

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % state.trendingData.length
    setCurrentIndex(nextIndex)
  }

  const previousImage = () => {
    const prevIndex =
      currentIndex === 0 ? state.trendingData.length - 1 : currentIndex - 1
    setCurrentIndex(prevIndex)
  }

  return (
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
              src={state.trendingData[currentIndex].image}
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
            display={{ lg: 'flex', sm: 'none', xs: 'none' }}
            flexDirection="row"
            width="350px"
            mt="2rem"
            gap={3}
            sx={{ overflowX: 'auto' }}
          >
            <ScrollMenu>
              {state.trendingData.map((item) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt="image-1b"
                  onClick={() => handleThumbnailClick(item.id)}
                  className={
                    item.id === currentIndex
                      ? 'active-trending-shoe-thumbnail'
                      : 'trending-shoe-thumbnail'
                  }
                />
              ))}
            </ScrollMenu>
          </Stack>
        </Stack>
        <ProductDetails currentIndex={currentIndex} />
      </Stack>
    </Box>
  )
}

export default Product

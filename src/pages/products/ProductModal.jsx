import { Stack, Box, Typography } from '@mui/material'
import { useCart } from '../../Context'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { ScrollMenu } from 'react-horizontal-scrolling-menu'

import CloseProductIcon from '../../components/icons/CloseProductIcon'
import nextIcon from '../../images/icon-next.svg'
import previousIcon from '../../images/icon-previous.svg'

const ProductModal = () => {
  const { state, dispatch } = useCart()
  const { id } = useParams()

  const itemId = parseInt(id)

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

  const handleImageClick = (id) => {
    dispatch({ type: 'SET_SELECTED_IMAGE', payload: id })
  }

  return (
    <Box
      display={{ xs: 'none', lg: 'flex' }}
      sx={{ alignItems: 'center', justifyContent: 'center' }}
    >
      {state.isProductOpen && (
        <Stack
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="absolute"
          right={0}
          left={0}
          top={0}
          bottom={0}
          bgcolor="rgb(0, 0, 0, 0.8)"
          width="100%"
          height="100%"
          zIndex={1000}
        >
          <Stack
            position="relative"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={3}
          >
            <Stack
              width="350px"
              gap={3}
              display="flex"
              justifyContent="space-between"
            >
              <Stack position="absolute" top={0} right={0}>
                <CloseProductIcon />
              </Stack>
              <Stack>
                <img
                  style={{ marginBottom: '-30px', cursor: 'default' }}
                  className="shoe-image"
                  src={state.trendingData[currentIndex].image}
                  alt="images"
                />
                <Stack direction="row" display={{ xs: 'flex' }}>
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
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{ mt: '25px', overflowX: 'auto' }}
                gap={3}
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
          </Stack>
        </Stack>
      )}
    </Box>
  )
}

export default ProductModal

import { Stack, Box, Typography } from '@mui/material'
import { useCart } from '../../Context'

import image1 from '../../images/image-product-1.jpg'
import image2 from '../../images/image-product-2.jpg'
import image3 from '../../images/image-product-3.jpg'
import image4 from '../../images/image-product-4.jpg'
import LeftArrow from '../../components/icons/LeftArrow'
import RightArrow from '../../components/icons/RightArrow'
import CloseIcon from '../../components/icons/CloseIcon'

const ShoeModal = () => {
  const images = [image1, image2, image3, image4]

  const { state, dispatch } = useCart()

  const handleImageClick = (id) => {
    dispatch({ type: 'SET_SELECTED_IMAGE', payload: id })
  }
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  return (
    <Box
      display={{ xs: 'none', lg: 'flex' }}
      sx={{ alignItems: 'center', justifyContent: 'center' }}
    >
      {state.isOpen && (
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
                <CloseIcon />
              </Stack>
              <Stack>
                <img
                  style={{ marginBottom: '-30px', cursor: 'default' }}
                  className="shoe-image"
                  src={images[state.selectedImage]}
                  alt="images"
                />
                <Stack direction="row" display={{ xs: 'flex' }}>
                  <LeftArrow />
                  <RightArrow />
                </Stack>
              </Stack>
              <Stack
                direction="row"
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{ mt: '25px' }}
                gap={4}
              >
                {state.data.map((item) => (
                  <img
                    key={item.id}
                    src={item.image}
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
          </Stack>
        </Stack>
      )}
    </Box>
  )
}

export default ShoeModal

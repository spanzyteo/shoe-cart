import { Stack, Box, Typography } from '@mui/material'
import { useCart } from '../../Context'

import image1 from '../../images/female-1.jpg'
import image2 from '../../images/female-2.jpg'
import image3 from '../../images/female-3.jpg'
import image4 from '../../images/female-4.jpg'
import LeftArrowFemale from '../../components/icons/LeftArrowFemale'
import RightArrowFemale from '../../components/icons/RightArrowFemale'
import CloseFemaleIcon from '../../components/icons/CloseFemaleIcon'

const ShoeModalFemale = () => {
  const images = [image1, image2, image3, image4]

  const { state, dispatch } = useCart()

  const handleImageClick = (id) => {
    dispatch({ type: 'SET_SELECTED_IMAGE_FEMALE', payload: id })
  }

  return (
    <Box
      display={{ xs: 'none', lg: 'flex' }}
      sx={{ alignItems: 'center', justifyContent: 'center' }}
    >
      {state.isFemaleOpen && (
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
                <CloseFemaleIcon />
              </Stack>
              <Stack>
                <img
                  style={{ marginBottom: '-30px', cursor: 'default' }}
                  className="shoe-image"
                  src={images[state.selectedImageFemale]}
                  alt="images"
                />
                <Stack direction="row" display={{ xs: 'flex' }}>
                  <LeftArrowFemale />
                  <RightArrowFemale />
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
                {state.femaleData.map((item) => (
                  <img
                    key={item.id}
                    src={item.image}
                    alt="image-1b"
                    onClick={() => handleImageClick(item.id)}
                    className={
                      item.id === state.selectedImageFemale
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

export default ShoeModalFemale

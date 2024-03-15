import { Stack, Box, Typography } from '@mui/material'
import { useCart } from '../../Context'

import image1 from '../../images/cropcopy-2.webp'
import image2 from '../../images/cropcopy.webp'
import GiftCardLeftArrow from '../icons/GiftCardLeftArrow'
import GiftCardRightArrow from '../icons/GiftCardRightArrow'
import CloseGiftCardIcon from '../icons/CloseGiftCardIcon'

const GiftCardModal = () => {
  const images = [image1, image2]

  const { state, dispatch } = useCart()

  const handleImageClick = (id) => {
    dispatch({ type: 'SET_SELECTED_GIFT_CARD', payload: id })
  }

  return (
    <Box
      display={{ xs: 'none', lg: 'flex' }}
      sx={{ alignItems: 'center', justifyContent: 'center' }}
    >
      {state.isGiftCardOpen && (
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
                <CloseGiftCardIcon />
              </Stack>
              <Stack>
                <img
                  style={{ marginBottom: '-30px', cursor: 'default' }}
                  className="shoe-image"
                  src={images[state.selectedGiftCard]}
                  alt="images"
                />
                <Stack direction="row" display={{ xs: 'flex' }}>
                  <GiftCardLeftArrow />
                  <GiftCardRightArrow />
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
                {state.giftData.map((item) => (
                  <img
                    key={item.id}
                    src={item.image}
                    alt="image-1b"
                    onClick={() => handleImageClick(item.id)}
                    className={
                      item.id === state.selectedGiftCard
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

export default GiftCardModal

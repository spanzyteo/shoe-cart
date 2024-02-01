import { Box, Stack, Typography } from '@mui/material'
import giftCard1 from '../../images/cropcopy.webp'
import giftCard2 from '../../images/cropcopy-2.webp'

const DigitalGiftCard = () => {
  return (
    <Box
      mt="2rem"
      display="flex"
      flexDirection={{ lg: 'row', sm: 'column', xs: 'column' }}
      height="300vh"
      // overflow="hidden"
    >
      <Stack
        display="flex"
        flexDirection={{ lg: 'column', sm: 'row', xs: 'row' }}
        width="50%"
        gap={1}
      >
        <img
          className="gift-card-1"
          style={{
            borderRadius: '20px',
            objectFit: 'cover',
          }}
          src={giftCard1}
          alt="gift-card-1"
        />
        <Stack display="flex" alignItems="center" justifyContent="center">
          <img
            className="gift-card-2"
            src={giftCard2}
            alt="gift-card-2"
            style={{ borderRadius: '20px', objectFit: 'cover' }}
          />
        </Stack>
      </Stack>

      <Stack
        className="scroll-part-2"
        display="flex"
        flexDirection="column"
      ></Stack>
    </Box>
  )
}

export default DigitalGiftCard

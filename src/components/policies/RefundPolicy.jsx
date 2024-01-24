import { Box, Stack, Typography } from '@mui/material'

const RefundPolicy = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      mt="3rem"
      alignItems="center"
      justifyContent="center"
      mb="-2rem"
    >
      <Stack display="flex">
        <Typography fontSize="2rem" fontWeight={500}>
          Refund Policy
        </Typography>
      </Stack>

      <Stack
        display="flex"
        mt="1.6rem"
        lineHeight="2rem"
        alignItems="center"
        justifyContent="center"
        px={{ lg: '0rem', sm: '1rem', xs: '1rem' }}
      >
        <Typography
          width={{ lg: '670px', xs: '350px', sm: '500px' }}
          sx={{
            color: ' rgba(0, 0, 0, 0.75)',
            fontSize: '1.3rem',
          }}
        >
          Returns are only considered when there is a fault with the product
          caused prior to its delivery. Please contact our support team if you
          are experiencing such issues.
        </Typography>{' '}
        <Typography
          width={{ lg: '670px', xs: '350px', sm: '500px' }}
          sx={{
            color: 'rgba(0, 0, 0, 0.75)',
            fontSize: '1.3rem',
            marginTop: '0.4rem',
          }}
        >
          We do accept returns if the item/s are still unopened, issuing a full
          refund including shipping costs. Ordering the incorrect size does not
          qualify for a return.
        </Typography>
        <Typography
          width={{ lg: '670px', xs: '350px', sm: '500px' }}
          sx={{
            color: 'rgba(0, 0, 0, 0.75)',
            fontSize: '1.3rem',
            marginTop: '0.4rem',
          }}
        >
          Please contact our support team at support@shopmrbeast.com for further
          assistance with returns.
        </Typography>
      </Stack>
    </Box>
  )
}

export default RefundPolicy

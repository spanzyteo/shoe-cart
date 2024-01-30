import { Box, Stack, Typography } from '@mui/material'

const SizeDetails = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      mt="4rem"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          fontSize="2rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          Size Details
        </Typography>
        <Stack
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          mt="1rem"
          gap={2}
          width={{ lg: '750px', xs: '350px', sm: '500px' }}
        >
          <Typography
            fontSize="1rem"
            color="rgba(0, 0, 0, 0.75)"
            mt="4rem"
            mr="30rem"
          >
            FIND MY SIZE📏
          </Typography>
          <Stack
            display="flex"
            flexDirection="column"
            mt="1rem"
            height="500px"
            width={{ lg: '600px', xs: '350px', sm: '500px' }}
            sx={{ border: '1px solid grey' }}
          ></Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default SizeDetails

import { Box, Stack, Typography } from '@mui/material'

const ContactInformation = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      mt="2rem"
      justifyContent="center"
      alignItems="center"
    >
      <Stack display="flex" flexDirection="column">
        <Typography
          fontWeight={600}
          fontSize="2rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          Contact Information
        </Typography>
      </Stack>
    </Box>
  )
}

export default ContactInformation

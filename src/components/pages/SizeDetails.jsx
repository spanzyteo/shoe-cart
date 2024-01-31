import { Box, Stack, Typography } from '@mui/material'

import bodySize from '../../images/body_size.svg'

const SizeDetails = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        mt="4rem"
        justifyContent="center"
        alignItems="center"
        overflow="auto"
        pl={{ lg: '0rem', sm: '0rem', xs: '15rem' }}
        pr={{ lg: '0rem', sm: '0rem', xs: '1rem' }}
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
            width="600px"
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
              height="450px"
              width="600px"
              sx={{ border: '1px solid grey' }}
            >
              <Stack
                display="flex"
                flexDirection="row"
                height="50px"
                borderBottom="1px solid grey"
                gap={2}
              >
                <Stack width="120px" borderRight="1px solid grey">
                  <Typography
                    display={{ lg: 'flex', sm: 'none', xs: 'none' }}
                    alignItems="center"
                    justifyContent="center"
                    fontSize="0.85rem"
                    mt="1rem"
                  >
                    International Sizes
                  </Typography>
                  <Typography
                    display={{ lg: 'none', sm: 'flex', xs: 'flex' }}
                    alignItems="center"
                    justifyContent="center"
                    fontSize="1.1rem"
                  >
                    International
                  </Typography>
                  <Typography
                    display={{ lg: 'none', sm: 'flex', xs: 'flex' }}
                    alignItems="center"
                    justifyContent="center"
                    fontSize="1.1rem"
                  >
                    Sizes
                  </Typography>
                </Stack>
                <Stack width="65px" borderRight="1px solid grey">
                  <Typography
                    display={{ lg: 'flex', sm: 'none', xs: 'none' }}
                    alignItems="center"
                    justifyContent="center"
                    fontSize="0.85rem"
                    mt="1rem"
                    ml="-1rem"
                  >
                    NA Sizes
                  </Typography>
                  <Typography
                    display={{ lg: 'none', sm: 'flex', xs: 'flex' }}
                    alignItems="center"
                    justifyContent="center"
                    fontSize="1.1rem"
                    ml="-1rem"
                  >
                    NA
                  </Typography>
                  <Typography
                    display={{ lg: 'none', sm: 'flex', xs: 'flex' }}
                    alignItems="center"
                    justifyContent="center"
                    fontSize="1.1rem"
                    ml="-1rem"
                  >
                    Sizes
                  </Typography>
                </Stack>
                <Stack width="80px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                    ml="-1rem"
                  >
                    Shoulders
                  </Typography>
                </Stack>
                <Stack width="55px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                    ml="-1rem"
                  >
                    Arms
                  </Typography>
                </Stack>
                <Stack width="65px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                    ml="-1rem"
                  >
                    Chest
                  </Typography>
                </Stack>
                <Stack width="55px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                    ml="-1rem"
                  >
                    Heaps
                  </Typography>
                </Stack>
                <Stack width="55px">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                    mr="0.5rem"
                  >
                    Inseam
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                display="flex"
                flexDirection="row"
                height="50px"
                borderBottom="1px solid grey"
                gap={2}
              >
                <Stack width="120px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                    ml="1rem"
                  >
                    XXS/12
                  </Typography>
                </Stack>
                <Stack width="65px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                    ml="-0.5rem"
                  >
                    XXS/12
                  </Typography>
                </Stack>
                <Stack width="80px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                  >
                    17.5"
                  </Typography>
                </Stack>
                <Stack width="55px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                  >
                    33.8"
                  </Typography>
                </Stack>
                <Stack width="65px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                  >
                    35.6"
                  </Typography>
                </Stack>
                <Stack width="55px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                  >
                    35.8"
                  </Typography>
                </Stack>
                <Stack width="55px">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                    mr="0.5rem"
                  >
                    30"
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                display="flex"
                flexDirection="row"
                height="50px"
                borderBottom="1px solid grey"
                gap={2}
              >
                <Stack width="120px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                    ml="1rem"
                  >
                    XS/14
                  </Typography>
                </Stack>
                <Stack width="65px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                    ml="-0.5rem"
                  >
                    XS/14
                  </Typography>
                </Stack>
                <Stack width="80px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                  >
                    17.9"
                  </Typography>
                </Stack>
                <Stack width="55px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                  >
                    34.4"
                  </Typography>
                </Stack>
                <Stack width="65px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                  >
                    37.2"
                  </Typography>
                </Stack>
                <Stack width="55px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                  >
                    37.4"
                  </Typography>
                </Stack>
                <Stack width="55px">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                    mr="0.5rem"
                  >
                    30.5"
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                display="flex"
                flexDirection="row"
                height="50px"
                borderBottom="1px solid grey"
                gap={2}
              >
                <Stack width="120px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                    ml="1rem"
                  >
                    SM
                  </Typography>
                </Stack>
                <Stack width="65px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                    ml="-0.5rem"
                  >
                    SM
                  </Typography>
                </Stack>
                <Stack width="80px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                  >
                    18.3"
                  </Typography>
                </Stack>
                <Stack width="55px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                  >
                    35"
                  </Typography>
                </Stack>
                <Stack width="65px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                  >
                    38.7"
                  </Typography>
                </Stack>
                <Stack width="55px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                  >
                    38.9"
                  </Typography>
                </Stack>
                <Stack width="55px">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                    mr="0.5rem"
                  >
                    31"
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                display="flex"
                flexDirection="row"
                height="50px"
                borderBottom="1px solid grey"
                gap={2}
              >
                <Stack width="120px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                    ml="1rem"
                  >
                    M
                  </Typography>
                </Stack>
                <Stack width="65px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                    ml="-0.5rem"
                  >
                    M
                  </Typography>
                </Stack>
                <Stack width="80px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                  >
                    18.7"
                  </Typography>
                </Stack>
                <Stack width="55px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                  >
                    35.6"
                  </Typography>
                </Stack>
                <Stack width="65px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                  >
                    40.3"
                  </Typography>
                </Stack>
                <Stack width="55px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                  >
                    40.5"
                  </Typography>
                </Stack>
                <Stack width="55px">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                    mr="0.5rem"
                  >
                    31.5"
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                display="flex"
                flexDirection="row"
                height="50px"
                borderBottom="1px solid grey"
                gap={2}
              >
                <Stack width="120px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                    ml="1rem"
                  >
                    L
                  </Typography>
                </Stack>
                <Stack width="65px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                    ml="-0.5rem"
                  >
                    L
                  </Typography>
                </Stack>
                <Stack width="80px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                  >
                    19"
                  </Typography>
                </Stack>
                <Stack width="55px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                  >
                    36.2"
                  </Typography>
                </Stack>
                <Stack width="65px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                  >
                    41.9"
                  </Typography>
                </Stack>
                <Stack width="55px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                  >
                    42.1"
                  </Typography>
                </Stack>
                <Stack width="55px">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                    mr="0.5rem"
                  >
                    32"
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                display="flex"
                flexDirection="row"
                height="50px"
                borderBottom="1px solid grey"
                gap={2}
              >
                <Stack width="120px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                    ml="1rem"
                  >
                    XL
                  </Typography>
                </Stack>
                <Stack width="65px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                    ml="-0.5rem"
                  >
                    XL
                  </Typography>
                </Stack>
                <Stack width="80px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                  >
                    19.4"
                  </Typography>
                </Stack>
                <Stack width="55px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                  >
                    36.8"
                  </Typography>
                </Stack>
                <Stack width="65px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                  >
                    43.5"
                  </Typography>
                </Stack>
                <Stack width="55px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                  >
                    43.7"
                  </Typography>
                </Stack>
                <Stack width="55px">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                    mr="0.5rem"
                  >
                    32.5"
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                display="flex"
                flexDirection="row"
                height="50px"
                borderBottom="1px solid grey"
                gap={2}
              >
                <Stack width="120px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                    ml="1rem"
                  >
                    XXL
                  </Typography>
                </Stack>
                <Stack width="65px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                    ml="-0.5rem"
                  >
                    XXL
                  </Typography>
                </Stack>
                <Stack width="80px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                  >
                    19.8"
                  </Typography>
                </Stack>
                <Stack width="55px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                  >
                    37.4"
                  </Typography>
                </Stack>
                <Stack width="65px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                  >
                    45"
                  </Typography>
                </Stack>
                <Stack width="55px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                  >
                    45.2"
                  </Typography>
                </Stack>
                <Stack width="55px">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                    mr="0.5rem"
                  >
                    33"
                  </Typography>
                </Stack>
              </Stack>
              <Stack display="flex" flexDirection="row" height="50px" gap={2}>
                <Stack width="120px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                    ml="1rem"
                  >
                    XXXL
                  </Typography>
                </Stack>
                <Stack width="65px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                    ml="-0.5rem"
                  >
                    XXXL
                  </Typography>
                </Stack>
                <Stack width="80px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                  >
                    20.2"
                  </Typography>
                </Stack>
                <Stack width="55px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                  >
                    37.9"
                  </Typography>
                </Stack>
                <Stack width="65px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                  >
                    46.6"
                  </Typography>
                </Stack>
                <Stack width="55px" borderRight="1px solid grey">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                  >
                    46.8"
                  </Typography>
                </Stack>
                <Stack width="55px">
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize={{ lg: '0.85rem', sm: '1.1rem', xs: '1.1rem' }}
                    mt="1rem"
                    mr="0.5rem"
                  >
                    33.5"
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack display="flex" flexDirection="column" ml="-11rem">
              <Typography fontSize="0.7rem">
                Actual garment measurements above refer to the width with
                garment lying flat.
              </Typography>
              <Typography fontSize="0.7rem">
                Double the garment measurement for Chest/Waist/Bottom to find
                full circumference
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mt="2rem"
        ml={{ lg: '16rem', sm: '0.5rem', xs: '0.5rem' }}
        width={{ lg: '750px', xs: '350px', sm: '500px' }}
      >
        <Stack
          display="flex"
          flexDirection="column"
          width={{ lg: '750px', xs: '350px', sm: '500px' }}
        >
          <Typography fontWeight={600} fontSize="0.9rem">
            HOW TO MEASURE YOUR SIZE?
          </Typography>
          <Typography color="rgba(0, 0, 0, 0.75)" mt="1rem" fontSize="0.9rem">
            In order to select the correct clothing size, we recommend you take
            the following
          </Typography>
          <Typography color="rgba(0, 0, 0, 0.75)" fontSize="0.9rem">
            measurements using a soft tape measure. If necessary, ask someone
            else to help.
          </Typography>

          <img
            className="body-size"
            height="600px"
            width="600px"
            src={bodySize}
            alt="body-size"
          />
          <Stack display="flex" flexDirection="column" mt="2rem">
            <Typography>1. Shoulder Width</Typography>
            <Typography color="rgba(0, 0, 0, 0.75)" mt="1rem">
              Pass the tape measure straight across from the tip of one shoulder
              to the other, just above your shoulder blades.
            </Typography>
            <Typography mt="1rem">2. Chest</Typography>
            <Typography color="rgba(0, 0, 0, 0.75)" mt="1rem">
              Pass the tape measure across your back, under your arms and over
              your breastbone at its widest point, taking care to keep the tape
              measure horizontal. It should sit snugly against your body, but
              should not be pulled too tight.
            </Typography>
            <Typography mt="1rem">3. Waist</Typography>
            <Typography color="rgba(0, 0, 0, 0.75)" mt="1rem">
              Pass the tape measure around your natural waistline, at the
              narrowest point of your waist. The tape measure should sit snugly
              against your body, but should not be pulled too tight.
            </Typography>
            <Typography mt="1rem">4. Sleeve Length</Typography>
            <Typography color="rgba(0, 0, 0, 0.75)" mt="1rem">
              Keeping your arm straight by your side, measure from the tip of
              your shoulder to the base of your thumb.
            </Typography>
            <Typography mt="1rem">5. Inseam Length</Typography>
            <Typography color="rgba(0, 0, 0, 0.75)" mt="1rem">
              Keeping your legs straight, measure from the ankle to your
              uppermost path of your thigh.
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </>
  )
}

export default SizeDetails

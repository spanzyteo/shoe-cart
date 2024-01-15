import { Stack, Box, Typography } from '@mui/material'
import { fallCollections } from '../utils/trendingItems'
import { Card, CardMedia } from '@mui/material'

const SneakersCollection = () => {
  return (
    <Box>
      <Stack sx={{ mt: '1rem', ml: '1rem' }}>
        <Typography fontWeight={700} fontSize="0.9rem">
          SNEAKERS COLLECTION
        </Typography>
      </Stack>
      <Stack
        display="flex"
        flexDirection={{ sm: 'column', lg: 'row', xs: 'column' }}
        gap={1}
        alignItems="center"
        justifyContent="center"
        marginTop="1rem"
      >
        {fallCollections.map((item) => (
          <>
            <Stack
              key={item.id}
              width={{ lg: '100%', sm: '100%', xs: '100%' }}
              position="relative"
            >
              <Card
                overflow="hidden"
                sx={{
                  borderRadius: { lg: '15px', sm: '0px', xs: '0px', md: '0px' },
                  height: '400px',
                }}
              >
                <CardMedia
                  component="img"
                  className="trending-shoe"
                  image={item.image}
                  alt="trending-shoe"
                />
              </Card>
              <Stack
                display="flex"
                flexDirection="column"
                alignItems="center"
                position="absolute"
                bottom="8%"
                left="10%"
                gap={1}
              >
                <Typography
                  fontSize="1.6rem"
                  fontWeight={800}
                  fontFamily="Montserrat"
                >
                  {item.name}
                </Typography>
                <a href={item.link} className="text-decoration">
                  <Typography
                    fontFamily="Montserrat"
                    fontSize="0.7rem"
                    bgcolor="#FFFFFF90"
                    sx={{
                      p: '1rem',
                      borderRadius: '25px',
                      border: '2px solid black',
                      cursor: 'pointer',
                      ':hover': {
                        border: 'none',
                        bgcolor: 'black',
                        color: 'white',
                        transition: '0.3s ease-in-out',
                      },
                      ':active': {
                        bgcolor: '#00000080',
                        transition: '0.3s ease-in-out',
                      },
                    }}
                  >
                    EXPLORE NOW
                  </Typography>
                </a>
              </Stack>
            </Stack>
          </>
        ))}
      </Stack>
    </Box>
  )
}

export default SneakersCollection

import { Stack, Box, Typography } from '@mui/material'
import { trendingItems } from '../utils/trendingItems'
import { Card, CardMedia } from '@mui/material'
import { Link } from 'react-router-dom'
const TrendingItems = () => {
  return (
    <Box>
      <Stack sx={{ mt: '1rem', ml: '1rem' }}>
        <Typography fontWeight={700} fontSize="0.9rem">
          TRENDING ITEMS
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
        {trendingItems.map((item) => (
          <>
            <Stack key={item.id} width={{ lg: '100%', sm: '100%', xs: '100%' }}>
              <Card
                position="relative"
                overflow="hidden"
                sx={{
                  borderRadius: { lg: '15px', sm: '0px', xs: '0px', md: '0px' },
                  height: '400px',
                }}
              >
                <Link to={`/product/${item.id}`}>
                  <CardMedia
                    component="img"
                    className="trending-shoe"
                    image={item.image}
                    alt="trending-shoe"
                    sx={{
                      transition: 'transform 0.3s ease',
                      ':hover': { transform: 'scale(1.2)' },
                      cursor: 'pointer',
                    }}
                  />
                </Link>
              </Card>
              <Stack sx={{ ml: '7px' }}>
                <Typography fontSize="1.1rem" fontWeight={500}>
                  {item.name}
                </Typography>
                <Typography fontSize="1.1rem" fontWeight={500}>
                  ${item.price}
                </Typography>
              </Stack>
            </Stack>
          </>
        ))}
      </Stack>
      <Stack
        width="100%"
        height="2rem"
        bgcolor="#000"
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          mt: '1.5rem',
          cursor: 'pointer',
          ':hover': { opacity: 0.9, transition: 'opacity 0.3s ease-in-out' },
          ':active': { opacity: 0.4, transition: 'opacity 0.3s ease-in-out' },
        }}
        borderRadius={{ sm: '0px', lg: '10px' }}
      >
        <Typography fontWeight={700} color="#fff">
          SEE MORE
        </Typography>
      </Stack>
    </Box>
  )
}

export default TrendingItems

import { Stack, Box, Typography, Skeleton } from '@mui/material'
import { trendingItems } from '../utils/trendingItems'
import { Card, CardMedia } from '@mui/material'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const TrendingItems = () => {
  const [randomItems, setRandomItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const shuffleArray = (array) => {
    const shuffledArray = [...array]
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ]
    }
    return shuffledArray
  }

  useEffect(() => {
    const shuffledItems = shuffleArray(trendingItems)
    setRandomItems(shuffledItems.slice(0, 4))
  }, [trendingItems])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

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
        {randomItems.map((item) => (
          <>
            <Stack key={item.id} width={{ lg: '100%', sm: '100%', xs: '100%' }}>
              {isLoading ? (
                <Stack>
                  <Skeleton
                    animation="wave"
                    variant="rectangle"
                    height="400px"
                    width="100%"
                    sx={{
                      borderRadius: {
                        lg: '15px',
                        sm: '0px',
                        xs: '0px',
                        md: '0px',
                      },
                    }}
                  />
                </Stack>
              ) : (
                <Card
                  position="relative"
                  overflow="hidden"
                  sx={{
                    borderRadius: {
                      lg: '15px',
                      sm: '0px',
                      xs: '0px',
                      md: '0px',
                    },
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
                        cursor: 'pointer',
                        '@media(min-width: 922px)': {
                          ':hover': { transform: 'scale(1.2)' },
                        },
                      }}
                    />
                  </Link>
                </Card>
              )}
              <Stack sx={{ ml: '7px' }}>
                {isLoading ? (
                  <Skeleton
                    animation="wave"
                    width="70%"
                    height={20}
                    sx={{ mt: '0.6rem' }}
                  />
                ) : (
                  <Typography fontSize="1.1rem" fontWeight={500}>
                    {item.name}
                  </Typography>
                )}
                {isLoading ? (
                  <Skeleton
                    animation="wave"
                    width="40%"
                    height={20}
                    sx={{ mt: '0.6rem' }}
                  />
                ) : (
                  <Typography fontSize="1.1rem" fontWeight={500}>
                    ₦{` `}
                    {item.price}
                  </Typography>
                )}
              </Stack>
            </Stack>
          </>
        ))}
      </Stack>
      <Link to="/product/0" style={{ textDecoration: 'none' }}>
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
      </Link>
    </Box>
  )
}

export default TrendingItems

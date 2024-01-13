import { Stack, Box, Typography, Card, CardContent, Grid } from '@mui/material'
import { reviews } from '../utils/trendingItems'
import { useCart } from '../Context'
import { useEffect, useRef, useState } from 'react'

const Review = () => {
  const { dispatch } = useCart()

  const previousCard = () => {
    dispatch({ type: 'PREVIOUS_CARD' })
  }
  const [scrollPosition, setScrollPosition] = useState(0)
  const scrollContainerRef = useRef(null)
  const itemWidth = 100

  useEffect(() => {
    const container = scrollContainerRef.current
    let intervalId

    const handleScroll = () => {
      const scrollAmount = 150
      container.scrollLeft += scrollAmount

      if (
        container.scrollLeft >=
        container.scrollWidth - container.clientWidth
      ) {
        container.scrollLeft = 0
      }
    }

    intervalId = setInterval(handleScroll, 5000)

    return () => clearInterval(intervalId)
  }, [])

  const handleScroll = (direction) => {
    const container = scrollContainerRef.current
    if (container) {
      const scrollAmount = 150
      const maxScroll = container.scrollWidth - container.clientWidth
      if (direction === 'left') {
        container.scrollLeft -= scrollAmount
      } else {
        container.scrollLeft += scrollAmount
      }
      setScrollPosition(container.scrollLeft)

      if (container.scrollLeft <= 0) {
        container.scrollLeft = maxScroll
      } else if (container.scrollLeft >= maxScroll) {
        container.scrollLeft = 0
      }
    }

    console.log('scroll-left')
  }

  return (
    <Box
      mt="3rem"
      px={{ lg: '4rem', sm: '2rem', xs: '2rem' }}
      position="relative"
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Stack
        className="scroll"
        mx={{ sm: '1rem', lg: '2rem', xs: '1rem' }}
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        flexDirection="row"
        p="1rem"
        width={`${itemWidth}%`}
        overflow="auto"
        gap={2}
      >
        <div className="scroll-container" ref={scrollContainerRef}>
          {reviews.map((item) => (
            <Stack key={item.id} width="100%" display="flex">
              <Card
                sx={{
                  display: 'flex',
                  height: '280px',
                  // width: '160',
                  minWidth: '180px',
                  boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)',
                }}
              >
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Stack display="flex">
                    <Stack direction="row" spacing={1}>
                      {[...Array(5)].map((_, index) => (
                        <div
                          key={index}
                          style={{
                            backgroundColor: '#e74683',
                            display: 'inline-block',
                            padding: 1,
                            paddingTop: 2,
                            paddingBottom: 0,
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="16"
                            width="18"
                            viewBox="0 0 576 512"
                          >
                            <path
                              fill="#ffffff"
                              d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                            />
                          </svg>
                        </div>
                      ))}
                    </Stack>
                    <Stack sx={{ mt: '1rem' }}>
                      <Typography
                        color="grey"
                        lineHeight="1.2rem"
                        fontSize="0.9rem"
                      >
                        {item.comment}
                      </Typography>
                    </Stack>
                  </Stack>

                  <Stack sx={{ mb: '-1rem' }}>
                    <Typography color="grey" fontWeight={500} fontSize="1.3rem">
                      {item.name}
                    </Typography>
                    <Typography fontStyle="italic" color="grey">
                      {item.date}
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          ))}
        </div>
      </Stack>
      <Stack display="flex" flexDirection="row" gap={4}>
        <svg
          className="left-arrow"
          width="24"
          height="36"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            handleScroll('left')
          }}
        >
          <path
            d="M22 2 6 18l16 16"
            stroke="grey"
            stroke-width="4"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
        <svg
          className="right-arrow"
          width="24"
          height="36"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => handleScroll('right')}
        >
          <path
            d="m2 1 16 16-16 16"
            stroke="grey"
            stroke-width="4"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </Stack>
    </Box>
  )
}

export default Review

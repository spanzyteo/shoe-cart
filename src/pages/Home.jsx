import { Typography, Box, Stack, Skeleton } from '@mui/material'
import banner from '../images/banner-2.jpg'
import TrendingItems from '../components/TrendingItems'
import SneakersCollection from '../components/SneakersCollection'
import Marquee from '../components/Marquee'
import GiftCard from '../components/gift-card/GiftCard'
import ReviewMarque from '../components/ReviewMarque'
import Review from '../components/Review'
import ContactMarquee from '../components/ContactMarquee'
import { useEffect, useState } from 'react'
import { useCart } from '../Context'

const Home = ({ toggleSideBar }) => {
  const [isLoading, setIsLoading] = useState(true)
  const { state } = useCart()

  const collectionRef = state.collectionRef

  const handleScrollToCollection = () => {
    if (collectionRef && collectionRef.current) {
      collectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div onClick={toggleSideBar}>
      <Box marginTop="4rem">
        <Stack width="100%" position="relative">
          {isLoading ? (
            <Stack position="relative">
              <Skeleton
                animation="wave"
                variant="rectangular"
                width="100%"
                height="400px"
                sx={{ borderRadius: { lg: '15px', sm: '0px', xs: '0px' } }}
              />
            </Stack>
          ) : (
            <>
              <img className="shoe-banner" src={banner} alt="banner" />
              <Stack
                display={{ lg: 'flex', sm: 'flex', xs: 'none' }}
                position="absolute"
                top="12%"
                left="7%"
              >
                <Typography
                  fontSize="3rem"
                  fontWeight={700}
                  lineHeight={1.2}
                  sx={{ mt: { lg: '0.5rem', xs: '0.7rem' } }}
                >
                  Fall Limited Edition <br /> Sneakers
                </Typography>
                <Stack sx={{ mt: '0.5rem' }}>
                  <Typography
                    fontWeight={800}
                    fontSize="1.5rem"
                    gap={2}
                    lineHeight={1.6}
                    fontFamily="Montserrat"
                  >
                    <div className="write-up">
                      New <br />
                    </div>
                    <span
                      style={{
                        color: 'black',
                        backgroundColor: '#AEA141',
                        padding: '4px',
                        borderRadius: '8px',
                      }}
                    >
                      Sneakers
                    </span>
                    <br /> <div className="write-up">Products</div>
                  </Typography>
                  <Typography
                    fontSize="0.9rem"
                    fontWeight={500}
                    sx={{ mt: '0.3rem' }}
                  >
                    IN STORE FOR HOLIDAYS <br /> WITH DISCOUNT PRICES
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                display={{ lg: 'none', sm: 'none', xs: 'flex' }}
                flexDirection="column"
                alignItems="center"
                position="absolute"
                top="4%"
                right={0}
                left={0}
              >
                <Typography
                  fontSize="2rem"
                  fontWeight={700}
                  lineHeight={1.2}
                  sx={{ mt: { lg: '0.5rem', xs: '0.7rem' } }}
                >
                  Fall Limited Edition <br />{' '}
                  <span
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    Sneakers
                  </span>
                </Typography>
                <Stack
                  sx={{ mt: '11rem' }}
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="center"
                  gap={5}
                >
                  <Typography
                    fontWeight={800}
                    fontSize="1.5rem"
                    gap={2}
                    lineHeight={1.6}
                    fontFamily="Montserrat"
                  >
                    <div className="write-up">
                      New <br />
                    </div>
                    <span
                      style={{
                        color: 'black',
                        backgroundColor: '#AEA141',
                        padding: '4px',
                        borderRadius: '8px',
                      }}
                    >
                      Sneakers
                    </span>
                    <br /> <div className="write-up">Products</div>
                  </Typography>
                  <Typography
                    fontSize="0.9rem"
                    fontWeight={500}
                    sx={{ mt: '0.8rem' }}
                  >
                    IN STORE FOR HOLIDAYS <br /> WITH DISCOUNT PRICES
                  </Typography>
                </Stack>
              </Stack>
            </>
          )}
        </Stack>
        <button
          style={{
            width: '100%',
            height: '2rem',
            backgroundColor: '#AEA141',
            marginTop: '1rem',
            cursor: 'pointer',
            border: 'none',
          }}
          className="shop-now-button"
          onClick={handleScrollToCollection}
        >
          <p style={{ fontWeight: '700', fontSize: '1rem' }}>SHOP NOW</p>
        </button>
        <TrendingItems />
        <SneakersCollection />
        <Marquee />
        <GiftCard />
        <ReviewMarque />
        <Review />
        {/* <ContactMarquee /> */}
      </Box>
    </div>
  )
}

export default Home

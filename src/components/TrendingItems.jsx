import { Stack, Box, Typography } from '@mui/material'
import { trendingItems } from '../utils/trendingItems'
const TrendingItems = () => {
  return (
    <Box>
      <Stack sx={{ mt: '1rem' }}>
        <Typography fontWeight={700} fontSize="0.9rem">
          TRENDING ITEMS
        </Typography>
      </Stack>
      <Box
        display="flex"
        flexDirection={{ sm: 'column', lg: 'row' }}
        gap={2}
        alignItems="center"
        justifyContent="center"
        marginTop="1rem"
      >
        {trendingItems.map((item) => (
          <Stack
            key={item.id}
            width={{ lg: '265px', sm: '100%' }}
            height="400px"
          >
            <img className="trending-shoe" src={item.image} alt="" />
          </Stack>
        ))}
      </Box>
    </Box>
  )
}

export default TrendingItems
